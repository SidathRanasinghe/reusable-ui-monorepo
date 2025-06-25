import React, {
  useLayoutEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import ReactDOMServer from "react-dom/server";
import { OrgChart } from "d3-org-chart";
import * as d3 from "d3";

import { cn } from "../../../lib/utils";

import {
  OrganizationalChartProps,
  OrganizationalChartRef,
  OrgChartNodeData,
  RenderExpandButtonProps,
  RenderNodeProps,
  RenderPaginationButtonProps,
} from "./types";

// Default render functions
const DefaultNodeRenderer: React.FC<RenderNodeProps> = ({ data }) => (
  <div className="flex h-16 w-48 items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm">
    <div className="text-center">
      <div className="text-sm font-medium text-gray-900">
        {data.name || data.title || data.id}
      </div>
      {data.subtitle && (
        <div className="text-xs text-gray-500">{data.subtitle}</div>
      )}
    </div>
  </div>
);

const DefaultExpandButtonRenderer: React.FC<RenderExpandButtonProps> = ({
  isExpanded,
  childrenCount,
}) => (
  <div className="flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50">
    {isExpanded ? "−" : "+"}
  </div>
);

const DefaultPaginationButtonRenderer: React.FC<
  RenderPaginationButtonProps
> = ({ remainingNodes }) => (
  <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50">
    Show {remainingNodes} more
  </div>
);

// Main component
export const OrganizationalChart = forwardRef<
  OrganizationalChartRef,
  OrganizationalChartProps
>(
  (
    {
      data,
      className,
      style,
      layout = "top",
      nodeWidth = 200,
      nodeHeight = 80,
      margins = { top: 20, right: 20, bottom: 20, left: 20 },
      childrenMargin = 80,
      siblingsMargin = 80,
      neighbourMargin = 80,
      compact = false,
      compactMarginBetween = 20,
      enablePagination = true,
      pagingStep = 5,
      minPagingVisibleNodes = 5,
      renderNode = props => <DefaultNodeRenderer {...props} />,
      renderExpandButton = props => <DefaultExpandButtonRenderer {...props} />,
      renderPaginationButton = props => (
        <DefaultPaginationButtonRenderer {...props} />
      ),
      linkStyle = { stroke: "#94a3b8", strokeWidth: 2 },
      onNodeClick,
      onNodeDoubleClick,
      onNodeMouseEnter,
      onNodeMouseLeave,
      onChartRender,
      onChartUpdate,
      initialExpandedNodes = [],
      expandAll = false,
      enableZoom = true,
      enableDrag = true,
      fitOnRender = true,
      animationDuration = 350,
      ariaLabel = "Organizational Chart",
      ariaDescription,
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<any>(null);

    // Prepare chart data with required properties
    const prepareChartData = (rawData: OrgChartNodeData[]) => {
      return rawData.map(item => ({
        ...item,
        _pagingStep: 0,
        _highlighted: false,
        _upToTheRootHighlighted: false,
        _expanded: expandAll || initialExpandedNodes.includes(item.id),
      }));
    };

    // Update chart dimensions to fit container
    const updateChartDimensions = () => {
      if (!chartRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const width = containerRect.width || container.clientWidth;
      const height = containerRect.height || container.clientHeight;

      if (width > 0 && height > 0) {
        chartRef.current.svgWidth(width).svgHeight(height).render();

        if (fitOnRender) {
          setTimeout(() => chartRef.current?.fit(), 100);
        }
      }
    };

    // Expose chart methods via ref
    useImperativeHandle(
      ref,
      () => ({
        getChart: () => chartRef.current,
        fit: () => chartRef.current?.fit(),
        center: () => chartRef.current?.center(),
        expandAll: () => chartRef.current?.expandAll(),
        collapseAll: () => chartRef.current?.collapseAll(),
        expandNode: (nodeId: string | number) => {
          const chart = chartRef.current;
          if (chart) {
            const node = chart.data().find((d: any) => d.id === nodeId);
            if (node) {
              chart.setExpanded(node.id, true).render();
            }
          }
        },
        collapseNode: (nodeId: string | number) => {
          const chart = chartRef.current;
          if (chart) {
            const node = chart.data().find((d: any) => d.id === nodeId);
            if (node) {
              chart.setExpanded(node.id, false).render();
            }
          }
        },
        getDimensions: () => {
          const chart = chartRef.current;
          return {
            width: chart?.svgWidth() || 0,
            height: chart?.svgHeight() || 0,
          };
        },
        updateData: (newData: OrgChartNodeData[]) => {
          if (chartRef.current) {
            const preparedData = prepareChartData(newData);
            chartRef.current.data(preparedData).render();
            onChartUpdate?.(chartRef.current);
          }
        },
        exportSVG: () => {
          const chart = chartRef.current;
          if (chart) {
            const svg = chart.svg();
            return new XMLSerializer().serializeToString(svg.node());
          }
          return "";
        },
        exportPNG: async (options = {}) => {
          const { scale = 1, quality = 0.9 } = options;
          const chart = chartRef.current;

          if (!chart) return "";

          const svg = chart.svg();
          const svgData = new XMLSerializer().serializeToString(svg.node());
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const img = new Image();

          return new Promise((resolve, reject) => {
            img.onload = () => {
              canvas.width = img.width * scale;
              canvas.height = img.height * scale;
              ctx?.scale(scale, scale);
              ctx?.drawImage(img, 0, 0);
              resolve(canvas.toDataURL("image/png", quality));
            };
            img.onerror = reject;
            img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
          });
        },
      }),
      []
    );

    // Initialize and configure chart
    useLayoutEffect(() => {
      if (!containerRef.current || !data?.length) return;

      // Clear previous chart
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }

      try {
        const preparedData = prepareChartData(data);
        const chart = new OrgChart();
        chartRef.current = chart;

        // Configure chart
        chart
          .container(containerRef.current)
          .data(preparedData)
          .nodeWidth(nodeWidth)
          .nodeHeight(nodeHeight)
          .layout(layout)
          .compact(compact)
          .childrenMargin(childrenMargin)
          .siblingsMargin(siblingsMargin)
          .neighbourMargin(neighbourMargin)
          .duration(animationDuration);

        // Configure pagination if enabled
        if (enablePagination) {
          chart
            .pagingStep(pagingStep)
            .minPagingVisibleNodes(minPagingVisibleNodes)
            .pagingButton(
              (node: any, index: number, nodes: any[], state: any) => {
                const parentData = node.parent?.data;
                const step = node.parent ? state.pagingStep(node.parent) : 0;
                const currentIndex = parentData?._pagingStep ?? 0;
                const diff =
                  (parentData?._directSubordinatesPaging ?? 0) - currentIndex;
                const remainingNodes = Math.min(diff, step);

                return ReactDOMServer.renderToStaticMarkup(
                  renderPaginationButton({
                    node,
                    currentPage: Math.floor(currentIndex / step) + 1,
                    totalPages: Math.ceil(
                      (parentData?._directSubordinatesPaging ?? 0) / step
                    ),
                    pageSize: step,
                    remainingNodes,
                  })
                );
              }
            );
        }

        // Configure compact layout
        if (compact) {
          chart.compactMarginBetween(compactMarginBetween);
        }

        // Configure node content
        chart.nodeContent((d: any) =>
          ReactDOMServer.renderToStaticMarkup(
            renderNode({ node: d, data: d.data })
          )
        );

        // Configure expand button
        chart.buttonContent((node: any) => {
          const isExpanded = node.children && node.children.length > 0;
          const childrenCount = node.data._directSubordinates || 0;

          return ReactDOMServer.renderToStaticMarkup(
            renderExpandButton({
              node,
              isExpanded,
              childrenCount,
            })
          );
        });

        // Configure link styling
        chart.linkUpdate(function (this: any, d: any) {
          const style =
            typeof linkStyle === "function" ? linkStyle(d) : linkStyle;

          d3.select(this)
            .attr("stroke", style.stroke || "#94a3b8")
            .attr("stroke-width", style.strokeWidth || 2)
            .attr("stroke-dasharray", style.strokeDasharray || "none")
            .attr("opacity", style.opacity || 1)
            .attr("fill", "none");
        });

        // Configure interactions
        if (onNodeClick) {
          chart.onNodeClick(onNodeClick);
        }
        if (onNodeDoubleClick) {
          chart.onNodeDoubleClick(onNodeDoubleClick);
        }
        if (onNodeMouseEnter) {
          chart.onNodeMouseEnter(onNodeMouseEnter);
        }
        if (onNodeMouseLeave) {
          chart.onNodeMouseLeave(onNodeMouseLeave);
        }

        // Configure zoom and drag
        if (!enableZoom) {
          chart.zoomBehavior(null);
        }
        if (!enableDrag) {
          chart.dragBehavior(null);
        }

        // Render chart
        chart.render();

        // Update dimensions and fit
        updateChartDimensions();

        // Trigger render callback
        onChartRender?.(chart);
      } catch (error) {
        console.error("Error initializing organizational chart:", error);
      }

      // Cleanup
      return () => {
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
        chartRef.current = null;
      };
    }, [
      data,
      layout,
      nodeWidth,
      nodeHeight,
      compact,
      childrenMargin,
      siblingsMargin,
      neighbourMargin,
      compactMarginBetween,
      enablePagination,
      pagingStep,
      minPagingVisibleNodes,
      expandAll,
      enableZoom,
      enableDrag,
      animationDuration,
    ]);

    // Handle container resize
    useLayoutEffect(() => {
      if (!containerRef.current) return;

      const resizeObserver = new ResizeObserver(() => {
        updateChartDimensions();
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    return (
      <div
        ref={containerRef}
        className={cn("h-full w-full overflow-hidden", className)}
        style={style}
        role="img"
        aria-label={ariaLabel}
        aria-description={ariaDescription}
      />
    );
  }
);

OrganizationalChart.displayName = "OrganizationalChart";

export default OrganizationalChart;

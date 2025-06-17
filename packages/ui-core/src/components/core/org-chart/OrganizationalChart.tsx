import React, { CSSProperties, useLayoutEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import { OrgChart } from "d3-org-chart";
import * as d3 from "d3";
import {
  Building2,
  ChevronDown,
  ChevronUp,
  Coins,
  Factory,
  GraduationCap,
  Landmark,
  LandPlot,
  Umbrella,
  User,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";

import { cn, blendWithWhite } from "../../../lib/utils";

const CustomExpandButton = (node: any) => {
  return (
    <>
      {node && (
        <div className="boder-solid text-primary-marine-2 mx-auto flex size-[30px] cursor-pointer items-center justify-center rounded-full border-2 border-[#d3d3d3] bg-white backdrop-blur-sm">
          <span>{node.data._directSubordinates}</span>
          <span>
            {node.children ? (
              <ChevronUp className="size-3" />
            ) : (
              <ChevronDown className="size-3" />
            )}
          </span>
        </div>
      )}
    </>
  );
};

type EntityTypes =
  | "Bank"
  | "FinancialCompany"
  | "InsuranceCompany"
  | "IndustrialCompany"
  | "MutualAndPensionFund"
  | "FoundationResearchInstitute"
  | "PublicAuthorities"
  | "Person";

interface CustomNodeContentProps {
  children?: any[];
  data: {
    entity_type: EntityTypes;
    address?: {
      street_address?: string;
      city?: string;
      country?: string;
      zip?: string;
    };
    indirect_percentage?: number;
    is_domiciled_in?: string;
    name: string;
    is_ibo?: boolean;
    is_ubo?: boolean;
    level: number;
    line_color?: string;
    direct_percentage?: number;
  };
}

interface ProgressTickStyles {
  filled?: CSSProperties;
  empty?: CSSProperties;
}
interface ValueDisplayStyles {
  container?: CSSProperties;
  value?: CSSProperties;
}

interface CustomProgressStyles {
  container?: CSSProperties;
  progressContainer?: CSSProperties;
  ticks?: ProgressTickStyles;
  valueDisplay?: ValueDisplayStyles;
}

interface CustomProgressProps {
  value: number;
  showValue?: boolean;
  maxValue?: number;
  numberOfTicks?: number;
  tickWidth?: number;
  tickHeight?: number;
  tickGap?: number;
  tickRoundCorners?: boolean;
  customStyles?: CustomProgressStyles;
  valuePosition?: "left" | "right" | "top" | "bottom" | "hidden";
  className?: string;
  valueRenderer?: (value: number) => string;
}

function CustomProgress({
  value,
  showValue,
  maxValue = 100,
  numberOfTicks = 10,
  tickWidth = 2,
  tickHeight = 8,
  tickGap = 2,
  tickRoundCorners,
  customStyles,
  valuePosition = "left",
  className,
  valueRenderer,
}: CustomProgressProps) {
  const normalizedValue = Math.min(Math.max(value, 0), maxValue);
  const filledTicks = Math.round((normalizedValue / maxValue) * numberOfTicks);

  const ValueDisplay = () => (
    <div
      style={customStyles?.valueDisplay?.container}
      className={cn("!text-caption-xxs font-medium", {
        "mr-2": valuePosition === "left",
        "ml-2": valuePosition === "right",
        "mb-2": valuePosition === "top",
        "mt-2": valuePosition === "bottom",
      })}
    >
      <span
        className="text-[12.5px] font-semibold text-[#3A3D42]"
        style={customStyles?.valueDisplay?.value}
      >
        {valueRenderer ? valueRenderer(value) : value?.toFixed(2) || value}
      </span>
    </div>
  );

  const svgWidth = numberOfTicks * tickWidth + (numberOfTicks - 1) * tickGap;
  const svgHeight = tickHeight;

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        {
          "flex-row": valuePosition === "left" || valuePosition === "right",
          "flex-col": valuePosition === "top" || valuePosition === "bottom",
        },
        className
      )}
      style={customStyles?.container}
    >
      {!!showValue && (valuePosition === "left" || valuePosition === "top") && (
        <ValueDisplay />
      )}

      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={customStyles?.progressContainer}
      >
        {Array.from({ length: numberOfTicks }).map((_, index) => {
          const isFilled = index <= filledTicks && normalizedValue !== 0;
          const xPosition = index * (tickWidth + tickGap);
          return (
            <rect
              key={index}
              x={xPosition}
              y={0}
              width={tickWidth}
              height={tickHeight}
              rx={
                tickRoundCorners ? Math.min(tickWidth / 2, tickHeight / 2) : 0
              }
              fill={isFilled ? "currentColor" : "currentColor"}
              fillOpacity={isFilled ? 1 : 0.2}
              style={
                isFilled
                  ? customStyles?.ticks?.filled
                  : customStyles?.ticks?.empty
              }
            />
          );
        })}
      </svg>

      {!!showValue &&
        (valuePosition === "right" || valuePosition === "bottom") && (
          <ValueDisplay />
        )}
    </div>
  );
}

const CustomNodeContent: React.FC<CustomNodeContentProps> = props => {
  const {
    entity_type,
    address,
    indirect_percentage,
    is_domiciled_in,
    name,
    is_ibo,
    is_ubo,
    level,
    line_color,
    direct_percentage,
  } = props.data || {};

  const nodeRef = useRef<HTMLDivElement>(null);
  const defaultColor = "#9da49a";

  const customRound = (value: number): number => {
    const rounded = Math.round(value * 10) / 10;
    return Number.isInteger(rounded) ? Math.trunc(rounded) : rounded;
  };

  const { street_address, city, country, zip } = address || {};

  const valueRenderer = (value: number) => {
    const num = typeof value === "string" ? parseFloat(value) : value;
    if (Number.isInteger(num)) {
      return `${num.toString()}%`;
    }
    const rounded = Math.round(num * 10) / 10;
    if (Number.isInteger(rounded)) {
      return `${rounded.toString()}%`;
    }
    return `${rounded.toFixed(1)}%`;
  };

  const EntityIcon: React.FC<{ type: EntityTypes }> = ({ type }) => {
    const iconClass = "stroke-white stroke-[1.5] size-6";
    const backgroundClass =
      "flex items-center justify-center rounded bg-[rgba(30,32,35,1)] p-2";

    const getIcon = () => {
      switch (type) {
        case "Bank":
          return <Landmark className={iconClass} />;
        case "FinancialCompany":
          return <Building2 className={iconClass} />;
        case "InsuranceCompany":
          return <Umbrella className={iconClass} />;
        case "IndustrialCompany":
          return <Factory className={iconClass} />;
        case "MutualAndPensionFund":
          return <Coins className={iconClass} />;
        case "FoundationResearchInstitute":
          return <GraduationCap className={iconClass} />;
        case "PublicAuthorities":
          return <LandPlot className={iconClass} />;
        case "Person":
          return <User className={iconClass} />;
        default:
          return null;
      }
    };

    return <div className={backgroundClass}>{getIcon()}</div>;
  };

  return (
    <div className="relative">
      {/* Arrow */}
      {props?.children?.length && (
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full border-x-8 border-t-[14px] border-x-transparent !bg-white"
          style={{
            borderTopColor: line_color || defaultColor,
            marginTop: "-20px",
          }}
        />
      )}

      {/* Percentage Label */}
      {direct_percentage && level !== 0 && (
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full rounded-2xl px-3 py-1 font-hankenGrotesk text-xs font-semibold"
          style={{
            marginBottom: "-43px",
            minHeight: "17px",
            minWidth: "23px",
            background: line_color
              ? blendWithWhite(`${line_color}26`)
              : "#ebecea",
            border: `1px solid ${line_color || defaultColor}`,
            color: line_color || "#767f72",
          }}
        >
          {customRound(direct_percentage)}%
        </div>
      )}

      {/* Main Node Content */}
      <div
        className="group relative overflow-visible rounded-[2px] bg-white shadow-sm dark:bg-gray-950"
        style={{
          boxShadow: "0px 24px 64px 16px rgba(16, 24, 40, 0.14)",
          backdropFilter: "blur(20px)",
        }}
        ref={nodeRef}
      >
        <div className="absolute left-[60%] top-[105%] z-50 hidden w-full rounded p-2 backdrop-blur-lg group-hover:block">
          <p className="mb-1">Address</p>
          <div className="text-xs">
            {street_address && `${street_address},`} {city && `${city},`}{" "}
            {zip && `${zip},`} {country && country}
          </div>
        </div>

        <div
          className={cn(
            "flex",
            level === 0 ? "h-[64px] items-center" : "h-[100px] items-start",
            "w-[280px] gap-3 overflow-hidden bg-white p-3 shadow-sm"
          )}
        >
          <EntityIcon type={entity_type} />
          <div
            className={cn("flex-1", {
              "flex size-full items-center justify-between": level === 0,
            })}
          >
            <div
              className={cn("flex items-start justify-between", {
                "w-full": level === 0,
              })}
            >
              <h3 className="font-medium text-gray-900">{name}</h3>
              {is_domiciled_in && (
                <ReactCountryFlag
                  countryCode={is_domiciled_in}
                  svg
                  className="!h-6 !w-8"
                  style={{ boxShadow: "0px 0px 4px 0px #00000040 !important" }}
                />
              )}
            </div>
            <div
              className={cn(
                "mt-2 flex h-full",
                level === 0 ? "items-center" : "items-start",
                "justify-between overflow-hidden"
              )}
            >
              {level !== 0 && (
                <div className="">
                  <p className="text-xs text-gray-500">Indirect Ownership</p>
                  <div className="mt-1">
                    <CustomProgress
                      value={indirect_percentage || 0}
                      numberOfTicks={20}
                      tickWidth={1}
                      showValue={true}
                      valuePosition="right"
                      valueRenderer={valueRenderer}
                      customStyles={{
                        ticks: {
                          filled: {
                            fill: "#2445FF",
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              )}
              {(is_ibo || is_ubo) && (
                <div className="flex h-full flex-col items-end justify-center gap-y-1">
                  {is_ibo && (
                    <div className="min-w-full rounded-lg bg-gray-200 px-2.5 py-0.5 text-center font-hankenGrotesk text-sub-caption-xs font-semibold text-gray-900">
                      IBO
                    </div>
                  )}
                  {is_ubo && (
                    <div className="min-w-full rounded-lg bg-gray-600 px-2.5 py-0.5 text-center font-hankenGrotesk text-sub-caption-xs font-semibold text-gray-200">
                      UBO
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export type OrgChartNodeData = {
  _pagingStep?: number;
  _directSubordinatesPaging?: number;
  [key: string]: any;
};

type CustomPaginationBtnProps = {
  node: any;
  index: number;
  nodes: any;
  state: any;
};

const CustomPaginationBtn = ({
  node,
  index,
  nodes,
  state,
}: CustomPaginationBtnProps) => {
  const parentData = node.parent?.data as OrgChartNodeData | undefined;

  const step = node.parent ? state.pagingStep(node.parent) : 0;
  const currentIndex = parentData?._pagingStep ?? 0;
  const diff = (parentData?._directSubordinatesPaging ?? 0) - currentIndex;
  const min = Math.min(diff, step);

  return (
    <div className="flex h-[100px] flex-col">
      <button
        type="button"
        className="boder-solid my-auto flex size-fit cursor-pointer items-center justify-center rounded-full bg-white px-2 py-1 font-hankenGrotesk text-cadet-gray-8.5"
        style={{
          boxShadow: "0px 12px 32px 8px rgba(16, 24, 40, 0.14)",
          backdropFilter: "blur(20px)",
        }}
      >
        Show next {min} nodes
      </button>
    </div>
  );
};

type OrganizationalChartProps = {
  data: any[];
  isFullView?: boolean;
  className?: string;
};

const OrganizationalChart = ({
  data,
  isFullView,
  className,
}: OrganizationalChartProps) => {
  const d3Container = useRef<any>(null);
  const chartRef = useRef<any>(null);

  const prepareChartData = (rawData: any[]) => {
    return rawData.map(item => ({
      ...item,
      _pagingStep: 0,
      _highlighted: false,
      _upToTheRootHighlighted: false,
      _expanded: false,
    }));
  };

  const updateChartDimensions = () => {
    if (!chartRef.current || !d3Container.current) return;
    const containerWidth = d3Container.current.clientWidth;
    const containerHeight = d3Container.current.clientHeight;
    chartRef.current
      .svgWidth(containerWidth)
      .svgHeight(containerHeight)
      .render()
      .fit();
  };

  useLayoutEffect(() => {
    if (!d3Container.current || !data?.length) return;

    d3Container.current.innerHTML = "";

    try {
      const preparedData = prepareChartData(data);
      const chart = new OrgChart();
      chartRef.current = chart;

      chart
        .container(d3Container.current)
        .data(preparedData)
        .nodeWidth(() => 280)
        .nodeHeight(() => 100)
        .compact(false)
        .pagingStep(() => 5)
        .minPagingVisibleNodes(() => 5)
        .pagingButton((node, index, nodes, state) =>
          ReactDOMServer.renderToStaticMarkup(
            <CustomPaginationBtn
              node={node}
              index={index}
              nodes={nodes}
              state={state}
            />
          )
        )
        .buttonContent((node: any) =>
          ReactDOMServer.renderToStaticMarkup(
            <CustomExpandButton {...node.node} />
          )
        )
        .nodeContent((d: any) =>
          ReactDOMServer.renderToStaticMarkup(<CustomNodeContent {...d} />)
        )
        .layout("bottom")
        .linkUpdate(function (
          node: d3.HierarchyNode<any>,
          index: number,
          nodes: d3.HierarchyNode<any>[]
        ) {
          d3.select(this)
            .attr("stroke", (d: any) =>
              d?.data?.line_color ? d?.data?.line_color : "#9da49a"
            )
            .attr("stroke-width", "2")
            .attr("marker-end", "url(#arrowhead)")
            .attr("fill", "none")
            .each(function (d: any) {
              if (d?.data?.line_color) {
                d3.select(this).raise();
              }
            });
        })

        .childrenMargin(() => 150)
        .siblingsMargin(() => 100)
        .compactMarginBetween(() => 100)
        .neighbourMargin(() => 150)
        .render();

      updateChartDimensions();

      setTimeout(() => {
        chart.fit();
      }, 100);
    } catch (error) {
      console.error("Error initializing chart:", error);
    }

    return () => {
      if (d3Container.current) {
        d3Container.current.innerHTML = "";
      }
    };
  }, [data, isFullView]);

  return <div className={cn("size-full", className)} ref={d3Container} />;
};

export default OrganizationalChart;

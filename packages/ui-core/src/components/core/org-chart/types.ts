export interface OrgChartNodeData {
  id: string | number;
  parentId?: string | number | null;
  [key: string]: any;
}

export interface OrgChartNode {
  data: OrgChartNodeData;
  children?: OrgChartNode[];
  parent?: OrgChartNode;
  depth: number;
  height: number;
  x: number;
  y: number;
  [key: string]: any;
}

export interface RenderNodeProps {
  node: OrgChartNode;
  data: OrgChartNodeData;
}

export interface RenderExpandButtonProps {
  node: OrgChartNode;
  isExpanded: boolean;
  childrenCount: number;
}

export interface RenderPaginationButtonProps {
  node: OrgChartNode;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  remainingNodes: number;
}

export interface ChartDimensions {
  width: number;
  height: number;
}

export interface ChartMargins {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface LinkStyle {
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  opacity?: number;
}

export interface OrganizationalChartProps {
  /** Chart data array */
  data: OrgChartNodeData[];

  /** Chart container className */
  className?: string;

  /** Chart container style */
  style?: React.CSSProperties;

  /** Chart layout direction */
  layout?: "top" | "bottom" | "left" | "right";

  /** Node dimensions */
  nodeWidth?: number | ((node: OrgChartNode) => number);
  nodeHeight?: number | ((node: OrgChartNode) => number);

  /** Chart margins */
  margins?: ChartMargins;

  /** Spacing between nodes */
  childrenMargin?: number | ((node: OrgChartNode) => number);
  siblingsMargin?: number | ((node: OrgChartNode) => number);
  neighbourMargin?: number | ((node: OrgChartNode) => number);

  /** Compact layout */
  compact?: boolean;
  compactMarginBetween?: number | ((node: OrgChartNode) => number);

  /** Pagination settings */
  enablePagination?: boolean;
  pagingStep?: number | ((node: OrgChartNode) => number);
  minPagingVisibleNodes?: number | ((node: OrgChartNode) => number);

  /** Custom render functions */
  renderNode?: (props: RenderNodeProps) => React.ReactNode;
  renderExpandButton?: (props: RenderExpandButtonProps) => React.ReactNode;
  renderPaginationButton?: (
    props: RenderPaginationButtonProps
  ) => React.ReactNode;

  /** Link styling */
  linkStyle?: LinkStyle | ((node: OrgChartNode) => LinkStyle);

  /** Chart interaction callbacks */
  onNodeClick?: (node: OrgChartNode, event: Event) => void;
  onNodeDoubleClick?: (node: OrgChartNode, event: Event) => void;
  onNodeMouseEnter?: (node: OrgChartNode, event: Event) => void;
  onNodeMouseLeave?: (node: OrgChartNode, event: Event) => void;

  /** Chart lifecycle callbacks */
  onChartRender?: (chart: any) => void;
  onChartUpdate?: (chart: any) => void;

  /** Initial chart state */
  initialExpandedNodes?: (string | number)[];
  expandAll?: boolean;

  /** Chart behavior */
  enableZoom?: boolean;
  enableDrag?: boolean;
  fitOnRender?: boolean;

  /** Animation settings */
  animationDuration?: number;

  /** Accessibility */
  ariaLabel?: string;
  ariaDescription?: string;
}

export interface OrganizationalChartRef {
  /** Get the d3-org-chart instance */
  getChart: () => any;
  /** Fit chart to container */
  fit: () => void;
  /** Center chart */
  center: () => void;
  /** Expand all nodes */
  expandAll: () => void;
  /** Collapse all nodes */
  collapseAll: () => void;
  /** Expand specific node */
  expandNode: (nodeId: string | number) => void;
  /** Collapse specific node */
  collapseNode: (nodeId: string | number) => void;
  /** Get chart dimensions */
  getDimensions: () => ChartDimensions;
  /** Update chart data */
  updateData: (newData: OrgChartNodeData[]) => void;
  /** Export chart as SVG */
  exportSVG: () => string;
  /** Export chart as PNG */
  exportPNG: (options?: {
    scale?: number;
    quality?: number;
  }) => Promise<string>;
}

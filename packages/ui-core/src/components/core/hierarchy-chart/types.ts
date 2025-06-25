// packages/ui-core/src/components/core/organizational-chart/types.ts
export interface ChartNode {
  id: string;
  name: string;
  title?: string;
  department?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  children?: ChartNode[];
  metadata?: Record<string, any>;
}

export interface ChartNodePosition extends ChartNode {
  x: number;
  y: number;
  depth: number;
  width?: string;
  height?: string;
  parent?: ChartNodePosition;
}

export interface ConnectionLine {
  source: ChartNodePosition;
  target: ChartNodePosition;
  type: "solid" | "dashed" | "dotted";
  color?: string;
  width?: number;
}

export interface ChartLayout {
  nodeWidth: number;
  nodeHeight: number;
  horizontalSpacing: number;
  verticalSpacing: number;
  padding: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export interface ChartTheme {
  background: string;
  node: {
    background: string;
    border: string;
    borderRadius: number;
    shadow: string;
    hoverBackground: string;
    hoverBorder: string;
  };
  connection: {
    color: string;
    width: number;
    hoverColor: string;
    hoverWidth: number;
  };
  text: {
    primary: string;
    secondary: string;
    size: {
      name: string;
      title: string;
      department: string;
    };
  };
}

export interface TooltipData {
  node: ChartNodePosition;
  x: number;
  y: number;
}

export interface HoverState {
  type: "node" | "connection" | null;
  data: ChartNodePosition | ConnectionLine | null;
  position: { x: number; y: number } | null;
}

export interface HierarchyChartProps {
  data: ChartNode;
  layout?: Partial<ChartLayout>;
  theme?: Partial<ChartTheme>;
  className?: string;
  style?: React.CSSProperties;
  onNodeClick?: (node: ChartNodePosition, event: React.MouseEvent) => void;
  onNodeHover?: (node: ChartNodePosition, event: React.MouseEvent) => void;
  onConnectionHover?: (
    connection: ConnectionLine,
    event: React.MouseEvent
  ) => void;
  renderNode?: (node: ChartNodePosition, defaultProps: any) => React.ReactNode;
  renderTooltip?: (
    data: ChartNodePosition | ConnectionLine,
    type: "node" | "connection"
  ) => React.ReactNode;
  showTooltips?: boolean;
  interactive?: boolean;
  zoomable?: boolean;
  pannable?: boolean;
}

export type NodeShape =
  | "circle"
  | "square"
  | "rectangle"
  | "rounded-square"
  | "rounded-rectangle";

export type LinkType = "solid" | "dashed" | "dotted";

export interface NodeStyle {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  width?: number;
  height?: number;
  padding?: number;
  labelStyle?: LabelStyle;
}

export interface LinkStyle {
  linkColor?: string;
  linkWidth?: number;
  linkType?: LinkType;
  labelStyle?: LabelStyle;
  messageStyle?: MessageStyle;
}

export interface LabelStyle {
  fill?: string;
  fontSize?: number;
  fontWeight?: string | number;
  padding?: number;
  backgroundColor?: string;
}

export interface MessageStyle {
  color?: string;
  fontSize?: number;
  fontWeight?: string | number;
  backgroundColor?: string;
}

export interface Node {
  id: string;
  name?: string;
  label?: string;
  shape?: NodeShape;
  image?: string;
  style?: NodeStyle;
  // D3 simulation properties
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  index?: number;
  // Custom data
  data?: Record<string, any>;
}

export interface Link {
  id?: string;
  source: string | Node;
  target: string | Node;
  label?: string;
  message?: string;
  shape?: "straight" | "curved";
  style?: LinkStyle;
  // D3 simulation properties
  index?: number;
  // Custom data
  data?: Record<string, any>;
}

export interface SimulationConfig {
  linkDistance?: number;
  chargeStrength?: number;
  collisionRadius?: number;
  alphaDecay?: number;
  alphaMin?: number;
  velocityDecay?: number;
}

export interface Dimensions {
  width: number;
  height: number;
}

export interface ZoomTransform {
  k: number;
  x: number;
  y: number;
}

// Event handler types
export type NodeEventHandler = (node: Node, event: Event) => void;
export type LinkEventHandler = (link: Link, event: Event) => void;
export type CanvasEventHandler = (event: Event) => void;
export type ZoomEventHandler = (scale: number) => void;
export type NodeDragHandler = (node: Node, event: any) => void;

// Custom renderer types
export type CustomNodeRenderer = (
  nodeGroup: d3.Selection<SVGGElement, Node, null, undefined>,
  node: Node,
  defaultStyles: NodeStyle
) => void;

export type CustomLinkRenderer = (
  linkGroup: d3.Selection<SVGGElement, Link, null, undefined>,
  link: Link,
  defaultStyles: LinkStyle
) => void;

export type CustomLabelRenderer = (
  labelGroup: d3.Selection<SVGGElement, Node | Link, null, undefined>,
  item: Node | Link,
  defaultStyles: LabelStyle
) => void;

export interface NetworkGraphProps {
  // Data
  nodes: Node[];
  links: Link[];

  // Container
  width?: number;
  height?: number;
  className?: string;

  // Default styles
  defaultNodeStyles?: NodeStyle;
  defaultLinkStyles?: LinkStyle;
  defaultLabelStyles?: LabelStyle;
  defaultMessageStyles?: MessageStyle;

  // Features
  enableMinimap?: boolean;
  enableZoom?: boolean;
  enableDrag?: boolean;
  enableHover?: boolean;

  // Simulation
  simulationConfig?: SimulationConfig;

  // Layout
  fitOnMount?: boolean;
  centerForce?: number;

  // Zoom
  zoomLevel?: number;
  minZoom?: number;
  maxZoom?: number;

  // Theme
  theme?: "light" | "dark";

  // Event handlers
  onNodeHover?: NodeEventHandler;
  onNodeBlur?: NodeEventHandler;
  onLinkHover?: LinkEventHandler;
  onLinkBlur?: LinkEventHandler;
  onNodeClick?: NodeEventHandler;
  onLinkClick?: LinkEventHandler;
  onCanvasClick?: CanvasEventHandler;
  onZoomChange?: ZoomEventHandler;
  onNodeDragStart?: NodeDragHandler;
  onNodeDrag?: NodeDragHandler;
  onNodeDragEnd?: NodeDragHandler;

  // Advanced customization
  customNodeRenderer?: CustomNodeRenderer;
  customLinkRenderer?: CustomLinkRenderer;
  customLabelRenderer?: CustomLabelRenderer;

  // Performance
  enableVirtualization?: boolean;
  maxRenderNodes?: number;
  maxRenderLinks?: number;
}

// Hook return types
export interface UseNetworkGraphReturn {
  dimensions: Dimensions;
  updateDimensions: () => void;
}

export interface UseZoomReturn {
  handleZoom: (scale: number) => void;
  fitGraphToContainer: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
}

export interface UseSimulationReturn {
  simulation: d3.Simulation<Node, Link> | null;
  restart: () => void;
  stop: () => void;
  alpha: (alpha?: number) => number | void;
}

export interface UseDragBehaviorReturn {
  dragBehavior: d3.DragBehavior<SVGGElement, Node, Node> | null;
}

export interface UseHoverEffectsReturn {
  handleNodeHover: (event: Event, node: Node | null) => void;
  handleLinkHover: (event: Event, link: Link | null) => void;
  handleCanvasClick: (event: Event) => void;
}

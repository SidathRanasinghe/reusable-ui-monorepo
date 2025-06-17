import { SimulationNodeDatum } from "d3";
import React from "react";

export interface MessageStyle {
  fill?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  backgroundColor?: string;
  containerStyles?: React.CSSProperties;
}

export interface LabelStyle {
  fill?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  padding?: number;
  backgroundColor?: string;
  containerStyles?: React.CSSProperties;
}

export interface NodeStyle {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
  padding?: number;
  border?: string;
  borderColor?: string;
  borderWidth?: number;
  labelStyle?: LabelStyle;
}

export interface LinkStyle {
  linkColor?: string;
  linkWidth?: number;
  linkType?: "solid" | "dashed";
  labelStyle?: LabelStyle;
  messageStyle?: MessageStyle | null;
}

export type NodeShape =
  | "circle"
  | "square"
  | "rounded-square"
  | "rectangle"
  | "rounded-rectangle";

export interface Node {
  id: string | number;
  name: string;
  label: string;
  shape: NodeShape;
  image?: string;
  style?: NodeStyle;
  x?: any;
  y?: any;
  vx?: any;
  vy?: any;
  index?: any;
  attributes?: any;
}

export interface Link {
  source: string | number | SimulationNodeDatum;
  target: string | number | SimulationNodeDatum;
  label: string;
  type?: "solid" | "dashed";
  shape?: "straight" | "curved";
  message?: string;
  style?: LinkStyle;
  x?: any;
  y?: any;
  index?: any;
  attributes?: any;
}

interface MinimapProps {
  enabled?: boolean;
  width?: number;
  height?: number;
  padding?: number;
  scale?: number;
}

export interface NetworkGraphProps {
  nodes: Node[];
  links: Link[];
  width?: number | string;
  height?: number | string;
  defaultNodeStyles?: NodeStyle;
  defaultLinkStyles?: LinkStyle;
  defaultLabelStyles?: LabelStyle;
  defaultMessageStyles?: MessageStyle;
  fontSize?: number;
  zoomLevel?: number;
  minimap?: MinimapProps;
  isFullView?: boolean;
  onHoverNode?: (event: React.MouseEvent, node: Node) => void;
  onBlurNode?: (event: React.MouseEvent, node: Node) => void;
  onHoverLink?: (event: React.MouseEvent, link: Link) => void;
  onBlurLink?: (event: React.MouseEvent, link: Link) => void;
  onClickNode?: (event: React.MouseEvent, node: Node) => void;
  onClickLink?: (event: React.MouseEvent, link: Link) => void;
  onClick?: (event: React.MouseEvent) => void;
  onZoomChange?: (scale: number, from?: string) => void;
  onClickCluster?: (event: React.MouseEvent, cluster: Node) => void;
}

import { Node, NodeShape } from "./types";

export const getDefaultSize = (
  shape: NodeShape
): { width: number; height: number } => {
  switch (shape) {
    case "circle":
      return { width: 22, height: 22 };
    case "square":
    case "rounded-square":
      return { width: 44, height: 44 };
    case "rounded-rectangle":
    case "rectangle":
      return { width: 60, height: 30 };
    default:
      return { width: 44, height: 44 };
  }
};

export const getLabelDistance = (d: Node): number => {
  if (d.shape === "circle" && d.image) {
    return (d.style?.height || 40) / 2 + 30 || 50;
  } else if (d.shape === "circle" && !d.image) {
    return (d.style?.height || 40) / 2 + 30 || 50;
  } else if (d.shape === "square" || d.shape === "rounded-square") {
    return (d.style?.height || 40) / 2 + 30 || 50;
  } else if (d.shape === "rounded-rectangle" || d.shape === "rectangle") {
    return (d.style?.height || 40) / 2 + 30 || 50;
  } else {
    return 50;
  }
};

export const getNodeRadius = (node: Node, isSrc: boolean) => {
  if (node.shape === "circle" && node.image) {
    return (node.style?.height || 40) / 2 + (isSrc ? 5 : 15) || 30;
  } else if (node.shape === "circle" && !node.image) {
    return (node.style?.height || 40) / 2 + (isSrc ? 5 : 15) || 30;
  } else if (node.shape === "square" || node.shape === "rounded-square") {
    return (node.style?.height || 40) / 2 + (isSrc ? 5 : 15) || 30;
  } else if (node.shape === "rounded-rectangle" || node.shape === "rectangle") {
    return (node.style?.height || 40) / 2 + (isSrc ? 5 : 15) || 30;
  } else {
    return 30;
  }
};

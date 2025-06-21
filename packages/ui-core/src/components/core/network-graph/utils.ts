import { Node, NodeShape, Dimensions } from "./types";

/**
 * Default dimensions for different node shapes
 */
export const DEFAULT_DIMENSIONS: Record<
  NodeShape,
  { width: number; height: number }
> = {
  circle: { width: 40, height: 40 },
  square: { width: 60, height: 60 },
  rectangle: { width: 120, height: 60 },
  "rounded-square": { width: 60, height: 60 },
  "rounded-rectangle": { width: 120, height: 60 },
};

/**
 * Get default size for a node shape
 */
export const getDefaultSize = (shape: NodeShape = "rounded-square") => {
  return DEFAULT_DIMENSIONS[shape] || DEFAULT_DIMENSIONS["rounded-square"];
};

/**
 * Calculate the radius of a node for collision detection and link positioning
 */
export const getNodeRadius = (node: Node, isSource: boolean = true): number => {
  const shape = node.shape || "rounded-square";
  const style = node.style || {};

  // Get dimensions with fallbacks
  const defaultSize = getDefaultSize(shape);
  const width = style.width || defaultSize.width;
  const height = style.height || defaultSize.height;
  const padding = style.padding || 0;

  switch (shape) {
    case "circle":
      return Math.max(width, height) / 2 + padding;

    case "square":
    case "rounded-square":
      return Math.sqrt(width * width + height * height) / 2 + padding;

    case "rectangle":
    case "rounded-rectangle":
      // For rectangles, use different radius based on orientation
      return isSource
        ? Math.max(width, height) / 2 + padding
        : Math.min(width, height) / 2 + padding;

    default:
      return Math.max(width, height) / 2 + padding;
  }
};

/**
 * Calculate distance for label positioning relative to node
 */
export const getLabelDistance = (node: Node): number => {
  const shape = node.shape || "rounded-square";
  const style = node.style || {};
  const defaultSize = getDefaultSize(shape);

  const height = style.height || defaultSize.height;
  const padding = style.padding || 0;

  // Base distance from node edge
  const baseDistance = 15;

  switch (shape) {
    case "circle":
      return height / 2 + padding + baseDistance;

    case "square":
    case "rounded-square":
    case "rectangle":
    case "rounded-rectangle":
      return height / 2 + padding + baseDistance;

    default:
      return height / 2 + padding + baseDistance;
  }
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate?: boolean
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func(...args);
  };
};

/**
 * Throttle function for performance optimization
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Calculate bounds of a set of nodes
 */
export const calculateNodeBounds = (nodes: Node[]) => {
  if (nodes.length === 0) {
    return { minX: 0, maxX: 0, minY: 0, maxY: 0, width: 0, height: 0 };
  }

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  nodes.forEach(node => {
    const x = node.x || 0;
    const y = node.y || 0;
    const radius = getNodeRadius(node);

    minX = Math.min(minX, x - radius);
    maxX = Math.max(maxX, x + radius);
    minY = Math.min(minY, y - radius);
    maxY = Math.max(maxY, y + radius);
  });

  return {
    minX,
    maxX,
    minY,
    maxY,
    width: maxX - minX,
    height: maxY - minY,
  };
};

/**
 * Generate a unique ID for elements
 */
export const generateId = (prefix: string = "element"): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Clamp a value between min and max
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Linear interpolation between two values
 */
export const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor;
};

/**
 * Calculate distance between two points
 */
export const distance = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
};

/**
 * Convert hex color to rgba
 */
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Get responsive dimensions based on container
 */
export const getResponsiveDimensions = (
  container: HTMLElement,
  aspectRatio: number = 16 / 9
): Dimensions => {
  const rect = container.getBoundingClientRect();
  const width = rect.width;
  const height = Math.min(rect.height, width / aspectRatio);

  return { width, height };
};

/**
 * Validate node data
 */
export const validateNode = (node: any): node is Node => {
  return (
    typeof node === "object" &&
    node !== null &&
    typeof node.id === "string" &&
    node.id.length > 0
  );
};

/**
 * Validate link data
 */
export const validateLink = (link: any): boolean => {
  return (
    typeof link === "object" &&
    link !== null &&
    (typeof link.source === "string" || typeof link.source === "object") &&
    (typeof link.target === "string" || typeof link.target === "object")
  );
};

/**
 * Deep clone object (for immutable updates)
 */
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as any;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as any;
  if (typeof obj === "object") {
    const clonedObj: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  return obj;
};

/**
 * Merge objects with deep merging for nested objects
 */
export const deepMerge = <T extends Record<string, any>>(
  target: T,
  ...sources: Partial<T>[]
): T => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (source) {
    for (const key in source) {
      if (source[key] !== null && typeof source[key] === "object") {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return deepMerge(target, ...sources);
};

/**
 * Format large numbers for display
 */
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

/**
 * Check if a point is inside a rectangle
 */
export const isPointInRect = (
  x: number,
  y: number,
  rectX: number,
  rectY: number,
  rectWidth: number,
  rectHeight: number
): boolean => {
  return (
    x >= rectX &&
    x <= rectX + rectWidth &&
    y >= rectY &&
    y <= rectY + rectHeight
  );
};

/**
 * Calculate optimal text size for given dimensions
 */
export const calculateOptimalFontSize = (
  text: string,
  maxWidth: number,
  maxHeight: number,
  minFontSize: number = 8,
  maxFontSize: number = 24
): number => {
  // Simple heuristic: assume average character width is 0.6 * fontSize
  const avgCharWidth = 0.6;
  const lineHeight = 1.2;

  for (let fontSize = maxFontSize; fontSize >= minFontSize; fontSize--) {
    const textWidth = text.length * fontSize * avgCharWidth;
    const textHeight = fontSize * lineHeight;

    if (textWidth <= maxWidth && textHeight <= maxHeight) {
      return fontSize;
    }
  }

  return minFontSize;
};

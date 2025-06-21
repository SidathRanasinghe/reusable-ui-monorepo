import { Link, Node } from "@/index";

export const generateNodes = (count: number): Node[] => {
  const shapes: Node["shape"][] = [
    "circle",
    "square",
    "rectangle",
    "rounded-square",
    "rounded-rectangle",
  ];
  return Array.from({ length: count }, (_, i) => ({
    id: `node-${i}`,
    name: `Node ${i + 1}`,
    label: `Label for node ${i + 1}`,
    shape: shapes[i % shapes.length],
    style: {
      backgroundColor: `hsl(${(i * 137.5) % 360}, 70%, 60%)`,
      borderColor: `hsl(${(i * 137.5) % 360}, 70%, 40%)`,
      borderWidth: 2,
    },
  }));
};

export const generateLinks = (nodeCount: number): Link[] => {
  const links: Link[] = [];
  for (let i = 0; i < nodeCount - 1; i++) {
    links.push({
      source: `node-${i}`,
      target: `node-${i + 1}`,
      label: `Link ${i + 1}`,
    });
  }
  // Add some random connections
  for (let i = 0; i < Math.min(nodeCount / 2, 10); i++) {
    const source = Math.floor(Math.random() * nodeCount);
    const target = Math.floor(Math.random() * nodeCount);
    if (source !== target) {
      links.push({
        source: `node-${source}`,
        target: `node-${target}`,
        style: { linkType: "dashed", linkColor: "#ff6b6b" },
      });
    }
  }
  return links;
};

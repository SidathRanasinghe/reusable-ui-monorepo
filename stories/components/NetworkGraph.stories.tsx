import type { Meta, StoryObj } from "@storybook/react";

import NetworkGraph from "../../packages/ui-core/src/components/core/network-graph/NetworkGraph";
import {
  Node,
  Link,
} from "../../packages/ui-core/src/components/core/network-graph/types";

const meta: Meta<typeof NetworkGraph> = {
  title: "Data Visualization/Network Graph",
  component: NetworkGraph,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A powerful and flexible network graph visualization component built with D3.js and React.

## Features
- **Interactive Visualization**: Zoom, pan, and drag nodes
- **Customizable Styling**: Flexible node shapes, colors, and link styles
- **Minimap Navigation**: Optional minimap for easy navigation of large graphs
- **Force Simulation**: Physics-based layout with customizable forces
- **Event Handling**: Rich set of interaction callbacks
- **Performance Optimized**: Virtualization support for large datasets
- **Accessible**: Keyboard and screen reader friendly
- **Responsive**: Adapts to container size changes

## Node Shapes
- Circle
- Square / Rounded Square
- Rectangle / Rounded Rectangle
- Custom shapes via renderer

## Themes
Supports both light and dark themes with automatic styling adjustments.
        `,
      },
    },
  },
  argTypes: {
    // Data
    nodes: {
      description: "Array of node objects to render",
      control: { type: "object" },
    },
    links: {
      description: "Array of link objects connecting nodes",
      control: { type: "object" },
    },

    // Dimensions
    width: {
      description: "Fixed width in pixels (optional)",
      control: { type: "number", min: 200, max: 2000, step: 50 },
    },
    height: {
      description: "Fixed height in pixels (optional)",
      control: { type: "number", min: 200, max: 1200, step: 50 },
    },

    // Features
    enableMinimap: {
      description: "Enable minimap navigation",
      control: { type: "boolean" },
    },
    enableZoom: {
      description: "Enable zoom functionality",
      control: { type: "boolean" },
    },
    enableDrag: {
      description: "Enable node dragging",
      control: { type: "boolean" },
    },
    enableHover: {
      description: "Enable hover effects and interactions",
      control: { type: "boolean" },
    },

    // Theme
    theme: {
      description: "Visual theme",
      control: { type: "select" },
      options: ["light", "dark"],
    },

    // Layout
    fitOnMount: {
      description: "Automatically fit graph to container on mount",
      control: { type: "boolean" },
    },

    // Zoom
    minZoom: {
      description: "Minimum zoom level",
      control: { type: "number", min: 0.1, max: 1, step: 0.1 },
    },
    maxZoom: {
      description: "Maximum zoom level",
      control: { type: "number", min: 2, max: 10, step: 0.5 },
    },

    // Performance
    enableVirtualization: {
      description: "Enable virtualization for large datasets",
      control: { type: "boolean" },
    },
    maxRenderNodes: {
      description: "Maximum nodes to render when virtualization is enabled",
      control: { type: "number", min: 100, max: 5000, step: 100 },
    },
    maxRenderLinks: {
      description: "Maximum links to render when virtualization is enabled",
      control: { type: "number", min: 100, max: 10000, step: 100 },
    },
  },
  args: {
    width: 800,
    height: 600,
    enableMinimap: true,
    enableZoom: true,
    enableDrag: true,
    enableHover: true,
    theme: "light",
    fitOnMount: true,
    minZoom: 0.1,
    maxZoom: 4,
    enableVirtualization: false,
    maxRenderNodes: 1000,
    maxRenderLinks: 2000,
  },
};

export default meta;
type Story = StoryObj<typeof NetworkGraph>;

// Sample data generators
const generateNodes = (count: number): Node[] => {
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

const generateLinks = (nodeCount: number): Link[] => {
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

// Basic Examples
export const Default: Story = {
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8),
  },
};

export const SimpleNetwork: Story = {
  name: "Simple Network",
  args: {
    nodes: [
      {
        id: "1",
        name: "Root",
        shape: "circle",
        style: { backgroundColor: "#ff6b6b" },
      },
      {
        id: "2",
        name: "Child A",
        shape: "square",
        style: { backgroundColor: "#4ecdc4" },
      },
      {
        id: "3",
        name: "Child B",
        shape: "rectangle",
        style: { backgroundColor: "#45b7d1" },
      },
      {
        id: "4",
        name: "Grandchild",
        shape: "rounded-square",
        style: { backgroundColor: "#96ceb4" },
      },
    ],
    links: [
      { source: "1", target: "2", label: "connects to" },
      { source: "1", target: "3", label: "links to" },
      { source: "2", target: "4", label: "parent of" },
    ],
  },
};

// Theme Examples
export const DarkTheme: Story = {
  name: "Dark Theme",
  args: {
    theme: "dark",
    nodes: generateNodes(6),
    links: generateLinks(6),
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const LightTheme: Story = {
  name: "Light Theme",
  args: {
    theme: "light",
    nodes: generateNodes(6),
    links: generateLinks(6),
  },
};

// Node Shape Examples
export const NodeShapes: Story = {
  name: "Different Node Shapes",
  args: {
    nodes: [
      {
        id: "1",
        name: "Circle",
        shape: "circle",
        style: { backgroundColor: "#ff6b6b" },
      },
      {
        id: "2",
        name: "Square",
        shape: "square",
        style: { backgroundColor: "#4ecdc4" },
      },
      {
        id: "3",
        name: "Rectangle",
        shape: "rectangle",
        style: { backgroundColor: "#45b7d1" },
      },
      {
        id: "4",
        name: "Rounded Square",
        shape: "rounded-square",
        style: { backgroundColor: "#96ceb4" },
      },
      {
        id: "5",
        name: "Rounded Rectangle",
        shape: "rounded-rectangle",
        style: { backgroundColor: "#feca57" },
      },
    ],
    links: [
      { source: "1", target: "2" },
      { source: "2", target: "3" },
      { source: "3", target: "4" },
      { source: "4", target: "5" },
      { source: "5", target: "1" },
    ],
  },
};

// Styling Examples
export const CustomStyling: Story = {
  name: "Custom Node & Link Styling",
  args: {
    nodes: [
      {
        id: "1",
        name: "Server",
        label: "Main Server\nUS-East",
        shape: "rectangle",
        style: {
          backgroundColor: "#2c3e50",
          borderColor: "#3498db",
          borderWidth: 3,
          width: 120,
          height: 80,
        },
      },
      {
        id: "2",
        name: "DB",
        label: "Database\nPostgreSQL",
        shape: "circle",
        style: {
          backgroundColor: "#e74c3c",
          borderColor: "#c0392b",
          borderWidth: 2,
        },
      },
      {
        id: "3",
        name: "Cache",
        label: "Redis Cache",
        shape: "rounded-square",
        style: {
          backgroundColor: "#f39c12",
          borderColor: "#e67e22",
          borderWidth: 2,
        },
      },
    ],
    links: [
      {
        source: "1",
        target: "2",
        label: "queries",
        style: {
          linkColor: "#e74c3c",
          linkWidth: 3,
          linkType: "solid",
        },
      },
      {
        source: "1",
        target: "3",
        label: "caches",
        style: {
          linkColor: "#f39c12",
          linkWidth: 2,
          linkType: "dashed",
        },
      },
    ],
  },
};

// Large Dataset Examples
export const LargeNetwork: Story = {
  name: "Large Network (100 nodes)",
  args: {
    nodes: generateNodes(100),
    links: generateLinks(100),
    enableVirtualization: true,
    maxRenderNodes: 50,
    maxRenderLinks: 100,
  },
};

export const MediumNetwork: Story = {
  name: "Medium Network (25 nodes)",
  args: {
    nodes: generateNodes(25),
    links: generateLinks(25),
  },
};

// Feature Examples
export const WithoutMinimap: Story = {
  name: "Without Minimap",
  args: {
    nodes: generateNodes(10),
    links: generateLinks(10),
    enableMinimap: false,
  },
};

export const ZoomDisabled: Story = {
  name: "Zoom Disabled",
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8),
    enableZoom: false,
  },
};

export const DragDisabled: Story = {
  name: "Drag Disabled",
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8),
    enableDrag: false,
  },
};

export const StaticLayout: Story = {
  name: "Static Layout (No interactions)",
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8),
    enableZoom: false,
    enableDrag: false,
    enableHover: false,
    enableMinimap: false,
  },
};

// Real-world Examples
export const OrganizationChart: Story = {
  name: "Organization Chart",
  args: {
    nodes: [
      {
        id: "ceo",
        name: "CEO",
        label: "Chief Executive Officer\nJohn Smith",
        shape: "rectangle",
        style: { backgroundColor: "#2c3e50", width: 150, height: 60 },
      },
      {
        id: "cto",
        name: "CTO",
        label: "Chief Technology Officer\nJane Doe",
        shape: "rectangle",
        style: { backgroundColor: "#3498db", width: 140, height: 60 },
      },
      {
        id: "cfo",
        name: "CFO",
        label: "Chief Financial Officer\nBob Johnson",
        shape: "rectangle",
        style: { backgroundColor: "#e74c3c", width: 140, height: 60 },
      },
      {
        id: "dev1",
        name: "Dev 1",
        label: "Senior Developer\nAlice Brown",
        shape: "rounded-rectangle",
        style: { backgroundColor: "#95a5a6", width: 120, height: 50 },
      },
      {
        id: "dev2",
        name: "Dev 2",
        label: "Junior Developer\nCharlie Wilson",
        shape: "rounded-rectangle",
        style: { backgroundColor: "#95a5a6", width: 120, height: 50 },
      },
    ],
    links: [
      { source: "ceo", target: "cto", label: "reports to" },
      { source: "ceo", target: "cfo", label: "reports to" },
      { source: "cto", target: "dev1", label: "manages" },
      { source: "cto", target: "dev2", label: "manages" },
    ],
    simulationConfig: {
      linkDistance: 150,
      chargeStrength: -2000,
    },
  },
};

export const NetworkTopology: Story = {
  name: "Network Topology",
  args: {
    nodes: [
      {
        id: "router",
        name: "Router",
        label: "Main Router\n192.168.1.1",
        shape: "rectangle",
        style: { backgroundColor: "#34495e", borderColor: "#2c3e50" },
      },
      {
        id: "switch1",
        name: "Switch 1",
        label: "Switch A\nPort 24",
        shape: "square",
        style: { backgroundColor: "#27ae60", borderColor: "#229954" },
      },
      {
        id: "switch2",
        name: "Switch 2",
        label: "Switch B\nPort 16",
        shape: "square",
        style: { backgroundColor: "#27ae60", borderColor: "#229954" },
      },
      {
        id: "pc1",
        name: "PC 1",
        label: "Workstation\n192.168.1.10",
        shape: "circle",
        style: { backgroundColor: "#3498db", borderColor: "#2980b9" },
      },
      {
        id: "pc2",
        name: "PC 2",
        label: "Workstation\n192.168.1.11",
        shape: "circle",
        style: { backgroundColor: "#3498db", borderColor: "#2980b9" },
      },
      {
        id: "server",
        name: "Server",
        label: "File Server\n192.168.1.100",
        shape: "rounded-rectangle",
        style: {
          backgroundColor: "#e74c3c",
          borderColor: "#c0392b",
          width: 100,
          height: 60,
        },
      },
    ],
    links: [
      { source: "router", target: "switch1", label: "Ethernet" },
      { source: "router", target: "switch2", label: "Ethernet" },
      { source: "switch1", target: "pc1", label: "1Gbps" },
      { source: "switch2", target: "pc2", label: "1Gbps" },
      {
        source: "router",
        target: "server",
        label: "10Gbps",
        style: { linkWidth: 4, linkColor: "#e74c3c" },
      },
    ],
    simulationConfig: {
      linkDistance: 180,
      chargeStrength: -3000,
    },
  },
};

export const FlowChart: Story = {
  name: "Process Flow Chart",
  args: {
    nodes: [
      {
        id: "start",
        name: "Start",
        shape: "circle",
        style: { backgroundColor: "#27ae60", borderColor: "#229954" },
      },
      {
        id: "process1",
        name: "Process",
        label: "Validate Input",
        shape: "rectangle",
        style: { backgroundColor: "#3498db", borderColor: "#2980b9" },
      },
      {
        id: "decision",
        name: "Decision",
        label: "Valid?",
        shape: "square",
        style: { backgroundColor: "#f39c12", borderColor: "#e67e22" },
      },
      {
        id: "process2",
        name: "Process",
        label: "Save Data",
        shape: "rectangle",
        style: { backgroundColor: "#3498db", borderColor: "#2980b9" },
      },
      {
        id: "error",
        name: "Error",
        label: "Show Error",
        shape: "rectangle",
        style: { backgroundColor: "#e74c3c", borderColor: "#c0392b" },
      },
      {
        id: "end",
        name: "End",
        shape: "circle",
        style: { backgroundColor: "#95a5a6", borderColor: "#7f8c8d" },
      },
    ],
    links: [
      { source: "start", target: "process1" },
      { source: "process1", target: "decision" },
      {
        source: "decision",
        target: "process2",
        label: "Yes",
        style: { linkColor: "#27ae60" },
      },
      {
        source: "decision",
        target: "error",
        label: "No",
        style: { linkColor: "#e74c3c" },
      },
      { source: "process2", target: "end" },
      { source: "error", target: "end" },
    ],
  },
};

// Advanced Features
export const WithImages: Story = {
  name: "Nodes with Images",
  args: {
    nodes: [
      {
        id: "1",
        name: "User",
        label: "John Doe\nAdmin",
        shape: "circle",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
        style: {
          backgroundColor: "#3498db",
          padding: 5,
          width: 80,
          height: 80,
        },
      },
      {
        id: "2",
        name: "User",
        label: "Jane Smith\nManager",
        shape: "circle",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
        style: {
          backgroundColor: "#e74c3c",
          padding: 5,
          width: 80,
          height: 80,
        },
      },
      {
        id: "3",
        name: "User",
        label: "Bob Wilson\nDeveloper",
        shape: "circle",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=bob",
        style: {
          backgroundColor: "#27ae60",
          padding: 5,
          width: 80,
          height: 80,
        },
      },
    ],
    links: [
      { source: "1", target: "2", label: "supervises" },
      { source: "2", target: "3", label: "manages" },
    ],
  },
};

export const InteractiveCallbacks: Story = {
  name: "Interactive with Callbacks",
  args: {
    nodes: generateNodes(6),
    links: generateLinks(6),
    onNodeClick: (node, event) => {
      console.log("Node clicked:", node);
      alert(`Clicked on ${node.name}`);
    },
    onLinkClick: (link, event) => {
      console.log("Link clicked:", link);
      alert(`Clicked on link from ${link.source} to ${link.target}`);
    },
    onNodeHover: (node, event) => {
      console.log("Node hovered:", node);
    },
    onZoomChange: zoomLevel => {
      console.log("Zoom changed:", zoomLevel);
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "This example demonstrates the callback functions. Check the console and try clicking on nodes and links.",
      },
    },
  },
};

export const CustomSimulation: Story = {
  name: "Custom Simulation Settings",
  args: {
    nodes: generateNodes(12),
    links: generateLinks(12),
    simulationConfig: {
      linkDistance: 300,
      chargeStrength: -1000,
      collisionRadius: 50,
      alphaDecay: 0.005,
      alphaMin: 0.001,
    },
    centerForce: 0.3,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Custom simulation with increased link distance and modified forces for a more spread out layout.",
      },
    },
  },
};

export const MessageFlow: Story = {
  name: "Message Flow Diagram",
  args: {
    nodes: [
      {
        id: "client",
        name: "Client",
        label: "Web Browser",
        shape: "rectangle",
        style: { backgroundColor: "#3498db" },
      },
      {
        id: "api",
        name: "API",
        label: "REST API\nGateway",
        shape: "rectangle",
        style: { backgroundColor: "#f39c12" },
      },
      {
        id: "auth",
        name: "Auth",
        label: "Auth Service",
        shape: "rectangle",
        style: { backgroundColor: "#e74c3c" },
      },
      {
        id: "db",
        name: "Database",
        label: "PostgreSQL",
        shape: "circle",
        style: { backgroundColor: "#27ae60" },
      },
    ],
    links: [
      {
        source: "client",
        target: "api",
        label: "HTTP Request",
        message: "1. POST /api/login",
        style: { linkColor: "#3498db" },
      },
      {
        source: "api",
        target: "auth",
        label: "Validate",
        message: "2. Check credentials",
        style: { linkColor: "#f39c12" },
      },
      {
        source: "auth",
        target: "db",
        label: "Query",
        message: "3. SELECT user",
        style: { linkColor: "#e74c3c" },
      },
    ],
  },
};

export const HierarchicalTree: Story = {
  name: "Hierarchical Tree Structure",
  args: {
    nodes: [
      {
        id: "root",
        name: "Root",
        shape: "circle",
        style: { backgroundColor: "#2c3e50" },
      },
      {
        id: "branch1",
        name: "Branch 1",
        shape: "square",
        style: { backgroundColor: "#3498db" },
      },
      {
        id: "branch2",
        name: "Branch 2",
        shape: "square",
        style: { backgroundColor: "#3498db" },
      },
      {
        id: "leaf1",
        name: "Leaf 1",
        shape: "circle",
        style: { backgroundColor: "#27ae60" },
      },
      {
        id: "leaf2",
        name: "Leaf 2",
        shape: "circle",
        style: { backgroundColor: "#27ae60" },
      },
      {
        id: "leaf3",
        name: "Leaf 3",
        shape: "circle",
        style: { backgroundColor: "#27ae60" },
      },
      {
        id: "leaf4",
        name: "Leaf 4",
        shape: "circle",
        style: { backgroundColor: "#27ae60" },
      },
    ],
    links: [
      { source: "root", target: "branch1" },
      { source: "root", target: "branch2" },
      { source: "branch1", target: "leaf1" },
      { source: "branch1", target: "leaf2" },
      { source: "branch2", target: "leaf3" },
      { source: "branch2", target: "leaf4" },
    ],
    simulationConfig: {
      linkDistance: 100,
      chargeStrength: -2000,
    },
  },
};

export const ZoomLevels: Story = {
  name: "Custom Zoom Levels",
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8),
    minZoom: 0.2,
    maxZoom: 8,
    zoomLevel: 1.5,
  },
  parameters: {
    docs: {
      description: {
        story: "Custom zoom levels with extended range and initial zoom level.",
      },
    },
  },
};

export const ResponsiveLayout: Story = {
  name: "Responsive (No Fixed Dimensions)",
  args: {
    nodes: generateNodes(10),
    links: generateLinks(10),
    // No width/height specified - will be responsive
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example without fixed width/height - the component will adapt to its container size.",
      },
    },
  },
};

export const CustomLinkTypes: Story = {
  name: "Different Link Types",
  args: {
    nodes: [
      {
        id: "1",
        name: "Node 1",
        shape: "circle",
        style: { backgroundColor: "#3498db" },
      },
      {
        id: "2",
        name: "Node 2",
        shape: "circle",
        style: { backgroundColor: "#e74c3c" },
      },
      {
        id: "3",
        name: "Node 3",
        shape: "circle",
        style: { backgroundColor: "#27ae60" },
      },
      {
        id: "4",
        name: "Node 4",
        shape: "circle",
        style: { backgroundColor: "#f39c12" },
      },
    ],
    links: [
      {
        source: "1",
        target: "2",
        label: "Solid",
        style: { linkType: "solid", linkColor: "#3498db", linkWidth: 2 },
      },
      {
        source: "2",
        target: "3",
        label: "Dashed",
        style: { linkType: "dashed", linkColor: "#e74c3c", linkWidth: 3 },
      },
      {
        source: "3",
        target: "4",
        label: "Thick",
        style: { linkType: "solid", linkColor: "#27ae60", linkWidth: 6 },
      },
      {
        source: "1",
        target: "4",
        label: "Curved",
        shape: "curved",
        style: { linkType: "solid", linkColor: "#9b59b6", linkWidth: 2 },
      },
    ],
  },
};

export const MinimalExample: Story = {
  name: "Minimal Setup",
  args: {
    nodes: [
      { id: "A", name: "A" },
      { id: "B", name: "B" },
      { id: "C", name: "C" },
    ],
    links: [
      { source: "A", target: "B" },
      { source: "B", target: "C" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Minimal example showing the simplest possible configuration with just IDs and names.",
      },
    },
  },
};

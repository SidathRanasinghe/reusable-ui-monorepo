import type { Meta, StoryObj } from "@storybook/react";

import { NetworkGraph } from "@core/network-graph";

import { ASSET_PATHS, getAssetPath } from "../../common/assetUtils";
import { generateLinks, generateNodes } from "../../common/utils";

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
  tags: ["autodocs"],
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
        image: getAssetPath(ASSET_PATHS.ART_AVATAR_JOHN),
        style: {
          backgroundColor: "#3498db",
          padding: 5,
          width: 60,
          height: 60,
        },
      },
      {
        id: "2",
        name: "User",
        label: "Jane Smith\nManager",
        shape: "circle",
        image: getAssetPath(ASSET_PATHS.ART_AVATAR_JANE),
        style: {
          backgroundColor: "#e74c3c",
          padding: 5,
          width: 60,
          height: 60,
        },
      },
      {
        id: "3",
        name: "User",
        label: "Bob Wilson\nDeveloper",
        shape: "square",
        image: getAssetPath(ASSET_PATHS.ART_AVATAR_BOB),
        style: {
          backgroundColor: "#27ae60",
          padding: 5,
          width: 120,
          height: 120,
        },
      },
      {
        id: "4",
        name: "User",
        label: "Kamala Devi\nDesigner",
        shape: "circle",
        image: getAssetPath(ASSET_PATHS.ART_AVATAR_KAMALA),
        style: {
          backgroundColor: "#9b59b6",
          padding: 5,
          width: 60,
          height: 60,
        },
      },
      {
        id: "5",
        name: "User",
        label: "Luna Park\nAnalyst",
        shape: "rounded-square",
        image: getAssetPath(ASSET_PATHS.ART_AVATAR_LUNA),
        style: {
          backgroundColor: "#1abc9c",
          padding: 5,
          width: 100,
          height: 100,
        },
      },
      {
        id: "6",
        name: "User",
        label: "Mike Ross\nEngineer",
        shape: "circle",
        image: getAssetPath(ASSET_PATHS.ART_AVATAR_MIKE),
        style: {
          backgroundColor: "#f39c12",
          padding: 5,
          width: 60,
          height: 60,
        },
      },
      {
        id: "7",
        name: "User",
        label: "Bell Nash\nArchitect",
        shape: "rectangle",
        image: getAssetPath(ASSET_PATHS.ART_AVATAR_BELL),
        style: {
          backgroundColor: "#34495e",
          padding: 5,
          width: 120,
          height: 60,
        },
      },
      {
        id: "8",
        name: "User",
        label: "Ron Clark\nSupport",
        shape: "circle",
        image: getAssetPath(ASSET_PATHS.ART_AVATAR_RON),
        style: {
          backgroundColor: "#2ecc71",
          padding: 5,
          width: 60,
          height: 60,
        },
      },
      {
        id: "9",
        name: "User",
        label: "Sarath Silva\nIntern",
        shape: "rounded-rectangle",
        image: getAssetPath(ASSET_PATHS.ART_AVATAR_SARATH),
        style: {
          backgroundColor: "#c0392b",
          padding: 5,
          width: 140,
          height: 100,
        },
      },
      {
        id: "10",
        name: "User",
        label: "Jine Lee\nHR",
        shape: "circle",
        image: getAssetPath(ASSET_PATHS.ART_AVATAR_JINE),
        style: {
          backgroundColor: "#7f8c8d",
          padding: 5,
          width: 60,
          height: 60,
        },
      },
    ],
    links: [
      { source: "1", target: "2", label: "supervises" },
      { source: "1", target: "6", label: "supervises" },
      { source: "2", target: "3", label: "manages" },
      { source: "2", target: "7", label: "manages" },
      { source: "3", target: "4", label: "collaborates" },
      { source: "3", target: "8", label: "collaborates" },
      { source: "4", target: "5", label: "reviews" },
      { source: "4", target: "9", label: "reviews" },
      { source: "5", target: "6", label: "supports" },
      { source: "5", target: "10", label: "supports" },
      { source: "6", target: "7", label: "coordinates" },
      { source: "6", target: "3", label: "coordinates" },
      { source: "7", target: "8", label: "assists" },
      { source: "7", target: "4", label: "assists" },
      { source: "8", target: "9", label: "mentors" },
      { source: "8", target: "5", label: "mentors" },
      { source: "9", target: "10", label: "reports to" },
      { source: "9", target: "6", label: "reports to" },
      { source: "10", target: "2", label: "reports to" },
      { source: "10", target: "1", label: "reports to" },
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

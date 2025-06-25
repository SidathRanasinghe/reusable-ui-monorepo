import type { Meta, StoryObj } from "@storybook/react";
import { Building2, Mail } from "lucide-react";

import {
  Card,
  CardContent,
} from "../../../packages/ui-core/src/components/ui/card";
import { Badge } from "../../../packages/ui-core/src/components/ui/badge";
import { Avatar } from "../../../packages/ui-core/src/components/ui/avatar";

import HierarchyChart, {
  ChartNode,
  ChartNodePosition,
} from "@/components/core/hierarchy-chart";

const meta: Meta<typeof HierarchyChart> = {
  title: "Data Visualization/OrganizationalChart",
  component: HierarchyChart,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A flexible and customizable organizational chart component built with React and TypeScript. Supports custom nodes, themes, tooltips, and interactive features.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      description:
        "The hierarchical data structure representing the organizational chart",
      control: "object",
    },
    layout: {
      description: "Layout configuration for spacing and sizing",
      control: "object",
    },
    theme: {
      description: "Theme configuration for colors and styling",
      control: "object",
    },
    showTooltips: {
      description: "Whether to show tooltips on hover",
      control: "boolean",
    },
    interactive: {
      description: "Whether the chart is interactive",
      control: "boolean",
    },
    onNodeClick: {
      description: "Callback fired when a node is clicked",
      action: "nodeClicked",
    },
    onNodeHover: {
      description: "Callback fired when a node is hovered",
      action: "nodeHovered",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HierarchyChart>;

// Sample data
const basicData: ChartNode = {
  id: "1",
  name: "John Smith",
  title: "Chief Executive Officer",
  department: "Executive",
  email: "john.smith@company.com",
  phone: "+1 (555) 123-4567",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  children: [
    {
      id: "2",
      name: "Sarah Johnson",
      title: "Chief Technology Officer",
      department: "Technology",
      email: "sarah.johnson@company.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      children: [
        {
          id: "3",
          name: "Mike Davis",
          title: "Senior Developer",
          department: "Engineering",
          email: "mike.davis@company.com",
          avatar:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: "4",
          name: "Emily Chen",
          title: "UX Designer",
          department: "Design",
          email: "emily.chen@company.com",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        },
      ],
    },
    {
      id: "5",
      name: "Robert Wilson",
      title: "Chief Marketing Officer",
      department: "Marketing",
      email: "robert.wilson@company.com",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      children: [
        {
          id: "6",
          name: "Lisa Anderson",
          title: "Marketing Specialist",
          department: "Marketing",
          email: "lisa.anderson@company.com",
          avatar:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
        },
      ],
    },
  ],
};

const complexData: ChartNode = {
  id: "ceo",
  name: "Alexandra Torres",
  title: "Chief Executive Officer",
  department: "Executive Leadership",
  email: "alexandra.torres@techcorp.com",
  phone: "+1 (555) 100-1000",
  avatar:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
  metadata: { level: "C-Suite", location: "New York" },
  children: [
    {
      id: "cto",
      name: "Marcus Johnson",
      title: "Chief Technology Officer",
      department: "Technology",
      email: "marcus.johnson@techcorp.com",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      metadata: { level: "C-Suite", location: "San Francisco" },
      children: [
        {
          id: "eng-dir",
          name: "Priya Patel",
          title: "Director of Engineering",
          department: "Engineering",
          email: "priya.patel@techcorp.com",
          avatar:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
          children: [
            {
              id: "senior-dev-1",
              name: "David Kim",
              title: "Senior Software Engineer",
              department: "Frontend",
              email: "david.kim@techcorp.com",
              avatar:
                "https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?w=150&h=150&fit=crop&crop=face",
            },
            {
              id: "senior-dev-2",
              name: "Jessica Rodriguez",
              title: "Senior Software Engineer",
              department: "Backend",
              email: "jessica.rodriguez@techcorp.com",
              avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
            },
          ],
        },
        {
          id: "devops-dir",
          name: "Ahmed Hassan",
          title: "Director of DevOps",
          department: "Infrastructure",
          email: "ahmed.hassan@techcorp.com",
          avatar:
            "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
          children: [
            {
              id: "devops-eng-1",
              name: "Maria Gonzalez",
              title: "DevOps Engineer",
              department: "Infrastructure",
              email: "maria.gonzalez@techcorp.com",
              avatar:
                "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
            },
          ],
        },
      ],
    },
    {
      id: "cmo",
      name: "Jennifer Liu",
      title: "Chief Marketing Officer",
      department: "Marketing",
      email: "jennifer.liu@techcorp.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      metadata: { level: "C-Suite", location: "Los Angeles" },
      children: [
        {
          id: "brand-dir",
          name: "Thomas Anderson",
          title: "Brand Director",
          department: "Brand Marketing",
          email: "thomas.anderson@techcorp.com",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: "digital-dir",
          name: "Sophia Williams",
          title: "Digital Marketing Director",
          department: "Digital Marketing",
          email: "sophia.williams@techcorp.com",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
          children: [
            {
              id: "seo-spec",
              name: "Ryan O'Connor",
              title: "SEO Specialist",
              department: "Digital Marketing",
              email: "ryan.oconnor@techcorp.com",
              avatar:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            },
          ],
        },
      ],
    },
    {
      id: "cfo",
      name: "Michael Chang",
      title: "Chief Financial Officer",
      department: "Finance",
      email: "michael.chang@techcorp.com",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      metadata: { level: "C-Suite", location: "New York" },
      children: [
        {
          id: "finance-dir",
          name: "Rachel Green",
          title: "Finance Director",
          department: "Finance",
          email: "rachel.green@techcorp.com",
          avatar:
            "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face",
        },
      ],
    },
  ],
};

const smallData: ChartNode = {
  id: "manager",
  name: "Alex Thompson",
  title: "Team Lead",
  department: "Engineering",
  email: "alex.thompson@company.com",
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  children: [
    {
      id: "dev1",
      name: "Sam Wilson",
      title: "Developer",
      department: "Engineering",
      email: "sam.wilson@company.com",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "dev2",
      name: "Jordan Lee",
      title: "Developer",
      department: "Engineering",
      email: "jordan.lee@company.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ],
};

// Custom node renderer
const CustomNode: React.FC<{
  node: ChartNodePosition;
  theme: any;
  isHovered: boolean;
}> = ({ node, theme, isHovered }) => (
  <div
    className="absolute"
    style={{
      left: node.x,
      top: node.y,
      width: node.width,
      height: node.height,
    }}
  >
    <Card
      className={`h-full transition-all duration-200 ${isHovered ? "border-blue-500 shadow-lg" : "shadow-md"}`}
    >
      <CardContent className="flex h-full flex-col p-4">
        <div className="mb-2 flex items-start gap-3">
          <Avatar className="size-10">
            <img
              src={node.avatar}
              alt={node.name}
              className="size-full object-cover"
            />
          </Avatar>
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-semibold">{node.name}</h3>
            <p className="truncate text-xs text-gray-600">{node.title}</p>
          </div>
        </div>
        <div className="mt-auto flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            <Building2 className="mr-1 size-3" />
            {node.department}
          </Badge>
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
          <Mail className="size-3" />
          <span className="truncate">{node.email}</span>
        </div>
      </CardContent>
    </Card>
  </div>
);

// Stories
export const Default: Story = {
  args: {
    data: basicData,
    showTooltips: true,
    interactive: true,
  },
};

export const Complex: Story = {
  args: {
    data: complexData,
    showTooltips: true,
    interactive: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A more complex organizational chart with multiple levels and departments.",
      },
    },
  },
};

export const Small: Story = {
  args: {
    data: smallData,
    showTooltips: true,
    interactive: true,
  },
  parameters: {
    docs: {
      description: {
        story: "A simple organizational chart with just a few nodes.",
      },
    },
  },
};

export const CustomTheme: Story = {
  args: {
    data: basicData,
    showTooltips: true,
    interactive: true,
    theme: {
      background: "#f8fafc",
      node: {
        background: "#ffffff",
        border: "#e2e8f0",
        borderRadius: 12,
        shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        hoverBackground: "#f1f5f9",
        hoverBorder: "#3b82f6",
      },
      connection: {
        color: "#64748b",
        width: 2,
        hoverColor: "#3b82f6",
        hoverWidth: 3,
      },
      text: {
        primary: "#0f172a",
        secondary: "#64748b",
        size: {
          name: "",
          title: "",
          department: "",
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Organizational chart with custom theme colors and styling.",
      },
    },
  },
};

export const CustomLayout: Story = {
  args: {
    data: complexData,
    showTooltips: true,
    interactive: true,
    layout: {
      nodeWidth: 320,
      nodeHeight: 140,
      horizontalSpacing: 60,
      verticalSpacing: 100,
      padding: {
        top: 60,
        right: 60,
        bottom: 60,
        left: 60,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Organizational chart with custom layout spacing and dimensions.",
      },
    },
  },
};

export const NonInteractive: Story = {
  args: {
    data: basicData,
    showTooltips: false,
    interactive: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Non-interactive organizational chart without tooltips or hover effects.",
      },
    },
  },
};

export const CustomNodeRenderer: Story = {
  args: {
    data: smallData,
    showTooltips: true,
    interactive: true,
    renderNode: (node: ChartNodePosition, defaultProps: any) => (
      <CustomNode
        key={node.id}
        node={node}
        theme={defaultProps.theme}
        isHovered={defaultProps.isHovered}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Organizational chart with custom node rendering using Cards and Badges.",
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    data: basicData,
    showTooltips: true,
    interactive: true,
    theme: {
      background: "#0f172a",
      node: {
        background: "#1e293b",
        border: "#334155",
        borderRadius: 8,
        shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
        hoverBackground: "#334155",
        hoverBorder: "#60a5fa",
      },
      connection: {
        color: "#64748b",
        width: 2,
        hoverColor: "#60a5fa",
        hoverWidth: 3,
      },
      text: {
        primary: "#f8fafc",
        secondary: "#94a3b8",
        size: {
          name: "",
          title: "",
          department: "",
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Organizational chart with dark theme colors.",
      },
    },
  },
};

export const CompactLayout: Story = {
  args: {
    data: complexData,
    showTooltips: true,
    interactive: true,
    layout: {
      nodeWidth: 240,
      nodeHeight: 100,
      horizontalSpacing: 20,
      verticalSpacing: 60,
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Compact organizational chart with minimal spacing for dense layouts.",
      },
    },
  },
};

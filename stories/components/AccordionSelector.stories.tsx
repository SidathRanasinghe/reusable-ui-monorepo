import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Database,
  Users,
  Settings,
  Shield,
  Bell,
  Zap,
  FileText,
  Globe,
  Lock,
  BarChart,
} from "lucide-react";

import AccordionSelector, {
  SelectionState,
  AccordionGroup,
} from "../../packages/ui-core/src/components/core/accordion-selector/AccordionSelector";

const meta: Meta<typeof AccordionSelector> = {
  title: "Interactive/Accordion Selector",
  component: AccordionSelector,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A highly customizable accordion-based selector component with TypeScript support, search functionality, and flexible rendering options.",
      },
    },
  },
  argTypes: {
    allowMultipleExpanded: {
      control: "boolean",
      description:
        "Allow multiple accordion items to be expanded simultaneously",
    },
    allowMultipleSelection: {
      control: "boolean",
      description: "Allow multiple items to be selected",
    },
    searchable: {
      control: "boolean",
      description: "Enable search functionality",
    },
    clearSelectionOnGroupChange: {
      control: "boolean",
      description: "Clear selections from other groups when selecting items",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const sampleGroups: AccordionGroup[] = [
  {
    id: "database",
    label: "Database Tables",
    icon: <Database className="size-4 text-blue-500" />,
    content: [
      {
        id: "users",
        label: "Users Table",
        metadata: { description: "Manage user accounts and profiles" },
      },
      {
        id: "products",
        label: "Products Table",
        metadata: { description: "Product catalog and inventory" },
      },
      {
        id: "orders",
        label: "Orders Table",
        metadata: { description: "Customer orders and transactions" },
      },
      {
        id: "analytics",
        label: "Analytics Data",
        metadata: { description: "Usage statistics and metrics" },
      },
    ],
  },
  {
    id: "permissions",
    label: "User Permissions",
    icon: <Users className="size-4 text-green-500" />,
    content: [
      { id: "read", label: "Read Access" },
      { id: "write", label: "Write Access" },
      { id: "admin", label: "Admin Access" },
      { id: "delete", label: "Delete Access", disabled: true },
    ],
  },
  {
    id: "settings",
    label: "System Settings",
    icon: <Settings className="size-4 text-purple-500" />,
    content: [
      { id: "notifications", label: "Email Notifications" },
      { id: "security", label: "Security Settings" },
      { id: "integrations", label: "API Integrations" },
    ],
  },
];

// Basic usage story
export const Default: Story = {
  args: {
    groups: sampleGroups,
    onSelectionChange: (selection, metadata) => {
      console.log("Selection changed:", selection);
      console.log("Metadata:", metadata);
    },
  },
};

// Controlled component story
export const Controlled: Story = {
  render: args => {
    const [selection, setSelection] = useState<SelectionState>({
      database_users: true,
      permissions_read: true,
    });
    const [expanded, setExpanded] = useState<string[]>(["database"]);

    return (
      <AccordionSelector
        {...args}
        selectedItems={selection}
        onSelectionChange={newSelection => setSelection(newSelection)}
        expandedItems={expanded}
        onExpandedChange={newExpanded => setExpanded(newExpanded)}
      />
    );
  },
  args: {
    groups: sampleGroups,
  },
};

// Single selection mode
export const SingleSelection: Story = {
  args: {
    groups: sampleGroups,
    allowMultipleSelection: false,
    onSelectionChange: selection => console.log("Single selection:", selection),
  },
};

// With search functionality
export const WithSearch: Story = {
  args: {
    groups: [
      ...sampleGroups,
      {
        id: "advanced",
        label: "Advanced Features",
        icon: <Zap className="size-4 text-yellow-500" />,
        content: [
          { id: "automation", label: "Automation Rules" },
          { id: "webhooks", label: "Webhook Configuration" },
          { id: "api", label: "API Management" },
          { id: "logs", label: "System Logs" },
        ],
      },
    ],
    searchable: true,
    searchPlaceholder: "Search features...",
    onSearch: query => console.log("Search query:", query),
  },
};

// Custom styling
export const CustomStyling: Story = {
  args: {
    groups: sampleGroups,
    styles: {
      wrapper: "border-2 border-blue-200 rounded-xl bg-blue-50",
      accordionItem: "border-b border-blue-200 last:border-b-0",
      accordionTrigger: "px-6 py-4 hover:bg-blue-100",
      accordionContent: "px-6 py-3 bg-white",
      checkboxItem: "p-3 hover:bg-blue-50 rounded-lg mx-2 my-1",
      checkbox: "border-blue-300 text-blue-600",
      label: "text-blue-900 font-medium",
    },
  },
};

// With custom content
export const CustomContent: Story = {
  args: {
    groups: [
      {
        id: "dashboard",
        label: "Dashboard Widgets",
        icon: <BarChart className="size-4 text-indigo-500" />,
        content: (
          <div className="space-y-2">
            <div className="rounded-lg bg-gray-50 p-3">
              <h4 className="font-medium text-gray-900">Custom Widget</h4>
              <p className="text-sm text-gray-600">
                This is a custom content area
              </p>
              <button className="mt-2 rounded bg-blue-500 px-3 py-1 text-sm text-white">
                Configure
              </button>
            </div>
          </div>
        ),
      },
      ...sampleGroups,
    ],
  },
};

// Large dataset example
export const LargeDataset: Story = {
  args: {
    groups: [
      {
        id: "countries",
        label: "Countries",
        icon: <Globe className="size-4 text-green-500" />,
        content: [
          { id: "us", label: "United States" },
          { id: "uk", label: "United Kingdom" },
          { id: "ca", label: "Canada" },
          { id: "de", label: "Germany" },
          { id: "fr", label: "France" },
          { id: "jp", label: "Japan" },
          { id: "au", label: "Australia" },
          { id: "br", label: "Brazil" },
          { id: "in", label: "India" },
          { id: "cn", label: "China" },
          { id: "ru", label: "Russia" },
          { id: "mx", label: "Mexico" },
          { id: "es", label: "Spain" },
          { id: "it", label: "Italy" },
          { id: "nl", label: "Netherlands" },
        ],
      },
      {
        id: "languages",
        label: "Programming Languages",
        icon: <FileText className="size-4 text-orange-500" />,
        content: [
          { id: "js", label: "JavaScript" },
          { id: "ts", label: "TypeScript" },
          { id: "py", label: "Python" },
          { id: "java", label: "Java" },
          { id: "cs", label: "C#" },
          { id: "cpp", label: "C++" },
          { id: "go", label: "Go" },
          { id: "rust", label: "Rust" },
          { id: "php", label: "PHP" },
          { id: "ruby", label: "Ruby" },
          { id: "swift", label: "Swift" },
          { id: "kotlin", label: "Kotlin" },
        ],
      },
    ],
    searchable: true,
    allowMultipleExpanded: true,
    defaultExpanded: ["countries"],
  },
};

// Enterprise configuration example
export const EnterpriseConfig: Story = {
  args: {
    groups: [
      {
        id: "security",
        label: "Security Policies",
        icon: <Shield className="size-4 text-red-500" />,
        content: [
          { id: "mfa", label: "Multi-Factor Authentication" },
          { id: "sso", label: "Single Sign-On" },
          { id: "encryption", label: "Data Encryption" },
          { id: "audit", label: "Audit Logging" },
          { id: "compliance", label: "Compliance Monitoring" },
        ],
      },
      {
        id: "notifications",
        label: "Notification Settings",
        icon: <Bell className="size-4 text-blue-500" />,
        content: [
          { id: "email", label: "Email Alerts" },
          { id: "sms", label: "SMS Notifications" },
          { id: "push", label: "Push Notifications" },
          { id: "webhook", label: "Webhook Notifications" },
          { id: "slack", label: "Slack Integration" },
        ],
      },
      {
        id: "privacy",
        label: "Privacy Controls",
        icon: <Lock className="size-4 text-gray-500" />,
        content: [
          { id: "gdpr", label: "GDPR Compliance" },
          { id: "ccpa", label: "CCPA Compliance" },
          { id: "data-retention", label: "Data Retention" },
          { id: "anonymization", label: "Data Anonymization" },
        ],
      },
      {
        id: "integrations",
        label: "Third-party Integrations",
        icon: <Zap className="size-4 text-purple-500" />,
        content: [
          { id: "salesforce", label: "Salesforce CRM" },
          { id: "hubspot", label: "HubSpot" },
          { id: "mailchimp", label: "Mailchimp" },
          { id: "stripe", label: "Stripe Payments" },
          { id: "google-analytics", label: "Google Analytics" },
        ],
      },
    ],
    searchable: true,
    allowMultipleExpanded: true,
    clearSelectionOnGroupChange: false,
    ariaLabel: "Enterprise Configuration Settings",
    styles: {
      wrapper: "max-w-2xl border border-gray-300 rounded-lg shadow-sm",
      accordionTrigger: "px-4 py-3 hover:bg-gray-50",
      checkboxItem: "px-3 py-2 hover:bg-gray-50 rounded",
    },
  },
};

// Disabled items example
export const WithDisabledItems: Story = {
  args: {
    groups: [
      {
        id: "features",
        label: "Available Features",
        icon: <Settings className="size-4 text-blue-500" />,
        content: [
          { id: "basic", label: "Basic Features" },
          { id: "advanced", label: "Advanced Features", disabled: true },
          { id: "premium", label: "Premium Features", disabled: true },
        ],
      },
      {
        id: "disabled-group",
        label: "Unavailable Options",
        icon: <Lock className="size-4 text-gray-400" />,
        disabled: true,
        content: [
          { id: "option1", label: "Option 1" },
          { id: "option2", label: "Option 2" },
        ],
      },
    ],
  },
};

import { Database, Settings, Users } from "lucide-react";

import { AccordionGroup, CarouselSlide } from "@/index";

export const sampleSlides: CarouselSlide[] = [
  {
    id: 1,
    content: (
      <div className="flex h-32 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <span className="text-lg font-semibold">Slide 1</span>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="flex h-32 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <span className="text-lg font-semibold">Slide 2</span>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="flex h-32 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <span className="text-lg font-semibold">Slide 3</span>
      </div>
    ),
  },
];

export const accordionGroups: AccordionGroup[] = [
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

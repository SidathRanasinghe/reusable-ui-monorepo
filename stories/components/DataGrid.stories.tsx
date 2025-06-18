import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Download, Edit, Eye, Plus, Settings, Trash2 } from "lucide-react";

import DataGrid from "../../packages/ui-core/src/components/core/data-grid-table/DataGrid";
import {
  DataGridColumn,
  DataGridProps,
  GenericDataGridRow,
} from "../../packages/ui-core/src/components/core/data-grid-table/types";
import { generateSampleData } from "../../packages/ui-core/src/components/core/data-grid-table/utils";
import { CATEGORY } from "../common/constants";

// Sample data interfaces
interface EmployeeData extends GenericDataGridRow {
  name: string;
  email: string;
  department: string;
  salary: number;
  hireDate: string;
  status: "Active" | "Inactive" | "Pending";
  isActive: boolean;
  experience: number;
  rating: number;
}

interface ProductData extends GenericDataGridRow {
  name: string;
  category: string;
  price: number;
  stock: number;
  createdAt: string;
  isAvailable: boolean;
}

// Sample data
const employeeData: EmployeeData[] = generateSampleData(100) as EmployeeData[];

const productData: ProductData[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  category: ["Electronics", "Clothing", "Books", "Home"][
    Math.floor(Math.random() * 4)
  ],
  price: Math.floor(Math.random() * 500) + 10,
  stock: Math.floor(Math.random() * 100),
  createdAt: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 365)
    .toISOString()
    .split("T")[0],
  isAvailable: Math.random() > 0.2,
}));

// Column definitions
const employeeColumns: DataGridColumn<EmployeeData>[] = [
  {
    key: "name",
    title: "Full Name",
    dataIndex: "name",
    dataType: "string",
    sortable: true,
    filterable: true,
    width: 200,
    render: (value: string, record: EmployeeData) => (
      <div className="flex items-center space-x-3">
        <div className="shrink-0">
          <div className="flex size-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
            {value
              .split(" ")
              .map(n => n[0])
              .join("")
              .toUpperCase()}
          </div>
        </div>
        <div>
          <div className="font-medium text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{record.email}</div>
        </div>
      </div>
    ),
  },
  {
    key: "department",
    title: "Department",
    dataIndex: "department",
    dataType: "string",
    sortable: true,
    filterable: true,
    width: 120,
    render: (value: string) => (
      <span
        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
          value === "Engineering"
            ? "bg-blue-100 text-blue-800"
            : value === "Marketing"
              ? "bg-green-100 text-green-800"
              : value === "Sales"
                ? "bg-yellow-100 text-yellow-800"
                : value === "HR"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-gray-100 text-gray-800"
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    key: "salary",
    title: "Salary",
    dataIndex: "salary",
    dataType: "number",
    sortable: true,
    align: "right",
    width: 120,
    render: (value: number) => (
      <span className="font-medium text-gray-900">
        ${value.toLocaleString()}
      </span>
    ),
  },
  {
    key: "hireDate",
    title: "Hire Date",
    dataIndex: "hireDate",
    dataType: "date",
    sortable: true,
    width: 120,
    render: (value: string) => new Date(value).toLocaleDateString(),
  },
  {
    key: "status",
    title: "Status",
    dataIndex: "status",
    dataType: "string",
    sortable: true,
    filterable: true,
    width: 100,
    render: (value: string) => (
      <span
        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
          value === "Active"
            ? "bg-green-100 text-green-800"
            : value === "Inactive"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    key: "rating",
    title: "Rating",
    dataIndex: "rating",
    dataType: "number",
    sortable: true,
    align: "center",
    width: 100,
    render: (value: number) => (
      <div className="flex items-center justify-center space-x-1">
        <span className="text-sm font-medium">{value}</span>
        <span className="text-yellow-400">★</span>
      </div>
    ),
  },
  {
    key: "actions",
    title: "Actions",
    dataIndex: "actions",
    sortable: false,
    align: "center",
    width: 120,
    render: (_: any, record: EmployeeData) => (
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={() => action("view")(record)}
          className="rounded p-1 text-gray-400 hover:text-blue-600"
          title="View"
        >
          <Eye className="size-4" />
        </button>
        <button
          onClick={() => action("edit")(record)}
          className="rounded p-1 text-gray-400 hover:text-green-600"
          title="Edit"
        >
          <Edit className="size-4" />
        </button>
        <button
          onClick={() => action("delete")(record)}
          className="rounded p-1 text-gray-400 hover:text-red-600"
          title="Delete"
        >
          <Trash2 className="size-4" />
        </button>
      </div>
    ),
  },
];

const productColumns: DataGridColumn<ProductData>[] = [
  {
    key: "name",
    title: "Product Name",
    dataIndex: "name",
    dataType: "string",
    sortable: true,
    filterable: true,
    width: 200,
  },
  {
    key: "category",
    title: "Category",
    dataIndex: "category",
    dataType: "string",
    sortable: true,
    filterable: true,
    width: 120,
  },
  {
    key: "price",
    title: "Price",
    dataIndex: "price",
    dataType: "number",
    sortable: true,
    align: "right",
    width: 100,
    render: (value: number) => `$${value.toFixed(2)}`,
  },
  {
    key: "stock",
    title: "Stock",
    dataIndex: "stock",
    dataType: "number",
    sortable: true,
    align: "center",
    width: 80,
    render: (value: number) => (
      <span
        className={`font-medium ${value < 10 ? "text-red-600" : value < 50 ? "text-yellow-600" : "text-green-600"}`}
      >
        {value}
      </span>
    ),
  },
  {
    key: "isAvailable",
    title: "Available",
    dataIndex: "isAvailable",
    dataType: "boolean",
    sortable: true,
    align: "center",
    width: 100,
    render: (value: boolean) => (
      <span
        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
          value ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        }`}
      >
        {value ? "Yes" : "No"}
      </span>
    ),
  },
];

const meta: Meta<typeof DataGrid> = {
  title: `${CATEGORY.VISUALIZATION}/Data Grid`,
  component: DataGrid,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A powerful and flexible data grid component with sorting, pagination, selection, and export features.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    dataSource: {
      description: "Array of data objects to display in the grid",
      control: false,
    },
    columns: {
      description: "Column configuration array",
      control: false,
    },
    loading: {
      description: "Loading state configuration",
      control: { type: "boolean" },
    },
    pagination: {
      description: "Pagination configuration",
      control: { type: "object" },
    },
    selection: {
      description: "Row selection configuration",
      control: { type: "object" },
    },
    sortable: {
      description: "Enable/disable sorting functionality",
      control: { type: "boolean" },
    },
    size: {
      description: "Table size variant",
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    striped: {
      description: "Enable striped rows",
      control: { type: "boolean" },
    },
    bordered: {
      description: "Enable bordered table",
      control: { type: "boolean" },
    },
    hoverable: {
      description: "Enable row hover effects",
      control: { type: "boolean" },
    },
  },
};

export default meta;

// Basic Stories
export const Default: StoryObj<DataGridProps<EmployeeData>> = {
  args: {
    dataSource: employeeData.slice(0, 10),
    columns: employeeColumns,
    title: "Employee Directory",
    subtitle: "Manage your team members",
    description:
      "View and manage employee information with comprehensive details.",
  },
};

export const WithPagination: StoryObj<DataGridProps<EmployeeData>> = {
  args: {
    dataSource: employeeData,
    columns: employeeColumns,
    title: "Employee Directory",
    subtitle: "Paginated employee list",
    pagination: {
      enabled: true,
      pageSize: 10,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: true,
      position: "bottom",
      align: "right",
    },
  },
};

export const WithSelection: StoryObj<DataGridProps<EmployeeData>> = {
  args: {
    dataSource: employeeData.slice(0, 20),
    columns: employeeColumns,
    title: "Employee Selection",
    subtitle: "Select multiple employees",
    selection: {
      type: "checkbox",
      selectedRowKeys: [1, 3, 5],
      onChange: action("selection-changed"),
      getCheckboxProps: (record: EmployeeData) => ({
        disabled: record.status === "Inactive",
      }),
    },
    pagination: {
      enabled: true,
      pageSize: 10,
    },
  },
};

export const WithRadioSelection: StoryObj<DataGridProps<EmployeeData>> = {
  args: {
    dataSource: employeeData.slice(0, 15),
    columns: employeeColumns,
    title: "Employee Selection (Radio)",
    subtitle: "Select single employee",
    selection: {
      type: "radio",
      selectedRowKeys: [2],
      onChange: action("radio-selection-changed"),
    },
  },
};

export const Loading: StoryObj<DataGridProps<EmployeeData>> = {
  args: {
    dataSource: [],
    columns: employeeColumns,
    title: "Loading Data",
    subtitle: "Please wait while we fetch the data",
    loading: {
      loading: true,
      rows: 8,
    },
  },
};

export const Empty: StoryObj<DataGridProps<EmployeeData>> = {
  args: {
    dataSource: [],
    columns: employeeColumns,
    title: "No Data Available",
    subtitle: "The table is empty",
    empty: {
      description: "No employees found. Try adjusting your search criteria.",
      component: (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-4 rounded-lg bg-gray-100 p-4">
            <Plus className="size-8 text-gray-400" />
          </div>
          <p className="mb-1 text-sm font-medium text-gray-900">
            No employees found
          </p>
          <p className="mb-4 text-sm text-gray-500">
            Get started by adding your first employee
          </p>
          <button
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            onClick={action("add-employee")}
          >
            Add Employee
          </button>
        </div>
      ),
    },
  },
};

export const WithExport: StoryObj<DataGridProps<EmployeeData>> = {
  args: {
    dataSource: employeeData.slice(0, 20),
    columns: employeeColumns,
    title: "Employee Export Demo",
    subtitle: "Export data in multiple formats",
    export: {
      enabled: true,
      formats: ["csv", "excel"],
      filename: "employees",
      onExport: action("export"),
    },
    pagination: {
      enabled: true,
      pageSize: 10,
    },
  },
};

export const Customized: StoryObj<DataGridProps<EmployeeData>> = {
  args: {
    dataSource: employeeData.slice(0, 15),
    columns: employeeColumns,
    title: "Customized DataGrid",
    subtitle: "With custom styling and behavior",
    description: "This example shows various customization options.",
    size: "large",
    striped: true,
    bordered: true,
    hoverable: true,
    stickyHeader: true,
    maxHeight: "600px",
    headerActions: (
      <div className="flex items-center space-x-2">
        <button
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={action("settings")}
        >
          <Settings className="mr-2 size-4" />
          Settings
        </button>
        <button
          className="rounded-md border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          onClick={action("add-new")}
        >
          <Plus className="mr-2 size-4" />
          Add New
        </button>
      </div>
    ),
    footerActions: (
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
        <button
          className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
          onClick={action("refresh")}
        >
          Refresh Data
        </button>
      </div>
    ),
    pagination: {
      enabled: true,
      pageSize: 5,
      showSizeChanger: true,
      position: "both",
      align: "between",
    },
    onRowClick: action("row-clicked"),
    onRowDoubleClick: action("row-double-clicked"),
    onRowHover: action("row-hovered"),
  },
};

export const ProductTable: StoryObj<DataGridProps<ProductData>> = {
  args: {
    dataSource: productData,
    columns: productColumns,
    title: "Product Inventory",
    subtitle: "Manage your product catalog",
    description:
      "View and manage product information including pricing and availability.",
    pagination: {
      enabled: true,
      pageSize: 15,
      showSizeChanger: true,
      showTotal: (total: number, range: [number, number]) =>
        `${range[0]}-${range[1]} of ${total} products`,
    },
    selection: {
      type: "checkbox",
      onChange: action("product-selection-changed"),
    },
    defaultSort: {
      key: "name",
      direction: "asc",
    },
    onSortChange: action("sort-changed"),
  },
};

export const CompactTable: StoryObj<DataGridProps<EmployeeData>> = {
  args: {
    dataSource: employeeData.slice(0, 25),
    columns: employeeColumns.filter(col =>
      ["name", "department", "status", "actions"].includes(col.key as string)
    ),
    title: "Compact View",
    subtitle: "Space-efficient layout",
    size: "small",
    compact: true,
    striped: true,
    pagination: {
      enabled: true,
      pageSize: 10,
      showSizeChanger: false,
      showQuickJumper: false,
    },
  },
};

export const SortableOnly: StoryObj<DataGridProps<EmployeeData>> = {
  args: {
    dataSource: employeeData.slice(0, 15),
    columns: employeeColumns.map(col => ({ ...col, filterable: false })),
    title: "Sortable Columns",
    subtitle: "Click column headers to sort",
    sortable: true,
    defaultSort: {
      key: "salary",
      direction: "desc",
    },
    onSortChange: action("sort-changed"),
  },
};

export const CustomTheme: StoryObj<DataGridProps<EmployeeData>> = {
  args: {
    dataSource: employeeData.slice(0, 12),
    columns: employeeColumns,
    title: "Custom Theme",
    subtitle: "Dark theme example",
    theme: {
      primaryColor: "#3b82f6",
      secondaryColor: "#1f2937",
      textColor: "#f9fafb",
      borderColor: "#374151",
      borderRadius: "8px",
      fontFamily: "Inter, sans-serif",
    },
    className: "bg-gray-900 text-white",
    styles: {
      container: {
        backgroundColor: "#111827",
        border: "1px solid #374151",
      },
      header: {
        backgroundColor: "#1f2937",
        borderBottom: "1px solid #374151",
      },
      table: {
        backgroundColor: "#111827",
      },
    },
    pagination: {
      enabled: true,
      pageSize: 6,
    },
  },
};

// Interactive Stories for Testing
export const InteractiveDemo: StoryObj<DataGridProps<EmployeeData>> = {
  args: {
    dataSource: employeeData.slice(0, 30),
    columns: employeeColumns,
    title: "Interactive Demo",
    subtitle: "Test all features",
    description:
      "This demo includes all interactive features for comprehensive testing.",
    pagination: {
      enabled: true,
      pageSize: 8,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: true,
      position: "both",
      align: "between",
    },
    selection: {
      type: "checkbox",
      onChange: action("selection-changed"),
      getCheckboxProps: (record: EmployeeData) => ({
        disabled: record.status === "Inactive",
      }),
    },
    export: {
      enabled: true,
      formats: ["csv", "excel"],
      filename: "interactive-demo",
      onExport: action("export"),
    },
    headerActions: (
      <div className="flex items-center space-x-2">
        <button
          className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={action("filter")}
        >
          <Settings className="mr-2 size-4" />
          Filter
        </button>
        <button
          className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={action("export")}
        >
          <Download className="mr-2 size-4" />
          Export
        </button>
        <button
          className="flex items-center rounded-md border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          onClick={action("add-new")}
        >
          <Plus className="mr-2 size-4" />
          Add New
        </button>
      </div>
    ),
    sortable: true,
    striped: false,
    hoverable: true,
    onRowClick: action("row-clicked"),
    onRowDoubleClick: action("row-double-clicked"),
    onSortChange: action("sort-changed"),
    onDataChange: action("data-changed"),
  },
};

// Performance Testing
export const LargeDataset: StoryObj<DataGridProps<EmployeeData>> = {
  args: {
    dataSource: generateSampleData(1000) as EmployeeData[],
    columns: employeeColumns,
    title: "Large Dataset",
    subtitle: "1000 records for performance testing",
    pagination: {
      enabled: true,
      pageSize: 50,
      showSizeChanger: true,
      pageSizeOptions: [25, 50, 100, 200],
      showTotal: true,
    },
    virtual: true,
    height: "600px",
  },
};

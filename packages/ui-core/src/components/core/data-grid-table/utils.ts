import { DataGridColumn, GenericDataGridRow } from "./types";

/**
 * Generate a unique ID for table rows
 */
export const generateUniqueId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Generate mock data for loading states
 */
export const generateMockData = <T extends GenericDataGridRow>(
  columns: DataGridColumn<T>[],
  count: number = 5
): T[] => {
  const mockData: T[] = [];

  for (let i = 0; i < count; i++) {
    const row: any = {
      id: `mock-${i}`,
    };

    columns.forEach(column => {
      const key = column.dataIndex as string;

      // Generate mock data based on column type or key name
      if (column.dataType === "number" || key.toLowerCase().includes("id")) {
        row[key] = Math.floor(Math.random() * 1000);
      } else if (
        column.dataType === "date" ||
        key.toLowerCase().includes("date")
      ) {
        row[key] = new Date(
          Date.now() - Math.random() * 10000000000
        ).toISOString();
      } else if (column.dataType === "boolean") {
        row[key] = Math.random() > 0.5;
      } else {
        // String data
        const words = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur"];
        const wordCount = Math.floor(Math.random() * 3) + 1;
        row[key] = Array.from(
          { length: wordCount },
          () => words[Math.floor(Math.random() * words.length)]
        ).join(" ");
      }
    });

    mockData.push(row as T);
  }

  return mockData;
};

/**
 * Export data to CSV format
 */
export const exportToCSV = <T extends GenericDataGridRow>(
  data: T[],
  columns: DataGridColumn<T>[],
  filename: string = "data.csv"
): void => {
  const visibleColumns = columns.filter(col => col.visible !== false);

  // Create CSV header
  const headers = visibleColumns
    .map(col => (typeof col.title === "string" ? col.title : String(col.title)))
    .join(",");

  // Create CSV rows
  const rows = data.map(row =>
    visibleColumns
      .map(col => {
        const value = row[col.dataIndex as keyof T];
        // Escape commas and quotes in CSV data
        const stringValue = String(value || "");
        return stringValue.includes(",") || stringValue.includes('"')
          ? `"${stringValue.replace(/"/g, '""')}"`
          : stringValue;
      })
      .join(",")
  );

  // Combine header and rows
  const csvContent = [headers, ...rows].join("\n");

  // Create and trigger download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up the URL object
  URL.revokeObjectURL(url);
};

/**
 * Export data to Excel format (requires additional library)
 */
export const exportToExcel = <T extends GenericDataGridRow>(
  data: T[],
  columns: DataGridColumn<T>[],
  filename: string = "data.xlsx"
): void => {
  // This would require a library like xlsx or exceljs
  console.warn(
    "Excel export requires additional library (xlsx). Falling back to CSV."
  );
  exportToCSV(data, columns, filename.replace(".xlsx", ".csv"));
};

/**
 * Format cell value for display
 */
export const formatCellValue = (
  value: any,
  dataType?: "string" | "number" | "date" | "boolean",
  formatOptions?: {
    dateFormat?: "short" | "medium" | "long" | "full";
    numberFormat?: "decimal" | "currency" | "percent";
    currencyCode?: string;
    locale?: string;
  }
): string => {
  if (value === null || value === undefined) {
    return "-";
  }

  const locale = formatOptions?.locale || "en-US";

  switch (dataType) {
    case "number":
      if (typeof value !== "number") {
        const numValue = parseFloat(String(value));
        if (isNaN(numValue)) return String(value);
        value = numValue;
      }

      switch (formatOptions?.numberFormat) {
        case "currency":
          return value.toLocaleString(locale, {
            style: "currency",
            currency: formatOptions.currencyCode || "USD",
          });
        case "percent":
          return (value / 100).toLocaleString(locale, {
            style: "percent",
            minimumFractionDigits: 2,
          });
        default:
          return value.toLocaleString(locale);
      }

    case "date":
      try {
        const date = new Date(value);
        if (isNaN(date.getTime())) return String(value);

        const dateStyle = formatOptions?.dateFormat || "short";
        return date.toLocaleDateString(locale, {
          dateStyle: dateStyle as any,
        });
      } catch {
        return String(value);
      }

    case "boolean":
      return value ? "Yes" : "No";

    default:
      return String(value);
  }
};

/**
 * Deep merge objects
 */
export const deepMerge = <T extends Record<string, any>>(
  target: T,
  ...sources: Partial<T>[]
): T => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
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
 * Check if value is an object
 */
const isObject = (item: any): item is Record<string, any> => {
  return item && typeof item === "object" && !Array.isArray(item);
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for performance optimization
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Filter data based on search term
 */
export const filterData = <T extends GenericDataGridRow>(
  data: T[],
  searchTerm: string,
  columns: DataGridColumn<T>[],
  searchableFields?: (keyof T)[]
): T[] => {
  if (!searchTerm.trim()) return data;

  const fieldsToSearch =
    searchableFields ||
    columns
      .filter(col => col.visible !== false)
      .map(col => col.dataIndex as keyof T);

  const lowercaseSearchTerm = searchTerm.toLowerCase();

  return data.filter(row =>
    fieldsToSearch.some(field => {
      const value = row[field];
      if (value === null || value === undefined) return false;

      return String(value).toLowerCase().includes(lowercaseSearchTerm);
    })
  );
};

/**
 * Get nested object value by path
 */
export const getNestedValue = (obj: any, path: string): any => {
  return path.split(".").reduce((current, key) => current?.[key], obj);
};

/**
 * Set nested object value by path
 */
export const setNestedValue = (obj: any, path: string, value: any): void => {
  const keys = path.split(".");
  const lastKey = keys.pop();

  if (!lastKey) return;

  const target = keys.reduce((current, key) => {
    if (!current[key]) current[key] = {};
    return current[key];
  }, obj);

  target[lastKey] = value;
};

/**
 * Calculate column widths for auto-sizing
 */
export const calculateColumnWidths = <T extends GenericDataGridRow>(
  data: T[],
  columns: DataGridColumn<T>[],
  containerWidth: number
): Record<string, number> => {
  const columnWidths: Record<string, number> = {};
  const availableWidth = containerWidth;
  const fixedWidthColumns: DataGridColumn<T>[] = [];
  const autoWidthColumns: DataGridColumn<T>[] = [];

  // Separate fixed width and auto width columns
  columns.forEach(column => {
    if (column.width) {
      fixedWidthColumns.push(column);
    } else {
      autoWidthColumns.push(column);
    }
  });

  // Calculate used width by fixed columns
  const fixedWidth = fixedWidthColumns.reduce((sum, column) => {
    const width =
      typeof column.width === "string"
        ? parseInt(column.width, 10) || 0
        : column.width || 0;
    columnWidths[column.key as string] = width;
    return sum + width;
  }, 0);

  // Distribute remaining width among auto columns
  const remainingWidth = availableWidth - fixedWidth;
  const autoColumnWidth = Math.max(
    100, // Minimum column width
    Math.floor(remainingWidth / autoWidthColumns.length)
  );

  autoWidthColumns.forEach(column => {
    columnWidths[column.key as string] = autoColumnWidth;
  });

  return columnWidths;
};

/**
 * Validate data grid configuration
 */
export const validateDataGridConfig = <T extends GenericDataGridRow>(
  dataSource: T[],
  columns: DataGridColumn<T>[]
): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Validate columns
  if (!columns || columns.length === 0) {
    errors.push("At least one column must be defined");
  } else {
    columns.forEach((column, index) => {
      if (!column.key) {
        errors.push(`Column at index ${index} must have a key`);
      }
      if (!column.title) {
        warnings.push(`Column '${String(column.key)}' should have a title`);
      }
      if (!column.dataIndex) {
        errors.push(`Column '${String(column.key)}' must have a dataIndex`);
      }
    });

    // Check for duplicate keys
    const keys = columns.map(col => col.key);
    const duplicateKeys = keys.filter(
      (key, index) => keys.indexOf(key) !== index
    );
    if (duplicateKeys.length > 0) {
      errors.push(`Duplicate column keys found: ${duplicateKeys.join(", ")}`);
    }
  }

  // Validate data source
  if (dataSource && dataSource.length > 0) {
    // Check if all rows have an id
    const rowsWithoutId = dataSource.filter(row => !row.id);
    if (rowsWithoutId.length > 0) {
      errors.push(
        `${rowsWithoutId.length} rows are missing the required 'id' field`
      );
    }

    // Check for duplicate IDs
    const ids = dataSource.map(row => row.id);
    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
    if (duplicateIds.length > 0) {
      errors.push(`Duplicate row IDs found: ${duplicateIds.join(", ")}`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
};

/**
 * Generate sample data for testing and demos
 */
export const generateSampleData = (
  count: number = 50
): GenericDataGridRow[] => {
  const departments = ["Engineering", "Marketing", "Sales", "HR", "Finance"];
  const statuses = ["Active", "Inactive", "Pending"];
  const firstNames = [
    "John",
    "Jane",
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Eve",
    "Frank",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
  ];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
    email: `user${index + 1}@example.com`,
    department: departments[Math.floor(Math.random() * departments.length)],
    salary: Math.floor(Math.random() * 80000) + 30000,
    hireDate: new Date(
      Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 365 * 10
    )
      .toISOString()
      .split("T")[0],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isActive: Math.random() > 0.3,
    experience: Math.floor(Math.random() * 15) + 1,
    rating: Math.round((Math.random() * 4 + 1) * 10) / 10,
  }));
};

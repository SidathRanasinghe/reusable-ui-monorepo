import { CSSProperties, ReactNode, MouseEvent } from "react";

// Base interfaces
export interface GenericDataGridRow {
  id: string | number;
  [key: string]: any;
}

export interface DataGridColumn<
  T extends GenericDataGridRow = GenericDataGridRow,
> {
  /** Unique identifier for the column */
  key: string;
  /** Column header text or component */
  title: string | ReactNode;
  /** Data accessor key */
  dataIndex: string;
  /** Column width (CSS value) */
  width?: string | number;
  /** Minimum column width */
  minWidth?: string | number;
  /** Maximum column width */
  maxWidth?: string | number;
  /** Fixed column position */
  fixed?: "left" | "right";
  /** Column alignment */
  align?: "left" | "center" | "right";
  /** Whether column is sortable */
  sortable?: boolean;
  /** Whether column is resizable */
  resizable?: boolean;
  /** Whether column is visible */
  visible?: boolean;
  /** Whether column can be hidden/shown */
  hideable?: boolean;
  /** Custom cell renderer */
  render?: (value: any, record: T, index: number) => ReactNode;
  /** Column-specific CSS class */
  className?: string;
  /** Column-specific styles */
  style?: CSSProperties;
  /** Custom filter component */
  filterDropdown?: ReactNode;
  /** Whether column supports filtering */
  filterable?: boolean;
  /** Column data type for sorting and formatting */
  dataType?: "string" | "number" | "date" | "boolean" | "currency";
  /** Tooltip for column header */
  tooltip?: string;
  /** Column validation rules */
  rules?: ValidationRule[];
  /** Whether column is editable */
  editable?: boolean;
  /** Cell editor component */
  editor?: ReactNode;
  /** Format function for display */
  format?: (value: any) => string;
  /** Column group key for grouping */
  group?: string;
  /** Column priority for responsive display */
  priority?: number;
  /** Whether to ellipsize long content */
  ellipsis?: boolean | { showTitle?: boolean };
  /** Custom sorter function */
  sorter?: (a: T, b: T) => number;
  /** Default sort order */
  defaultSortOrder?: "asc" | "desc";
}

export interface ValidationRule {
  required?: boolean;
  message?: string;
  validator?: (value: any) => boolean | string;
}

export interface SortConfig {
  key: string;
  direction: "asc" | "desc";
}

export interface FilterConfig {
  key: string;
  value: any;
  operator:
    | "eq"
    | "ne"
    | "gt"
    | "gte"
    | "lt"
    | "lte"
    | "contains"
    | "startsWith"
    | "endsWith";
}

export interface PaginationConfig {
  /** Enable pagination */
  enabled?: boolean;
  /** Current page number */
  current?: number;
  /** Number of items per page */
  pageSize?: number;
  /** Page size options */
  pageSizeOptions?: number[];
  /** Total number of items */
  total?: number;
  /** Show page size selector */
  showSizeChanger?: boolean;
  /** Show quick jumper */
  showQuickJumper?: boolean;
  /** Show total count */
  showTotal?: boolean | ((total: number, range: [number, number]) => ReactNode);
  /** Pagination position */
  position?: "top" | "bottom" | "both";
  /** Pagination alignment */
  align?: "left" | "center" | "right" | "between";
  /** Custom pagination component */
  component?: ReactNode;
  /** Show less page items */
  simple?: boolean;
  /** Page size changer labels */
  pageSizeLabels?: {
    showLabel?: string;
    perPageLabel?: string;
  };
}

export interface SelectionConfig<
  T extends GenericDataGridRow = GenericDataGridRow,
> {
  /** Selection type */
  type?: "checkbox" | "radio";
  /** Selected row keys */
  selectedRowKeys?: (string | number)[];
  /** Selection change callback */
  onChange?: (selectedRowKeys: (string | number)[], selectedRows: T[]) => void;
  /** Custom selection column props */
  columnProps?: Partial<DataGridColumn<T>>;
  /** Disable row selection function */
  getCheckboxProps?: (record: T) => { disabled?: boolean };
  /** Fixed selection column */
  fixed?: boolean;
  /** Custom selection icons */
  icons?: {
    checked?: ReactNode;
    unchecked?: ReactNode;
    indeterminate?: ReactNode;
  };
  /** Selection column width */
  columnWidth?: number;
  /** Preserve selection across page changes */
  preserveSelectedRowKeys?: boolean;
  /** Hide select all checkbox */
  hideSelectAll?: boolean;
  /** Selection column title */
  columnTitle?: ReactNode;
}

export interface LoadingConfig {
  /** Loading state */
  loading?: boolean;
  /** Loading indicator */
  indicator?: ReactNode;
  /** Loading text */
  tip?: string;
  /** Loading delay in milliseconds */
  delay?: number;
  /** Spinning indicator */
  spinning?: boolean;
  /** Loading rows count */
  rows?: number;
}

export interface EmptyConfig {
  /** Empty state description */
  description?: ReactNode;
  /** Empty state image */
  image?: ReactNode;
  /** Custom empty component */
  component?: ReactNode;
  /** Image size */
  imageSize?: "small" | "medium" | "large";
  /** Additional actions */
  actions?: ReactNode;
}

export interface ExportConfig {
  /** Enable export functionality */
  enabled?: boolean;
  /** Supported export formats */
  formats?: ("csv" | "excel" | "pdf" | "json")[];
  /** Export filename */
  filename?: string;
  /** Custom export handler */
  onExport?: (format: string, data: any[]) => void;
  /** Export all data or just visible columns */
  exportMode?: "all" | "visible";
  /** Include column headers */
  includeHeaders?: boolean;
  /** Custom export button text */
  buttonText?: string;
}

export interface DataGridTheme {
  /** Primary color */
  primaryColor?: string;
  /** Secondary color */
  secondaryColor?: string;
  /** Border color */
  borderColor?: string;
  /** Header background */
  headerBg?: string;
  /** Row hover background */
  hoverBg?: string;
  /** Selected row background */
  selectedBg?: string;
  /** Striped row background */
  stripedBg?: string;
  /** Font family */
  fontFamily?: string;
  /** Border radius */
  borderRadius?: string;
  /** Box shadows */
  boxShadow?: string;
  /** Text colors */
  textColor?: string;
  /** Muted text color */
  mutedTextColor?: string;
  /** Error color */
  errorColor?: string;
  /** Success color */
  successColor?: string;
  /** Warning color */
  warningColor?: string;
}

export interface DataGridStyles {
  /** Container styles */
  container?: CSSProperties;
  /** Header styles */
  header?: CSSProperties;
  /** Table styles */
  table?: CSSProperties;
  /** Header row styles */
  headerRow?: CSSProperties;
  /** Header cell styles */
  headerCell?: CSSProperties;
  /** Body styles */
  body?: CSSProperties;
  /** Row styles */
  row?: CSSProperties;
  /** Cell styles */
  cell?: CSSProperties;
  /** Footer styles */
  footer?: CSSProperties;
  /** Pagination styles */
  pagination?: CSSProperties;
  /** Loading styles */
  loading?: CSSProperties;
  /** Empty state styles */
  empty?: CSSProperties;
}

export interface DataGridClassNames {
  /** Container class */
  container?: string;
  /** Header class */
  header?: string;
  /** Table class */
  table?: string;
  /** Header row class */
  headerRow?: string;
  /** Header cell class */
  headerCell?: string;
  /** Body class */
  body?: string;
  /** Row class */
  row?: string;
  /** Cell class */
  cell?: string;
  /** Footer class */
  footer?: string;
  /** Pagination class */
  pagination?: string;
  /** Loading class */
  loading?: string;
  /** Empty state class */
  empty?: string;
}

export interface VirtualScrollConfig {
  /** Enable virtual scrolling */
  enabled?: boolean;
  /** Row height */
  rowHeight?: number;
  /** Buffer size */
  buffer?: number;
  /** Threshold for virtual scrolling */
  threshold?: number;
}

export interface ResizeConfig {
  /** Enable column resizing */
  enabled?: boolean;
  /** Minimum column width */
  minWidth?: number;
  /** Maximum column width */
  maxWidth?: number;
  /** Resize handle width */
  handleWidth?: number;
}

export interface RowConfig<T extends GenericDataGridRow = GenericDataGridRow> {
  /** Row height */
  height?: number | ((record: T) => number);
  /** Row class name function */
  className?: (record: T, index: number) => string;
  /** Row selection disabled function */
  isDisabled?: (record: T) => boolean;
  /** Expandable row config */
  expandable?: {
    /** Expandable row render function */
    expandedRowRender?: (record: T, index: number) => ReactNode;
    /** Default expanded row keys */
    defaultExpandedRowKeys?: (string | number)[];
    /** Controlled expanded row keys */
    expandedRowKeys?: (string | number)[];
    /** Expanded row keys change callback */
    onExpandedRowsChange?: (expandedKeys: (string | number)[]) => void;
    /** Row expandable function */
    rowExpandable?: (record: T) => boolean;
    /** Expand icon column index */
    expandIconColumnIndex?: number;
    /** Custom expand icon */
    expandIcon?: (props: {
      expanded: boolean;
      onExpand: () => void;
      record: T;
    }) => ReactNode;
  };
}

export interface DataGridProps<
  T extends GenericDataGridRow = GenericDataGridRow,
> {
  /** Table data source */
  dataSource: T[];
  /** Column definitions */
  columns: DataGridColumn<T>[];
  /** Unique table identifier */
  id?: string;
  /** Table title */
  title?: ReactNode;
  /** Table subtitle */
  subtitle?: ReactNode;
  /** Table description */
  description?: ReactNode;
  /** Loading configuration */
  loading?: boolean | LoadingConfig;
  /** Empty state configuration */
  empty?: EmptyConfig;
  /** Pagination configuration */
  pagination?: boolean | PaginationConfig;
  /** Selection configuration */
  selection?: SelectionConfig<T>;
  /** Sorting configuration */
  sortable?: boolean;
  /** Default sort configuration */
  defaultSort?: SortConfig;
  /** Controlled sort configuration */
  sort?: SortConfig;
  /** Sort change callback */
  onSortChange?: (sort: SortConfig | null) => void;
  /** Export configuration */
  export?: ExportConfig;
  /** Table size */
  size?: "small" | "medium" | "large";
  /** Table theme */
  theme?: DataGridTheme;
  /** Custom styles */
  styles?: DataGridStyles;
  /** Custom class names */
  classNames?: DataGridClassNames;
  /** Custom CSS class */
  className?: string;
  /** Custom styles */
  style?: CSSProperties;
  /** Table header actions */
  headerActions?: ReactNode;
  /** Table footer actions */
  footerActions?: ReactNode;
  /** Virtual scrolling configuration */
  virtual?: boolean | VirtualScrollConfig;
  /** Sticky header */
  stickyHeader?: boolean;
  /** Table height */
  height?: number | string;
  /** Maximum height */
  maxHeight?: number | string;
  /** Minimum height */
  minHeight?: number | string;
  /** Striped rows */
  striped?: boolean;
  /** Bordered table */
  bordered?: boolean;
  /** Hoverable rows */
  hoverable?: boolean;
  /** Compact mode */
  compact?: boolean;
  /** Responsive behavior */
  responsive?: boolean;
  /** Row configuration */
  rowConfig?: RowConfig<T>;
  /** Column resizing configuration */
  resizable?: boolean | ResizeConfig;
  /** Show row numbers */
  showRowNumbers?: boolean;
  /** Row number column props */
  rowNumberColumn?: Partial<DataGridColumn<T>>;
  /** Enable filtering */
  filterable?: boolean;
  /** Filter configuration */
  filters?: FilterConfig[];
  /** Filter change callback */
  onFilterChange?: (filters: FilterConfig[]) => void;
  /** Server-side processing */
  serverSide?: boolean;
  /** Total count for server-side pagination */
  totalCount?: number;

  // Event handlers
  /** Row click handler */
  onRowClick?: (
    record: T,
    index: number,
    event: MouseEvent<HTMLTableRowElement>
  ) => void;
  /** Row double click handler */
  onRowDoubleClick?: (
    record: T,
    index: number,
    event: MouseEvent<HTMLTableRowElement>
  ) => void;
  /** Row hover handler */
  onRowHover?: (
    record: T,
    index: number,
    event: MouseEvent<HTMLTableRowElement>
  ) => void;
  /** Row context menu handler */
  onRowContextMenu?: (
    record: T,
    index: number,
    event: MouseEvent<HTMLTableRowElement>
  ) => void;
  /** Column resize handler */
  onColumnResize?: (key: string, width: number) => void;
  /** Data change handler */
  onDataChange?: (dataSource: T[]) => void;
  /** Cell edit handler */
  onCellEdit?: (record: T, key: string, value: any) => void;
  /** Scroll handler */
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
}

export interface DataGridRef<
  T extends GenericDataGridRow = GenericDataGridRow,
> {
  /** Scroll to specific row */
  scrollToRow: (index: number) => void;
  /** Scroll to specific column */
  scrollToColumn: (key: number) => void;
  /** Get selected rows */
  getSelectedRows: () => T[];
  /** Clear selection */
  clearSelection: () => void;
  /** Select all rows */
  selectAll: () => void;
  /** Refresh data */
  refresh: () => void;
  /** Export data */
  exportData: (format: string) => void;
  /** Get filtered data */
  getFilteredData: () => T[];
  /** Get sorted data */
  getSortedData: () => T[];
  /** Reset filters */
  resetFilters: () => void;
  /** Reset sorting */
  resetSorting: () => void;
  /** Get table instance */
  getTableInstance: () => HTMLTableElement | null;
}

// Component-specific types
export interface DataGridHeaderProps<
  T extends GenericDataGridRow = GenericDataGridRow,
> {
  columns: DataGridColumn<T>[];
  sort?: SortConfig;
  onSortChange?: (sort: SortConfig | null) => void;
  selection?: SelectionConfig<T>;
  onSelectAll?: (selected: boolean) => void;
  isAllSelected?: boolean;
  isIndeterminate?: boolean;
  classNames?: DataGridClassNames;
  styles?: DataGridStyles;
  showRowNumbers?: boolean;
  rowNumberColumn?: Partial<DataGridColumn<T>>;
  resizable?: boolean | ResizeConfig;
  onColumnResize?: (key: string, width: number) => void;
  filters?: FilterConfig[];
  onFilterChange?: (filters: FilterConfig[]) => void;
}

export interface DataGridBodyProps<
  T extends GenericDataGridRow = GenericDataGridRow,
> {
  dataSource: T[];
  columns: DataGridColumn<T>[];
  loading?: boolean | LoadingConfig;
  empty?: EmptyConfig;
  selection?: SelectionConfig<T>;
  selectedRowKeys?: (string | number)[];
  onRowSelect?: (record: T, selected: boolean) => void;
  onRowClick?: (
    record: T,
    index: number,
    event: MouseEvent<HTMLTableRowElement>
  ) => void;
  onRowDoubleClick?: (
    record: T,
    index: number,
    event: MouseEvent<HTMLTableRowElement>
  ) => void;
  onRowHover?: (
    record: T,
    index: number,
    event: MouseEvent<HTMLTableRowElement>
  ) => void;
  classNames?: DataGridClassNames;
  styles?: DataGridStyles;
  striped?: boolean;
  hoverable?: boolean;
  size?: "small" | "medium" | "large";
  showRowNumbers?: boolean;
  rowNumberColumn?: Partial<DataGridColumn<T>>;
  rowConfig?: RowConfig<T>;
  onCellEdit?: (record: T, key: string, value: any) => void;
  startIndex?: number;
}

export interface DataGridPaginationProps {
  config: PaginationConfig;
  total: number;
  onChange: (current: number, pageSize: number) => void;
  classNames?: DataGridClassNames;
  styles?: DataGridStyles;
}

export interface DataGridToolbarProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  headerActions?: ReactNode;
  export?: ExportConfig;
  onExport?: (format: string) => void;
  classNames?: DataGridClassNames;
  styles?: DataGridStyles;
  searchable?: boolean;
  onSearch?: (value: string) => void;
  filterConfig?: {
    enabled?: boolean;
    filters?: FilterConfig[];
    onFilterChange?: (filters: FilterConfig[]) => void;
  };
  columnConfig?: {
    enabled?: boolean;
    columns?: DataGridColumn[];
    onColumnChange?: (columns: DataGridColumn[]) => void;
  };
}

export interface DataGridLoadingProps {
  config?: LoadingConfig;
  classNames?: DataGridClassNames;
  styles?: DataGridStyles;
  columns: DataGridColumn[];
}

export interface DataGridEmptyProps {
  config?: EmptyConfig;
  classNames?: DataGridClassNames;
  styles?: DataGridStyles;
  colSpan: number;
}

// Utility types
export type DataGridSize = "small" | "medium" | "large";
export type DataGridAlign = "left" | "center" | "right";
export type DataGridSortDirection = "asc" | "desc";
export type DataGridDataType =
  | "string"
  | "number"
  | "date"
  | "boolean"
  | "currency";
export type DataGridExportFormat = "csv" | "excel" | "pdf" | "json";
export type DataGridSelectionType = "checkbox" | "radio";
export type DataGridPaginationPosition = "top" | "bottom" | "both";
export type DataGridPaginationAlign = "left" | "center" | "right" | "between";

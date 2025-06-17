import { CSSProperties, ReactNode } from "react";

export type GenericType = {
  uniqueId: string | number;
  [key: string]: any;
};

export interface ColumnOptions {
  sortAsc?: boolean;
  sortDsc?: boolean;
  [key: string]: any;
}

export interface Column<GenericType> {
  header: string;
  accessor: keyof GenericType;
  fieldType?: "text" | "single-select" | "multi-select" | "date-time-range";
  customCell?: (
    cellData: any,
    rowData: GenericType,
    editMode: boolean,
    toggleEditMode: Function,
    setRowData?: Function,
    isEditing?: boolean,
    onStartEdit?: () => void
  ) => ReactNode;
  options?: ColumnOptions;
  searchable?: any;
  visible?: boolean;
  className?: string;
}

export interface CustomStyles {
  parentContainer?: CSSProperties;
  componentHeader?: CSSProperties;
  titleWrapper?: CSSProperties;
  title?: CSSProperties;
  subtitleWraper?: CSSProperties;
  subtitle?: CSSProperties;
  descriptionWrapper?: CSSProperties;
  description?: CSSProperties;
  tableActionsContainer?: CSSProperties;
  tableContainer?: CSSProperties;
  table?: CSSProperties;
  tableHeader?: CSSProperties;
  headerRow?: CSSProperties;
  headerCell?: CSSProperties;
  tableBody?: CSSProperties;
  row?: CSSProperties;
  cell?: CSSProperties;
  cellPopup?: CSSProperties;
  componentFooter?: CSSProperties;
  pagination?: CSSProperties;
}

export interface CustomClasses {
  parentContainer?: string;
  componentHeader?: string;
  titleWrapper?: string;
  title?: string;
  subtitleWraper?: string;
  subtitle?: string;
  descriptionWrapper?: string;
  description?: string;
  tableActionsContainer?: string;
  tableContainer?: string;
  table?: string;
  tableHeader?: string;
  headerRow?: string;
  headerCell?: string;
  tableBody?: string;
  row?: string;
  cell?: string;
  cellPopup?: string;
  componentFooter?: string;
  pagination?: string;
}

export interface PaginationOptions {
  enabled: boolean;
  verticalPosition?: "top" | "bottom";
  horizontalPosition?: "start" | "center" | "end";
  itemsPerPage?: number;
  customStyles?: CSSProperties;
  component?: () => ReactNode;
}

export interface DownloadOptions {
  enabled: boolean;
  formats: ("csv" | "pdf" | "excel")[];
}

export interface SortOptions {
  enabled: boolean;
  handleSortByColumn?: (accessor: string, type: string) => void;

  [key: string]: any;
}

export interface SelectConfigs<GenericType> {
  isEnabled: boolean;
  highlightRow?: boolean;
  markedIcon?: ReactNode;
  unmarkedIcon?: ReactNode;
  markedAllIcon?: ReactNode;
  unmarkedAllIcon?: ReactNode;
  highlightColor?: string;
  selectedItems?: GenericType[];
  tableId?: string;
}

export interface HoverRowOptions<GenericType> {
  isEnabled: boolean;
  renderHoverContent?: (row: GenericType) => ReactNode;
}

export interface NoDataConfigs {
  enabled: boolean;
  messageTitle?: string;
  message?: string;
  icon?: ReactNode;
  iconWrapperClass?: string;
  iconClass?: string;
}

export interface TableProps {
  data: GenericType[];
  columns: Column<GenericType>[];
  customStyles?: CustomStyles;
  customClasses?: CustomClasses;
  pagination?: PaginationOptions;
  downloadOptions?: DownloadOptions;
  sortOptions?: SortOptions;
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  description?: string | ReactNode;
  enabledActions?: boolean;
  tableActions?: ReactNode;
  enableFooterActions?: boolean;
  footerActions?: ReactNode;
  showPopupOnHover?: boolean;
  selectConfigs?: SelectConfigs<GenericType>;
  CustomFilter?: any;
  enableSearch?: boolean;
  enableFilters?: boolean;
  hoverRowOptions?: HoverRowOptions<GenericType>;
  tableId?: string;
  isLoading?: boolean;
  noDataConfigs?: NoDataConfigs;
  onRowSelect?: (selectedRows: GenericType[]) => void;
  onRowDelete?: (row: GenericType) => void;
  onRowAdd?: (newRow: GenericType) => void;
  onRowHover?: (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: GenericType
  ) => void;
  onRowBlur?: (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: GenericType
  ) => void;
  onRowClick?: (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: GenericType
  ) => void;
  onRowDoubleClick?: (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: GenericType
  ) => void;
  renderPopupContent?: (cellData: any) => ReactNode;
}

export interface TableRowProps {
  row: GenericType;
  tableCols: Column<GenericType>[];
  index: number;
  selectedRows: GenericType[];
  customClasses?: CustomClasses;
  customStyles?: CustomStyles;
  selectConfigurations?: SelectConfigs<GenericType>;
  hoverRowOptions?: HoverRowOptions<GenericType>;
  isLoading?: boolean;
  handleRowSelect: (row: GenericType) => void;
  onRowHover?: (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: GenericType
  ) => void;
  onRowBlur?: (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: GenericType
  ) => void;
  onRowClick?: (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: GenericType
  ) => void;
  onRowDoubleClick?: (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: GenericType
  ) => void;
}

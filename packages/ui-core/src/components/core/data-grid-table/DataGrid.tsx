import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { CSVLink } from "react-csv";
import { Download, FileText } from "lucide-react";

import { cn } from "../../../lib/utils";

import DataGridBody from "./DataGridBody";
import DataGridHeader from "./DataGridHeader";
import DataGridPagination from "./DataGridPagination";
import { generateMockData } from "./utils";
import {
  DataGridProps,
  DataGridRef,
  GenericDataGridRow,
  PaginationConfig,
  SortConfig,
} from "./types";

const DataGrid = forwardRef<DataGridRef, DataGridProps>(
  (
    {
      dataSource,
      columns,
      id,
      title,
      subtitle,
      description,
      loading = false,
      empty,
      pagination = false,
      selection,
      sortable = true,
      defaultSort,
      sort,
      onSortChange,
      export: exportConfig,
      size = "medium",
      theme,
      styles,
      classNames,
      className,
      style,
      headerActions,
      footerActions,
      virtual = false,
      stickyHeader = false,
      height,
      maxHeight,
      striped = false,
      bordered = false,
      hoverable = true,
      compact = false,
      onRowClick,
      onRowDoubleClick,
      onRowHover,
      onRowContextMenu,
      onColumnResize,
      onDataChange,
    },
    ref
  ) => {
    // State management
    const [internalSort, setInternalSort] = useState<SortConfig | null>(
      defaultSort || null
    );
    const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>(
      selection?.selectedRowKeys || []
    );
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(
      typeof pagination === "object" ? pagination.pageSize || 10 : 10
    );

    // Determine if loading
    const isLoading = typeof loading === "boolean" ? loading : loading?.loading;
    const loadingConfig = typeof loading === "object" ? loading : undefined;

    // Determine pagination config
    const paginationConfig: PaginationConfig | false = useMemo(() => {
      if (pagination === false) return false;
      if (pagination === true) {
        return {
          enabled: true,
          current: currentPage,
          pageSize,
          total: dataSource?.length || 0,
          position: "bottom",
          align: "right",
        };
      }
      return {
        enabled: true,
        current: currentPage,
        pageSize,
        total: dataSource?.length || 0,
        position: "bottom",
        align: "right",
        ...pagination,
      };
    }, [pagination, currentPage, pageSize, dataSource?.length]);

    // Generate mock data for loading state
    const mockData = useMemo(() => {
      if (!isLoading) return [];
      return generateMockData(columns, pageSize);
    }, [isLoading, columns, pageSize]);

    // Current sort state (controlled vs uncontrolled)
    const currentSort = sort !== undefined ? sort : internalSort;

    // Sort data
    const sortedData = useMemo(() => {
      const data = isLoading ? mockData : dataSource;
      if (!currentSort || !sortable) return data;

      return [...data].sort((a, b) => {
        const aValue = a[currentSort.key as keyof GenericDataGridRow];
        const bValue = b[currentSort.key as keyof GenericDataGridRow];

        // Handle null/undefined values
        if (aValue == null && bValue == null) return 0;
        if (aValue == null) return 1;
        if (bValue == null) return -1;

        // Find column to determine data type
        const column = columns.find(col => col.key === currentSort.key);
        const dataType = column?.dataType || "string";

        let result = 0;
        switch (dataType) {
          case "number":
            result = (aValue as number) - (bValue as number);
            break;
          case "date":
            result =
              new Date(aValue as string).getTime() -
              new Date(bValue as string).getTime();
            break;
          case "boolean":
            result =
              (aValue as boolean) === (bValue as boolean) ? 0 : aValue ? 1 : -1;
            break;
          default:
            result = String(aValue).localeCompare(String(bValue));
        }

        return currentSort.direction === "desc" ? -result : result;
      });
    }, [dataSource, mockData, currentSort, sortable, columns, isLoading]);

    // Paginate data
    const paginatedData = useMemo(() => {
      if (!paginationConfig || !paginationConfig.enabled) return sortedData;

      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      return sortedData.slice(start, end);
    }, [sortedData, paginationConfig, currentPage, pageSize]);

    // Handle sort change
    const handleSortChange = useCallback(
      (newSort: SortConfig | null) => {
        if (sort === undefined) {
          setInternalSort(newSort);
        }
        onSortChange?.(newSort);
      },
      [sort, onSortChange]
    );

    // Handle selection change
    const handleSelectionChange = useCallback(
      (keys: (string | number)[], rows: GenericDataGridRow[]) => {
        setSelectedRowKeys(keys);
        selection?.onChange?.(keys, rows);
      },
      [selection]
    );

    // Handle row selection
    const handleRowSelect = useCallback(
      (record: GenericDataGridRow, selected: boolean) => {
        const newKeys = selected
          ? [...selectedRowKeys, record.id]
          : selectedRowKeys.filter(key => key !== record.id);

        const newRows = paginatedData.filter(row => newKeys.includes(row.id));
        handleSelectionChange(newKeys, newRows);
      },
      [selectedRowKeys, paginatedData, handleSelectionChange]
    );

    // Handle select all
    const handleSelectAll = useCallback(
      (selected: boolean) => {
        const newKeys = selected ? paginatedData.map(row => row.id) : [];
        const newRows = selected ? paginatedData : [];
        handleSelectionChange(newKeys, newRows);
      },
      [paginatedData, handleSelectionChange]
    );

    // Handle pagination change
    const handlePaginationChange = useCallback((page: number, size: number) => {
      setCurrentPage(page);
      setPageSize(size);
    }, []);

    // Selection state calculations
    const isAllSelected = useMemo(() => {
      return (
        paginatedData.length > 0 &&
        selectedRowKeys.length === paginatedData.length
      );
    }, [paginatedData.length, selectedRowKeys.length]);

    const isIndeterminate = useMemo(() => {
      return (
        selectedRowKeys.length > 0 &&
        selectedRowKeys.length < paginatedData.length
      );
    }, [selectedRowKeys.length, paginatedData.length]);

    // Export functionality
    const handleExport = useCallback(
      (format: string) => {
        if (exportConfig?.onExport) {
          exportConfig.onExport(format, sortedData);
        }
      },
      [exportConfig, sortedData]
    );

    // Imperative handle for ref
    useImperativeHandle(ref, () => ({
      scrollToRow: (_index: number) => {
        // Implementation for virtual scrolling
      },
      scrollToColumn: (_index: number) => {
        // Implementation for virtual scrolling to column
      },
      getSelectedRows: () => {
        return dataSource.filter(row => selectedRowKeys.includes(row.id));
      },
      clearSelection: () => {
        handleSelectionChange([], []);
      },
      selectAll: () => {
        const allKeys = dataSource.map(row => row.id);
        handleSelectionChange(allKeys, dataSource);
      },
      refresh: () => {
        onDataChange?.(dataSource);
      },
      exportData: handleExport,
      getFilteredData: () => {
        return sortedData;
      },
      getSortedData: () => {
        return sortedData;
      },
      getCurrentPageData: () => {
        return paginatedData;
      },
      resetFilters: () => {
        // Add filter reset logic here
      },
      resetSorting: () => {
        // Add sorting reset logic here
      },
      getTableInstance: () => {
        // Return table instance if available
        return null;
      },
    }));

    // Sync external selection changes
    useEffect(() => {
      if (selection?.selectedRowKeys) {
        setSelectedRowKeys(selection.selectedRowKeys);
      }
    }, [selection?.selectedRowKeys]);

    // Container styles
    const containerStyle = useMemo(() => {
      const baseStyle: React.CSSProperties = {
        height,
        maxHeight,
        ...style,
      };

      if (theme) {
        baseStyle.color = theme.primaryColor;
        baseStyle.fontFamily = theme.fontFamily;
      }

      return baseStyle;
    }, [height, maxHeight, style, theme]);

    // Table styles
    const tableStyle = useMemo(() => {
      const baseStyle: React.CSSProperties = {};

      if (theme) {
        baseStyle.borderColor = theme.borderColor;
        baseStyle.borderRadius = theme.borderRadius;
      }

      return baseStyle;
    }, [theme]);

    return (
      <div
        className={cn(
          "flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm",
          {
            "border-2": bordered,
            "shadow-md": !bordered,
          },
          className,
          classNames?.container
        )}
        style={{ ...containerStyle, ...styles?.container }}
      >
        {/* Header Section */}
        {(title || subtitle || description || headerActions) && (
          <div
            className={cn(
              "flex flex-col border-b border-gray-200 bg-gray-50 px-6 py-4",
              classNames?.header
            )}
            style={styles?.header}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {title && (
                  <div className="mb-1">
                    {typeof title === "string" ? (
                      <h3 className="text-lg font-medium text-gray-900">
                        {title}
                      </h3>
                    ) : (
                      title
                    )}
                  </div>
                )}
                {subtitle && (
                  <div className="mb-1">
                    {typeof subtitle === "string" ? (
                      <p className="text-sm text-gray-600">{subtitle}</p>
                    ) : (
                      subtitle
                    )}
                  </div>
                )}
                {description && (
                  <div>
                    {typeof description === "string" ? (
                      <p className="text-sm text-gray-500">{description}</p>
                    ) : (
                      description
                    )}
                  </div>
                )}
              </div>

              {headerActions && (
                <div className="ml-4 flex items-center space-x-2">
                  {headerActions}
                </div>
              )}
            </div>

            {/* Export Actions */}
            {exportConfig?.enabled && (
              <div className="mt-4 flex items-center justify-end space-x-2">
                {exportConfig.formats?.includes("csv") && (
                  <CSVLink
                    data={sortedData}
                    filename={exportConfig.filename || "data.csv"}
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <Download className="mr-2 size-4" />
                    Export CSV
                  </CSVLink>
                )}
                {exportConfig.formats?.includes("excel") && (
                  <button
                    type="button"
                    onClick={() => handleExport("excel")}
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <FileText className="mr-2 size-4" />
                    Export Excel
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Top Pagination */}
        {paginationConfig &&
          paginationConfig.enabled &&
          (paginationConfig.position === "top" ||
            paginationConfig.position === "both") && (
            <div className="border-b border-gray-200 px-6 py-3">
              <DataGridPagination
                config={paginationConfig}
                total={sortedData.length}
                onChange={handlePaginationChange}
                classNames={classNames}
                styles={styles}
              />
            </div>
          )}

        {/* Table */}
        <div
          className={cn(
            "flex-1 overflow-auto",
            { "overflow-x-auto": !virtual },
            classNames?.table
          )}
          style={{ ...tableStyle, ...styles?.table }}
        >
          <table className="min-w-full divide-y divide-gray-200">
            <DataGridHeader
              columns={columns}
              sort={currentSort}
              onSortChange={sortable ? handleSortChange : undefined}
              selection={selection}
              onSelectAll={handleSelectAll}
              isAllSelected={isAllSelected}
              isIndeterminate={isIndeterminate}
              classNames={classNames}
              styles={styles}
            />
            <DataGridBody
              dataSource={paginatedData}
              columns={columns}
              loading={loading}
              empty={empty}
              selection={selection}
              selectedRowKeys={selectedRowKeys}
              onRowSelect={handleRowSelect}
              onRowClick={onRowClick}
              onRowDoubleClick={onRowDoubleClick}
              onRowHover={onRowHover}
              classNames={classNames}
              styles={styles}
              striped={striped}
              hoverable={hoverable}
              size={size}
            />
          </table>
        </div>

        {/* Bottom Pagination */}
        {paginationConfig &&
          paginationConfig.enabled &&
          (paginationConfig.position === "bottom" ||
            paginationConfig.position === "both") && (
            <div className="border-t border-gray-200 px-6 py-3">
              <DataGridPagination
                config={paginationConfig}
                total={sortedData.length}
                onChange={handlePaginationChange}
                classNames={classNames}
                styles={styles}
              />
            </div>
          )}

        {/* Footer Actions */}
        {footerActions && (
          <div
            className={cn(
              "border-t border-gray-200 px-6 py-4",
              classNames?.footer
            )}
            style={styles?.footer}
          >
            {footerActions}
          </div>
        )}
      </div>
    );
  }
);

DataGrid.displayName = "DataGrid";

export default DataGrid;

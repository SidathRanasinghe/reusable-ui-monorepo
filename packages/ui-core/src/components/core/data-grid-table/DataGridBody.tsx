import React, { useCallback } from "react";
import { Check, FolderSearch } from "lucide-react";

import { cn } from "../../../lib/utils";

import { DataGridBodyProps, DataGridColumn, GenericDataGridRow } from "./types";

// Loading skeleton component
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-4 w-3/4 rounded bg-gray-200" />
  </div>
);

// Empty state component
const EmptyState: React.FC<{ config?: any }> = ({ config }) => (
  <div className="flex flex-col items-center justify-center py-12 text-gray-500">
    {config?.image || (
      <div className="mb-4 rounded-lg bg-gray-100 p-4">
        <FolderSearch className="size-8 text-gray-400" />
      </div>
    )}
    <div className="text-center">
      <p className="mb-1 text-sm font-medium">
        {config?.description || "No data available"}
      </p>
    </div>
  </div>
);

function DataGridBody<T extends GenericDataGridRow = GenericDataGridRow>({
  dataSource,
  columns,
  loading = false,
  empty,
  selection,
  selectedRowKeys = [],
  onRowSelect,
  onRowClick,
  onRowDoubleClick,
  onRowHover,
  classNames,
  styles,
  striped = false,
  hoverable = true,
  size = "medium",
}: DataGridBodyProps<T>): JSX.Element {
  const isLoading = typeof loading === "boolean" ? loading : loading?.loading;
  const visibleColumns = columns.filter(col => col.visible !== false);

  const handleRowSelect = useCallback(
    (record: T, selected: boolean) => {
      if (onRowSelect) {
        onRowSelect(record, selected);
      }
    },
    [onRowSelect]
  );

  const isRowSelected = useCallback(
    (record: T) => {
      return selectedRowKeys.includes(record.id);
    },
    [selectedRowKeys]
  );

  const handleRowClick = useCallback(
    (
      record: T,
      index: number,
      event: React.MouseEvent<HTMLTableRowElement>
    ) => {
      // Don't trigger row click if clicking on selection checkbox
      if ((event.target as Element).closest("[data-selection-cell]")) {
        return;
      }

      if (onRowClick) {
        onRowClick(record, index, event);
      }
    },
    [onRowClick]
  );

  const renderSelectionCell = (record: T) => {
    if (!selection) return null;

    const isSelected = isRowSelected(record);
    const checkboxProps = selection.getCheckboxProps?.(record) || {};

    return (
      <td
        className={cn("w-12 px-4 py-3", classNames?.cell)}
        style={styles?.cell}
        data-selection-cell
      >
        <div className="flex items-center justify-center">
          {selection.type === "radio" ? (
            <input
              type="radio"
              checked={isSelected}
              disabled={checkboxProps.disabled}
              onChange={() => handleRowSelect(record, !isSelected)}
              className="size-4 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          ) : (
            <button
              type="button"
              disabled={checkboxProps.disabled}
              onClick={() => handleRowSelect(record, !isSelected)}
              className="flex items-center justify-center"
            >
              {selection.icons?.checked && isSelected ? (
                selection.icons.checked
              ) : selection.icons?.unchecked && !isSelected ? (
                selection.icons.unchecked
              ) : isSelected ? (
                <div className="flex size-4 items-center justify-center rounded bg-blue-600">
                  <Check className="size-3 stroke-[3] text-white" />
                </div>
              ) : (
                <div className="size-4 rounded border border-gray-300 bg-white" />
              )}
            </button>
          )}
        </div>
      </td>
    );
  };

  const renderCell = (column: DataGridColumn<T>, record: T, index: number) => {
    const value = record[column.dataIndex as keyof T];

    if (isLoading) {
      return <LoadingSkeleton />;
    }

    if (column.render) {
      return column.render(value, record, index);
    }

    // Default cell rendering based on data type
    if (value === null || value === undefined) {
      return <span className="text-gray-400">-</span>;
    }

    return String(value);
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "px-3 py-2 text-sm";
      case "large":
        return "px-6 py-4 text-base";
      default:
        return "px-4 py-3 text-sm";
    }
  };

  // Show empty state
  if (!isLoading && (!dataSource || dataSource.length === 0)) {
    return (
      <tbody className={cn(classNames?.body)} style={styles?.body}>
        <tr>
          <td
            colSpan={visibleColumns.length + (selection ? 1 : 0)}
            className="p-0"
          >
            {empty?.component || <EmptyState config={empty} />}
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className={cn(classNames?.body)} style={styles?.body}>
      {(isLoading
        ? Array.from({ length: 5 }, (_, i) => ({ id: `loading-${i}` }))
        : dataSource
      ).map((record, index) => {
        const isSelected = !isLoading && isRowSelected(record as T);
        const actualRecord = record as T;

        return (
          <tr
            key={record.id}
            className={cn(
              "transition-colors duration-150",
              {
                "bg-white": !striped || index % 2 === 0,
                "bg-gray-50": striped && index % 2 === 1,
                "hover:bg-blue-50": hoverable && !isSelected,
                "bg-blue-100 hover:bg-blue-100": isSelected,
                "cursor-pointer": !!onRowClick,
              },
              classNames?.row
            )}
            style={styles?.row}
            onClick={e => !isLoading && handleRowClick(actualRecord, index, e)}
            onDoubleClick={e =>
              !isLoading && onRowDoubleClick?.(actualRecord, index, e)
            }
            onMouseEnter={e =>
              !isLoading && onRowHover?.(actualRecord, index, e)
            }
          >
            {/* Selection column */}
            {selection && renderSelectionCell(actualRecord)}

            {/* Data columns */}
            {visibleColumns.map(column => (
              <td
                key={column.key as string}
                className={cn(
                  getSizeClasses(),
                  "border-b border-gray-200",
                  column.className,
                  classNames?.cell,
                  {
                    "text-center": column.align === "center",
                    "text-right": column.align === "right",
                    "font-medium": isSelected,
                  }
                )}
                style={{
                  ...styles?.cell,
                  ...column.style,
                  width: column.width,
                }}
              >
                <div className="truncate">
                  {renderCell(column, actualRecord, index)}
                </div>
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}

export default DataGridBody;

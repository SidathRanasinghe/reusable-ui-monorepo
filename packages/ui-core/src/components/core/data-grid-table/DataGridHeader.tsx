import { useCallback } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown, Check, Minus } from "lucide-react";

import { cn } from "../../../lib/utils";

import {
  DataGridColumn,
  DataGridHeaderProps,
  GenericDataGridRow,
  SortConfig,
} from "./types";

function DataGridHeader<T extends GenericDataGridRow = GenericDataGridRow>({
  columns,
  sort,
  onSortChange,
  selection,
  onSelectAll,
  isAllSelected = false,
  isIndeterminate = false,
  classNames,
  styles,
}: DataGridHeaderProps<T>): JSX.Element {
  const handleSort = useCallback(
    (key: string, dataType: string = "string") => {
      if (!onSortChange) return;

      let newSort: SortConfig | null = null;

      if (sort?.key === key) {
        // Toggle sort direction or clear sort
        if (sort.direction === "asc") {
          newSort = { key, direction: "desc" };
        } else {
          newSort = null; // Clear sort
        }
      } else {
        // New sort
        newSort = { key, direction: "asc" };
      }

      onSortChange(newSort);
    },
    [sort, onSortChange]
  );

  const handleSelectAll = useCallback(() => {
    if (onSelectAll) {
      onSelectAll(!isAllSelected);
    }
  }, [onSelectAll, isAllSelected]);

  const renderSortIcon = (column: DataGridColumn<T>) => {
    if (!column.sortable) return null;

    const isActive = sort?.key === column.key;
    const direction = isActive ? sort?.direction : null;

    return (
      <button
        type="button"
        className="ml-2 flex items-center justify-center rounded p-1 hover:bg-gray-100"
        onClick={() => handleSort(column.key as string, column.dataType)}
        aria-label={`Sort by ${column.title}`}
      >
        {direction === "asc" ? (
          <ArrowUp className="size-4 text-blue-600" />
        ) : direction === "desc" ? (
          <ArrowDown className="size-4 text-blue-600" />
        ) : (
          <ArrowUpDown className="size-4 text-gray-400 hover:text-gray-600" />
        )}
      </button>
    );
  };

  const renderSelectionIcon = () => {
    if (selection?.icons) {
      if (isAllSelected) return selection.icons.checked;
      if (isIndeterminate) return selection.icons.indeterminate;
      return selection.icons.unchecked;
    }

    // Default icons
    if (isAllSelected) {
      return (
        <div className="flex size-4 items-center justify-center rounded bg-blue-600">
          <Check className="size-3 stroke-[3] text-white" />
        </div>
      );
    }

    if (isIndeterminate) {
      return (
        <div className="flex size-4 items-center justify-center rounded bg-blue-600">
          <Minus className="size-3 stroke-[3] text-white" />
        </div>
      );
    }

    return <div className="size-4 rounded border border-gray-300 bg-white" />;
  };

  return (
    <thead
      className={cn("sticky top-0 z-10 bg-gray-50", classNames?.header)}
      style={styles?.header}
    >
      <tr
        className={cn("border-b border-gray-200", classNames?.headerRow)}
        style={styles?.headerRow}
      >
        {/* Selection column */}
        {selection && (
          <th
            className={cn(
              "w-12 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500",
              classNames?.headerCell
            )}
            style={styles?.headerCell}
          >
            {selection.type === "checkbox" && (
              <button
                type="button"
                className="flex w-full items-center justify-center"
                onClick={handleSelectAll}
                aria-label="Select all rows"
              >
                {renderSelectionIcon()}
              </button>
            )}
          </th>
        )}

        {/* Data columns */}
        {columns
          .filter(col => col.visible !== false)
          .map(column => (
            <th
              key={column.key as string}
              className={cn(
                "px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500",
                column.className,
                classNames?.headerCell,
                {
                  "cursor-pointer select-none": column.sortable,
                  "text-center": column.align === "center",
                  "text-right": column.align === "right",
                }
              )}
              style={{
                ...styles?.headerCell,
                ...column.style,
                width: column.width,
              }}
              title={column.tooltip}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="truncate">{column.title}</span>
                  {renderSortIcon(column)}
                </div>

                {/* Filter dropdown placeholder */}
                {column.filterable && column.filterDropdown && (
                  <div className="ml-2">{column.filterDropdown}</div>
                )}
              </div>
            </th>
          ))}
      </tr>
    </thead>
  );
}

export default DataGridHeader;

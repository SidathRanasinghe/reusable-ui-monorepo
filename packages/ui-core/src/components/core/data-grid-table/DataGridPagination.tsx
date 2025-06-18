import React, { useCallback, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { cn } from "../../../lib/utils";

import { DataGridPaginationProps } from "./types";

const DataGridPagination: React.FC<DataGridPaginationProps> = ({
  config,
  total,
  onChange,
  classNames,
  styles,
}) => {
  const {
    current = 1,
    pageSize = 10,
    pageSizeOptions = [10, 20, 50, 100],
    showSizeChanger = true,
    showQuickJumper = false,
    showTotal = true,
    align = "right",
  } = config;

  // Calculate pagination info
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (current - 1) * pageSize + 1;
  const endIndex = Math.min(current * pageSize, total);

  // Generate page numbers to display
  const pageNumbers = useMemo(() => {
    const delta = 2; // Number of pages to show on each side of current page
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (current <= delta + 2) {
        // Current page is near the beginning
        for (let i = 2; i <= Math.min(delta + 3, totalPages - 1); i++) {
          pages.push(i);
        }
        if (totalPages > delta + 3) {
          pages.push("...");
        }
      } else if (current >= totalPages - delta - 1) {
        // Current page is near the end
        if (totalPages > delta + 3) {
          pages.push("...");
        }
        for (
          let i = Math.max(totalPages - delta - 2, 2);
          i <= totalPages - 1;
          i++
        ) {
          pages.push(i);
        }
      } else {
        // Current page is in the middle
        pages.push("...");
        for (let i = current - delta; i <= current + delta; i++) {
          pages.push(i);
        }
        pages.push("...");
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  }, [current, totalPages]);

  // Event handlers
  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages && page !== current) {
        onChange(page, pageSize);
      }
    },
    [current, pageSize, totalPages, onChange]
  );

  const handlePageSizeChange = useCallback(
    (newPageSize: number) => {
      const newCurrent = Math.ceil(
        ((current - 1) * pageSize + 1) / newPageSize
      );
      onChange(newCurrent, newPageSize);
    },
    [current, pageSize, onChange]
  );

  const handleQuickJump = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const page = parseInt((e.target as HTMLInputElement).value);
        if (page && page >= 1 && page <= totalPages) {
          handlePageChange(page);
          (e.target as HTMLInputElement).value = "";
        }
      }
    },
    [handlePageChange, totalPages]
  );

  // Don't render if there's only one page and no size changer
  if (totalPages <= 1 && !showSizeChanger) {
    return null;
  }

  const renderTotal = () => {
    if (!showTotal) return null;

    if (typeof showTotal === "function") {
      return showTotal(total, [startIndex, endIndex]);
    }

    return (
      <div className="text-sm text-gray-700">
        Showing <span className="font-medium">{startIndex}</span> to{" "}
        <span className="font-medium">{endIndex}</span> of{" "}
        <span className="font-medium">{total}</span> results
      </div>
    );
  };

  const renderPageSizeChanger = () => {
    if (!showSizeChanger) return null;

    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700">Show</span>
        <select
          value={pageSize}
          onChange={e => handlePageSizeChange(Number(e.target.value))}
          className="rounded-md border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          {pageSizeOptions.map(size => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span className="text-sm text-gray-700">per page</span>
      </div>
    );
  };

  const renderQuickJumper = () => {
    if (!showQuickJumper) return null;

    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700">Go to page</span>
        <input
          type="number"
          min={1}
          max={totalPages}
          placeholder={String(current)}
          onKeyDown={handleQuickJump}
          className="w-16 rounded-md border border-gray-300 px-2 py-1 text-center text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    );
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex items-center space-x-1">
        {/* First page button */}
        <button
          type="button"
          onClick={() => handlePageChange(1)}
          disabled={current === 1}
          className={cn(
            "inline-flex items-center rounded-md px-2 py-2 text-sm font-medium",
            "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
          aria-label="First page"
        >
          <ChevronsLeft className="size-4" />
        </button>

        {/* Previous page button */}
        <button
          type="button"
          onClick={() => handlePageChange(current - 1)}
          disabled={current === 1}
          className={cn(
            "inline-flex items-center rounded-md px-2 py-2 text-sm font-medium",
            "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
          aria-label="Previous page"
        >
          <ChevronLeft className="size-4" />
        </button>

        {/* Page numbers */}
        {pageNumbers.map((page, index) => (
          <React.Fragment key={index}>
            {typeof page === "number" ? (
              <button
                type="button"
                onClick={() => handlePageChange(page)}
                className={cn(
                  "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium",
                  page === current
                    ? "bg-blue-600 text-white"
                    : "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                )}
                aria-label={`Page ${page}`}
                aria-current={page === current ? "page" : undefined}
              >
                {page}
              </button>
            ) : (
              <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700">
                {page}
              </span>
            )}
          </React.Fragment>
        ))}

        {/* Next page button */}
        <button
          type="button"
          onClick={() => handlePageChange(current + 1)}
          disabled={current === totalPages}
          className={cn(
            "inline-flex items-center rounded-md px-2 py-2 text-sm font-medium",
            "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
          aria-label="Next page"
        >
          <ChevronRight className="size-4" />
        </button>

        {/* Last page button */}
        <button
          type="button"
          onClick={() => handlePageChange(totalPages)}
          disabled={current === totalPages}
          className={cn(
            "inline-flex items-center rounded-md px-2 py-2 text-sm font-medium",
            "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
          aria-label="Last page"
        >
          <ChevronsRight className="size-4" />
        </button>
      </div>
    );
  };

  return (
    <div
      className={cn(
        "flex items-center",
        {
          "justify-start": align === "left",
          "justify-center": align === "center",
          "justify-end": align === "right",
          "justify-between": align === "between",
        },
        classNames?.pagination
      )}
      style={styles?.pagination}
    >
      {align === "between" ? (
        <>
          <div className="flex items-center space-x-4">
            {renderTotal()}
            {renderPageSizeChanger()}
          </div>
          <div className="flex items-center space-x-4">
            {renderQuickJumper()}
            {renderPagination()}
          </div>
        </>
      ) : (
        <div className="flex items-center space-x-4">
          {renderTotal()}
          {renderPageSizeChanger()}
          {renderQuickJumper()}
          {renderPagination()}
        </div>
      )}
    </div>
  );
};

export default DataGridPagination;

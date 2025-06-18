import { Fragment } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "../../../lib/utils";
import { Button } from "../../ui/button";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  className?: string;
  maxButtonsToShow?: number;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
  maxButtonsToShow = 7,
}: PaginationProps) => {
  // Calculate which page numbers to display
  const getPageNumbers = () => {
    const maxButtons = maxButtonsToShow;
    const pages = [];

    // Always show first page
    pages.push(1);

    // Calculate start and end of the middle section
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    // Adjust if we're near the start
    if (currentPage <= 3) {
      endPage = Math.min(totalPages - 1, maxButtons - 1);
    }

    // Adjust if we're near the end
    if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - maxButtons + 2);
    }

    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pages.push("...");
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page if it's not the same as the first
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = getPageNumbers();

  return (
    <div
      className={cn(
        "flex w-full items-center justify-center space-x-1 !shadow-sm",
        className
      )}
    >
      {/* Previous button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-[20px] w-fit rounded-full !bg-grey-50 transition-all duration-200 ease-in hover:!text-gray-700"
        aria-label="Previous page"
      >
        <ChevronLeft className="size-4" />
      </Button>

      {/* Page numbers */}
      {pageNumbers.map((page: any, index: number) => (
        <Fragment key={`kf_pg_${index}`}>
          {page === "..." ? (
            <span className="px-2 text-sub-caption-xs text-gray-500">...</span>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPageChange(page)}
              className={cn(
                "sub-caption-xs size-5 !gap-0 rounded !p-0 !font-hankenGrotesk !text-sub-caption hover:!bg-grey-50",
                currentPage === page
                  ? "bg-grey-50 !font-bold text-cadet-gray-9.5"
                  : "text-cadet-gray-6 hover:font-bold hover:text-cadet-gray-9.5"
              )}
            >
              {page}
            </Button>
          )}
        </Fragment>
      ))}

      {/* Next button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-[20px] w-fit rounded-full !bg-grey-50 transition-all duration-200 ease-in hover:!text-gray-700"
        aria-label="Next page"
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
};

export default Pagination;

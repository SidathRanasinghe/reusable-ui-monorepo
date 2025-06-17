import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { cn } from "../../../lib/utils";

interface PaginationProps {
  numberOfPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  layout?: string;
}

const Pagination = ({
  numberOfPages,
  currentPage,
  setCurrentPage,
  layout,
}: PaginationProps) => {
  const getPageRange = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = 1; i <= numberOfPages; i++) {
      if (
        i === 1 ||
        i === numberOfPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    let l;
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const goToPreviousPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, numberOfPages));
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(numberOfPages);
  };

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  const pageRange = getPageRange();

  return (
    <>
      {layout === "CUSTOM_TABLE" && (
        // do not use 'w-full' here, instead, put that in the wrapper
        <div className="text-14px flex items-center gap-2 pb-3">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="text-12px flex size-[14px] cursor-pointer items-center justify-center rounded-[2px] font-medium text-dark-200"
          >
            <ChevronLeft />
          </button>
          {pageRange.map((item, index) => (
            <button
              key={index}
              className={`flex size-[14px] cursor-pointer items-center justify-center text-xs font-medium text-dark-200 ${item === currentPage ? "rounded-[4px] border border-solid border-dark-200 !p-2 !text-dark-500" : "!bg-green-blue-6 !text-dark-100"}`}
              onClick={() => typeof item === "number" && handlePage(item)}
              disabled={item === "..."}
            >
              {item}
            </button>
          ))}
          <button
            onClick={goToNextPage}
            disabled={currentPage === numberOfPages}
            className="text-12px flex size-[14px] cursor-pointer items-center justify-center rounded-[2px] font-medium text-dark-200"
          >
            <ChevronRight />
          </button>
        </div>
      )}

      {!layout && (
        <div className="flex items-center space-x-2">
          <button
            className={cn(
              "p-2",
              { "text-gray-500": currentPage === 1 },
              { "text-white": currentPage !== 1 }
            )}
            onClick={goToFirstPage}
            disabled={currentPage === 1}
          >
            <ChevronsLeft />
          </button>
          <button
            className={cn(
              "p-2",
              { "text-gray-500": currentPage === 1 },
              { "text-white": currentPage !== 1 }
            )}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </button>
          {pageRange.map((page, index) => (
            <button
              key={index}
              className={cn("w-8 rounded-lg py-1", {
                "text-primary-green-16 bg-white": page === currentPage,
                "text-white": page !== currentPage && typeof page === "number",
                "bg-transparent text-white": page === "...",
              })}
              onClick={() => typeof page === "number" && handlePage(page)}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
          <button
            className={cn(
              "p-2",
              { "text-gray-500": currentPage === numberOfPages },
              { "text-white": currentPage !== numberOfPages }
            )}
            onClick={goToNextPage}
            disabled={currentPage === numberOfPages}
          >
            <ChevronRight />
          </button>
          <button
            className={cn(
              "p-2",
              { "text-gray-500": currentPage === numberOfPages },
              { "text-white": currentPage !== numberOfPages }
            )}
            onClick={goToLastPage}
            disabled={currentPage === numberOfPages}
          >
            <ChevronsRight />
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;

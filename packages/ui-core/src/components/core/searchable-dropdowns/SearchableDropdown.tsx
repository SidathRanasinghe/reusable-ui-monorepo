import { ChevronDown, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const SearchableDropdown = ({
  header,
  headerId,
  options,
  filterData,
  setFilterData,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const wrapperRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  // Filter options when search term changes
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredOptions(options);
    } else {
      const filtered = options.filter(
        (option: any) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
          option.value.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
    // Reset highlighted index when options change
    setHighlightedIndex(-1);
  }, [searchTerm, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  // Handle keyboard navigation
  const handleKeyDown = (e: any) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex(prev =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (
          highlightedIndex >= 0 &&
          highlightedIndex < filteredOptions.length
        ) {
          selectOption(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const selectOption = (option: any) => {
    setFilterData({
      ...filterData,
      [headerId]: {
        type: "equals",
        filter: option.value,
        filter_type: "text",
        filterOption: option,
      },
    });
    setSearchTerm("");
    setIsOpen(false);
  };

  // Function to highlight matching text in options
  const highlightMatch = (text: string, term: string) => {
    if (!term.trim()) {
      return <span>{text}</span>;
    }

    const regex = new RegExp(
      `(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi"
    );
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, index) => {
          const isMatch = part.toLowerCase() === term.toLowerCase();
          return (
            <span
              key={index}
              className={
                isMatch ? "bg-primary-300/15 font-medium text-primary-300" : ""
              }
            >
              {part}
            </span>
          );
        })}
      </>
    );
  };

  // Get the display value for the input
  const getDisplayValue = () => {
    if (filterData[headerId] && filterData[headerId]?.filterOption) {
      return filterData[headerId].filterOption.label;
    }
    return "";
  };

  // Function to reset the filter
  const resetFilter = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent dropdown from opening

    const newFilterData = { ...filterData };
    delete newFilterData[headerId];

    setFilterData(newFilterData);
    setSearchTerm("");
    setIsOpen(false);
  };

  const hasSelectedValue = Boolean(filterData[headerId]?.filter);

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div className="relative w-[95%]">
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={isOpen ? searchTerm : getDisplayValue()}
            onChange={e => setSearchTerm(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={`Search ${header}...`}
            className="h-6 w-full rounded border border-gray-200 bg-white p-1 pr-5 font-hankenGrotesk text-caption-xs text-[#656970]"
          />

          {/* Icons positioned absolute to the input */}
          <div className="absolute right-2 flex items-center space-x-2">
            {hasSelectedValue ? (
              <button
                onClick={resetFilter}
                className="cursor-pointer text-gray-400 hover:text-gray-600"
                title="Clear filter"
              >
                <X size={14} />
              </button>
            ) : (
              <span className="text-gray-400">
                {isOpen ? (
                  <ChevronDown size={14} className="rotate-180" />
                ) : (
                  <ChevronDown size={14} />
                )}
              </span>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <ul className="absolute z-[200] mt-1 max-h-60 w-[95%] overflow-auto rounded-md bg-white p-0 shadow-lg">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option: any, index: number) => (
              <li
                key={`${option.value}-${index}`}
                onClick={() => selectOption(option)}
                className={`cursor-pointer px-2 py-1 font-hankenGrotesk text-caption-xs font-normal ${
                  highlightedIndex === index
                    ? "bg-primary-50"
                    : "text-[#3A3D42]"
                }`}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {highlightMatch(option.label, searchTerm)}
              </li>
            ))
          ) : (
            <li className="px-2 py-1 text-caption-xs text-gray-400">
              No results found
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;

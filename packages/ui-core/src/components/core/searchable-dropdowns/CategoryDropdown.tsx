import { ChevronDown, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Define more specific types
interface Option {
  displayName: string;
  value?: string;
}

interface CategoryOption {
  categoryKey: string;
  options: Option[];
}

interface FilterData {
  [key: string]: {
    type: string;
    filter: string;
    filter_type: string;
    catKey?: string;
  };
}

interface CategoryDropdownProps {
  header: string;
  headerId: string;
  options: CategoryOption[];
  filterData: FilterData;
  setFilterData: (data: FilterData) => void;
}

const CategoryDropdown = ({
  header,
  headerId,
  options,
  filterData,
  setFilterData,
}: CategoryDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] =
    useState<CategoryOption[]>(options);
  const [highlightedCategory, setHighlightedCategory] = useState<number>(-1);
  const [highlightedOption, setHighlightedOption] = useState<number>(-1);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter options when search term changes
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredOptions(options);
    } else {
      const filtered = options
        .map(category => {
          const matchingOptions = category.options.filter(option =>
            option.displayName.toLowerCase().includes(searchTerm.toLowerCase())
          );

          return {
            ...category,
            options: matchingOptions,
          };
        })
        .filter(category => category.options.length > 0);

      setFilteredOptions(filtered);
    }

    // Reset highlighted indices when options change
    setHighlightedCategory(-1);
    setHighlightedOption(-1);
  }, [searchTerm, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  // Handle keyboard navigation - this is more complex with nested structure
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (highlightedCategory === -1) {
          setHighlightedCategory(0);
          setHighlightedOption(0);
        } else {
          const currentCategory = filteredOptions[highlightedCategory];
          if (highlightedOption < currentCategory.options.length - 1) {
            setHighlightedOption(prev => prev + 1);
          } else if (highlightedCategory < filteredOptions.length - 1) {
            setHighlightedCategory(prev => prev + 1);
            setHighlightedOption(0);
          }
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (highlightedOption > 0) {
          setHighlightedOption(prev => prev - 1);
        } else if (highlightedCategory > 0) {
          setHighlightedCategory(prev => prev - 1);
          setHighlightedOption(
            filteredOptions[highlightedCategory - 1].options.length - 1
          );
        }
        break;
      case "Enter":
        e.preventDefault();
        if (
          highlightedCategory >= 0 &&
          highlightedCategory < filteredOptions.length &&
          highlightedOption >= 0 &&
          highlightedOption <
            filteredOptions[highlightedCategory].options.length
        ) {
          selectOption(
            filteredOptions[highlightedCategory].options[highlightedOption],
            filteredOptions[highlightedCategory].categoryKey
          );
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

  const selectOption = (option: Option, categoryKey: string) => {
    setFilterData({
      ...filterData,
      [headerId]: {
        type: "equals",
        filter: option.displayName,
        filter_type: "text",
        catKey: categoryKey,
      },
    });
    setSearchTerm("");
    setIsOpen(false);
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
          // Check if this part matches the search term (case insensitive)
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
    if (filterData[headerId]?.catKey && filterData[headerId]?.filter) {
      return filterData[headerId].filter;
    }
    return "";
  };

  // Check if there's a selected value
  const hasSelectedValue = Boolean(filterData[headerId]?.filter);

  return (
    <div
      className="relative flex w-full flex-row justify-center gap-2"
      ref={wrapperRef}
    >
      <div className="relative w-[95%]">
        <input
          ref={inputRef}
          type="text"
          value={isOpen ? searchTerm : getDisplayValue()}
          onChange={e => setSearchTerm(e.target.value)}
          onFocus={() => {
            setIsOpen(true);
            setSearchTerm("");
          }}
          onKeyDown={handleKeyDown}
          placeholder={`Search ${header}...`}
          className="h-6 w-full rounded border border-gray-200 bg-white p-1 pl-2 pr-8 font-hankenGrotesk text-caption-xs text-[#656970]"
        />

        {/* Icons in the input field */}
        <div className="absolute right-2 top-1 flex h-4 items-center space-x-1">
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

      {isOpen && (
        <div className="absolute z-[200] mt-7 max-h-60 w-full overflow-auto rounded-md bg-white p-0 shadow-lg">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((category, catIndex) => (
              <div key={`${category.categoryKey}-${catIndex}`} className="mb-2">
                <div className="px-2 py-1 font-hankenGrotesk text-xs font-semibold text-gray-700">
                  {category.categoryKey}
                </div>
                <ul>
                  {category.options.map((option, optIndex) => (
                    <li
                      key={`${category.categoryKey}-${option.displayName}-${optIndex}`}
                      onClick={() => selectOption(option, category.categoryKey)}
                      className={`cursor-pointer px-3 py-1 font-hankenGrotesk text-caption-xs font-normal ${
                        highlightedCategory === catIndex &&
                        highlightedOption === optIndex
                          ? "bg-primary-50"
                          : "text-[#656970]"
                      }`}
                      onMouseEnter={() => {
                        setHighlightedCategory(catIndex);
                        setHighlightedOption(optIndex);
                      }}
                    >
                      {highlightMatch(option.displayName, searchTerm)}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div className="px-2 py-1 text-caption-xs text-gray-400">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;

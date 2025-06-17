import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Check, ChevronDown, X } from "lucide-react";

import { cn } from "../../../lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Badge } from "../../ui/badge";
import { Input } from "../../ui/input";

export interface SearchableOption<T> {
  value: T;
  label: string;
}

export interface SearchableSelectRefs {
  container: React.MutableRefObject<HTMLDivElement | null>;
  input: React.MutableRefObject<HTMLInputElement | null>;
}

interface SearchableSelectProps<T> {
  options: SearchableOption<T>[];
  selectedOptions?: SearchableOption<T>[];
  onChange: (options: SearchableOption<T>[]) => void;
  onOptionsChange?: (newOptions: SearchableOption<T>[]) => void;
  fetchOptions?: () => Promise<void>;
  renderItem?: (
    item: SearchableOption<T>,
    isOption: boolean
  ) => React.ReactNode;
  labelPath?: keyof T | ((item: T) => string);
  placeholder?: string;
  className?: string;
  triggerClassName?: string;
  popoverClassName?: string;
  badgeClassName?: string;
  disabled?: boolean;
  side?: "bottom" | "left" | "right" | "top";
  align?: "center" | "end" | "start";
  selectedChipsDirection?: "inner" | "outer";
  allowNewOptions?: boolean;
  createOptionFormat?: (input: string) => T;
  onClickSearchInput?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseEnterChip?: (
    event: React.MouseEvent<HTMLDivElement>,
    chip: SearchableOption<T>
  ) => void;
  onMouseLeaveChip?: (
    event: React.MouseEvent<HTMLDivElement>,
    chip: SearchableOption<T>
  ) => void;
  onClickChip?: (
    event: React.MouseEvent<HTMLDivElement>,
    chip: SearchableOption<T>
  ) => void;
  getRefs?: (refs: SearchableSelectRefs) => void;
  isLoading?: boolean;
}

function SearchableSelect<T>({
  options: initialOptions,
  selectedOptions = [],
  onChange,
  onOptionsChange,
  fetchOptions,
  renderItem,
  labelPath,
  placeholder = "Select an option",
  className = "",
  triggerClassName = "",
  popoverClassName = "",
  badgeClassName = "",
  disabled = false,
  side = "bottom",
  align = "center",
  selectedChipsDirection = "inner",
  allowNewOptions = false,
  createOptionFormat = (input: string) => input as unknown as T,
  onClickSearchInput,
  onMouseEnterChip,
  onMouseLeaveChip,
  onClickChip,
  getRefs,
  isLoading = false,
  ...rest
}: SearchableSelectProps<T>) {
  const [options, setOptions] = useState<SearchableOption<T>[]>(initialOptions);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);

  useEffect(() => {
    setTimeout(() =>
      open ? inputRef?.current?.focus() : inputRef?.current?.blur()
    );
  }, [open]);

  useEffect(() => {
    if (getRefs && containerRef?.current && inputRef?.current) {
      getRefs({
        container: containerRef,
        input: inputRef,
      });
    }
  }, [getRefs]);

  const getLabel = useCallback(
    (option: SearchableOption<T>): string => {
      if (!labelPath) return option.label;
      if (typeof labelPath === "function") {
        return labelPath(option.value);
      }
      return String(option.value[labelPath]);
    },
    [labelPath]
  );

  const filteredOptions = useMemo(
    () =>
      options.filter(
        option =>
          getLabel(option).toLowerCase().includes(searchTerm.toLowerCase()) &&
          !selectedOptions.some(
            selected =>
              JSON.stringify(selected.value) === JSON.stringify(option.value)
          )
      ),
    [options, searchTerm, selectedOptions, getLabel]
  );

  const handleOpenChange = useCallback(
    async (newOpen: boolean) => {
      setOpen(newOpen);
      if (newOpen && fetchOptions) {
        await fetchOptions();
      }
      if (!newOpen) {
        setSearchTerm("");
      }
    },
    [fetchOptions]
  );

  const createNewOption = useCallback(
    (input: string): SearchableOption<T> => {
      const newValue = createOptionFormat(input);
      return {
        value: newValue,
        label: input,
      };
    },
    [createOptionFormat]
  );

  const handleOptionSelect = useCallback(
    (option: SearchableOption<T>) => {
      const newSelectedOptions = [...selectedOptions, option];
      onChange(newSelectedOptions);
      setSearchTerm("");
      setOpen(false);
    },
    [selectedOptions, onChange]
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" && searchTerm && allowNewOptions) {
        e.preventDefault();
        const newOption = createNewOption(searchTerm);
        const updatedOptions = [...options, newOption];
        setOptions(updatedOptions);
        onOptionsChange?.(updatedOptions);
        handleOptionSelect(newOption);
      }
    },
    [
      searchTerm,
      allowNewOptions,
      createNewOption,
      options,
      onOptionsChange,
      handleOptionSelect,
    ]
  );

  const handleRemoveOption = useCallback(
    (option: SearchableOption<T>, e?: React.MouseEvent) => {
      e?.stopPropagation();
      const newSelectedOptions = selectedOptions.filter(
        selected =>
          JSON.stringify(selected.value) !== JSON.stringify(option.value)
      );
      onChange(newSelectedOptions);
    },
    [selectedOptions, onChange]
  );

  const renderSelectedOptionsChips = useCallback(() => {
    return selectedOptions.map((option, index) => (
      <Badge
        key={`selected-option-${index}`}
        variant="secondary"
        className={cn("flex items-center gap-1 py-1 pl-2 pr-1", badgeClassName)}
        onMouseEnter={e => onMouseEnterChip?.(e, option)}
        onMouseLeave={e => onMouseLeaveChip?.(e, option)}
        onClick={e => {
          e.stopPropagation();
          onClickChip?.(e, option);
        }}
      >
        {renderItem ? (
          renderItem(option, false)
        ) : (
          <span>{getLabel(option)}</span>
        )}
        <button
          onClick={e => handleRemoveOption(option, e)}
          className="ml-1 rounded-full p-0.5 hover:bg-gray-200/20"
        >
          <X className="size-3" />
        </button>
      </Badge>
    ));
  }, [
    selectedOptions,
    badgeClassName,
    onMouseEnterChip,
    onMouseLeaveChip,
    onClickChip,
    renderItem,
    getLabel,
    handleRemoveOption,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn("w-fit !font-hankenGrotesk", className)}
      {...rest}
    >
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild disabled={disabled}>
          <div
            className={cn(
              "relative flex h-7 w-full items-center justify-between gap-x-2 rounded !border-none p-0 !font-hankenGrotesk text-cadet-gray-8.5 shadow-none !ring-0 placeholder:text-cadet-gray-8.5 focus:!outline-none disabled:cursor-not-allowed disabled:opacity-50",
              triggerClassName,
              { "cursor-pointer": !disabled }
            )}
            style={{ fontSize: "11px" }}
            onClick={e => {
              if (disabled) return;
              e.stopPropagation();
              onClickSearchInput?.(e as React.MouseEvent<HTMLInputElement>);
            }}
          >
            <Input
              ref={inputRef}
              placeholder={placeholder}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="h-7 w-full rounded !border-none pr-8 font-hankenGrotesk text-cadet-gray-8.5 shadow-none !outline-none ring-1 ring-inset ring-cadet-gray-1 focus:!border-none focus:!outline-none focus:!ring-cadet-gray-1"
              style={{ fontSize: "11px" }}
            />
            <ChevronDown
              className={cn(
                "absolute right-3 top-1.5 h-4 w-4 opacity-50 transition-all duration-200",
                {
                  "rotate-180": open,
                }
              )}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className={cn(
            "z-[200] w-[200px] min-w-[200px] max-w-[300px] p-0 !font-hankenGrotesk",
            popoverClassName
          )}
          align={align}
          side={side}
        >
          <Command shouldFilter={false} onKeyDown={handleKeyPress}>
            <CommandList>
              {isLoading ? (
                <div className="flex items-center justify-center p-4 text-caption-xs">
                  Loading ...
                </div>
              ) : (
                <>
                  <CommandEmpty>
                    <div>No Data</div>
                  </CommandEmpty>
                  <CommandGroup>
                    {filteredOptions.map((option, index) => (
                      <CommandItem
                        key={`option-${index}`}
                        value={getLabel(option)}
                        onSelect={() => handleOptionSelect(option)}
                        className="!font-hankenGrotesk"
                      >
                        {renderItem ? (
                          renderItem(option, true)
                        ) : (
                          <>
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedOptions.some(
                                  selected =>
                                    JSON.stringify(selected.value) ===
                                    JSON.stringify(option.value)
                                )
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            <span className="!font-hankenGrotesk text-caption-xs text-cadet-gray-8">
                              {getLabel(option)}
                            </span>
                          </>
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {selectedChipsDirection === "inner" && selectedOptions.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {renderSelectedOptionsChips()}
        </div>
      )}

      {selectedChipsDirection === "outer" && selectedOptions.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {renderSelectedOptionsChips()}
        </div>
      )}
    </div>
  );
}

export default SearchableSelect;

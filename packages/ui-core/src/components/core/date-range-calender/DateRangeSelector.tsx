import { useRef, useState, useCallback, useEffect } from "react";

import { cn } from "../../../lib/utils";
import { Calendar } from "../../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

type DqGenericOption = {
  id: string;
  code: string;
  displayName: string;
};

type DateRangeSelectorProps = {
  options: DqGenericOption[];
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  onSelect: (value: any) => void;
  onOpenChange: (open: boolean) => void;
};

type CustomRangeValue = {
  fromDate: string;
  toDate: string;
  customRange: boolean;
};

const DateRangeSelector = ({
  options,
  placeholder,
  defaultValue,
  className,
  onSelect,
  onOpenChange,
}: DateRangeSelectorProps) => {
  const [fromDate, setFromDate] = useState<Date | undefined>();
  const [toDate, setToDate] = useState<Date | undefined>();
  const [isCustomRange, setIsCustomRange] = useState(false);
  const [value, setValue] = useState<any>(defaultValue || "");
  const selectContentRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close the custom range calendar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isCustomRange &&
        selectContentRef.current &&
        !selectContentRef.current.contains(event.target as Node)
      ) {
        setIsCustomRange(false);
        onOpenChange(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCustomRange]);

  // Format a date to YYYY-MM-DD string
  const formatDate = useCallback((date: Date): string => {
    return date.toISOString().split("T")[0];
  }, []);

  // Handle option selection
  const handleOptionSelect = useCallback(
    (val: any) => {
      if (typeof val === "object" && val.customRange) {
        setIsCustomRange(true);
      } else {
        setIsCustomRange(false);
        setFromDate(undefined);
        setToDate(undefined);
        setValue(val);
        onSelect(val);
        onOpenChange(false);
      }
    },
    [onSelect, onOpenChange]
  );

  // Handle from date selection
  const handleFromDateSelect = useCallback((date: Date | undefined) => {
    setFromDate(date);
    setToDate(undefined);
  }, []);

  // Handle to date selection
  const handleToDateSelect = useCallback(
    (date: Date | undefined) => {
      setToDate(date);
      if (date && fromDate) {
        const customValue: CustomRangeValue = {
          fromDate: formatDate(fromDate),
          toDate: formatDate(date),
          customRange: true,
        };

        onSelect(customValue);
        setValue(customValue);
        onOpenChange(false);
        setIsCustomRange(false);
      }
    },
    [fromDate, onSelect, onOpenChange, formatDate]
  );

  // Format the displayed value in the selector
  const formatSelectedValue = useCallback(
    (val: any) => {
      if (val?.customRange && val.fromDate && val.toDate) {
        return `Custom Range: ${val.fromDate} to ${val.toDate}`;
      }

      const option = options.find(
        (opt: any) => JSON.stringify(opt.code) === JSON.stringify(val)
      );

      return option?.displayName || placeholder;
    },
    [options, placeholder]
  );

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={handleOptionSelect}
      open={isCustomRange || undefined}
      onOpenChange={open => !isCustomRange && onOpenChange(open)}
    >
      <SelectTrigger
        className={cn(
          "max-h-7 min-h-7 w-fit gap-2 rounded font-hankenGrotesk text-cadet-gray-8.5 shadow-none !ring-transparent",
          className || ""
        )}
        style={{ fontSize: "11px" }}
        value={value}
      >
        <SelectValue
          placeholder={placeholder}
          className="font-hankenGrotesk text-cadet-gray-8.5"
        >
          {formatSelectedValue(value)}
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        className="relative z-[200] cursor-pointer"
        ref={selectContentRef}
      >
        {options?.map((option: DqGenericOption, idx: number) => (
          <SelectItem
            key={`${option.displayName.replace(/\s+/g, "").toLowerCase()}_${idx}`}
            value={
              option.displayName === "Custom Range"
                ? ({ customRange: true } as any)
                : option.code
            }
            className="cursor-pointer font-hankenGrotesk !text-caption-xxs !text-cadet-gray-8.5"
          >
            <span className="h-full w-fit cursor-pointer font-hankenGrotesk !text-caption-xxs !text-cadet-gray-8.5">
              {option.displayName}
            </span>
          </SelectItem>
        ))}
        {isCustomRange && (
          <div className="mt-2 flex flex-col gap-2 border-t p-2">
            <div className="flex gap-2">
              <div>
                <p className="mb-1 text-caption-xxs text-muted-foreground">
                  From Date
                </p>
                <Calendar
                  mode="single"
                  selected={fromDate}
                  onSelect={handleFromDateSelect}
                  className="rounded-md border"
                  disabled={date => date > new Date()}
                />
              </div>
              <div>
                <p className="mb-1 text-caption-xxs text-muted-foreground">
                  To Date
                </p>
                <Calendar
                  mode="single"
                  selected={toDate}
                  onSelect={handleToDateSelect}
                  className="rounded-md border"
                  disabled={date => {
                    if (!fromDate) return true;
                    return date > new Date() || date < fromDate;
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </SelectContent>
    </Select>
  );
};

export default DateRangeSelector;

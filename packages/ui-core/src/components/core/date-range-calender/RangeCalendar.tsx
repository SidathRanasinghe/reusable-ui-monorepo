import React, { useState } from "react";
import { DateRange } from "react-day-picker";

import { Calendar } from "../../ui/calendar";

interface RangeCalendarProps {
  selected: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
  numberOfMonths?: number;
  className?: string;
  defaultMonth?: Date;
  initialFocus?: boolean;
}

const RangeCalendar: React.FC<RangeCalendarProps> = ({
  selected,
  onSelect,
  numberOfMonths = 2,
  className = "!text-caption-xs",
  defaultMonth = new Date(),
}) => {
  const [hoveredDay, setHoveredDay] = useState<Date | undefined>(undefined);

  const isSelectingEndDate = selected?.from && !selected?.to;

  const modifiers: Record<string, (date: Date) => boolean> = {};

  if (isSelectingEndDate && hoveredDay && selected.from) {
    modifiers.preview_start = date =>
      date.getTime() === selected.from.getTime();
    modifiers.preview_end = date => date.getTime() === hoveredDay.getTime();

    if (selected.from < hoveredDay) {
      modifiers.preview_middle = date =>
        date > selected.from && date < hoveredDay;
    } else if (selected.from > hoveredDay) {
      modifiers.preview_middle = date =>
        date > hoveredDay && date < selected.from;
    }
  }

  // Custom class names for our modifiers
  const modifiersClassNames = {
    preview_start: "bg-primary-300/50 text-white",
    preview_middle: "bg-primary-300/20 text-white",
    preview_end: "bg-primary-300/50 text-white",
  };

  return (
    <div>
      <Calendar
        mode="range"
        defaultMonth={defaultMonth}
        selected={selected}
        onSelect={onSelect}
        onDayMouseEnter={setHoveredDay}
        numberOfMonths={numberOfMonths}
        className={className}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
        classNames={{
          months: "flex flex-row space-x-4",
          day_range_start: "bg-primary text-white",
          day_range_end: "bg-primary text-white",
          day_range_middle: "bg-primary-300/50 text-white",
        }}
      />
    </div>
  );
};

export default RangeCalendar;

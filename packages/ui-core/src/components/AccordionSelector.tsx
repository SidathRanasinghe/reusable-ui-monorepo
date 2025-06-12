"use client";

import React, { ReactNode, useState } from "react";
import { cn } from "../lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Checkbox } from "../components/ui/checkbox";

interface AccordionSelectorProps {
  options: {
    id: string;
    label: string;
    lableIcon: ReactNode;
    content:
      | ReactNode
      | {
          id: string;
          label: string;
        }[];
  }[];
  onSelect?: (selectedItems: Record<string, boolean>) => void;
  mainWrapperClassName?: string;
  className?: string;
  accordionItemClassName?: string;
  accordionTriggerClassName?: string;
  accordionContentClassName?: string;
}

const AccordionSelector: React.FC<AccordionSelectorProps> = ({
  options,
  onSelect,
  mainWrapperClassName = "",
  className = "",
  accordionItemClassName = "",
  accordionTriggerClassName = "",
  accordionContentClassName = "",
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    {}
  );

  const handleToggleItem = (itemId: string, groupId: string) => {
    const newSelectedItems = { ...selectedItems };
    newSelectedItems[`${groupId}_${itemId}`] =
      !selectedItems[`${groupId}_${itemId}`];

    setSelectedItems(newSelectedItems);
    onSelect?.(newSelectedItems);
  };

  const renderContent = (group: any) => {
    if (!Array.isArray(group.content)) {
      return group.content;
    }
    return (
      <div className="flex flex-col gap-y-1">
        {group.content.map((item: { id: string; label: string }) => (
          <div
            key={item.id}
            className="flex items-center gap-x-2 rounded px-2 py-1 hover:bg-cadet-gray-0.5"
          >
            <Checkbox
              id={`${group.id}_${item.id}`}
              checked={!!selectedItems[`${group.id}_${item.id}`]}
              onCheckedChange={() => handleToggleItem(item.id, group.id)}
              className="size-3 rounded border-cadet-gray-3"
            />
            <label
              htmlFor={`${group.id}_${item.id}`}
              className="cursor-pointer font-hankenGrotesk text-caption-xxs text-cadet-gray-8"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "w-full rounded border border-cadet-gray-1",
        mainWrapperClassName
      )}
    >
      <Accordion
        type="multiple"
        value={expandedItems}
        onValueChange={setExpandedItems}
        className={cn("w-full bg-cadet-gray-0 rounded", className)}
      >
        {options.map((group) => (
          <AccordionItem
            key={group.id}
            value={group.id}
            className={cn(
              "border-b border-cadet-gray-1 last:border-b-0",
              accordionItemClassName
            )}
          >
            <AccordionTrigger
              className={cn("w-full px-3 py-1.5", accordionTriggerClassName)}
            >
              <div className="flex w-full items-center justify-start gap-x-2">
                {group.lableIcon && group.lableIcon}
                <p className="text-left font-hankenGrotesk text-caption-xxs text-cadet-gray-8">
                  {group.label}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={cn("px-3 py-1", accordionContentClassName)}
            >
              {renderContent(group)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionSelector;

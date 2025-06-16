import React, { ReactNode, useState, useCallback, useMemo } from "react";

import { cn } from "../lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Checkbox } from "../components/ui/checkbox";

// Core type definitions
export interface SelectableItem {
  id: string;
  label: string;
  disabled?: boolean;
  metadata?: Record<string, unknown>;
}

export interface AccordionGroup {
  id: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  content: ReactNode | SelectableItem[];
  metadata?: Record<string, unknown>;
}

export interface SelectionState {
  [key: string]: boolean;
}

export interface StyleConfig {
  wrapper?: string;
  accordion?: string;
  accordionItem?: string;
  accordionTrigger?: string;
  accordionContent?: string;
  checkboxItem?: string;
  checkbox?: string;
  label?: string;
  icon?: string;
}

export interface AccordionSelectorProps {
  // Core props
  groups?: AccordionGroup[];

  // Selection handling
  selectedItems?: SelectionState;
  onSelectionChange?: (
    selection: SelectionState,
    metadata?: {
      changedItemId: string;
      groupId: string;
      isSelected: boolean;
      item?: SelectableItem;
    }
  ) => void;

  // Accordion behavior
  expandedItems?: string[];
  onExpandedChange?: (expandedItems: string[]) => void;
  allowMultipleExpanded?: boolean;
  defaultExpanded?: string[];

  // Selection behavior
  allowMultipleSelection?: boolean;
  clearSelectionOnGroupChange?: boolean;

  // Styling
  className?: string;
  styles?: StyleConfig;

  // Customization
  renderCustomContent?: (group: AccordionGroup) => ReactNode;
  renderCustomTrigger?: (
    group: AccordionGroup,
    isExpanded: boolean
  ) => ReactNode;
  renderCustomItem?: (
    item: SelectableItem,
    group: AccordionGroup,
    isSelected: boolean
  ) => ReactNode;

  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;

  // Advanced options
  searchable?: boolean;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
}

const defaultStyles: StyleConfig = {
  wrapper: "w-full rounded-lg border border-gray-200 bg-white shadow-sm",
  accordion: "w-full",
  accordionItem: "border-b border-gray-100 last:border-b-0",
  accordionTrigger:
    "w-full px-4 py-3 hover:bg-gray-50 transition-colors duration-200",
  accordionContent: "px-4 py-2",
  checkboxItem:
    "flex items-center gap-x-3 rounded-md px-3 py-2 hover:bg-gray-50 transition-colors duration-150",
  checkbox: "h-4 w-4 rounded border-gray-300",
  label: "cursor-pointer text-sm font-medium text-gray-700 select-none",
  icon: "h-4 w-4 flex-shrink-0",
};

export const AccordionSelector: React.FC<AccordionSelectorProps> = ({
  groups,
  selectedItems: controlledSelection,
  onSelectionChange,
  expandedItems: controlledExpanded,
  onExpandedChange,
  allowMultipleExpanded = true,
  defaultExpanded = [],
  allowMultipleSelection = true,
  clearSelectionOnGroupChange = false,
  className,
  styles = {},
  renderCustomContent,
  renderCustomTrigger,
  renderCustomItem,
  ariaLabel = "Accordion Selector",
  ariaDescribedBy,
  searchable = false,
  searchPlaceholder = "Search...",
  onSearch,
}) => {
  // Internal state for uncontrolled mode
  const [internalSelection, setInternalSelection] = useState<SelectionState>(
    {}
  );
  const [internalExpanded, setInternalExpanded] =
    useState<string[]>(defaultExpanded);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Determine if component is controlled or uncontrolled
  const isSelectionControlled = controlledSelection !== undefined;
  const isExpansionControlled = controlledExpanded !== undefined;

  const currentSelection = isSelectionControlled
    ? controlledSelection
    : internalSelection;
  const currentExpanded = isExpansionControlled
    ? controlledExpanded
    : internalExpanded;

  // Merge default styles with custom styles
  const mergedStyles = useMemo(
    () => ({
      ...defaultStyles,
      ...styles,
    }),
    [styles]
  );

  // Filter groups based on search query
  const filteredGroups = useMemo(() => {
    if (!searchable || !searchQuery) return groups;

    return groups.filter(
      group =>
        group.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (Array.isArray(group.content) &&
          group.content.some(item =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
          ))
    );
  }, [groups, searchQuery, searchable]);

  // Handle selection changes
  const handleSelectionChange = useCallback(
    (itemId: string, groupId: string, item?: SelectableItem) => {
      const itemKey = `${groupId}_${itemId}`;
      const isCurrentlySelected = !!currentSelection[itemKey];
      const newSelection = { ...currentSelection };

      if (!allowMultipleSelection && !isCurrentlySelected) {
        // Clear all selections if multiple selection is not allowed
        Object.keys(newSelection).forEach(key => {
          newSelection[key] = false;
        });
      }

      if (clearSelectionOnGroupChange) {
        // Clear selections from other groups
        Object.keys(newSelection).forEach(key => {
          if (!key.startsWith(`${groupId}_`)) {
            newSelection[key] = false;
          }
        });
      }

      newSelection[itemKey] = !isCurrentlySelected;

      if (!isSelectionControlled) {
        setInternalSelection(newSelection);
      }

      onSelectionChange?.(newSelection, {
        changedItemId: itemId,
        groupId,
        isSelected: !isCurrentlySelected,
        item,
      });
    },
    [
      currentSelection,
      allowMultipleSelection,
      clearSelectionOnGroupChange,
      isSelectionControlled,
      onSelectionChange,
    ]
  );

  // Handle expansion changes
  const handleExpansionChange = useCallback(
    (newExpanded: string[]) => {
      if (!isExpansionControlled) {
        setInternalExpanded(newExpanded);
      }
      onExpandedChange?.(newExpanded);
    },
    [isExpansionControlled, onExpandedChange]
  );

  // Handle search
  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
      onSearch?.(query);
    },
    [onSearch]
  );

  // Render selectable items
  const renderSelectableItems = useCallback(
    (items: SelectableItem[], group: AccordionGroup) => {
      return (
        <div
          className="space-y-1"
          role="group"
          aria-labelledby={`${group.id}-trigger`}
        >
          {items.map(item => {
            const itemKey = `${group.id}_${item.id}`;
            const isSelected = !!currentSelection[itemKey];

            if (renderCustomItem) {
              return (
                <div key={item.id}>
                  {renderCustomItem(item, group, isSelected)}
                </div>
              );
            }

            return (
              <div key={item.id} className={cn(mergedStyles.checkboxItem)}>
                <Checkbox
                  id={itemKey}
                  checked={isSelected}
                  disabled={item.disabled || group.disabled}
                  onCheckedChange={() =>
                    handleSelectionChange(item.id, group.id, item)
                  }
                  className={cn(mergedStyles.checkbox)}
                  aria-describedby={
                    item.metadata?.description ? `${itemKey}-desc` : undefined
                  }
                />
                <label
                  htmlFor={itemKey}
                  className={cn(
                    mergedStyles.label,
                    (item.disabled || group.disabled) &&
                      "cursor-not-allowed opacity-50"
                  )}
                >
                  {item.label}
                </label>
                {item.metadata?.description && (
                  <p
                    id={`${itemKey}-desc`}
                    className="mt-1 text-xs text-gray-500"
                  >
                    {item.metadata.description as string}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      );
    },
    [currentSelection, mergedStyles, renderCustomItem, handleSelectionChange]
  );

  // Render group content
  const renderGroupContent = useCallback(
    (group: AccordionGroup) => {
      if (renderCustomContent) {
        return renderCustomContent(group);
      }

      if (!Array.isArray(group.content)) {
        return group.content;
      }

      return renderSelectableItems(group.content, group);
    },
    [renderCustomContent, renderSelectableItems]
  );

  // Render trigger content
  const renderTriggerContent = useCallback(
    (group: AccordionGroup) => {
      const isExpanded = currentExpanded.includes(group.id);

      if (renderCustomTrigger) {
        return renderCustomTrigger(group, isExpanded);
      }

      return (
        <div className="flex w-full items-center justify-start gap-x-3">
          {group.icon && (
            <span className={cn(mergedStyles.icon)} aria-hidden="true">
              {group.icon}
            </span>
          )}
          <span className="flex-1 text-left font-medium text-gray-900">
            {group.label}
          </span>
          {Array.isArray(group.content) && (
            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">
              {
                group.content.filter(
                  item => currentSelection[`${group.id}_${item.id}`]
                ).length
              }{" "}
              / {group.content.length}
            </span>
          )}
        </div>
      );
    },
    [currentExpanded, currentSelection, mergedStyles, renderCustomTrigger]
  );

  return (
    <div
      className={cn(mergedStyles.wrapper, className)}
      role="region"
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      {searchable && (
        <div className="border-b border-gray-200 p-4">
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={e => handleSearch(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search items"
          />
        </div>
      )}

      {allowMultipleExpanded ? (
        <Accordion
          type="multiple"
          value={currentExpanded}
          onValueChange={handleExpansionChange}
          className={cn(mergedStyles.accordion)}
        >
          {filteredGroups.map(group => (
            <AccordionItem
              key={group.id}
              value={group.id}
              disabled={group.disabled}
              className={cn(mergedStyles.accordionItem)}
            >
              <AccordionTrigger
                id={`${group.id}-trigger`}
                className={cn(
                  mergedStyles.accordionTrigger,
                  group.disabled && "cursor-not-allowed opacity-50"
                )}
                aria-expanded={currentExpanded.includes(group.id)}
                aria-controls={`${group.id}-content`}
              >
                {renderTriggerContent(group)}
              </AccordionTrigger>
              <AccordionContent
                id={`${group.id}-content`}
                className={cn(mergedStyles.accordionContent)}
                role="region"
                aria-labelledby={`${group.id}-trigger`}
              >
                {renderGroupContent(group)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <Accordion
          type="single"
          value={currentExpanded[0] ?? ""}
          onValueChange={val =>
            handleExpansionChange(typeof val === "string" && val ? [val] : [])
          }
          className={cn(mergedStyles.accordion)}
        >
          {filteredGroups.map(group => (
            <AccordionItem
              key={group.id}
              value={group.id}
              disabled={group.disabled}
              className={cn(mergedStyles.accordionItem)}
            >
              <AccordionTrigger
                id={`${group.id}-trigger`}
                className={cn(
                  mergedStyles.accordionTrigger,
                  group.disabled && "cursor-not-allowed opacity-50"
                )}
                aria-expanded={currentExpanded.includes(group.id)}
                aria-controls={`${group.id}-content`}
              >
                {renderTriggerContent(group)}
              </AccordionTrigger>
              <AccordionContent
                id={`${group.id}-content`}
                className={cn(mergedStyles.accordionContent)}
                role="region"
                aria-labelledby={`${group.id}-trigger`}
              >
                {renderGroupContent(group)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      {filteredGroups.length === 0 && searchable && searchQuery && (
        <div className="p-8 text-center text-gray-500">
          <p>{`No items found for "${searchQuery}"`}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionSelector;

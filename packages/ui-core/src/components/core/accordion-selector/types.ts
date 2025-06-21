import { ReactNode } from "react";

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

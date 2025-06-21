// packages/ui-core/src/components/core/wysiwyg-editor/toolbar-config.ts
import { ToolbarGroup } from "./types";

export const TOOLBAR_GROUPS: Record<ToolbarGroup, any[]> = {
  "text-formatting": ["bold", "italic", "underline", "strike"],
  headers: [{ header: [1, 2, 3, 4, 5, 6, false] }],
  lists: [{ list: "ordered" }, { list: "bullet" }],
  indentation: [{ indent: "-1" }, { indent: "+1" }],
  alignment: [{ align: [] }],
  colors: [{ color: [] }, { background: [] }],
  blocks: ["blockquote", "code-block"],
  "links-media": ["link", "image", "video"],
  history: ["undo", "redo"],
  clean: ["clean"],
};

export const DEFAULT_TOOLBAR_GROUPS: ToolbarGroup[] = [
  "text-formatting",
  "lists",
  "links-media",
  "clean",
];

export function buildToolbarConfig(groups: ToolbarGroup[]): any[][] {
  return groups.map(group => TOOLBAR_GROUPS[group]);
}

export const MINIMAL_TOOLBAR: ToolbarGroup[] = ["text-formatting", "clean"];

export const STANDARD_TOOLBAR: ToolbarGroup[] = [
  "text-formatting",
  "headers",
  "lists",
  "links-media",
  "clean",
];

export const ADVANCED_TOOLBAR: ToolbarGroup[] = [
  "text-formatting",
  "headers",
  "lists",
  "indentation",
  "alignment",
  "colors",
  "blocks",
  "links-media",
  "history",
  "clean",
];

export const TOOLBAR_PRESETS = {
  minimal: MINIMAL_TOOLBAR,
  standard: STANDARD_TOOLBAR,
  advanced: ADVANCED_TOOLBAR,
} as const;

export type ToolbarPreset = keyof typeof TOOLBAR_PRESETS;

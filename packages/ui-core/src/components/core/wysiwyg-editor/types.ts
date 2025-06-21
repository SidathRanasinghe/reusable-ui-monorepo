import { RangeStatic, Sources } from "quill";
import { UnprivilegedEditor } from "react-quill";

// packages/ui-core/src/components/core/wysiwyg-editor/types.ts
export type ToolbarGroup =
  | "text-formatting"
  | "lists"
  | "indentation"
  | "alignment"
  | "links-media"
  | "colors"
  | "headers"
  | "blocks"
  | "history"
  | "clean";

export interface ToolbarConfig {
  /** Enable/disable specific toolbar groups */
  groups?: ToolbarGroup[];
  /** Custom toolbar configuration (overrides groups) */
  custom?: any[][];
  /** Show/hide toolbar completely */
  show?: boolean;
}

export interface EditorTheme {
  /** Primary color for active states */
  primary?: string;
  /** Background color for toolbar */
  toolbarBg?: string;
  /** Background color for editor content */
  editorBg?: string;
  /** Border color */
  borderColor?: string;
  /** Border radius */
  borderRadius?: string;
  /** Font family for editor content */
  fontFamily?: string;
  /** Font size for editor content */
  fontSize?: string;
}

export interface WysiwygEditorProps {
  /** Current value of the editor */
  value: string;
  /** Callback when content changes */
  onChange: (value: string) => void;
  /** Callback when editor content changes (with more details) */
  onTextChange?: (delta: any, oldDelta: any, source: string) => void;
  /** Callback when selection changes */
  onSelectionChange?: (
    selection: RangeStatic,
    source: Sources,
    editor: UnprivilegedEditor
  ) => void;
  /** Additional CSS classes */
  className?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Minimum height of editor */
  minHeight?: number;
  /** Maximum height of editor */
  maxHeight?: number;
  /** Whether editor is read-only */
  readOnly?: boolean;
  /** Whether editor is disabled */
  disabled?: boolean;
  /** Toolbar configuration */
  toolbar?: ToolbarConfig;
  /** Theme customization */
  theme?: EditorTheme;
  /** Whether to show character count */
  showCharCount?: boolean;
  /** Maximum character limit */
  maxLength?: number;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Helper text */
  helperText?: string;
  /** Whether to auto focus */
  autoFocus?: boolean;
  /** Tab index */
  tabIndex?: number;
  /** ARIA label */
  "aria-label"?: string;
  /** ARIA described by */
  "aria-describedby"?: string;
}

export interface EditorRef {
  /** Get the editor instance */
  getEditor: () => any;
  /** Focus the editor */
  focus: () => void;
  /** Blur the editor */
  blur: () => void;
  /** Get current text content */
  getText: () => string;
  /** Get current HTML content */
  getHTML: () => string;
  /** Get current length */
  getLength: () => number;
  /** Insert text at current position */
  insertText: (text: string) => void;
  /** Set selection */
  setSelection: (range: any) => void;
}

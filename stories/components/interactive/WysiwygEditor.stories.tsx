import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useState, useRef } from "react";

import {
  WysiwygEditor,
  type EditorRef,
  TOOLBAR_PRESETS,
} from "@core/wysiwyg-editor";

const meta: Meta<typeof WysiwygEditor> = {
  title: "Interactive/WYSIWYG Editor",
  component: WysiwygEditor,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
## What You See is What You Get Editor

A flexible WYSIWYG editor component built on top of ReactQuill with extensive customization options.

## Features
- **Flexible Toolbar**: Configure with presets or custom toolbar groups
- **Theming**: Comprehensive theme customization
- **Character Counting**: Built-in character counting with limits
- **Accessibility**: Full ARIA support and keyboard navigation
- **Validation**: Error states and helper text
- **Responsive**: Mobile-friendly design
- **TypeScript**: Full TypeScript support with proper types

## Usage
\`\`\`tsx
import { WysiwygEditor } from '@your-org/ui-core';

function MyComponent() {
  const [value, setValue] = useState('');
  
  return (
    <WysiwygEditor
      value={value}
      onChange={setValue}
      placeholder="Start typing..."
    />
  );
}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: "text",
      description: "Current HTML content of the editor",
    },
    onChange: {
      action: "changed",
      description: "Callback when content changes",
    },
    onTextChange: {
      action: "text-changed",
      description: "Callback with detailed change information",
    },
    onSelectionChange: {
      action: "selection-changed",
      description: "Callback when text selection changes",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text when editor is empty",
    },
    minHeight: {
      control: { type: "number", min: 100, max: 800, step: 50 },
      description: "Minimum height of the editor in pixels",
    },
    maxHeight: {
      control: { type: "number", min: 200, max: 1200, step: 50 },
      description: "Maximum height of the editor in pixels",
    },
    readOnly: {
      control: "boolean",
      description: "Make the editor read-only",
    },
    disabled: {
      control: "boolean",
      description: "Disable the editor",
    },
    showCharCount: {
      control: "boolean",
      description: "Show character count",
    },
    maxLength: {
      control: { type: "number", min: 50, max: 10000, step: 50 },
      description: "Maximum character limit",
    },
    error: {
      control: "boolean",
      description: "Show error state",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display",
    },
    helperText: {
      control: "text",
      description: "Helper text to display",
    },
    autoFocus: {
      control: "boolean",
      description: "Auto focus the editor on mount",
    },
    "aria-label": {
      control: "text",
      description: "ARIA label for accessibility",
    },
    toolbar: {
      control: "object",
      description: "Toolbar configuration",
    },
    theme: {
      control: "object",
      description: "Theme customization options",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WysiwygEditor>;

// Wrapper component for controlled stories
const ControlledEditor = (args: any) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <WysiwygEditor
      {...args}
      value={value}
      onChange={newValue => {
        setValue(newValue);
        action("onChange")(newValue);
      }}
      onTextChange={action("onTextChange")}
      onSelectionChange={action("onSelectionChange")}
    />
  );
};

// Basic Stories
export const Default: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Start typing...",
    minHeight: 200,
  },
};

export const WithInitialContent: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    value:
      "<h1>Welcome to the Editor</h1><p>This is some <strong>initial content</strong> with <em>formatting</em>.</p><ul><li>List item 1</li><li>List item 2</li></ul>",
    placeholder: "Start typing...",
    minHeight: 200,
  },
};

export const ReadOnly: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    value:
      "<h2>Read-Only Content</h2><p>This content cannot be edited. The toolbar is still visible but disabled.</p><blockquote>This is a blockquote example.</blockquote>",
    readOnly: true,
    placeholder: "This is read-only",
  },
};

export const Disabled: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    value: "<p>This editor is completely disabled.</p>",
    disabled: true,
    placeholder: "Disabled editor",
  },
};

// Toolbar Configurations
export const MinimalToolbar: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Minimal toolbar with basic formatting only",
    toolbar: { groups: TOOLBAR_PRESETS.minimal },
    minHeight: 150,
  },
};

export const StandardToolbar: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Standard toolbar with common features",
    toolbar: { groups: TOOLBAR_PRESETS.standard },
    minHeight: 200,
  },
};

export const AdvancedToolbar: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Advanced toolbar with all features",
    toolbar: { groups: TOOLBAR_PRESETS.advanced },
    minHeight: 250,
  },
};

export const NoToolbar: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Editor without toolbar - content only",
    toolbar: { show: false },
    minHeight: 150,
  },
};

export const CustomToolbar: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Custom toolbar configuration",
    toolbar: {
      custom: [
        ["bold", "italic"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
    },
    minHeight: 200,
  },
};

// Size Variations
export const CompactEditor: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Compact editor",
    minHeight: 120,
    toolbar: { groups: TOOLBAR_PRESETS.minimal },
  },
};

export const TallEditor: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Tall editor with fixed height",
    minHeight: 400,
    maxHeight: 400,
  },
};

export const ResponsiveHeight: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Editor with min/max height constraints",
    minHeight: 150,
    maxHeight: 300,
  },
};

// Character Counting
export const WithCharacterCount: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Type something to see character count",
    showCharCount: true,
    minHeight: 150,
  },
};

export const WithCharacterLimit: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "This editor has a 200 character limit",
    showCharCount: true,
    maxLength: 200,
    minHeight: 150,
  },
};

// Validation States
export const WithError: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "This editor has an error state",
    error: true,
    errorMessage: "This field is required and cannot be empty.",
    minHeight: 150,
  },
};

export const WithHelperText: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Editor with helpful guidance",
    helperText:
      "You can use rich text formatting, links, and images in your content.",
    showCharCount: true,
    maxLength: 500,
    minHeight: 150,
  },
};

export const ValidationExample: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Required field with validation",
    error: true,
    errorMessage: "Content must be at least 10 characters long.",
    helperText: "Minimum 10 characters required.",
    showCharCount: true,
    maxLength: 1000,
    minHeight: 150,
  },
};

// Theme Customization
export const DarkTheme: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Dark themed editor",
    theme: {
      primary: "#60a5fa",
      borderColor: "#374151",
      toolbarBg: "#1f2937",
      editorBg: "#111827",
      fontFamily: "Inter, sans-serif",
    },
    minHeight: 200,
  },
};

export const ColorfulTheme: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Colorful themed editor",
    theme: {
      primary: "#8b5cf6",
      borderColor: "#d8b4fe",
      toolbarBg: "#f3e8ff",
      editorBg: "#fefbff",
      borderRadius: "12px",
      fontFamily: "Georgia, serif",
      fontSize: "16px",
    },
    minHeight: 200,
  },
};

export const MinimalTheme: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Clean, minimal design",
    theme: {
      primary: "#000000",
      borderColor: "#e5e7eb",
      toolbarBg: "#ffffff",
      editorBg: "#ffffff",
      borderRadius: "4px",
      fontFamily: "system-ui, sans-serif",
    },
    toolbar: { groups: TOOLBAR_PRESETS.minimal },
    minHeight: 180,
  },
};

// Advanced Features
export const WithRefExample: Story = {
  render: () => {
    const [value, setValue] = useState(
      "<p>Click the buttons to interact with the editor programmatically.</p>"
    );
    const editorRef = useRef<EditorRef>(null);

    const insertText = () => {
      editorRef.current?.insertText("\n\nInserted text via ref!");
    };

    const focusEditor = () => {
      editorRef.current?.focus();
    };

    const getContent = () => {
      const html = editorRef.current?.getHTML();
      const text = editorRef.current?.getText();
      alert(`HTML: ${html}\n\nText: ${text}`);
    };

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={insertText}
            className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
          >
            Insert Text
          </button>
          <button
            onClick={focusEditor}
            className="rounded bg-green-500 px-3 py-1 text-sm text-white hover:bg-green-600"
          >
            Focus Editor
          </button>
          <button
            onClick={getContent}
            className="rounded bg-purple-500 px-3 py-1 text-sm text-white hover:bg-purple-600"
          >
            Get Content
          </button>
        </div>
        <WysiwygEditor
          ref={editorRef}
          value={value}
          onChange={setValue}
          placeholder="Editor with ref methods"
          showCharCount
          minHeight={200}
        />
      </div>
    );
  },
};

export const AccessibilityExample: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Accessible editor with ARIA labels",
    "aria-label": "Rich text editor for article content",
    "aria-describedby": "editor-description",
    helperText:
      "Use this editor to write your article. All formatting options are keyboard accessible.",
    showCharCount: true,
    maxLength: 5000,
    minHeight: 200,
  },
};

// Performance and Edge Cases
export const LargeContentExample: Story = {
  render: args => <ControlledEditor {...args} />,
  args: {
    value: `
      <h1>Large Content Example</h1>
      ${Array.from(
        { length: 10 },
        (_, i) => `
        <h2>Section ${i + 1}</h2>
        <p>This is a paragraph with <strong>bold text</strong>, <em>italic text</em>, and <u>underlined text</u>. 
        It demonstrates how the editor handles larger amounts of content efficiently.</p>
        <ul>
          <li>List item 1 for section ${i + 1}</li>
          <li>List item 2 for section ${i + 1}</li>
          <li>List item 3 for section ${i + 1}</li>
        </ul>
        <blockquote>This is a blockquote in section ${i + 1}. It shows how quoted content appears.</blockquote>
      `
      ).join("")}
    `,
    showCharCount: true,
    minHeight: 300,
    maxHeight: 500,
  },
};

export const PlaygroundExample: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [config, setConfig] = useState({
      showCharCount: true,
      maxLength: 1000,
      minHeight: 200,
      error: false,
      readOnly: false,
      disabled: false,
      toolbarPreset: "standard" as keyof typeof TOOLBAR_PRESETS,
    });

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2 lg:grid-cols-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={config.showCharCount}
              onChange={e =>
                setConfig(prev => ({
                  ...prev,
                  showCharCount: e.target.checked,
                }))
              }
            />
            <span className="text-sm">Show Character Count</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={config.error}
              onChange={e =>
                setConfig(prev => ({ ...prev, error: e.target.checked }))
              }
            />
            <span className="text-sm">Error State</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={config.readOnly}
              onChange={e =>
                setConfig(prev => ({ ...prev, readOnly: e.target.checked }))
              }
            />
            <span className="text-sm">Read Only</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={config.disabled}
              onChange={e =>
                setConfig(prev => ({ ...prev, disabled: e.target.checked }))
              }
            />
            <span className="text-sm">Disabled</span>
          </label>

          <label className="flex flex-col space-y-1">
            <span className="text-sm font-medium">Max Length</span>
            <input
              type="number"
              value={config.maxLength}
              onChange={e =>
                setConfig(prev => ({
                  ...prev,
                  maxLength: Number(e.target.value),
                }))
              }
              className="rounded border px-2 py-1 text-sm"
              min="50"
              max="5000"
            />
          </label>

          <label className="flex flex-col space-y-1">
            <span className="text-sm font-medium">Min Height</span>
            <input
              type="number"
              value={config.minHeight}
              onChange={e =>
                setConfig(prev => ({
                  ...prev,
                  minHeight: Number(e.target.value),
                }))
              }
              className="rounded border px-2 py-1 text-sm"
              min="100"
              max="800"
            />
          </label>

          <label className="flex flex-col space-y-1">
            <span className="text-sm font-medium">Toolbar Preset</span>
            <select
              value={config.toolbarPreset}
              onChange={e =>
                setConfig(prev => ({
                  ...prev,
                  toolbarPreset: e.target.value as keyof typeof TOOLBAR_PRESETS,
                }))
              }
              className="rounded border px-2 py-1 text-sm"
            >
              <option value="minimal">Minimal</option>
              <option value="standard">Standard</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>
        </div>

        <WysiwygEditor
          value={value}
          onChange={setValue}
          placeholder="Interactive playground - configure options above"
          showCharCount={config.showCharCount}
          maxLength={config.maxLength}
          minHeight={config.minHeight}
          error={config.error}
          errorMessage={
            config.error ? "This is an example error message" : undefined
          }
          helperText="This is an interactive playground. Use the controls above to test different configurations."
          readOnly={config.readOnly}
          disabled={config.disabled}
          toolbar={{ groups: TOOLBAR_PRESETS[config.toolbarPreset] }}
        />
      </div>
    );
  },
};

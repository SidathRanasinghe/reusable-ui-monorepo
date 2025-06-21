import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import ReactQuill, { UnprivilegedEditor } from "react-quill";
import { Sources } from "quill";

import { cn } from "../../../lib/utils";

import { WysiwygEditorProps, EditorRef } from "./types";
import { buildToolbarConfig, DEFAULT_TOOLBAR_GROUPS } from "./toolbar-config";
import { CharacterCounter } from "./CharacterCounter";
import { ErrorMessage } from "./ErrorMessage";
import { HelperText } from "./HelperText";
import defaultStyles from "./styles.module.css";
import "react-quill/dist/quill.snow.css";

const WysiwygEditor = forwardRef<EditorRef, WysiwygEditorProps>(
  (
    {
      value,
      onChange,
      onTextChange,
      onSelectionChange,
      className,
      placeholder = "Start typing...",
      minHeight = 200,
      maxHeight,
      readOnly = false,
      disabled = false,
      toolbar = { groups: DEFAULT_TOOLBAR_GROUPS, show: true },
      theme,
      showCharCount = false,
      maxLength,
      error = false,
      errorMessage,
      helperText,
      autoFocus = false,
      tabIndex,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
    },
    ref
  ) => {
    const editorRef = useRef<ReactQuill>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Generate stable unique IDs for accessibility (moved to useMemo)
    const errorId = useMemo(
      () =>
        errorMessage
          ? `wysiwyg-error-${Math.random().toString(36).substr(2, 9)}`
          : undefined,
      [errorMessage]
    );

    const helperId = useMemo(
      () =>
        helperText
          ? `wysiwyg-helper-${Math.random().toString(36).substr(2, 9)}`
          : undefined,
      [helperText]
    );

    // Build toolbar configuration
    const modules = useMemo(() => {
      const config: any = {};

      if (toolbar.show !== false) {
        if (toolbar.custom) {
          config.toolbar = toolbar.custom;
        } else if (toolbar.groups) {
          config.toolbar = buildToolbarConfig(toolbar.groups);
        }
      } else {
        config.toolbar = false;
      }

      return config;
    }, [toolbar]);

    // Define supported formats
    const formats = useMemo(
      () => [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "indent",
        "align",
        "color",
        "background",
        "link",
        "image",
        "video",
        "blockquote",
        "code-block",
      ],
      []
    );

    // Apply custom theme styles
    useEffect(() => {
      if (!theme || !wrapperRef.current) return;

      const wrapper = wrapperRef.current;
      const style = wrapper.style;

      if (theme.borderColor) {
        style.setProperty("--wysiwyg-border-color", theme.borderColor);
      }
      if (theme.borderRadius) {
        style.setProperty("--wysiwyg-border-radius", theme.borderRadius);
      }
      if (theme.toolbarBg) {
        style.setProperty("--wysiwyg-toolbar-bg", theme.toolbarBg);
      }
      if (theme.editorBg) {
        style.setProperty("--wysiwyg-editor-bg", theme.editorBg);
      }
      if (theme.primary) {
        style.setProperty("--wysiwyg-primary", theme.primary);
      }
      if (theme.fontFamily) {
        style.setProperty("--wysiwyg-font-family", theme.fontFamily);
      }
      if (theme.fontSize) {
        style.setProperty("--wysiwyg-font-size", theme.fontSize);
      }
    }, [theme]);

    // Character count logic - fixed to properly track changes
    const currentLength = useMemo(() => {
      if (!showCharCount || !value) return 0;
      // Use plain text extraction for more accurate character counting
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = value;
      return tempDiv.textContent?.length || 0;
    }, [value, showCharCount]);

    // Expose editor methods via ref
    useImperativeHandle(
      ref,
      () => ({
        getEditor: () => editorRef.current?.getEditor(),
        focus: () => editorRef.current?.focus(),
        blur: () => editorRef.current?.blur(),
        getText: () => editorRef.current?.getEditor().getText() || "",
        getHTML: () => editorRef.current?.getEditor().root.innerHTML || "",
        getLength: () => editorRef.current?.getEditor().getLength() || 0,
        insertText: (text: string) => {
          const editor = editorRef.current?.getEditor();
          if (editor) {
            const range = editor.getSelection();
            editor.insertText(range?.index || 0, text);
          }
        },
        setSelection: (range: any) => {
          editorRef.current?.getEditor().setSelection(range);
        },
      }),
      []
    );

    // Handle text changes with length validation - improved
    const handleChange = useCallback(
      (
        content: string,
        delta: any,
        source: Sources,
        editor: UnprivilegedEditor
      ) => {
        // Check character limit before allowing change
        if (maxLength) {
          const textLength = editor.getText().length;
          if (textLength > maxLength) {
            // Prevent the change by reverting to previous value
            return;
          }
        }

        onChange(content);
        onTextChange?.(delta, editor.getContents(), source);
      },
      [onChange, onTextChange, maxLength]
    );

    // Handle selection changes
    const handleSelectionChange = useCallback(
      (selection: any, source: Sources, editor: UnprivilegedEditor) => {
        onSelectionChange?.(selection, source, editor);
      },
      [onSelectionChange]
    );

    const editorStyle = useMemo(
      () => ({
        minHeight: `${minHeight}px`,
        ...(maxHeight && {
          maxHeight: `${maxHeight}px`,
          overflowY: "auto" as const,
        }),
      }),
      [minHeight, maxHeight]
    );

    const describedBy = useMemo(
      () =>
        [ariaDescribedBy, errorId, helperId].filter(Boolean).join(" ") ||
        undefined,
      [ariaDescribedBy, errorId, helperId]
    );

    return (
      <div className={cn(defaultStyles.wysiwygEditorWrapper, className)}>
        <div
          ref={wrapperRef}
          className={cn(defaultStyles.wysiwygEditorContainer, {
            [defaultStyles.wysiwygEditorError]: error,
            [defaultStyles.wysiwygEditorDisabled]: disabled,
            [defaultStyles.wysiwygEditorReadonly]: readOnly,
          })}
          style={
            {
              "--wysiwyg-min-height": `${minHeight}px`,
              ...(maxHeight && { "--wysiwyg-max-height": `${maxHeight}px` }),
            } as React.CSSProperties
          }
        >
          <ReactQuill
            ref={editorRef}
            theme="snow"
            value={value}
            onChange={handleChange}
            onChangeSelection={handleSelectionChange}
            modules={modules}
            formats={formats}
            placeholder={placeholder}
            readOnly={readOnly || disabled}
            style={editorStyle}
            tabIndex={tabIndex}
            {...(autoFocus && { autoFocus: true })}
            {...(ariaLabel && { "aria-label": ariaLabel })}
            {...(describedBy && { "aria-describedby": describedBy })}
          />
        </div>

        <div className={defaultStyles.wysiwygEditorFooter}>
          {showCharCount && (
            <CharacterCounter current={currentLength} max={maxLength} />
          )}
          <ErrorMessage message={errorMessage} id={errorId} />
          <HelperText text={helperText} id={helperId} />
        </div>
      </div>
    );
  }
);

WysiwygEditor.displayName = "WysiwygEditor";

export default WysiwygEditor;

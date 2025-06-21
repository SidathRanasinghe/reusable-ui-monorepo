import { memo, useMemo } from "react";
import ReactQuill from "react-quill";

import { cn } from "@/lib/utils";
import "react-quill/dist/quill.snow.css";

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  modules?: any;
  formats?: string[];
  readOnly?: boolean;
}

export const TextEditor: React.FC<QuillEditorProps> = memo(
  ({
    value,
    onChange,
    className,
    placeholder,
    modules,
    formats,
    readOnly = false,
  }) => {
    const defaultModules = useMemo(
      () => ({
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
      }),
      []
    );

    const defaultFormats = useMemo(
      () => [
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "link",
        "image",
      ],
      []
    );

    return (
      <div className={cn("editor-wrapper", className)}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules || defaultModules}
          formats={formats || defaultFormats}
          placeholder={placeholder}
          readOnly={readOnly}
        />
      </div>
    );
  }
);

TextEditor.displayName = "TextEditor";

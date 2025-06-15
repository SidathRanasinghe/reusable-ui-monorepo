import React from 'react';
import ReactQuill from 'react-quill';

import { cn } from '../lib/utils';
import 'react-quill/dist/quill.snow.css';

export interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const RichTextEditor: React.FC<QuillEditorProps> = ({
  value,
  onChange,
  className,
  placeholder,
}) => {
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'image',
  ];

  return (
    <div className={cn('editor-wrapper', className)}>
      <ReactQuill
        theme='snow'
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  );
};

export default RichTextEditor;

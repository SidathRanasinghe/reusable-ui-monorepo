import React, { useState, useEffect, ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

export interface EditorDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (description: string) => void;
  initialValue: string;
  title?: string;
  subTitle?: string;
  mainWrapperClass?: string;
  isLoading?: boolean;
  children: ReactNode;
}

const EditorDialog: React.FC<EditorDialogProps> = ({
  isOpen,
  onClose,
  onSave,
  initialValue,
  title,
  subTitle,
  mainWrapperClass = "",
  isLoading = false,
  children,
}) => {
  const [description, setDescription] = useState<string>(initialValue);

  useEffect(() => {
    if (isOpen) {
      setDescription(initialValue);
    }
  }, [isOpen, initialValue]);

  const handleSave = () => {
    onSave(description);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm",
        mainWrapperClass
      )}
    >
      <div className="flex w-full max-w-3xl flex-col gap-y-4 rounded-lg bg-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          {(title || subTitle) && (
            <div>
              {title && (
                <p className="font-hankenGrotesk text-[13.5px] font-medium text-cadet-gray-9.5">
                  {title}
                </p>
              )}
              {subTitle && (
                <p className="font-hankenGrotesk text-caption-xxs font-medium text-cadet-gray-7">
                  {subTitle}
                </p>
              )}
            </div>
          )}
          <Button
            variant="ghost"
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100"
            type="button"
            aria-label="Close"
          >
            <X className="size-3 text-cadet-gray-7" />
          </Button>
        </div>
        <div className="relative flex w-full items-center justify-center">
          {isLoading && (
            <div className="absolute inset-0 z-50 flex size-full items-center justify-center bg-transparent backdrop-blur-sm">
              <div>Loading...</div>
            </div>
          )}
          <div className="w-full">{children}</div>
        </div>

        <div className="flex justify-end gap-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="rounded px-2 py-1 !text-caption-xxs hover:bg-cadet-gray-0.5"
            type="button"
          >
            Cancel
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSave}
            className="rounded bg-cadet-gray-8 px-2 py-1 !text-caption-xxs text-white hover:!bg-cadet-gray-9.5"
            type="button"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditorDialog;

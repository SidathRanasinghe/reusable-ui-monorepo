import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown, Info, Plus, X } from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { sql } from "@codemirror/lang-sql";

import { cn } from "../lib/utils";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Switch } from "./ui/switch";
import { Alert, AlertDescription } from "./ui/alert";
import RichTextEditor from "./RichTextEditor";

// Field types supported by the form
export type FieldType =
  | "text"
  | "textarea"
  | "richtext"
  | "select"
  | "tags"
  | "multiselect"
  | "color"
  | "richtext"
  | "select"
  | "tags"
  | "multiselect"
  | "color"
  | "url"
  | "number"
  | "date"
  | "checkbox"
  | "switch"
  | "radio"
  | "code"
  | "user-select";

// Validation rules that can be applied to fields
export type ValidationRule = {
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
};

// Options for select, multiselect, radio fields
export type FieldOption = {
  label: string;
  value: string;
  title?: string;
};

// Definition of a form field
export type DfFormField = {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  description?: string;
  defaultValue?: any;
  options?: FieldOption[];
  validation?: ValidationRule;
  width?: "full" | "half" | "third";
  info?: string;
  isRequired?: boolean;
  alertMessage?: string;
};

// Props for the DynamicForm component
export type DynamicFormProps = {
  title?: string;
  fields: DfFormField[];
  onSubmit: (data: any) => void;
  onCancel?: () => void;
  submitLabel?: string;
  cancelLabel?: string;
  defaultValues?: Record<string, any>;
  className?: string;
};

// Sample users data for user-select field type
const sampleUsers = [
  { id: "1", name: "admin", avatar: "A" },
  { id: "2", name: "Datafab", avatar: "L" },
  { id: "3", name: "John Doe", avatar: "J" },
  { id: "4", name: "Jane Smith", avatar: "J" },
];

export function DynamicForm({
  title,
  fields,
  onSubmit,
  onCancel,
  submitLabel = "Save",
  cancelLabel = "Cancel",
  defaultValues = {},
  className,
}: DynamicFormProps) {
  // Create a dynamic schema based on the fields and their validation rules
  const generateSchema = () => {
    const shape: Record<string, any> = {};

    fields.forEach(field => {
      let validator: any;

      switch (field.type) {
        case "text":
        case "textarea":
        case "richtext":
        case "url":
          validator = z.string();
          if (field.validation?.minLength)
            validator = validator.min(field.validation.minLength);
          if (field.validation?.maxLength)
            validator = validator.max(field.validation.maxLength);
          if (field.validation?.pattern)
            validator = validator.regex(field.validation.pattern);
          break;
        case "number":
          validator = z.number();
          if (field.validation?.min)
            validator = validator.min(field.validation.min);
          if (field.validation?.max)
            validator = validator.max(field.validation.max);
          break;
        case "checkbox":
          validator = z.boolean();
          break;
        case "switch":
          validator = z.boolean();
          break;
        case "select":
        case "radio":
          validator = z.string();
          break;
        case "multiselect":
          validator = z.array(z.string());
          break;
        case "user-select":
          validator = z.array(z.string());
          break;
        case "date":
          validator = z.date();
          break;
        case "color":
          validator = z.string();
          break;
        case "tags":
          validator = z.array(z.any());
          break;
        case "code":
          validator = z.string();
          break;
        default:
          validator = z.string();
      }

      // Add required validation if specified
      if (field.validation?.required || field.isRequired) {
        validator = validator.nonempty({
          message: `${field.label} is required`,
        });
      } else {
        validator = validator.optional();
      }

      shape[field.name] = validator;
    });

    return z.object(shape);
  };

  const formSchema = generateSchema();

  // Initialize the form with react-hook-form and zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // Handle form submission
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    onSubmit(data);
  };

  // Add this inside your DynamicForm component
  React.useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      // When language field changes, trigger rerender of code editor
      if (name === "language" && fields.some(f => f.type === "code")) {
        // Force re-render of the code field
        const codeValue = form.getValues("code");
        form.setValue("code", codeValue);
      }
    });

    return () => subscription.unsubscribe();
  }, [form, fields]);

  // Render different field types
  const renderField = (field: DfFormField) => {
    const fieldWidth =
      field.width === "half"
        ? "w-1/2"
        : field.width === "third"
          ? "w-1/3"
          : "w-full";

    return (
      <FormField
        key={field.name}
        control={form.control}
        name={field.name}
        render={({ field: formField }) => (
          <FormItem className={fieldWidth}>
            <div className="flex items-center gap-1">
              {field.isRequired && <span className="text-red-500">*</span>}
              <FormLabel>{field.label}</FormLabel>
              {field.info && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Info className="size-4 cursor-pointer text-muted-foreground" />
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <p className="text-sm">{field.info}</p>
                  </PopoverContent>
                </Popover>
              )}
            </div>
            <FormControl>{renderFieldControl(field, formField)}</FormControl>
            {field.description && (
              <FormDescription>{field.description}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };

  // Render the appropriate control for each field type
  const renderFieldControl = (field: DfFormField, formField: any) => {
    switch (field.type) {
      case "text":
      case "url":
        return (
          <Input
            placeholder={field.placeholder}
            {...formField}
            className={"text-caption-xs"}
            size={"xs"}
          />
        );
      case "textarea":
        return (
          <Textarea
            placeholder={field.placeholder}
            value={formField.value || ""}
            onChange={formField.onChange}
            onBlur={formField.onBlur}
            name={formField.name}
            ref={formField.ref}
          />
        );
      case "richtext":
        return (
          <div className="rounded-md border">
            <RichTextEditor
              onChange={formField.onChange}
              value={formField.value || ""}
              placeholder={field.placeholder || "Write your content..."}
            />
          </div>
        );
      case "select":
        return (
          <Select
            onValueChange={formField.onChange}
            defaultValue={formField.value}
          >
            <SelectTrigger>
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent className={"z-[999]"}>
              {field.options?.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option?.title && (
                    <div className={"text-caption-xs capitalize text-gray-600"}>
                      {option?.title}
                    </div>
                  )}
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "color":
        return (
          <div className="flex items-center rounded-md border border-grey-300">
            <Input
              type={"color"}
              {...formField}
              className={"w-[150px] border-none"}
            />
            <Input
              type="text"
              placeholder="Select or enter HEX color code."
              className={
                "border-none text-caption-xs !outline-none ring-0 focus-visible:ring-0"
              }
              {...formField}
            />
          </div>
        );
      case "switch":
        return (
          <div className="flex flex-col items-start rounded-md">
            <Switch
              {...formField}
              checked={formField?.value}
              onCheckedChange={formField.onChange}
            />
            {formField?.name === "mutuallyExclusive" &&
              formField?.value === true && (
                <div className={"mt-2 text-caption-xs"}>
                  <Alert variant="default">
                    {/*<CircleAlert className="size-4" />*/}
                    <AlertDescription className={"text-caption-xs"}>
                      {formField?.alertMessage ||
                        ` If you enable "Mutually Exclusive" for a Classification, users will be
                    restricted to using only one Tag to apply to a data asset. Once this option is
                    activated, it cannot be deactivated.`}
                    </AlertDescription>
                  </Alert>
                </div>
              )}
          </div>
        );
      case "code": {
        // Get language from context if available
        const language = form.getValues("language") || "JavaScript";
        const getLanguageExtension = (lang: string) => {
          switch (lang) {
            case "JavaScript":
              return javascript();
            case "Python":
              return python();
            case "SQL":
              return sql();
            default:
              return javascript();
          }
        };

        return (
          <div className="w-full overflow-hidden rounded-md border">
            <CodeMirror
              value={formField.value || ""}
              height="200px"
              extensions={[getLanguageExtension(language)]}
              onChange={value => formField.onChange(value)}
              className="font-mono text-sm"
            />
          </div>
        );
      }
      case "user-select": {
        // Use a ref to track if this is the initial render
        const UserSelectField = () => {
          const [open, setOpen] = useState(false);
          const [selectedUsers, setSelectedUsers] = useState<string[]>(
            formField.value || []
          );

          // Only update the form field when selectedUsers changes
          // and not on every render of the component
          const handleUserSelection = (userId: string) => {
            setSelectedUsers(prev => {
              const newSelection = prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId];

              // Update the form field directly here
              formField.onChange(newSelection);
              return newSelection;
            });
          };

          return (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="justify-between"
                  onClick={() => setOpen(!open)}
                  type="button"
                >
                  Select users
                  <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  onClick={() => {
                    // Add user logic
                  }}
                >
                  <Plus className="size-4" />
                </Button>
              </div>

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <div />
                </PopoverTrigger>
                <PopoverContent className="z-[500] p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Search for User" />
                    <CommandList>
                      <CommandEmpty>No user found.</CommandEmpty>
                      <CommandGroup>
                        <div className="flex justify-between px-2 py-1.5">
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 text-xs"
                              onClick={() => {
                                setSelectedUsers([]);
                                formField.onChange([]);
                              }}
                            >
                              Clear all
                            </Button>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 text-xs"
                              onClick={() => setOpen(false)}
                            >
                              Cancel
                            </Button>
                            <Button
                              size="sm"
                              className="h-8 text-xs"
                              onClick={() => setOpen(false)}
                            >
                              Update
                            </Button>
                          </div>
                        </div>
                        {sampleUsers.map(user => (
                          <CommandItem
                            key={user.id}
                            value={user.name}
                            onSelect={() => handleUserSelection(user.id)}
                          >
                            <div className="flex w-full items-center gap-2">
                              <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                                {user.avatar}
                              </div>
                              <span>{user.name}</span>
                              <Check
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  selectedUsers.includes(user.id)
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              {selectedUsers.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedUsers.map(userId => {
                    const user = sampleUsers.find(u => u.id === userId);
                    if (!user) return null;

                    return (
                      <div
                        key={userId}
                        className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-sm text-secondary-foreground"
                      >
                        <div className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                          {user.avatar}
                        </div>
                        <span>{user.name}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-1 size-4 p-0"
                          onClick={() => handleUserSelection(userId)}
                        >
                          <X className="size-3" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        };

        return <UserSelectField />;
      }
      default:
        return <Input placeholder={field.placeholder} {...formField} />;
    }
  };

  return (
    <Card className={className}>
      {title && (
        <CardHeader className={"pl-0 pt-0 capitalize"}>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent className="space-y-4 p-0">
            <div className="flex flex-wrap gap-4">
              {fields.map(renderField)}
            </div>
          </CardContent>
          <CardFooter className="mt-4 flex justify-end gap-2">
            {onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className={"h-8 px-4 py-1"}
              >
                {cancelLabel}
              </Button>
            )}
            <Button type="submit" className={"h-8 px-4 py-1"}>
              {submitLabel}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { useForm, UseFormReturn, PathValue, Path } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, AlertCircle } from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { sql } from "@codemirror/lang-sql";
import { json } from "@codemirror/lang-json";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Switch } from "../../ui/switch";
import { Alert, AlertDescription } from "../../ui/alert";
import { Checkbox } from "../../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import { cn } from "../../../lib/utils";

// ==================== CORE TYPES ====================

export type FieldType =
  | "text"
  | "email"
  | "password"
  | "url"
  | "tel"
  | "search"
  | "textarea"
  | "richtext"
  | "select"
  | "multiselect"
  | "tags"
  | "color"
  | "number"
  | "range"
  | "date"
  | "datetime-local"
  | "time"
  | "month"
  | "week"
  | "checkbox"
  | "switch"
  | "radio"
  | "code"
  | "json"
  | "file"
  | "user-select"
  | "custom";

export type ValidationRule = {
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
  url?: boolean;
  custom?: (value: any) => boolean | string;
  customMessage?: string;
};

export type FieldOption = {
  label: string;
  value: string | number;
  title?: string;
  description?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export type User = {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  role?: string;
  [key: string]: any;
};

export type FieldSize = "sm" | "md" | "lg";
export type FieldVariant = "default" | "ghost" | "outline";
export type FieldWidth = "full" | "half" | "third" | "quarter" | "auto";

export interface CustomFieldRenderer<T = any> {
  (props: {
    field: DfFormField;
    formField: any;
    form: UseFormReturn<any>;
    value: T;
    onChange: (value: T) => void;
    error?: string;
  }): React.ReactElement;
}

export interface ConditionalLogic {
  field: string;
  operator:
    | "equals"
    | "not_equals"
    | "contains"
    | "not_contains"
    | "greater_than"
    | "less_than";
  value: any;
}

export interface FieldDependency {
  dependsOn: string;
  condition: ConditionalLogic[];
  action: "show" | "hide" | "enable" | "disable" | "require";
}

export interface DfFormField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  description?: string;
  defaultValue?: any;
  options?: FieldOption[];
  validation?: ValidationRule;
  width?: FieldWidth;
  size?: FieldSize;
  variant?: FieldVariant;
  info?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  alertMessage?: string;
  className?: string;
  containerClassName?: string;
  dependencies?: FieldDependency[];
  customRenderer?: CustomFieldRenderer;

  // Field-specific props
  codeLanguage?: string;
  richTextModules?: any;
  richTextFormats?: string[];
  fileAccept?: string;
  fileMultiple?: boolean;
  rangeMin?: number;
  rangeMax?: number;
  rangeStep?: number;
  users?: User[];

  // Event handlers
  onChange?: (value: any, form: UseFormReturn<any>) => void;
  onBlur?: (value: any, form: UseFormReturn<any>) => void;
  onFocus?: (value: any, form: UseFormReturn<any>) => void;
}

export interface FormLayout {
  columns?: number;
  gap?: string;
  responsive?: boolean;
}

export interface FormTheme {
  primaryColor?: string;
  borderRadius?: string;
  fontSize?: string;
  spacing?: string;
}

export interface FormCallbacks {
  onSubmit: (data: any, form: UseFormReturn<any>) => void | Promise<void>;
  onCancel?: () => void;
  onChange?: (data: any, form: UseFormReturn<any>) => void;
  onValidationError?: (errors: any, form: UseFormReturn<any>) => void;
  onFieldChange?: (
    fieldName: string,
    value: any,
    form: UseFormReturn<any>
  ) => void;
}

export interface DynamicFormProps {
  title?: string;
  description?: string;
  fields: DfFormField[];
  callbacks: FormCallbacks;
  submitLabel?: string;
  cancelLabel?: string;
  resetLabel?: string;
  defaultValues?: Record<string, any>;
  className?: string;
  layout?: FormLayout;
  theme?: FormTheme;
  showReset?: boolean;
  showCancel?: boolean;
  loading?: boolean;
  disabled?: boolean;
  mode?: "create" | "edit" | "view";
  autoSave?: boolean;
  autoSaveDelay?: number;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  showFieldErrors?: boolean;
  showSummaryErrors?: boolean;
}

export interface DynamicFormRef {
  submit: () => void;
  reset: () => void;
  setValue: (name: string, value: any) => void;
  getValue: (name: string) => any;
  getValues: () => any;
  clearErrors: () => void;
  setError: (name: string, error: { message: string }) => void;
  validate: () => Promise<boolean>;
  form: UseFormReturn<any>;
}

// ==================== RICH TEXT EDITOR ====================

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  modules?: any;
  formats?: string[];
  readOnly?: boolean;
}

const TextEditor: React.FC<QuillEditorProps> = React.memo(
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

// ==================== UTILITY FUNCTIONS ====================

const getCodeLanguageExtension = (language: string) => {
  switch (language.toLowerCase()) {
    case "javascript":
    case "js":
      return javascript();
    case "python":
    case "py":
      return python();
    case "sql":
      return sql();
    case "json":
      return json();
    case "css":
      return css();
    case "html":
      return html();
    default:
      return javascript();
  }
};

const evaluateCondition = (
  condition: ConditionalLogic,
  formData: any
): boolean => {
  const fieldValue = formData[condition.field];

  switch (condition.operator) {
    case "equals":
      return fieldValue === condition.value;
    case "not_equals":
      return fieldValue !== condition.value;
    case "contains":
      return Array.isArray(fieldValue)
        ? fieldValue.includes(condition.value)
        : String(fieldValue).includes(condition.value);
    case "not_contains":
      return Array.isArray(fieldValue)
        ? !fieldValue.includes(condition.value)
        : !String(fieldValue).includes(condition.value);
    case "greater_than":
      return Number(fieldValue) > Number(condition.value);
    case "less_than":
      return Number(fieldValue) < Number(condition.value);
    default:
      return true;
  }
};

const shouldShowField = (field: DfFormField, formData: any): boolean => {
  if (!field.dependencies?.length) return true;

  return field.dependencies.every(dep => {
    const conditionsMet = dep.condition.every(cond =>
      evaluateCondition(cond, formData)
    );
    return dep.action === "show" ? conditionsMet : !conditionsMet;
  });
};

// ==================== MAIN COMPONENT ====================

export const DynamicForm = forwardRef<DynamicFormRef, DynamicFormProps>(
  (
    {
      title,
      description,
      fields,
      callbacks,
      submitLabel = "Submit",
      cancelLabel = "Cancel",
      resetLabel = "Reset",
      defaultValues = {},
      className,
      layout = { columns: 1, gap: "1rem", responsive: true },
      theme = {},
      showReset = false,
      showCancel = false,
      loading = false,
      disabled = false,
      mode = "create",
      autoSave = false,
      autoSaveDelay = 1000,
      validateOnChange = false,
      validateOnBlur = true,
      showFieldErrors = true,
      showSummaryErrors = false,
    },
    ref
  ) => {
    const autoSaveTimeoutRef = useRef<number | null>(null);
    const lastAutoSaveDataRef = useRef<any>(null);

    // Generate dynamic Zod schema - memoized to prevent re-creation
    const formSchema = useMemo(() => {
      const shape: Record<string, any> = {};

      fields.forEach(field => {
        let validator: any;

        switch (field.type) {
          case "text":
          case "email":
          case "password":
          case "url":
          case "tel":
          case "search":
          case "textarea":
          case "richtext":
            validator = z.string();
            if (field.validation?.email) validator = validator.email();
            if (field.validation?.url) validator = validator.url();
            if (field.validation?.minLength)
              validator = validator.min(field.validation.minLength);
            if (field.validation?.maxLength)
              validator = validator.max(field.validation.maxLength);
            if (field.validation?.pattern)
              validator = validator.regex(field.validation.pattern);
            break;
          case "number":
          case "range":
            validator = z.number();
            if (field.validation?.min !== undefined)
              validator = validator.min(field.validation.min);
            if (field.validation?.max !== undefined)
              validator = validator.max(field.validation.max);
            break;
          case "checkbox":
          case "switch":
            validator = z.boolean();
            break;
          case "select":
          case "radio":
            validator = z.string();
            break;
          case "multiselect":
          case "tags":
          case "user-select":
            validator = z.array(z.string());
            break;
          case "date":
          case "datetime-local":
          case "time":
          case "month":
          case "week":
            validator = z.string();
            break;
          case "color":
            validator = z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
            break;
          case "code":
          case "json":
            validator = z.string();
            break;
          case "file":
            validator = z.any();
            break;
          default:
            validator = z.string();
        }

        // Apply required validation
        if (field.validation?.required || field.isRequired) {
          if (field.type === "checkbox" || field.type === "switch") {
            validator = validator.refine(val => val === true, {
              message:
                field.validation?.customMessage || `${field.label} is required`,
            });
          } else if (
            field.type === "multiselect" ||
            field.type === "tags" ||
            field.type === "user-select"
          ) {
            validator = validator.min(1, {
              message:
                field.validation?.customMessage || `${field.label} is required`,
            });
          } else {
            validator = validator.min(1, {
              message:
                field.validation?.customMessage || `${field.label} is required`,
            });
          }
        } else {
          validator = validator.optional();
        }

        // Add custom validation
        if (field.validation?.custom) {
          validator = validator.refine(field.validation.custom, {
            message:
              field.validation.customMessage || `${field.label} is invalid`,
          });
        }

        shape[field.name] = validator;
      });

      return z.object(shape);
    }, [fields]);

    // Initialize form
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues,
      mode: validateOnChange
        ? "onChange"
        : validateOnBlur
          ? "onBlur"
          : "onSubmit",
    });

    // Watch form data for conditional logic and auto-save
    const watchedData = form.watch();

    // Memoized callbacks to prevent re-renders
    const memoizedCallbacks = useMemo(
      () => ({
        onSubmit: callbacks.onSubmit,
        onChange: callbacks.onChange,
        onCancel: callbacks.onCancel,
        onFieldChange: callbacks.onFieldChange,
        onValidationError: callbacks.onValidationError,
      }),
      [callbacks]
    );

    // Handle auto-save with proper cleanup and data comparison
    useEffect(() => {
      if (!autoSave || !memoizedCallbacks.onChange) return;

      // Don't trigger auto-save if data hasn't changed
      if (
        JSON.stringify(watchedData) ===
        JSON.stringify(lastAutoSaveDataRef.current)
      ) {
        return;
      }

      // Clear existing timeout
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
        autoSaveTimeoutRef.current = null;
      }

      // Set new timeout
      autoSaveTimeoutRef.current = window.setTimeout(() => {
        lastAutoSaveDataRef.current = watchedData;
        memoizedCallbacks.onChange(watchedData, form);
      }, autoSaveDelay);

      // Cleanup function
      return () => {
        if (autoSaveTimeoutRef.current) {
          clearTimeout(autoSaveTimeoutRef.current);
          autoSaveTimeoutRef.current = null;
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      watchedData,
      autoSave,
      autoSaveDelay,
      memoizedCallbacks.onChange,
      form,
    ]);

    // Handle form submission
    const handleSubmit = useCallback(
      async (data: any) => {
        try {
          await memoizedCallbacks.onSubmit(data, form);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error("Form submission error:", error);
          memoizedCallbacks.onValidationError?.(error, form);
        }
      },
      [memoizedCallbacks, form]
    );

    // Handle form reset
    const handleReset = useCallback(() => {
      form.reset(defaultValues);
      lastAutoSaveDataRef.current = defaultValues;
    }, [form, defaultValues]);

    // Expose form methods via ref
    useImperativeHandle(
      ref,
      () => ({
        submit: () => form.handleSubmit(handleSubmit)(),
        reset: handleReset,
        setValue: (name: string, value: any) =>
          form.setValue(name as Path<any>, value as PathValue<any, Path<any>>),
        getValue: (name: string) => form.getValues(name as Path<any>),
        getValues: () => form.getValues(),
        clearErrors: () => form.clearErrors(),
        setError: (name: string, error: { message: string }) =>
          form.setError(name as Path<any>, error),
        validate: () => form.trigger(),
        form,
      }),
      [form, handleSubmit, handleReset]
    );

    // Field change handler - memoized to prevent re-renders
    const handleFieldChange = useCallback(
      (fieldName: string, value: any) => {
        memoizedCallbacks.onFieldChange?.(fieldName, value, form);

        const field = fields.find(f => f.name === fieldName);
        field?.onChange?.(value, form);
      },
      [memoizedCallbacks, form, fields]
    );

    // Render field control - memoized to prevent unnecessary re-renders
    const renderFieldControl = useCallback(
      (field: DfFormField, formField: any) => {
        if (field.customRenderer) {
          return field.customRenderer({
            field,
            formField,
            form,
            value: formField.value,
            onChange: formField.onChange,
            error: form.formState.errors[field.name]?.message as string,
          });
        }

        const baseProps = {
          ...formField,
          disabled: disabled || field.isDisabled || loading,
          readOnly: field.isReadOnly || mode === "view",
          className: cn(field.className),
          placeholder: field.placeholder,
          onChange: (value: any) => {
            formField.onChange(value);
            handleFieldChange(field.name, value);
          },
        };

        switch (field.type) {
          case "text":
          case "email":
          case "password":
          case "url":
          case "tel":
          case "search":
            return (
              <Input
                type={field.type}
                {...baseProps}
                size={field.size || "md"}
              />
            );

          case "textarea":
            return <Textarea {...baseProps} rows={4} />;

          case "richtext":
            return (
              <div className="rounded-md border">
                <TextEditor
                  value={formField.value || ""}
                  onChange={baseProps.onChange}
                  placeholder={field.placeholder}
                  modules={field.richTextModules}
                  formats={field.richTextFormats}
                  readOnly={baseProps.readOnly}
                />
              </div>
            );

          case "number":
            return (
              <Input
                type="number"
                min={field.validation?.min}
                max={field.validation?.max}
                {...baseProps}
              />
            );

          case "range":
            return (
              <div className="space-y-2">
                <Input
                  type="range"
                  min={field.rangeMin || field.validation?.min || 0}
                  max={field.rangeMax || field.validation?.max || 100}
                  step={field.rangeStep || 1}
                  {...baseProps}
                />
                <div className="text-center text-sm text-muted-foreground">
                  {formField.value || field.rangeMin || 0}
                </div>
              </div>
            );

          case "date":
          case "datetime-local":
          case "time":
          case "month":
          case "week":
            return <Input type={field.type} {...baseProps} />;

          case "select":
            return (
              <Select
                onValueChange={baseProps.onChange}
                defaultValue={formField.value}
                disabled={baseProps.disabled}
              >
                <SelectTrigger>
                  <SelectValue placeholder={field.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {field.options?.map(option => (
                    <SelectItem
                      key={option.value}
                      value={String(option.value)}
                      disabled={option.disabled}
                    >
                      <div className="flex items-center gap-2">
                        {option.icon}
                        <div>
                          <div>{option.label}</div>
                          {option.description && (
                            <div className="text-xs text-muted-foreground">
                              {option.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );

          case "radio":
            return (
              <RadioGroup
                onValueChange={baseProps.onChange}
                defaultValue={formField.value}
                disabled={baseProps.disabled}
              >
                {field.options?.map(option => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      value={String(option.value)}
                      id={`${field.name}-${option.value}`}
                    />
                    <Label htmlFor={`${field.name}-${option.value}`}>
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            );

          case "checkbox":
            return (
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={formField.value || false}
                  onCheckedChange={baseProps.onChange}
                  disabled={baseProps.disabled}
                  id={field.name}
                />
                <Label htmlFor={field.name}>{field.label}</Label>
              </div>
            );

          case "switch":
            return (
              <div className="flex flex-col gap-2">
                <Switch
                  checked={formField.value || false}
                  onCheckedChange={baseProps.onChange}
                  disabled={baseProps.disabled}
                />
                {field.alertMessage && formField.value && (
                  <Alert>
                    <AlertCircle className="size-4" />
                    <AlertDescription className="text-sm">
                      {field.alertMessage}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            );

          case "color":
            return (
              <div className="flex items-center gap-2">
                <Input type="color" {...baseProps} className="h-10 w-20" />
                <Input type="text" {...baseProps} className="flex-1" />
              </div>
            );

          case "code":
            return (
              <div className="overflow-hidden rounded-md border">
                <CodeMirror
                  value={formField.value || ""}
                  height="200px"
                  extensions={[
                    getCodeLanguageExtension(
                      field.codeLanguage || "javascript"
                    ),
                  ]}
                  onChange={baseProps.onChange}
                  readOnly={baseProps.readOnly}
                  editable={!baseProps.disabled && !baseProps.readOnly}
                />
              </div>
            );

          case "file":
            return (
              <Input
                type="file"
                accept={field.fileAccept}
                multiple={field.fileMultiple}
                {...baseProps}
                onChange={e => {
                  const files = e.target.files;
                  baseProps.onChange(field.fileMultiple ? files : files?.[0]);
                }}
              />
            );

          default:
            return <Input {...baseProps} />;
        }
      },
      [disabled, loading, mode, form, handleFieldChange]
    );

    // Render individual field - memoized
    const renderField = useCallback(
      (field: DfFormField) => {
        if (!shouldShowField(field, watchedData)) return null;

        const fieldWidth =
          field.width === "half"
            ? "w-1/2"
            : field.width === "third"
              ? "w-1/3"
              : field.width === "quarter"
                ? "w-1/4"
                : field.width === "auto"
                  ? "w-auto"
                  : "w-full";

        return (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem className={cn(fieldWidth, field.containerClassName)}>
                <div className="flex items-center gap-1">
                  {field.isRequired && (
                    <span className="text-destructive">*</span>
                  )}
                  <FormLabel>{field.label}</FormLabel>
                  {field.info && (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Info className="size-4 cursor-pointer text-muted-foreground hover:text-foreground" />
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <p className="text-sm">{field.info}</p>
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
                <FormControl>
                  {renderFieldControl(field, formField)}
                </FormControl>
                {field.description && (
                  <FormDescription>{field.description}</FormDescription>
                )}
                {showFieldErrors && <FormMessage />}
              </FormItem>
            )}
          />
        );
      },
      [watchedData, form.control, renderFieldControl, showFieldErrors]
    );

    // Memoize grid classes to prevent re-calculations
    const gridCols = useMemo(() => {
      return layout.responsive
        ? `grid-cols-1 md:grid-cols-${Math.min(layout.columns || 1, 4)}`
        : `grid-cols-${layout.columns || 1}`;
    }, [layout.responsive, layout.columns]);

    // Memoize form errors to prevent unnecessary re-renders
    const formErrors = useMemo(() => {
      return Object.entries(form.formState.errors);
    }, [form.formState.errors]);

    return (
      <Card className={className} style={theme}>
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </CardHeader>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} noValidate>
            <CardContent className="space-y-6">
              {showSummaryErrors && formErrors.length > 0 && (
                <Alert variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>
                    Please fix the following errors:
                    <ul className="mt-2 list-inside list-disc">
                      {formErrors.map(([key, error]) => (
                        <li key={key}>{error?.message as string}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}

              <div
                className={cn("grid gap-4", gridCols)}
                style={{ gap: layout.gap }}
              >
                {fields.map(renderField)}
              </div>
            </CardContent>

            <CardFooter className="flex justify-end gap-2">
              {showReset && (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleReset}
                  disabled={loading}
                >
                  {resetLabel}
                </Button>
              )}
              {showCancel && memoizedCallbacks.onCancel && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={memoizedCallbacks.onCancel}
                  disabled={loading}
                >
                  {cancelLabel}
                </Button>
              )}
              <Button
                type="submit"
                variant="default"
                disabled={loading || disabled}
              >
                {submitLabel}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    );
  }
);

DynamicForm.displayName = "DynamicForm";

export default DynamicForm;

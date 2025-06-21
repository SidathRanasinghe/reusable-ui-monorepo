import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { useForm, PathValue, Path } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, AlertCircle } from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";

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

import { DfFormField, DynamicFormProps, DynamicFormRef } from "./types";
import { TextEditor } from "./TextEditor";
import { getCodeLanguageExtension, shouldShowField } from "./utils";

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

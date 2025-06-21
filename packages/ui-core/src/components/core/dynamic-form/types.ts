import { UseFormReturn } from "react-hook-form";

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

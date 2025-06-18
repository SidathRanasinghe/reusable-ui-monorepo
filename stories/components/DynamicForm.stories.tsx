import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";

import {
  DynamicForm,
  DynamicFormRef,
} from "../../packages/ui-core/src/components/core/dynamic-form/DynamicForm";
import { Input } from "../../packages/ui-core/src/components/ui/input";
import { Button } from "../../packages/ui-core/src/components/ui/button";
import { CATEGORY } from "../common/constants";

const meta: Meta<typeof DynamicForm> = {
  title: `${CATEGORY.FORMS}/Dynamic Form`,
  component: DynamicForm,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
### 🚀 New Features & Enhancements

- **20+ Field Types**: Including email, password, tel, search, range, file upload, JSON editor
- **Advanced Validation**: Email, URL, custom patterns, conditional validation
- **Conditional Logic**: Show/hide/enable/disable fields based on other field values
- **Auto-save**: Configurable auto-save with customizable delay
- **Multiple Modes**: Create, Edit, View modes with appropriate restrictions
- **Enhanced UX**: Loading states, field sizes, variants, better error handling
- **Custom Renderers**: Completely custom field rendering capability
- **Form API**: Imperative API via ref for external control
- **Responsive Layout**: Configurable grid system with responsive breakpoints
- **Theming**: Customizable themes and styling
- **TypeScript**: Strict typing throughout with advanced generics

### 📚 Usage Examples

\`\`\`tsx
// Basic usage
const form = useRef<DynamicFormRef>(null);

<DynamicForm
  ref={form}
  title="Contact Form"
  fields={fields}
  callbacks={{
    onSubmit: (data) => console.log(data),
    onChange: (data) => console.log("Auto-save:", data),
  }}
  autoSave
  validateOnChange
/>

// Programmatic control
form.current?.setValue("email", "user@example.com");
form.current?.submit();
\`\`\`

*This component replaces entire form libraries with a single, flexible solution.*
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["create", "edit", "view"],
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    autoSave: {
      control: { type: "boolean" },
    },
    validateOnChange: {
      control: { type: "boolean" },
    },
    showFieldErrors: {
      control: { type: "boolean" },
    },
    showSummaryErrors: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ==================== BASIC FORMS ====================

export const BasicContactForm: Story = {
  args: {
    title: "Contact Information",
    description: "Please fill out your contact details",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter your first name",
        validation: { required: true, minLength: 2 },
        width: "half",
        isRequired: true,
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Enter your last name",
        validation: { required: true, minLength: 2 },
        width: "half",
        isRequired: true,
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "john@example.com",
        validation: { required: true, email: true },
        isRequired: true,
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "+1 (555) 123-4567",
        width: "half",
      },
      {
        name: "website",
        label: "Website",
        type: "url",
        placeholder: "https://example.com",
        width: "half",
        validation: { url: true },
      },
      {
        name: "role",
        label: "Role",
        type: "select",
        placeholder: "Select your role",
        options: [
          {
            label: "Frontend Developer",
            value: "frontend",
            description: "UI/UX focused development",
          },
          {
            label: "Backend Developer",
            value: "backend",
            description: "Server-side development",
          },
          {
            label: "Full Stack Developer",
            value: "fullstack",
            description: "End-to-end development",
          },
          {
            label: "DevOps Engineer",
            value: "devops",
            description: "Infrastructure and deployment",
          },
        ],
        isRequired: true,
      },
      {
        name: "bio",
        label: "Biography",
        type: "textarea",
        placeholder: "Tell us about yourself...",
        description: "Brief description of your experience and interests",
        validation: { maxLength: 500 },
      },
      {
        name: "newsletter",
        label: "Subscribe to Newsletter",
        type: "checkbox",
        defaultValue: false,
      },
    ],
    callbacks: {
      onSubmit: action("Form Submitted"),
      onCancel: action("Form Cancelled"),
      onChange: action("Form Changed"),
      onFieldChange: action("Field Changed"),
    },
    submitLabel: "Submit Application",
    showCancel: true,
    showReset: true,
    validateOnBlur: true,
    showFieldErrors: true,
    layout: { columns: 2, responsive: true },
  },
};

// ==================== ADVANCED FORM ====================

export const AdvancedForm: Story = {
  args: {
    title: "Advanced Form Showcase",
    description: "Demonstrating all field types and advanced features",
    fields: [
      {
        name: "projectName",
        label: "Project Name",
        type: "text",
        placeholder: "Enter project name",
        validation: { required: true, minLength: 3 },
        isRequired: true,
        info: "This will be the display name for your project",
      },
      {
        name: "priority",
        label: "Priority Level",
        type: "range",
        rangeMin: 1,
        rangeMax: 10,
        rangeStep: 1,
        defaultValue: 5,
        description: "Set the priority level (1-10)",
      },
      {
        name: "dueDate",
        label: "Due Date",
        type: "date",
        validation: { required: true },
        isRequired: true,
      },
      {
        name: "category",
        label: "Category",
        type: "radio",
        options: [
          { label: "Web Development", value: "web" },
          { label: "Mobile App", value: "mobile" },
          { label: "Desktop Software", value: "desktop" },
          { label: "API Development", value: "api" },
        ],
        validation: { required: true },
        isRequired: true,
      },
      {
        name: "technologies",
        label: "Technologies",
        type: "multiselect",
        options: [
          { label: "React", value: "react" },
          { label: "Vue.js", value: "vue" },
          { label: "Angular", value: "angular" },
          { label: "Node.js", value: "nodejs" },
          { label: "Python", value: "python" },
          { label: "TypeScript", value: "typescript" },
        ],
        description: "Select all applicable technologies",
      },
      {
        name: "language",
        label: "Programming Language",
        type: "select",
        options: [
          { label: "JavaScript", value: "javascript" },
          { label: "Python", value: "python" },
          { label: "SQL", value: "sql" },
          { label: "JSON", value: "json" },
        ],
        defaultValue: "javascript",
        width: "half",
      },
      {
        name: "themeColor",
        label: "Theme Color",
        type: "color",
        defaultValue: "#3b82f6",
        width: "half",
      },
      {
        name: "code",
        label: "Code Snippet",
        type: "code",
        codeLanguage: "javascript",
        placeholder: "// Enter your code here...",
        description: "Add a code example or snippet",
        dependencies: [
          {
            dependsOn: "language",
            condition: [
              { field: "language", operator: "not_equals", value: "" },
            ],
            action: "show",
          },
        ],
      },
      {
        name: "description",
        label: "Project Description",
        type: "richtext",
        placeholder: "Describe your project in detail...",
        validation: { required: true },
        isRequired: true,
      },
      {
        name: "isPublic",
        label: "Make Project Public",
        type: "switch",
        defaultValue: false,
        alertMessage:
          "Public projects are visible to all users and cannot be made private later.",
      },
      {
        name: "attachments",
        label: "Project Files",
        type: "file",
        fileAccept: ".pdf,.doc,.docx,.txt",
        fileMultiple: true,
        description: "Upload relevant documents",
      },
    ],
    callbacks: {
      onSubmit: action("Advanced Form Submitted"),
      onChange: action("Form Auto-saved"),
      onFieldChange: (field, value) => {
        action("Field Changed")(field, value);
        // Simulate dynamic code language switching
        if (field === "language") {
          // This would update the code field's language in a real implementation
          console.log(`Code language switched to: ${value}`);
        }
      },
    },
    autoSave: true,
    autoSaveDelay: 2000,
    validateOnChange: true,
    showFieldErrors: true,
    showSummaryErrors: true,
    layout: { columns: 2, responsive: true },
  },
};

// ==================== CONDITIONAL LOGIC ====================

export const ConditionalForm: Story = {
  args: {
    title: "Conditional Logic Demo",
    description: "Fields that show/hide based on other field values",
    fields: [
      {
        name: "accountType",
        label: "Account Type",
        type: "select",
        placeholder: "Select account type",
        options: [
          { label: "Personal", value: "personal" },
          { label: "Business", value: "business" },
          { label: "Enterprise", value: "enterprise" },
        ],
        validation: { required: true },
        isRequired: true,
      },
      {
        name: "personalInfo",
        label: "Personal Information",
        type: "textarea",
        placeholder: "Tell us about yourself...",
        dependencies: [
          {
            dependsOn: "accountType",
            condition: [
              { field: "accountType", operator: "equals", value: "personal" },
            ],
            action: "show",
          },
        ],
      },
      {
        name: "companyName",
        label: "Company Name",
        type: "text",
        placeholder: "Enter company name",
        validation: { required: true },
        dependencies: [
          {
            dependsOn: "accountType",
            condition: [
              { field: "accountType", operator: "equals", value: "business" },
              { field: "accountType", operator: "equals", value: "enterprise" },
            ],
            action: "show",
          },
        ],
      },
      {
        name: "employeeCount",
        label: "Number of Employees",
        type: "number",
        placeholder: "Enter employee count",
        validation: { min: 1 },
        dependencies: [
          {
            dependsOn: "accountType",
            condition: [
              { field: "accountType", operator: "equals", value: "business" },
            ],
            action: "show",
          },
        ],
      },
      {
        name: "enterpriseFeatures",
        label: "Required Enterprise Features",
        type: "multiselect",
        options: [
          { label: "Single Sign-On (SSO)", value: "sso" },
          { label: "Advanced Analytics", value: "analytics" },
          { label: "Priority Support", value: "support" },
          { label: "Custom Integrations", value: "integrations" },
        ],
        dependencies: [
          {
            dependsOn: "accountType",
            condition: [
              { field: "accountType", operator: "equals", value: "enterprise" },
            ],
            action: "show",
          },
        ],
      },
      {
        name: "budget",
        label: "Monthly Budget",
        type: "range",
        rangeMin: 0,
        rangeMax: 10000,
        rangeStep: 100,
        defaultValue: 1000,
        dependencies: [
          {
            dependsOn: "accountType",
            condition: [
              { field: "accountType", operator: "equals", value: "business" },
              { field: "accountType", operator: "equals", value: "enterprise" },
            ],
            action: "show",
          },
        ],
      },
    ],
    callbacks: {
      onSubmit: action("Conditional Form Submitted"),
      onFieldChange: action("Field Changed"),
    },
    validateOnChange: true,
    showFieldErrors: true,
  },
};

// ==================== CUSTOM RENDERER ====================

const CustomPasswordField = ({ field, formField, value, onChange, error }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={field.placeholder}
        value={value || ""}
        onChange={e => onChange(e.target.value)}
        className={error ? "border-red-500" : ""}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute right-2 top-1/2 size-6 -translate-y-1/2 p-0"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "🙈" : "👁️"}
      </Button>
    </div>
  );
};

export const CustomRendererForm: Story = {
  args: {
    title: "Custom Field Renderers",
    description: "Demonstrating custom field rendering capabilities",
    fields: [
      {
        name: "username",
        label: "Username",
        type: "text",
        placeholder: "Enter username",
        validation: { required: true, minLength: 3 },
        isRequired: true,
      },
      {
        name: "password",
        label: "Password",
        type: "custom",
        placeholder: "Enter password",
        validation: { required: true, minLength: 8 },
        isRequired: true,
        customRenderer: CustomPasswordField,
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "custom",
        placeholder: "Confirm password",
        validation: {
          required: true,
          custom: (value, formData) => {
            return value === formData.password || "Passwords do not match";
          },
        },
        isRequired: true,
        customRenderer: CustomPasswordField,
      },
    ],
    callbacks: {
      onSubmit: action("Custom Renderer Form Submitted"),
    },
    showFieldErrors: true,
  },
};

// ==================== FORM MODES ====================

export const ViewModeForm: Story = {
  args: {
    title: "View Mode Demo",
    description: "Form in read-only view mode",
    mode: "view",
    defaultValues: {
      name: "John Doe",
      email: "john@example.com",
      role: "developer",
      bio: "Experienced full-stack developer with 5+ years in React and Node.js",
      isActive: true,
    },
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
      },
      {
        name: "email",
        label: "Email",
        type: "email",
      },
      {
        name: "role",
        label: "Role",
        type: "select",
        options: [
          { label: "Developer", value: "developer" },
          { label: "Designer", value: "designer" },
          { label: "Manager", value: "manager" },
        ],
      },
      {
        name: "bio",
        label: "Biography",
        type: "textarea",
      },
      {
        name: "isActive",
        label: "Active Status",
        type: "switch",
      },
    ],
    callbacks: {
      onSubmit: action("View Form Submitted"),
    },
    submitLabel: "Edit",
  },
};

// ==================== LOADING STATES ====================

export const LoadingForm: Story = {
  args: {
    title: "Loading State Demo",
    description: "Form with loading state",
    loading: true,
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Enter name",
        isRequired: true,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter email",
        isRequired: true,
      },
    ],
    callbacks: {
      onSubmit: action("Loading Form Submitted"),
    },
  },
};

// ==================== VALIDATION SHOWCASE ====================

export const ValidationForm: Story = {
  args: {
    title: "Validation Showcase",
    description: "Comprehensive validation examples",
    fields: [
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "user@example.com",
        validation: {
          required: true,
          email: true,
          customMessage: "Please enter a valid email address",
        },
        isRequired: true,
      },
      {
        name: "website",
        label: "Website URL",
        type: "url",
        placeholder: "https://example.com",
        validation: {
          url: true,
          customMessage:
            "Please enter a valid URL starting with http:// or https://",
        },
      },
      {
        name: "age",
        label: "Age",
        type: "number",
        validation: {
          required: true,
          min: 18,
          max: 100,
          customMessage: "Age must be between 18 and 100",
        },
        isRequired: true,
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        validation: {
          required: true,
          minLength: 8,
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          customMessage:
            "Password must contain at least 8 characters with uppercase, lowercase, number, and special character",
        },
        isRequired: true,
      },
      {
        name: "phoneNumber",
        label: "Phone Number",
        type: "tel",
        validation: {
          pattern: /^\+?[\d\s\-()]+$/,
          customMessage: "Please enter a valid phone number",
        },
      },
      {
        name: "customField",
        label: "Custom Validation",
        type: "text",
        validation: {
          custom: value => {
            if (!value) return true; // Optional field
            return (
              value.toLowerCase().includes("custom") ||
              "Field must contain the word 'custom'"
            );
          },
        },
      },
    ],
    callbacks: {
      onSubmit: action("Validation Form Submitted"),
      onValidationError: action("Validation Errors"),
    },
    validateOnChange: true,
    showFieldErrors: true,
    showSummaryErrors: true,
  },
};

// ==================== IMPERATIVE API ====================

export const ImperativeAPIDemo = () => {
  const formRef = React.useRef<DynamicFormRef>(null);

  const handleExternalSubmit = () => {
    formRef.current?.submit();
  };

  const handleSetValues = () => {
    formRef.current?.setValue("name", "John Doe");
    formRef.current?.setValue("email", "john@example.com");
  };

  const handleGetValues = () => {
    const values = formRef.current?.getValues();
    alert(JSON.stringify(values, null, 2));
  };

  const handleValidate = async () => {
    const isValid = await formRef.current?.validate();
    alert(`Form is ${isValid ? "valid" : "invalid"}`);
  };

  return (
    <div className="space-y-4">
      <div className="mb-4 flex gap-2">
        <Button onClick={handleExternalSubmit}>External Submit</Button>
        <Button onClick={handleSetValues} variant="outline">
          Set Values
        </Button>
        <Button onClick={handleGetValues} variant="outline">
          Get Values
        </Button>
        <Button onClick={handleValidate} variant="outline">
          Validate
        </Button>
      </div>

      <DynamicForm
        ref={formRef}
        title="Imperative API Demo"
        description="Control the form externally using the imperative API"
        fields={[
          {
            name: "name",
            label: "Name",
            type: "text",
            placeholder: "Enter name",
            validation: { required: true },
            isRequired: true,
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter email",
            validation: { required: true, email: true },
            isRequired: true,
          },
        ]}
        callbacks={{
          onSubmit: action("Imperative Form Submitted"),
        }}
      />
    </div>
  );
};

export const ImperativeAPI: Story = {
  render: ImperativeAPIDemo,
};

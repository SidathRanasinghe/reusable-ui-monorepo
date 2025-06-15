import type { Meta, StoryObj } from '@storybook/react';

import { DynamicForm } from '../../packages/ui-core/src/components/DynamicForm';

const meta: Meta<typeof DynamicForm> = {
  title: '🔥 Showcase/DynamicForm',
  component: DynamicForm,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Enterprise-Grade Dynamic Form Builder

This component demonstrates advanced React patterns and enterprise-level form handling:

- **12+ Field Types**: text, textarea, richtext, select, multiselect, tags, color, code editor, user selection
- **Dynamic Validation**: Zod-based schema generation with custom rules
- **Rich Text Editing**: Integrated Quill editor
- **Code Editor**: Syntax highlighting with CodeMirror
- **Advanced UX**: Searchable dropdowns, multi-select with chips, conditional fields
- **Type Safety**: Full TypeScript support with inferred types

*This single component could replace entire form libraries.*
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactForm: Story = {
  args: {
    title: 'Contact Information Form',
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'Enter your first name',
        validation: { required: true, minLength: 2 },
        width: 'half',
        isRequired: true,
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Enter your last name',
        validation: { required: true },
        width: 'half',
        isRequired: true,
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'text',
        placeholder: 'john@example.com',
        validation: {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
        isRequired: true,
      },
      {
        name: 'role',
        label: 'Role',
        type: 'select',
        placeholder: 'Select your role',
        options: [
          { label: 'Frontend Developer', value: 'frontend' },
          { label: 'Backend Developer', value: 'backend' },
          { label: 'Full Stack Developer', value: 'fullstack' },
          { label: 'DevOps Engineer', value: 'devops' },
        ],
        isRequired: true,
      },
      {
        name: 'bio',
        label: 'Bio',
        type: 'textarea',
        placeholder: 'Tell us about yourself...',
        description: 'Brief description about your experience',
      },
    ],
    onSubmit: (data: any) => {
      console.log('Form submitted:', data);
      alert('Form submitted! Check console for data.');
    },
    submitLabel: 'Submit Application',
    cancelLabel: 'Reset',
  },
};

export const AdvancedForm: Story = {
  args: {
    title: 'Advanced Form Showcase',
    fields: [
      {
        name: 'language',
        label: 'Programming Language',
        type: 'select',
        options: [
          { label: 'JavaScript', value: 'JavaScript' },
          { label: 'Python', value: 'Python' },
          { label: 'SQL', value: 'SQL' },
        ],
        defaultValue: 'JavaScript',
      },
      {
        name: 'code',
        label: 'Code Snippet',
        type: 'code',
        placeholder: 'Enter your code here...',
        description: 'Code editor with syntax highlighting',
      },
      {
        name: 'description',
        label: 'Rich Text Description',
        type: 'richtext',
        placeholder: 'Write a detailed description...',
      },
      {
        name: 'tags',
        label: 'Skills Tags',
        type: 'tags',
        description: 'Search and select relevant skills',
      },
      {
        name: 'themeColor',
        label: 'Brand Color',
        type: 'color',
        defaultValue: '#2C42FF',
      },
      {
        name: 'isPublic',
        label: 'Make Profile Public',
        type: 'switch',
        defaultValue: false,
      },
      {
        name: 'assignedUsers',
        label: 'Team Members',
        type: 'user-select',
        description: 'Select team members for this project',
      },
    ],
    onSubmit: (data: any) => console.log('Advanced form:', data),
  },
};

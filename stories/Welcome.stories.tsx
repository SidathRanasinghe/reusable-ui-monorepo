import type { Meta, StoryObj } from "@storybook/react";

const WelcomeComponent = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-8 p-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Reusable UI Component Library
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A collection of reusable React components built with modern tools
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            🛠️ Built With
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>React 18</strong> - Modern React with hooks
            </li>
            <li>
              <strong>TypeScript</strong> - Type-safe development
            </li>
            <li>
              <strong>Tailwind CSS</strong> - Utility-first CSS framework
            </li>
            <li>
              <strong>Radix UI</strong> - Accessible component primitives
            </li>
            <li>
              <strong>Storybook</strong> - Component development environment
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            📦 Available Components
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-medium">Form Components</h3>
              <ul className="ml-4 space-y-1 text-sm">
                <li>
                  • AccordionSelector - Interactive accordion-style selector
                </li>
                <li>• DynamicForm - Configurable form generator</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Data Visualization</h3>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• CircularGauge - Circular progress indicator</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">UI Components</h3>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• Dialog - Modal dialog component</li>
                <li>• RichTextEditor - text editor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
        <h2 className="mb-4 text-2xl font-semibold text-blue-900 dark:text-blue-100">
          🚀 Getting Started
        </h2>
        <p className="mb-4 text-blue-800 dark:text-blue-200">
          Browse the components in the sidebar to see examples and documentation
          for each component.
        </p>
        <div className="rounded border border-blue-200 bg-white p-4 dark:border-blue-700 dark:bg-gray-800">
          <h3 className="mb-2 font-medium text-gray-900 dark:text-gray-100">
            Monorepo Structure:
          </h3>
          <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>
              <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">
                packages/ui-core
              </code>{" "}
              - Core component library
            </li>
            <li>
              <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">
                packages/tailwind-config
              </code>{" "}
              - Shared Tailwind configuration
            </li>
            <li>
              <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">
                stories/
              </code>{" "}
              - Storybook stories and documentation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof WelcomeComponent> = {
  title: "Welcome",
  component: WelcomeComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Welcome to our reusable UI component library built with React, TypeScript, and Tailwind CSS.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {};

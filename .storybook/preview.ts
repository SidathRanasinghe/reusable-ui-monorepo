import type { Preview } from '@storybook/react';
import '../packages/ui-core/src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1024px', height: '768px' },
        },
      },
    },
  },
  globalTypes: {
    darkMode: {
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
      },
    },
    // theme: {
    //   description: "Global theme for components",
    //   defaultValue: "light",
    //   toolbar: {
    //     title: "Theme",
    //     icon: "circlehollow",
    //     items: ["light", "dark"],
    //     dynamicTitle: true,
    //   },
    // },
  },
  decorators: [
    (Story, context) => {
      const { darkMode } = context.globals;

      // Apply dark mode class to body
      if (typeof window !== 'undefined') {
        if (darkMode === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }

      return Story();
    },
  ],
};

export default preview;

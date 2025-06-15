import type { Meta, StoryObj } from '@storybook/react';
import { Database, Users, Settings } from 'lucide-react';

import AccordionSelector from '../../packages/ui-core/src/components/AccordionSelector';

const meta: Meta<typeof AccordionSelector> = {
  title: '🎛️ Interactive/AccordionSelector',
  component: AccordionSelector,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterPanel: Story = {
  args: {
    options: [
      {
        id: 'database',
        label: 'Database Tables',
        lableIcon: <Database className='h-4 w-4 text-blue-500' />,
        content: [
          { id: 'users', label: 'Users Table' },
          { id: 'products', label: 'Products Table' },
          { id: 'orders', label: 'Orders Table' },
          { id: 'analytics', label: 'Analytics Data' },
        ],
      },
      {
        id: 'permissions',
        label: 'User Permissions',
        lableIcon: <Users className='h-4 w-4 text-green-500' />,
        content: [
          { id: 'read', label: 'Read Access' },
          { id: 'write', label: 'Write Access' },
          { id: 'admin', label: 'Admin Access' },
          { id: 'delete', label: 'Delete Access' },
        ],
      },
      {
        id: 'settings',
        label: 'System Settings',
        lableIcon: <Settings className='h-4 w-4 text-purple-500' />,
        content: [
          { id: 'notifications', label: 'Email Notifications' },
          { id: 'security', label: 'Security Settings' },
          { id: 'integrations', label: 'API Integrations' },
        ],
      },
    ],
    onSelect: selected => console.log('Selected items:', selected),
  },
};

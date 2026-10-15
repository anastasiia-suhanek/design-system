import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fragment } from 'react';
import { Button } from './Button';
import { iconNames } from './Icon';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Continue', variant: 'primary' },
  argTypes: { icon: { control: 'select', options: [undefined, ...iconNames] } },
  parameters: { docs: { description: { component:
    'Three types by emphasis and four states. **One Primary per screen**; Secondary is an alternative next to it; Ghost is a low-emphasis action like "Learn more". Loading keeps the width so the layout doesn’t jump' } } },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary', children: 'Change amount' } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Learn more' } };
export const WithIcon: Story = { args: { icon: 'arrow-forward' } };
export const Loading: Story = { args: { loading: true } };
export const Disabled: Story = { args: { disabled: true } };

/** Every type in every state – the same matrix as in Figma */
export const Matrix: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 220px)', gap: 24, alignItems: 'center' }}>
      {(['primary', 'secondary', 'ghost'] as const).map((v) => (
        <Fragment key={v}>
          <Button variant={v} fullWidth>Default</Button>
          <Button variant={v} fullWidth pressed>Pressed</Button>
          <Button variant={v} fullWidth disabled>Disabled</Button>
          <Button variant={v} fullWidth loading>Loading</Button>
        </Fragment>
      ))}
    </div>
  ),
};

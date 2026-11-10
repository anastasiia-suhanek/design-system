import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { GeneratedButton as Button } from './Button.generated';

const meta = {
  title: 'Frame/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Action button', variant: 'primary' },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const TypePrimaryStateDefault: Story = {};
export const TypePrimaryStatePressed: Story = { args: { pressed: true } };
export const TypePrimaryStateDisabled: Story = { args: { disabled: true } };
export const TypePrimaryStateLoading: Story = { args: { loading: true } };
export const TypeSecondaryStateDefault: Story = { args: { variant: 'secondary' } };
export const TypeSecondaryStatePressed: Story = { args: { variant: 'secondary', pressed: true } };
export const TypeSecondaryStateDisabled: Story = { args: { variant: 'secondary', disabled: true } };
export const TypeSecondaryStateLoading: Story = { args: { variant: 'secondary', loading: true } };
export const TypeGhostStateDefault: Story = { args: { variant: 'ghost' } };
export const TypeGhostStatePressed: Story = { args: { variant: 'ghost', pressed: true } };
export const TypeGhostStateDisabled: Story = { args: { variant: 'ghost', disabled: true } };
export const TypeGhostStateLoading: Story = { args: { variant: 'ghost', loading: true } };

export const Contract: Story = {
  play: async ({ canvas }) => {
    const el = await canvas.findByRole('button');
    expect(el).toHaveTextContent('Action button');
  },
};

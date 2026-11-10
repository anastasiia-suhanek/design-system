import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { GeneratedBottomSheet as BottomSheet, GeneratedBottomSheetMatrix } from './BottomSheet.generated';

const meta = {
  title: 'Frame/Bottom sheet',
  component: BottomSheet,
  tags: ['autodocs'],
  args: { type: 'message', illustration: 'cat', closable: true, subtitle: 'TODO: subtitle', title: 'TODO: title' },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
} satisfies Meta<typeof BottomSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const TypeMessage: Story = {};
export const TypeFunctional: Story = { args: { type: 'functional' } };

export const Matrix: Story = {
  render: () => <GeneratedBottomSheetMatrix />,
};

export const Contract: Story = {
  play: async ({ canvas }) => {
    const el = await canvas.findByRole('dialog');
    expect(el).toHaveAccessibleName('TODO: title');
  },
};

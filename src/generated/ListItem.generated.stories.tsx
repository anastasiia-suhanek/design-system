import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { GeneratedListItem as ListItem } from './ListItem.generated';

const meta = {
  title: 'Frame/List item',
  component: ListItem,
  tags: ['autodocs'],
  args: { title: 'Header', subheading: 'Subheading', value: 'Text M', valueSubheading: 'Subheading', lead: 'flag', follower: true, density: 'normal', alignment: 'center' },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
} satisfies Meta<typeof ListItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const DensityNormalAlignmentCenter: Story = {};
export const DensityTightAlignmentCenter: Story = { args: { density: 'tight' } };
export const DensityNormalAlignmentTop: Story = { args: { alignment: 'top' } };
export const DensityTightAlignmentTop: Story = { args: { density: 'tight', alignment: 'top' } };

export const Contract: Story = {
  play: async ({ canvas }) => {
    const el = await canvas.findByRole('button');
    expect(el).toHaveTextContent('Header');
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListItem } from './ListItem';

const meta = {
  title: 'Components/List item',
  component: ListItem,
  tags: ['autodocs'],
  args: { title: 'Czech koruna', subheading: 'Main account', value: '1 200 CZK', valueSubheading: 'Available', lead: 'flag', follower: true },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
  parameters: { docs: { description: { component:
    'A row for settings, profile, accounts and countries, built from slots: lead, content, value and follower. **Show the follower only when the row opens something** – then the whole row becomes a button' } } },
} satisfies Meta<typeof ListItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const IconLead: Story = { args: { lead: { icon: 'add' }, title: 'Top up', subheading: 'From a card or a bank account', value: undefined } };
export const TitleOnly: Story = { args: { lead: null, subheading: undefined, value: undefined, title: 'Language' } };
export const Static: Story = { args: { follower: false } };
export const Tight: Story = { args: { density: 'tight' } };
export const TopAlignment: Story = { args: { alignment: 'top', title: 'Send to a bank account in another country', subheading: 'Usually arrives the same day' } };

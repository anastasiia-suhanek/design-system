import type { Meta, StoryObj } from '@storybook/react-vite';
import { BottomSheet } from './BottomSheet';

const meta = {
  title: 'Components/Bottom sheet',
  component: BottomSheet,
  tags: ['autodocs'],
  args: {
    type: 'message',
    title: 'Today’s limit reached',
    subtitle: 'Verify your identity to send more today. It takes about 3 minutes',
    illustration: 'cat',
    closable: true,
    actions: { primary: 'Verify now' },
  },
  argTypes: { illustration: { control: 'select', options: ['cat', 'money', null] } },
  parameters: { docs: { description: { component:
    'A message or a decision that keeps the user on the current screen. Say what happened in the title and what to do in the subtitle, with **one primary action**. Use Closable when the message can wait; turn it off only when there is a way forward in the buttons' } } },
} satisfies Meta<typeof BottomSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Message: Story = {};
export const TwoActions: Story = { args: { actions: { primary: 'Verify now', secondary: 'Change amount' } } };
export const NotClosable: Story = {
  args: { closable: false, title: 'Let’s update your docs', subtitle: 'Your documents have expired. Update them to keep sending money', illustration: 'money', actions: { primary: 'Open bot', ghost: 'All clear' } },
};
export const Functional: Story = {
  args: { type: 'functional', title: 'Check your email', subtitle: 'We sent a request for extra documents. Reply to it to keep sending', actions: { primary: 'Open email', secondary: 'Not now' } },
};
export const Loading: Story = { args: { actions: { primary: 'Verify now', primaryLoading: true } } };

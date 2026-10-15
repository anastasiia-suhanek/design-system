import type { Meta, StoryObj } from '@storybook/react-vite';
import { FullscreenMessage } from './FullscreenMessage';

const meta = {
  title: 'Components/Full screen message',
  component: FullscreenMessage,
  tags: ['autodocs'],
  args: {
    title: 'Money is on its way',
    subtitle: 'We’ll let you know when it arrives. Usually it takes a few minutes',
    illustration: 'money',
    header: true,
    actions: { primary: 'Done', secondary: 'Share receipt' },
  },
  argTypes: { illustration: { control: 'select', options: ['cat', 'money', null] } },
  parameters: { docs: { description: { component:
    'A result or a requirement the user must see before going on: success, a blocking check, an empty state with an action. Not for messages the user can skip – use Bottom sheet' } } },
} satisfies Meta<typeof FullscreenMessage>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {};
export const WithBullets: Story = {
  args: { title: 'Before you send', subtitle: 'Have these ready – it takes about 3 minutes', illustration: 'cat',
    bullets: ['Passport or ID card', 'Proof of address', 'A good light for the photo'], actions: { primary: 'Start' } },
};
export const NoHeaderNoIllustration: Story = { args: { header: false, illustration: null, actions: { primary: 'Try again' } , title: 'Something went wrong', subtitle: 'We couldn’t check your documents. Try again in a few minutes' } };

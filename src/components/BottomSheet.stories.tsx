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
  // parameters.ru below is merged when the Language toolbar is set to RU
  render: (args, { globals, parameters }) => <BottomSheet {...args} {...(globals.locale === 'ru' ? { closeLabel: 'Закрыть', ...parameters.ru } : {})} />,
  argTypes: { illustration: { control: 'select', options: ['cat', 'money', null] } },
  parameters: { ru: { title: 'Дневной лимит исчерпан', subtitle: 'Пройдите верификацию, чтобы отправить больше сегодня. Это займёт около 3 минут', actions: { primary: 'Пройти верификацию' } }, docs: { description: { component:
    'A message or a decision that keeps the user on the current screen. Say what happened in the title and what to do in the subtitle, with **one primary action**. Use Closable when the message can wait; turn it off only when there is a way forward in the buttons' } } },
} satisfies Meta<typeof BottomSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Message: Story = {};
export const TwoActions: Story = { args: { actions: { primary: 'Verify now', secondary: 'Change amount' } },
  parameters: { ru: { title: 'Дневной лимит исчерпан', subtitle: 'Пройдите верификацию, чтобы отправить больше сегодня. Это займёт около 3 минут', actions: { primary: 'Пройти верификацию', secondary: 'Изменить сумму' } } } };
export const NotClosable: Story = {
  args: { closable: false, title: 'Let’s update your docs', subtitle: 'Your documents have expired. Update them to keep sending money', illustration: 'money', actions: { primary: 'Open bot', ghost: 'All clear' } },
  parameters: { ru: { title: 'Пора обновить документы', subtitle: 'Срок действия документов истёк. Обновите их, чтобы продолжить переводы', actions: { primary: 'Открыть бота', ghost: 'Понятно' } } },
};
export const Functional: Story = {
  args: { type: 'functional', title: 'Check your email', subtitle: 'We sent a request for extra documents. Reply to it to keep sending', actions: { primary: 'Open email', secondary: 'Not now' } },
  parameters: { ru: { title: 'Проверьте почту', subtitle: 'Мы отправили запрос на дополнительные документы. Ответьте на него, чтобы продолжить переводы', actions: { primary: 'Открыть почту', secondary: 'Не сейчас' } } },
};
export const Loading: Story = { args: { actions: { primary: 'Verify now', primaryLoading: true } },
  parameters: { ru: { title: 'Дневной лимит исчерпан', subtitle: 'Пройдите верификацию, чтобы отправить больше сегодня. Это займёт около 3 минут', actions: { primary: 'Пройти верификацию', primaryLoading: true } } } };

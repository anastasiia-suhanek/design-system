import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fragment } from 'react';
import { Button } from './Button';
import { iconNames } from './Icon';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Continue', variant: 'primary' },
  render: (args, { globals, parameters }) => <Button {...args} {...(globals.locale === 'ru' ? parameters.ru : {})} />,
  argTypes: { icon: { control: 'select', options: [undefined, ...iconNames] } },
  parameters: { ru: { children: 'Продолжить' }, docs: { description: { component:
    'Three types by emphasis and four states. **One Primary per screen**; Secondary is an alternative next to it; Ghost is a low-emphasis action like "Learn more". Loading keeps the width so the layout doesn’t jump' } } },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary', children: 'Change amount' }, parameters: { ru: { children: 'Изменить сумму' } } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Learn more' }, parameters: { ru: { children: 'Подробнее' } } };
export const WithIcon: Story = { args: { icon: 'arrow-forward' } };
export const Loading: Story = { args: { loading: true } };
export const Disabled: Story = { args: { disabled: true } };

/** Every type in every state – the same matrix as in Figma */
export const Matrix: Story = {
  parameters: { layout: 'padded' },
  render: (_, { globals }) => {
    const ru = globals.locale === 'ru';
    const l = ru ? ['Обычная', 'Нажата', 'Неактивна', 'Загрузка'] : ['Default', 'Pressed', 'Disabled', 'Loading'];
    return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 220px)', gap: 24, alignItems: 'center' }}>
      {(['primary', 'secondary', 'ghost'] as const).map((v) => (
        <Fragment key={v}>
          <Button variant={v} fullWidth>{l[0]}</Button>
          <Button variant={v} fullWidth pressed>{l[1]}</Button>
          <Button variant={v} fullWidth disabled>{l[2]}</Button>
          <Button variant={v} fullWidth loading>{l[3]}</Button>
        </Fragment>
      ))}
    </div>
    );
  },
};

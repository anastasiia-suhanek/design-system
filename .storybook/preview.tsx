import type { Preview } from '@storybook/react-vite';
import '../src/index';
import '@fontsource/inter/500.css'; // docs headings use 500, like the portfolio
import theme from './theme';

const preview: Preview = {
  globalTypes: {
    locale: {
      description: 'Language of the copy in components and docs',
      toolbar: {
        title: 'Language',
        icon: 'globe',
        items: [
          { value: 'en', right: 'EN', title: 'English' },
          { value: 'ru', right: 'RU', title: 'Русский' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { backgrounds: { value: 'canvas' }, locale: 'en' },
  decorators: [
    (Story, { globals }) => {
      // Screen readers pick the voice from <html lang>
      document.documentElement.lang = globals.locale === 'ru' ? 'ru' : 'en';
      return <Story />;
    },
  ],
  parameters: {
    layout: 'centered',
    docs: { theme },
    backgrounds: { options: { canvas: { name: 'Canvas', value: '#F5F5F3' }, white: { name: 'White', value: '#ffffff' } } },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'error' },
    options: { storySort: { order: ['Introduction', 'Foundations', ['Tokens', 'Typography'], 'Components'] } },
  },
};

export default preview;

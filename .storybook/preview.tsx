import type { Preview } from '@storybook/react-vite';
import '../src/index';
import '@fontsource/inter/500.css'; // docs headings use 500, like the portfolio
import theme from './theme';

// Same rule as the portfolio (js/lang.js) – the site and Storybook share an origin, so they share the choice:
// the language picked on the portfolio, otherwise the device language
function detectLocale(): 'en' | 'ru' {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'ru') return saved;
  } catch { /* storage blocked */ }
  return (navigator.language || '').toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

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
  initialGlobals: { backgrounds: { value: 'canvas' }, locale: detectLocale() },
  decorators: [
    (Story, { globals }) => {
      // Screen readers pick the voice from <html lang>
      const locale = globals.locale === 'ru' ? 'ru' : 'en';
      document.documentElement.lang = locale;
      // A switch here carries back to the portfolio
      try { localStorage.setItem('lang', locale); } catch { /* storage blocked */ }
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

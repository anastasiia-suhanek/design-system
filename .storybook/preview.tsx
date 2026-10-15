import type { Preview } from '@storybook/react-vite';
import '../src/index';
import '@fontsource/inter/500.css'; // docs headings use 500, like the portfolio
import theme from './theme';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: { theme },
    backgrounds: { options: { canvas: { name: 'Canvas', value: '#F5F5F3' }, white: { name: 'White', value: '#ffffff' } } },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'error' },
    options: { storySort: { order: ['Introduction', 'Foundations', ['Tokens', 'Typography'], 'Components'] } },
  },
  initialGlobals: { backgrounds: { value: 'canvas' } },
};

export default preview;

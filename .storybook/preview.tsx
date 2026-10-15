import type { Preview } from '@storybook/react-vite';
import '../src/index';
import theme from './theme';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: { theme },
    backgrounds: { options: { canvas: { name: 'Canvas', value: '#f4f4f5' }, white: { name: 'White', value: '#ffffff' } } },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'error' },
    options: { storySort: { order: ['Introduction', 'Foundations', ['Tokens', 'Typography'], 'Components'] } },
  },
  initialGlobals: { backgrounds: { value: 'canvas' } },
};

export default preview;

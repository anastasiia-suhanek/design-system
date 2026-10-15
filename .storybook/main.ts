import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp"
  ],
  "framework": "@storybook/react-vite",
  // Same favicon as the portfolio
  "staticDirs": ["../public"],
  // A showcase, not a workbench: keep the Language switch, hide backgrounds, grid, measure and outline
  "features": { "backgrounds": false, "measure": false, "outline": false }
};
export default config;
# Design system sample

Components from the design system of a fintech app for international money transfers, rebuilt in React and TypeScript.
Anonymised under NDA: the brand colour, names and copy are replaced; the structure, properties and tokens follow production.

**Storybook:** https://anastasiia-suhanek.github.io/design-system/
**Figma:** https://www.figma.com/design/d8WTz9z1dh04l7Nm8dcRvG/Anastasiia-Sukhanek-%E2%80%94-Design-System-Sample

## What's inside

- **Tokens in two layers** – `src/tokens/tokens.json` is the source of truth. Primitives hold raw values, components use only semantic tokens. `npm run tokens` generates `tokens.css`
- **Components** – Button (3 types × 4 states), Bottom sheet, Full screen message, List item. Props mirror the component properties in Figma
- **Accessibility tests** – every story runs axe through `@storybook/addon-vitest`; any violation fails the test. The first run caught two real issues that weren't visible in Figma: secondary button text at 3.98:1 contrast (fixed with a darker token, now 5.3:1) and loading buttons losing their accessible name
- **AI-readable** – `@storybook/addon-mcp` exposes components and docs to coding agents

## Run

```bash
npm install
npm run storybook        # local Storybook on :6006
npx vitest --run         # stories + accessibility tests
npm run build-storybook  # static build into storybook-static/
```

Built with Claude Code by Anastasiia Sukhanek – https://anastasiia-suhanek.github.io

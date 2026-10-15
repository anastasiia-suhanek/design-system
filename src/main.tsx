import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BottomSheet } from './index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BottomSheet title="Hello" subtitle="Run npm run storybook to see every component" actions={{ primary: 'OK' }} />
  </StrictMode>,
);

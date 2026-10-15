import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';
import theme from './theme';

// The brand block doubles as the way back to the portfolio, in the visitor's language (same rule as the site)
function locale(): 'en' | 'ru' {
  try {
    const g = new URL(location.href).searchParams.get('globals') || '';
    if (/locale:ru/.test(g)) return 'ru';
    if (/locale:en/.test(g)) return 'en';
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'ru') return saved;
  } catch { /* storage blocked */ }
  return (navigator.language || '').toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

const ru = locale() === 'ru';
const name = ru ? 'Анастасия Суханек' : 'Anastasiia Sukhanek';
const back = ru ? '← Портфолио' : '← Portfolio';

addons.setConfig({
  theme: create({
    ...theme,
    base: 'light',
    brandUrl: 'https://anastasiia-suhanek.github.io/#work',
    brandTitle:
      `<span style="font-weight:600;font-size:16px;line-height:24px;letter-spacing:-0.01em;color:#0B0B0B">${name}` +
      `<br><span style="font-weight:500;font-size:12px;line-height:16px;color:#5046E5;letter-spacing:0">${back}</span></span>`,
  }),
});

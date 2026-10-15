import { create } from 'storybook/theming/create';

/** Storybook chrome in the portfolio's Swiss style. The components keep their own (product) colours */
export default create({
  base: 'light',
  brandTitle: '<span style="font-weight:600;font-size:16px;line-height:24px;letter-spacing:-0.01em;color:#0B0B0B">Anastasiia Sukhanek<br><span style="font-weight:400;font-size:12px;line-height:16px;color:#767676;letter-spacing:0">Design system</span></span>',
  brandUrl: 'https://anastasiia-suhanek.github.io',
  brandTarget: '_self',

  fontBase: '"Inter", system-ui, -apple-system, sans-serif',
  fontCode: 'ui-monospace, "SF Mono", Menlo, monospace',

  colorPrimary: '#5046E5',
  colorSecondary: '#5046E5',

  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#E1E1DE',
  appBorderRadius: 0,

  textColor: '#0B0B0B',
  textMutedColor: '#767676',
  textInverseColor: '#FFFFFF',

  barBg: '#FFFFFF',
  barTextColor: '#3E3E3E',
  barSelectedColor: '#5046E5',
  barHoverColor: '#5046E5',

  inputBg: '#FFFFFF',
  inputBorder: '#E1E1DE',
  inputTextColor: '#0B0B0B',
  inputBorderRadius: 0,
});

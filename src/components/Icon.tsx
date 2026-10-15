import type { SVGProps } from 'react';

/** 24×24 icons. They take the colour of the text around them (currentColor) */
const paths = {
  'arrow-forward': <path fill="currentColor" d="M11.3 19.3a1 1 0 0 1-.29-.7 1 1 0 0 1 .27-.7L16.18 13H5a1 1 0 0 1-.71-.29A.97.97 0 0 1 4 12c0-.28.1-.52.29-.71A.97.97 0 0 1 5 11h11.18l-4.9-4.9a.95.95 0 0 1-.27-.7 1 1 0 0 1 .29-.7.95.95 0 0 1 .7-.28c.28 0 .52.1.7.28l6.6 6.6c.1.08.17.19.21.31.04.13.06.26.06.39s-.02.26-.06.38a.88.88 0 0 1-.21.32l-6.6 6.6a.95.95 0 0 1-.7.28.95.95 0 0 1-.7-.28Z" />,
  add: <path fill="currentColor" d="M12 19.1a.82.82 0 0 1-.61-.25.86.86 0 0 1-.24-.6v-5.4h-5.4a.82.82 0 0 1-.6-.25.82.82 0 0 1-.25-.6c0-.25.08-.45.25-.61a.86.86 0 0 1 .6-.24h5.4v-5.4c0-.23.08-.43.25-.6a.82.82 0 0 1 .6-.25c.25 0 .45.08.61.25.16.17.24.37.24.6v5.4h5.4c.23 0 .43.08.6.25.17.17.25.37.25.6 0 .25-.08.45-.25.61a.86.86 0 0 1-.6.24h-5.4v5.4c0 .23-.08.43-.25.6a.82.82 0 0 1-.6.25Z" />,
  'chevron-right': <path d="m10 16 4-4-4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
  close: <path d="m8 8 8 8m0-8-8 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
} as const;

export type IconName = keyof typeof paths;
export const iconNames = Object.keys(paths) as IconName[];

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: number;
  /** Text for screen readers. Leave empty for decorative icons */
  label?: string;
}

export function Icon({ name, size = 24, label, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role={label ? 'img' : undefined}
      aria-label={label} aria-hidden={label ? undefined : true} focusable="false" {...rest}>
      {paths[name]}
    </svg>
  );
}

/** Country flag used as a list lead (sample: Czechia) */
export function Flag({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{ borderRadius: '50%' }}>
      <circle cx="12" cy="12" r="12" fill="#F0F0F0" />
      <path d="M10.96 12s-7.44 8.49-7.45 8.49A11.97 11.97 0 0 0 12 24c6.63 0 12-5.37 12-12H10.96Z" fill="#D80027" />
      <path d="M3.51 3.51a12 12 0 0 0 0 16.98L12 12 3.51 3.51Z" fill="#0052B4" />
    </svg>
  );
}

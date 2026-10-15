import cat from '../assets/illustration-cat.png';
import money from '../assets/illustration-money.png';

const sources = { cat, money } as const;
export type IllustrationName = keyof typeof sources;
export const illustrationNames = Object.keys(sources) as IllustrationName[];

/** 160×160 illustration, swapped by name. Decorative: the title next to it carries the meaning */
export function Illustration({ name, size = 160 }: { name: IllustrationName; size?: number }) {
  return <img src={sources[name]} width={size} height={size} alt="" className="ds-illustration" />;
}

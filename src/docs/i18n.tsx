import { useEffect, useState, type ReactNode } from 'react';
import { addons } from 'storybook/preview-api';

/** Language of the docs pages, driven by the Language toolbar (globals.locale) */
export type Locale = 'en' | 'ru';

function initial(): Locale {
  try {
    const g = new URL(window.top!.location.href).searchParams.get('globals') || '';
    if (/locale:ru/.test(g)) return 'ru';
  } catch { /* cross-origin parent: fall through */ }
  const store = (window as unknown as { __STORYBOOK_PREVIEW__?: { storyStoreValue?: { userGlobals?: { get?: () => { locale?: string } } } } })
    .__STORYBOOK_PREVIEW__?.storyStoreValue?.userGlobals?.get?.();
  return store?.locale === 'ru' ? 'ru' : 'en';
}

export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>(initial);
  useEffect(() => {
    const channel = addons.getChannel();
    const onGlobals = ({ globals }: { globals?: { locale?: Locale } }) => { if (globals?.locale) setLocale(globals.locale); };
    channel.on('globalsUpdated', onGlobals);
    channel.on('setGlobals', onGlobals);
    return () => { channel.off('globalsUpdated', onGlobals); channel.off('setGlobals', onGlobals); };
  }, []);
  return locale;
}

/** Inline translation for MDX: <T en="Tokens" ru="Токены" /> */
export function T({ en, ru }: { en: ReactNode; ru: ReactNode }) {
  return <>{useLocale() === 'ru' ? ru : en}</>;
}

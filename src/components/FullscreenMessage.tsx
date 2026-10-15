import { useId, type ReactNode } from 'react';
import { Icon } from './Icon';
import { Illustration, type IllustrationName } from './Illustration';
import { ButtonGroup, type ButtonGroupProps } from './ButtonGroup';
import './FullscreenMessage.css';

export interface FullscreenMessageProps {
  title: string;
  subtitle?: string;
  /** Pass null to hide the illustration */
  illustration?: IllustrationName | null;
  /** Shows the top bar with a back button */
  header?: boolean;
  onBack?: () => void;
  /** Accessible name of the back button */
  backLabel?: string;
  bullets?: string[];
  slot?: ReactNode;
  actions?: ButtonGroupProps;
}

/**
 * A result or a requirement the user must see before going on:
 * success, a blocking check, an empty state with an action
 */
export function FullscreenMessage({ title, subtitle, illustration = 'money', header = true, onBack, backLabel = 'Back',
  bullets, slot, actions }: FullscreenMessageProps) {
  const titleId = useId();
  return (
    <main className="ds-full" aria-labelledby={titleId}>
      {header ? (
        <div className="ds-full__header">
          <button type="button" className="ds-full__back" onClick={onBack} aria-label={backLabel}>
            <Icon name="arrow-forward" />
          </button>
        </div>
      ) : <div />}
      <div className="ds-full__content">
        {illustration && <Illustration name={illustration} />}
        <div className="ds-full__text">
          <h1 id={titleId} className="ds-full__title text-heading-l">{title}</h1>
          {subtitle && <p className="ds-full__subtitle text-body-m">{subtitle}</p>}
        </div>
        {bullets && bullets.length > 0 && (
          <ul className="ds-full__bullets text-label-m">{bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        )}
        {slot}
      </div>
      {actions && <ButtonGroup {...actions} />}
    </main>
  );
}

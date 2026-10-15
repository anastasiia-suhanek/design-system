import { useId, type ReactNode } from 'react';
import { Icon } from './Icon';
import { Illustration, type IllustrationName } from './Illustration';
import { ButtonGroup, type ButtonGroupProps } from './ButtonGroup';
import './BottomSheet.css';

export interface BottomSheetProps {
  /** Message – with an illustration, centred; Functional – text and actions only */
  type?: 'message' | 'functional';
  title: string;
  subtitle?: string;
  /** Message type only */
  illustration?: IllustrationName | null;
  /** Shows the close button. Turn off when the user must choose an action */
  closable?: boolean;
  onClose?: () => void;
  /** Accessible name of the close button – translate with the rest of the copy */
  closeLabel?: string;
  /** Custom content under the text */
  slot?: ReactNode;
  actions?: ButtonGroupProps;
}

/**
 * A message or a decision that keeps the user on the current screen:
 * a limit reached, an error with one next step, a reminder that can wait
 */
export function BottomSheet({ type = 'message', title, subtitle, illustration = 'cat', closable = true,
  onClose, closeLabel = 'Close', slot, actions }: BottomSheetProps) {
  const titleId = useId();
  const descId = useId();
  return (
    <section role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={subtitle ? descId : undefined}
      className={`ds-sheet ds-sheet--${type}`}>
      {closable && (
        <div className="ds-sheet__close-row">
          <button type="button" className="ds-sheet__close" onClick={onClose} aria-label={closeLabel}>
            <Icon name="close" />
          </button>
        </div>
      )}
      <div className="ds-sheet__body">
        {type === 'message' && illustration && <Illustration name={illustration} />}
        <div className="ds-sheet__text">
          <h2 id={titleId} className="ds-sheet__title text-heading-m">{title}</h2>
          {subtitle && <p id={descId} className="ds-sheet__subtitle text-body-m">{subtitle}</p>}
        </div>
        {slot && <div className="ds-sheet__slot">{slot}</div>}
      </div>
      {actions && <div className="ds-sheet__actions"><ButtonGroup {...actions} /></div>}
    </section>
  );
}

import type { ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from './Icon';
import './Button.css';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Primary – the one main action of a screen; Secondary – an alternative next to it; Ghost – low emphasis */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Spinner replaces the label, the width stays the same */
  loading?: boolean;
  /** Icon after the label */
  icon?: IconName;
  /** Stretch to the container width (Primary and Secondary in sheets and full screens) */
  fullWidth?: boolean;
  /** Shows the pressed look without pressing – for documentation */
  pressed?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ variant = 'primary', loading = false, icon, fullWidth = false, pressed = false,
  disabled, children, className = '', type = 'button', onClick, ...rest }: ButtonProps) {
  const cls = ['ds-button', `ds-button--${variant}`, fullWidth && variant !== 'ghost' && 'ds-button--full',
    pressed && 'is-pressed', className].filter(Boolean).join(' ');
  return (
    <button type={type} className={cls} disabled={disabled} aria-busy={loading || undefined}
      aria-disabled={loading || undefined} onClick={loading ? undefined : onClick} {...rest}>
      <span className="ds-button__content">
        <span className="ds-button__label">{children}</span>
        {icon && <Icon name={icon} />}
      </span>
      {loading && <span className="ds-button__spinner" aria-hidden="true" />}
    </button>
  );
}

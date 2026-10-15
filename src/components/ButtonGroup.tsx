import { Button } from './Button';

export interface ButtonGroupProps {
  primary?: string;
  secondary?: string;
  ghost?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  onGhost?: () => void;
  primaryLoading?: boolean;
}

/** Primary on top, then Secondary and/or Ghost. Used in sheets and full screens */
export function ButtonGroup({ primary, secondary, ghost, onPrimary, onSecondary, onGhost, primaryLoading }: ButtonGroupProps) {
  return (
    <div className="ds-button-group">
      {primary && <Button variant="primary" fullWidth loading={primaryLoading} onClick={onPrimary}>{primary}</Button>}
      {secondary && <Button variant="secondary" fullWidth onClick={onSecondary}>{secondary}</Button>}
      {ghost && <Button variant="ghost" onClick={onGhost}>{ghost}</Button>}
    </div>
  );
}

import { Flag, Icon, type IconName } from './Icon';
import './ListItem.css';

export interface ListItemProps {
  title: string;
  subheading?: string;
  /** Leading element: a country flag, an icon, or nothing */
  lead?: 'flag' | { icon: IconName } | null;
  value?: string;
  valueSubheading?: string;
  /** Chevron that shows the row opens something. Makes the row a button */
  follower?: boolean;
  onClick?: () => void;
  /** Tight for dense lists */
  density?: 'normal' | 'tight';
  /** Top when the left text wraps to two lines */
  alignment?: 'center' | 'top';
}

/** A row for settings, profile, accounts and countries */
export function ListItem({ title, subheading, lead = 'flag', value, valueSubheading, follower = false,
  onClick, density = 'normal', alignment = 'center' }: ListItemProps) {
  const cls = ['ds-list-item', density === 'tight' && 'ds-list-item--tight', alignment === 'top' && 'ds-list-item--top']
    .filter(Boolean).join(' ');
  const body = (
    <>
      <span className="ds-list-item__left">
        {lead === 'flag' && <span className="ds-list-item__lead"><Flag /></span>}
        {lead && typeof lead === 'object' && <span className="ds-list-item__lead"><Icon name={lead.icon} /></span>}
        <span className="ds-list-item__content">
          <span className="ds-list-item__title text-label-m">{title}</span>
          {subheading && <span className="ds-list-item__sub text-body-s">{subheading}</span>}
        </span>
      </span>
      {(value || follower) && (
        <span className="ds-list-item__right">
          {value && (
            <span className="ds-list-item__value">
              <span className="ds-list-item__value-main">{value}</span>
              {valueSubheading && <span className="text-body-s">{valueSubheading}</span>}
            </span>
          )}
          {follower && <span className="ds-list-item__follower"><Icon name="chevron-right" /></span>}
        </span>
      )}
    </>
  );
  return follower || onClick
    ? <button type="button" className={cls} onClick={onClick}>{body}</button>
    : <div className={cls}>{body}</div>;
}

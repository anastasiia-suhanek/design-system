import type { ComponentProps } from 'react';
import { ListItem } from '../index';

type Props = Partial<ComponentProps<typeof ListItem>>;

export function GeneratedListItem(props: Props) {
  return (
    <ListItem title="Header" subheading="Subheading" lead="flag" value="Text M" valueSubheading="Subheading" follower density="normal" alignment="center" {...props} />
  );
}

export function GeneratedListItemMatrix() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))', gap: 24 }}>
      <ListItem title="Header" subheading="Subheading" lead="flag" value="Text M" valueSubheading="Subheading" follower density="normal" alignment="center" />
      <ListItem title="Header" subheading="Subheading" lead="flag" value="Text M" valueSubheading="Subheading" follower density="tight" alignment="center" />
      <ListItem title="Header" subheading="Subheading" lead="flag" value="Text M" valueSubheading="Subheading" follower density="normal" alignment="top" />
      <ListItem title="Header" subheading="Subheading" lead="flag" value="Text M" valueSubheading="Subheading" follower density="tight" alignment="top" />
    </div>
  );
}

import { ListItem } from '../index';

export function GeneratedListItem() {
  return (
    <ListItem title="Header" subheading="Subheading" lead="flag" value="Text M" valueSubheading="Subheading" follower density="normal" alignment="center" />
  );
}

export function GeneratedListItemMatrix() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      <ListItem title="Header" subheading="Subheading" lead="flag" value="Text M" valueSubheading="Subheading" follower density="normal" alignment="center" />
      <ListItem title="Header" subheading="Subheading" lead="flag" value="Text M" valueSubheading="Subheading" follower density="tight" alignment="center" />
      <ListItem title="Header" subheading="Subheading" lead="flag" value="Text M" valueSubheading="Subheading" follower density="normal" alignment="top" />
      <ListItem title="Header" subheading="Subheading" lead="flag" value="Text M" valueSubheading="Subheading" follower density="tight" alignment="top" />
    </div>
  );
}

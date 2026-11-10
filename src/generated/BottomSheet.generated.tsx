import type { ComponentProps } from 'react';
import { BottomSheet } from '../index';

type Props = Partial<ComponentProps<typeof BottomSheet>>;

export function GeneratedBottomSheet(props: Props) {
  return (
    <BottomSheet type="message" title="TODO: title" subtitle="TODO: subtitle" illustration="cat" closable {...props} />
  );
}

export function GeneratedBottomSheetMatrix() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))', gap: 24 }}>
      <BottomSheet type="message" title="TODO: title" subtitle="TODO: subtitle" illustration="cat" closable />
      <BottomSheet type="functional" title="TODO: title" subtitle="TODO: subtitle" illustration="cat" closable />
    </div>
  );
}

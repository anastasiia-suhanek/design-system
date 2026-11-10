import { BottomSheet } from '../index';

export function GeneratedBottomSheet() {
  return (
    <BottomSheet type="message" title="TODO: title" subtitle="TODO: subtitle" illustration="cat" closable />
  );
}

export function GeneratedBottomSheetMatrix() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      <BottomSheet type="message" title="TODO: title" subtitle="TODO: subtitle" illustration="cat" closable />
      <BottomSheet type="functional" title="TODO: title" subtitle="TODO: subtitle" illustration="cat" closable />
    </div>
  );
}

import { Button } from '../index';

export function GeneratedButton() {
  return (
    <Button variant="primary">Action button</Button>
  );
}

export function GeneratedButtonMatrix() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      <Button variant="primary">Action button</Button>
      <Button variant="primary" pressed>Action button</Button>
      <Button variant="primary" disabled>Action button</Button>
      <Button variant="primary" loading>Action button</Button>
      <Button variant="secondary">Action button</Button>
      <Button variant="secondary" pressed>Action button</Button>
      <Button variant="secondary" disabled>Action button</Button>
      <Button variant="secondary" loading>Action button</Button>
      <Button variant="ghost">Action button</Button>
      <Button variant="ghost" pressed>Action button</Button>
      <Button variant="ghost" disabled>Action button</Button>
      <Button variant="ghost" loading>Action button</Button>
    </div>
  );
}

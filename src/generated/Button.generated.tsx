import type { ComponentProps } from 'react';
import { Button } from '../index';

type Props = Partial<ComponentProps<typeof Button>>;

export function GeneratedButton(props: Props) {
  return (
    <Button variant="primary" children="Action button" {...props} />
  );
}

export function GeneratedButtonMatrix() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))', gap: 24 }}>
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

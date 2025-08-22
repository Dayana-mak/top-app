import { getMenu } from '@/api/menu';
import type { JSX } from 'react';

export async function Menu(): Promise<JSX.Element> {
  const menu = await getMenu(0);
  return (
    <div>
      <div>{menu.length}</div>
    </div>
  );
}

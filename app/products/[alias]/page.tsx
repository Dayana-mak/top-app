import { type JSX } from 'react';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import { getPage } from '@/api/page';
import { notFound } from 'next/navigation';
import { getMenu } from '@/api/menu';

type Params = Promise<{ alias: string }>;

export const metadata: Metadata = {
  title: 'Страница продукта'
};

export async function generateStaticParams(): Promise<{ alias: string }[]> {
  const menu = await getMenu(0);
  return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
}

export default async function PageProducts({params}: {params: Params}): Promise<JSX.Element> {
  const {alias} = await params;
  const page = await getPage(alias);

  if (!page) {
    notFound();
  }
  return (
    <>
    <div>
      {page.title}
    </div>
    </>
  );
}

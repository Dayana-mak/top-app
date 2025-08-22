import { Button, Htag, P, Rating } from '@/components';
import { type JSX } from 'react';
import { Tag } from '@/components';
import { Menu } from './components/menu';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Курсы по Photoshop</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="l">Большой</P>
      <P size="m">Средний</P>
      <P size="s">Маленький</P>
      <Tag size="s" color="ghost">
        Ghost
      </Tag>
      <Tag size="m" color="grey">
        Grey
      </Tag>
      <Tag size="s" color="green" bold>
        Green
      </Tag>
      <Tag size="m" color="red" bold>
        Red
      </Tag>
      <Tag size="s" color="primary">
        Primary
      </Tag>

      <Rating rating={4} />
      <Menu />
    </>
  );
}

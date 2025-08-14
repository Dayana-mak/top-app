'use client';

import { Button, Htag, P, Rating } from '@/components';
import { useState, type JSX } from 'react';
import { Tag } from '@/components';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(0);
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
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}

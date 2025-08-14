'use client';

import cn from 'classnames';
import type { RaitingProps } from './Raiting.props';
import { useEffect, useState, type KeyboardEvent, type JSX } from 'react';
import styles from './Raiting.module.css';
import StarIcon from './star.svg';

export const Raiting = ({
  isEditable = false,
  raiting,
  setRaiting,
  className,
  ...props
}: RaitingProps): JSX.Element => {
  const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRaiting(raiting);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [raiting]);

  const constructRaiting = (currenRaiting: number): void => {
    const updatedArray = raitingArray.map((_, i: number) => {
      return (
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currenRaiting,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => isEditable && constructRaiting(i + 1)}
          onMouseLeave={() => isEditable && constructRaiting(raiting)}
          onClick={() => isEditable && setRaiting && setRaiting(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
      );
    });

    setRaitingArray(updatedArray);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>): void => {
    if (e.code !== 'Space' || !setRaiting) {
      return;
    }

    setRaiting(i);
  };

  return (
    <div {...props} className={className}>
      {raitingArray}
    </div>
  );
};

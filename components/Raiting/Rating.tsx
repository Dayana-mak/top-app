'use client';

import cn from 'classnames';
import type { RatingProps } from './Rating.props';
import { useEffect, useState, type KeyboardEvent, type JSX } from 'react';
import styles from './Rating.module.css';
import StarIcon from './star.svg';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const [displayRating, setDisplayRating] = useState(rating);
  const MAX_RATING = 5;

  useEffect(() => {
    setDisplayRating(rating);
  }, [rating]);

  const handleMouseEnter = (i: number): void => {
    if (isEditable) setDisplayRating(i);
  };

  const handleMouseLeave = (): void => {
    if (isEditable) setDisplayRating(rating);
  };

  const handleClick = (i: number): void => {
    if (isEditable && setRating) setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>): void => {
    if (e.code === 'Space' && setRating) {
      setRating(i);
    }

    return;
  };

  return (
    <div {...props} className={className}>
      {Array.from({ length: MAX_RATING }, (_, i) => (
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < displayRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => handleMouseEnter(i + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => handleSpace(i + 1, e)}
          />
        </span>
      ))}
    </div>
  );
};

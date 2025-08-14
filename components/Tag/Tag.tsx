import cn from 'classnames';
import type { TagProps } from './Tag.props';
import type { JSX } from 'react';
import styles from './Tag.module.css';

export const Tag = ({
  size = 's',
  children,
  color,
  href,
  className,
  bold = false,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, styles[size], styles[color], { [styles.bold]: bold })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};

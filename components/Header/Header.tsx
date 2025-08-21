import cn from 'classnames';
import type { HeaderProps } from './Header.props';
import type { JSX } from 'react';
import styles from './Header.module.css';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(styles.header, className)} {...props}>Header</header>
  );
};

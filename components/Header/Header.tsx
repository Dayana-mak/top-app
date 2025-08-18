import cn from 'classnames';
import type { HeaderProps } from './Header.props';
import type { JSX } from 'react';
import styles from './Header.module.css';

export const Header = ({
}: HeaderProps): JSX.Element => {
  return (
    <div className={cn(styles.header)}>Header</div>
  );
};

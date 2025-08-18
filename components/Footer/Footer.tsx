import cn from 'classnames';
import type { FooterProps } from './Footer.props';
import type { JSX } from 'react';
import styles from './Footer.module.css';

export const Footer = ({
}: FooterProps): JSX.Element => {
  return (
    <div className={cn(styles.footer)}>Footer</div>
  );
};

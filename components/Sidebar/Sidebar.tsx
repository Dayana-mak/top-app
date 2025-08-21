import cn from 'classnames';
import type { SidebarProps } from './Sidebar.props';
import type { JSX } from 'react';
import styles from './Sidebar.module.css';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return <aside className={cn(styles.sidebar, className)} {...props}>Sidebar</aside>;
};

import cn from 'classnames';
import type { SidebarProps } from './Sidebar.props';
import type { JSX } from 'react';
import styles from './Sidebar.module.css';

export const Sidebar = ({
}: SidebarProps): JSX.Element => {
  return (
    <div className={cn(styles.sidebar)}>Sidebar</div>
  );
};

import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 's' | 'm';
  children: React.ReactNode;
  color: 'ghost' | 'grey' | 'red' | 'green' | 'primary';
  href?: string;
  bold?: boolean;
}

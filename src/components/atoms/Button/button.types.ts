import { ButtonHTMLAttributes } from 'react';

export type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: 'primary' | 'secondary';
};

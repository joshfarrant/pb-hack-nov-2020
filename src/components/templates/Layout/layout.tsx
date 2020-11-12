import { ReactElement } from 'react';

import { TProps } from './layout.types';
import { StyledMain } from './layout.styled';

export const Layout = ({ children }: TProps): ReactElement => {
  return <StyledMain>{children}</StyledMain>;
};

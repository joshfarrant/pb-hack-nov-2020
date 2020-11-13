import { ReactElement } from 'react';

import { StyledButton } from './button.styled';
import { TProps } from './button.types';

export const Button = (props: TProps): ReactElement => {
  return <StyledButton {...props} />;
};

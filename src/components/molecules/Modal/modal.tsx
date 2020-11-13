import { ReactElement } from 'react';

import {
  StyledContainer,
  StyledTitle,
  StyledCloseIcon,
  StyledHeader,
} from './modal.styled';
import { TProps } from './modal.types';
import { BookViewing } from '../../molecules/BookViewing';

export function Modal({ setModalOpen, isOpen }: TProps): ReactElement {
  return (
    <StyledContainer
      animate={isOpen ? 'open' : 'closed'}
      variants={{
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: '100%' },
      }}
    >
      <StyledHeader>
        <StyledTitle>Book a viewing</StyledTitle>
        <StyledCloseIcon
          src="/assets/images/close.svg"
          alt="Close"
          onClick={() => setModalOpen(false)}
        />
      </StyledHeader>
      <BookViewing />
    </StyledContainer>
  );
}

import { ReactElement } from 'react';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';

import { TProps } from './layout.types';
import {
  StyledBackContainer,
  StyledBackLink,
  StyledContainer,
  StyledDevice,
  StyledHeader,
  StyledLogo,
  StyledMain,
} from './layout.styled';

export const Layout = ({
  backText,
  backHref,
  children,
}: TProps): ReactElement => {
  return (
    <StyledContainer>
      <StyledDevice>
        <StyledHeader>
          <StyledLogo src="/assets/img/logo.svg" alt="Purplebricks logo" />
        </StyledHeader>
        <StyledMain>
          {backHref && (
            <StyledBackContainer>
              <Link href={backHref}>
                <>
                  <FaChevronLeft />
                  <StyledBackLink>{backText ?? 'Back'}</StyledBackLink>
                </>
              </Link>
            </StyledBackContainer>
          )}
          {children}
        </StyledMain>
      </StyledDevice>
    </StyledContainer>
  );
};

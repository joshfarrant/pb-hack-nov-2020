import { ReactElement } from 'react';
import Link from 'next/link';

import { TProps } from './layout.types';
import {
  StyledBackContainer,
  StyledBackLink,
  StyledLinkText,
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
                <StyledBackLink>
                  <svg
                    width="12"
                    height="21"
                    viewBox="0 0 12 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0058 20.86C9.87419 20.8608 9.74373 20.8355 9.62189 20.7858C9.50005 20.736 9.38924 20.6627 9.2958 20.57L0.295798 11.57C0.20207 11.477 0.127676 11.3664 0.0769072 11.2446C0.0261385 11.1227 0 10.992 0 10.86C0 10.728 0.0261385 10.5973 0.0769072 10.4754C0.127676 10.3536 0.20207 10.243 0.295798 10.15L9.2958 1.14999C9.4841 0.961684 9.7395 0.855896 10.0058 0.855896C10.2721 0.855896 10.5275 0.961684 10.7158 1.14999C10.9041 1.33829 11.0099 1.59369 11.0099 1.85999C11.0099 2.12629 10.9041 2.38168 10.7158 2.56999L2.4158 10.86L10.7158 19.15C10.8095 19.2429 10.8839 19.3536 10.9347 19.4754C10.9855 19.5973 11.0116 19.728 11.0116 19.86C11.0116 19.992 10.9855 20.1227 10.9347 20.2446C10.8839 20.3664 10.8095 20.477 10.7158 20.57C10.6224 20.6627 10.5115 20.736 10.3897 20.7858C10.2679 20.8355 10.1374 20.8608 10.0058 20.86Z"
                      fill="#909090"
                    />
                  </svg>
                  <StyledLinkText>{backText ?? 'Back'}</StyledLinkText>
                </StyledBackLink>
              </Link>
            </StyledBackContainer>
          )}
          {children}
        </StyledMain>
      </StyledDevice>
    </StyledContainer>
  );
};

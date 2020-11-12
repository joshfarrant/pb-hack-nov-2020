import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    --font-family-fallback: -apple-system, BlinkMacSystemFont, Segoe UI,
      Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;

    --font-weight-regular: 400;
    --font-weight-semibold: 500;
    --font-weight-black: 900;

    --font-size-base: 16px;
    --font-family-heading: 'Montserrat' var(--font-family-fallback);
    --font-family-body: 'Lato', var(--font-family-fallback);
    
    font-size: var(--font-size-base);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family-body);
  }
`;

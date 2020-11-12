import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    --font-family-fallback: -apple-system, BlinkMacSystemFont, Segoe UI,
      Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;

    --font-weight-regular: 400;
    --font-weight-bold: 700;

    --font-size-base: 16px;
    --font-family-heading: 'Montserrat', var(--font-family-fallback);
    --font-family-body: 'Lato', var(--font-family-fallback);


    --grey-color: #909090;

    font-size: var(--font-size-base);
    font-family: var(--font-family-primary);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family-body);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: var(--font-family-heading);
  }
`;

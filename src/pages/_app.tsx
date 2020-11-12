import { ReactElement } from 'react';
import { AppProps } from 'next/app';

import { GlobalStyle } from '../styles/global';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;

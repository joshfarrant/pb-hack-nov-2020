import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import { AnimateSharedLayout } from 'framer-motion';

import { GlobalStyle } from '../styles/global';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <AnimateSharedLayout type="crossfade">
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  );
};

export default App;

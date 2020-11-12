import { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="author" content="Purplebricks" />
          <meta name="robots" content="noindex" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://pbonlineassets.azureedge.net/web-images/marketing-global/favicons/v3/apple-touch-icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://pbonlineassets.azureedge.net/web-images/marketing-global/favicons/v3/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://pbonlineassets.azureedge.net/web-images/marketing-global/favicons/v3/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="https://pbonlineassets.azureedge.net/web-images/marketing-global/favicons/v3/safari-pinned-tab.svg"
            color="#550099"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#550099" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

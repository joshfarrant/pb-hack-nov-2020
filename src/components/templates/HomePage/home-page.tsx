import { ReactElement } from 'react';
import { NextSeo } from 'next-seo';

import { Layout } from '../../templates/Layout';

// import { StyledList, StyledPost } from './home-page.styled';

export const HomePage = (): ReactElement => (
  <>
    <NextSeo title="PB Hack" description="Site description" />
    <Layout>
      <h1>Hello, world!</h1>
    </Layout>
  </>
);

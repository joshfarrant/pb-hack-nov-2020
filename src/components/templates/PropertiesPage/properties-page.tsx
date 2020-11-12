import { ReactElement } from 'react';
import { NextSeo } from 'next-seo';

import { Layout } from '../../templates/Layout';
import { TickAnimation } from '../../atoms/TickAnimation';

// import { StyledList, StyledPost } from './properties-page.styled';

export const PropertiesPage = (): ReactElement => (
  <>
    <NextSeo title="PB Hack" description="Site description" />
    <Layout backHref="/">
      <h1>Properties</h1>
      <TickAnimation />
    </Layout>
  </>
);

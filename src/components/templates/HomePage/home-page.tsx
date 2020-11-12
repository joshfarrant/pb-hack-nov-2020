import { ReactElement } from 'react';
import { NextSeo } from 'next-seo';

import { Layout } from '../../templates/Layout';

import { TProps } from './home-page.types';
// import { StyledList, StyledPost } from './home-page.styled';

export const HomePage = ({ posts }: TProps): ReactElement => (
  <>
    <NextSeo
      title='PB Hack'
      description='Site description'
    />
    <Layout>
      <h1>Hello, world!</h1>
    </Layout>
  </>
);

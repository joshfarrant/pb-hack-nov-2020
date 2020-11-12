import { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import { PROPERTIES } from '../../../constants/properties';

import { PropertyCard } from '../../PropertyCard';

// import { StyledList, StyledPost } from './home-page.styled';

export const HomePage = (): ReactElement => (
  <>
    <NextSeo title="PB Hack" description="Site description" />

    <img
      src="/assets/images/Plum - V1.0.0.svg"
      width="300"
      alt="purplebricks logo"
    />

    {PROPERTIES.map(propertyInfo => {
      return <PropertyCard key={propertyInfo.id} {...propertyInfo} />;
    })}
  </>
);

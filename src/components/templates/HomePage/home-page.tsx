import styled from 'styled-components';

import { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import { PROPERTIES } from '../../../constants/properties';

import { PropertyCard } from '../../PropertyCard';

const NavHeading = styled.nav`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 375px;
`;

const PropertiesListDiv = styled.div`
  display: grid;
  grid-gap: 35px;
  max-width: 375px;
  margin: 0 auto;
`;

export const HomePage = (): ReactElement => (
  <>
    <NextSeo title="PB Hack" description="Site description" />
    <NavHeading>
      <img
        src="/assets/images/Plum - V1.0.0.svg"
        width="300"
        alt="purplebricks logo"
      />
    </NavHeading>
    <PropertiesListDiv>
      {PROPERTIES.map(propertyInfo => {
        return <PropertyCard key={propertyInfo.id} {...propertyInfo} />;
      })}
    </PropertiesListDiv>
  </>
);

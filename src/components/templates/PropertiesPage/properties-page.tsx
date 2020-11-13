import { ReactElement } from 'react';
import { NextSeo } from 'next-seo';

import { Layout } from '../../templates/Layout';
import { PROPERTIES } from '../../../constants/properties';
import { PropertyCard } from '../../molecules/PropertyCard';

import {
  StyledContainer,
  StyledHeading,
  StyledPropertiesList,
} from './properties-page.styled';

export const PropertiesPage = (): ReactElement => (
  <>
    <NextSeo title="PB Hack" description="Site description" />
    <Layout backHref="/">
      <StyledContainer>
        <StyledHeading>Your Results</StyledHeading>
        <StyledPropertiesList>
          {PROPERTIES.map(propertyInfo => (
            <PropertyCard key={propertyInfo.id} {...propertyInfo} />
          ))}
        </StyledPropertiesList>
      </StyledContainer>
    </Layout>
  </>
);

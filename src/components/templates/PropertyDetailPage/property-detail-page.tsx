import { ReactElement } from 'react';
import { NextSeo } from 'next-seo';

import { Layout } from '../../templates/Layout';

import {
  StyledContainer,
  StyledHeading,
  CardContentDiv,
  Heading2,
  Paragraph,
  Image,
} from './property-detail-page.styled';
import { TProps } from './property-detail-page.types';

export const PropertyDetailPage = ({
  price,
  imgAlt,
  imgSrc,
  address,
  propertyType,
  description,
}: TProps): ReactElement => {
  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
  }).format(price);

  return (
    <>
      <NextSeo title="PB Hack" description="Site description" />
      <Layout backHref="/">
        <StyledContainer>
          <StyledHeading>Your Results</StyledHeading>
          <Image src={imgSrc} alt={imgAlt} />
          <CardContentDiv>
            <Heading2>{formattedPrice}</Heading2>
            <Paragraph>{address}</Paragraph>
            <Paragraph>{propertyType}</Paragraph>
            <Paragraph>{description}</Paragraph>
          </CardContentDiv>
        </StyledContainer>
      </Layout>
    </>
  );
};

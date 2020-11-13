import { ReactElement } from 'react';
import { NextSeo } from 'next-seo';

import { Layout } from '../../templates/Layout';
import { Button } from '../../atoms/Button';

import {
  ButtonContainer,
  StyledContainer,
  StyledHeading,
  StyledDescription,
  CardContentDiv,
  Heading2,
  Paragraph,
  StyledHR,
  Image,
} from './property-detail-page.styled';
import { TProps } from './property-detail-page.types';
import { transition } from '../../../constants';

export const PropertyDetailPage = ({
  id,
  price,
  imgAlt,
  imgSrc,
  address,
  propertyType,
  description = '',
}: TProps): ReactElement => {
  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
  }).format(price);

  return (
    <>
      <NextSeo title="PB Hack" description="Site description" />
      <Layout backHref="/properties" backText="Back to search results">
        <StyledContainer
          layoutId={`property-container-${id}`}
          transition={transition}
        >
          <StyledHeading>Property Details</StyledHeading>
          <Image
            src={imgSrc}
            alt={imgAlt}
            layoutId={`property-image-${id}`}
            transition={transition}
          />
          <CardContentDiv
            layoutId={`property-content-container-${id}`}
            transition={transition}
          >
            <Heading2 layoutId={`property-price-${id}`} transition={transition}>
              {formattedPrice}
            </Heading2>
            <Paragraph
              layoutId={`property-address-${id}`}
              transition={transition}
            >
              {address}
            </Paragraph>
            <Paragraph layoutId={`property-type-${id}`} transition={transition}>
              {propertyType}
            </Paragraph>
            <ButtonContainer>
              <Button color="primary">Book a viewing</Button>
              <Button color="secondary">Make an offer</Button>
            </ButtonContainer>
            <StyledHR />
            {description.split('\n').map(x => (
              <StyledDescription>{x}</StyledDescription>
            ))}
          </CardContentDiv>
        </StyledContainer>
      </Layout>
    </>
  );
};

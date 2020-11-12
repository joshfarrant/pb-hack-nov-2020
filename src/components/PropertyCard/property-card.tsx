import { ReactElement } from 'react';
import { TProperties } from './property-card.types';
import {
  CardDiv,
  CardContentDiv,
  Heading2,
  Paragraph,
  Image,
} from './property-card.styled';

export function PropertyCard({
  imgSrc,
  imgAlt,
  price,
  address,
  propertyType,
}: TProperties): ReactElement {
  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
  }).format(price);
  return (
    <CardDiv>
      <Image src={imgSrc} alt={imgAlt} />
      <CardContentDiv>
        <Heading2>{formattedPrice}</Heading2>
        <Paragraph>{address}</Paragraph>
        <Paragraph>{propertyType}</Paragraph>
      </CardContentDiv>
    </CardDiv>
  );
}

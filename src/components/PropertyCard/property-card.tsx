import { ReactElement } from 'react';
import Link from 'next/link';

import { TProps } from './property-card.types';
import {
  CardLink,
  CardContentDiv,
  Heading2,
  Paragraph,
  Image,
} from './property-card.styled';
import { transition } from '../../constants';

export function PropertyCard({
  id,
  imgSrc,
  imgAlt,
  price,
  address,
  propertyType,
}: TProps): ReactElement {
  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
  }).format(price);

  return (
    <Link href={`/properties/${id}`}>
      <CardLink layoutId={`property-container-${id}`} transition={transition}>
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
          <Heading2 layoutId={`property-price-${id}`}>
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
        </CardContentDiv>
      </CardLink>
    </Link>
  );
}

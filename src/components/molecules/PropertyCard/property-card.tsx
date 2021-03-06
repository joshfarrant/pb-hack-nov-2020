import { ReactElement } from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { TProps } from './property-card.types';
import {
  CardLink,
  CardContentDiv,
  Heading2,
  Paragraph,
  Image,
} from './property-card.styled';
import { transition } from '../../../constants';

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
          imgSrc={imgSrc}
          alt={imgAlt}
          layoutId={`property-image-${id}`}
          transition={transition}
        />
        <CardContentDiv
          layoutId={`property-content-container-${id}`}
          transition={transition}
        >
          <motion.div
            layoutId={`property-price-${id}`}
            transition={transition}
            layout
          >
            <Heading2>{formattedPrice}</Heading2>
          </motion.div>
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
        <motion.div layoutId={`property-body-${id}`} transition={transition} />
      </CardLink>
    </Link>
  );
}

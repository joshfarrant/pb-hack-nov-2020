import styled from 'styled-components';

import { ReactElement } from 'react';
import { TProperties } from './property-card.types';

const CardDiv = styled.div`
  border-radius: 25px;

  box-shadow: 1px 6px 18px -8px #595959;
  overflow: hidden;
  max-width: 100%;
`;

const CardContentDiv = styled.div`
  margin: 15px 10px 20px;
`;
const Heading2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;
const Paragraph = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

const Image = styled.img`
  width: 100%;
`;

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

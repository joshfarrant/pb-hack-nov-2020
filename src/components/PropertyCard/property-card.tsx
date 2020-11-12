import styled from 'styled-components';

import { ReactElement } from 'react';
import { TProperties } from './property-card.types';

export function PropertyCard({
  imgSrc,
  imgAlt,
  price,
  address,
  propertyType,
}: TProperties): ReactElement {
  const Paragraph = styled.p`
    font-size: 15px;
  `;

  return (
    <div>
      <img src={imgSrc} width="500" alt={imgAlt} />
      <Paragraph>{price}</Paragraph>
      <Paragraph>{address}</Paragraph>
      <Paragraph>{propertyType}</Paragraph>
    </div>
  );
}

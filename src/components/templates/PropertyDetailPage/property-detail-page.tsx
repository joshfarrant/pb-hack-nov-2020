import { useState, ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';

import { Layout } from '../../templates/Layout';
import { Button } from '../../atoms/Button';
import { HeartButton } from '../../atoms/HeartButton';
import { ShareButton } from '../../atoms/ShareButton';
import { Modal } from '../../molecules/Modal';

import {
  ButtonContainer,
  StyledContainer,
  StyledHeading,
  StyledDescription,
  TopContainer,
  StyledOverlay,
  CardBodyContainer,
  IconContainer,
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
  const [showModal, setShowModal] = useState(false);
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
            imgSrc={imgSrc}
            alt={imgAlt}
            layoutId={`property-image-${id}`}
            transition={transition}
          />
          <CardContentDiv
            layoutId={`property-content-container-${id}`}
            transition={transition}
          >
            <TopContainer
              layout
              layoutId={`property-price-${id}`}
              transition={transition}
            >
              <Heading2>{formattedPrice}</Heading2>
              <IconContainer>
                <HeartButton />
                <ShareButton />
              </IconContainer>
            </TopContainer>
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
          <CardBodyContainer
            layoutId={`property-body-${id}`}
            transition={transition}
          >
            <ButtonContainer>
              <Button
                color="primary"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Book a viewing
              </Button>
              <Button color="secondary">Make an offer</Button>
            </ButtonContainer>
            <StyledHR />
            {description.split('\n').map(x => (
              <StyledDescription key={x.substr(0, 15)}>{x}</StyledDescription>
            ))}
          </CardBodyContainer>
        </StyledContainer>
      </Layout>
      <AnimatePresence>
        {showModal && (
          <StyledOverlay
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <Modal setModalOpen={setShowModal} isOpen={showModal} />
    </>
  );
};

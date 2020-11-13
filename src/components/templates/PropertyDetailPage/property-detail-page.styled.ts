import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledHeading = styled.h1`
  font-size: 22px;
  margin: 8px 0 20px;
  padding: 0 15px;
`;

export const StyledContainer = styled(motion.div)`
  padding: 15px 0;
  box-sizing: border-box;
  background: #fff;
  height: 100%;
`;

export const CardContentDiv = styled(motion.div)`
  margin: 16px 16px 20px;
`;

export const CardBodyContainer = styled(motion.div)`
  margin: 15px 10px 24px;
`;

export const TopContainer = styled(motion.div)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6px;
`;

export const Heading2 = styled.h2`
  font-size: 22px;
  line-height: 44px;
  font-weight: bold;
  margin: 0;
`;

export const Paragraph = styled(motion.p)`
  font-size: 16px;
  margin: 5px 0;
`;

export const StyledDescription = styled(motion.p)`
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
`;

export const Image = styled(motion.div)`
  background-image: url(${({ imgSrc }) => imgSrc});
  width: 100%;
  height: 212px;
  background-size: cover;
  background-position: center;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  padding: 0 0 24px;
`;

export const StyledHR = styled.div`
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 24px;
`;

export const StyledOverlay = styled(motion.div)`
  background: rgba(4, 4, 15, 0.8);
  height: 100vh;
  width: 100vh;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;

export const StyledModalContainer = styled(motion.div)``;

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
  margin: 15px 10px 20px;
`;
export const Heading2 = styled(motion.h2)`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const Paragraph = styled(motion.p)`
  font-size: 16px;
  margin: 5px 0;
`;

export const Image = styled(motion.img)`
  width: 100%;
`;

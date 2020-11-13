import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardLink = styled(motion.a)`
  border-radius: 8px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border: 1px solid #dbdbdb;
  overflow: hidden;
  max-width: 100%;
  background: #fff;
  cursor: pointer;
`;

export const CardContentDiv = styled(motion.div)`
  margin: 16px 16px 20px;
`;

export const Heading2 = styled.h2`
  font-size: 20px;
  display: inline;
  font-weight: bold;
  margin: 0;
`;

export const Paragraph = styled(motion.p)`
  font-size: 16px;
  margin: 5px 0;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Image = styled(motion.div)<any>`
  background-image: url(${({ imgSrc }) => imgSrc});
  width: 100%;
  height: 194px;
  background-size: cover;
  background-position: center;
`;

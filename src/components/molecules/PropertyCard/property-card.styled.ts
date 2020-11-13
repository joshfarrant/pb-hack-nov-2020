import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardLink = styled(motion.a)`
  border-radius: 25px;

  box-shadow: 1px 6px 18px -8px #595959;
  overflow: hidden;
  max-width: 100%;
  background: #fff;
  cursor: pointer;
`;

export const CardContentDiv = styled(motion.div)`
  margin: 15px 10px 20px;
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

export const Image = styled(motion.div)`
  background-image: url(${({ imgSrc }) => imgSrc});
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
`;

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledContainer = styled(motion.div)`
  position: fixed;
  bottom: 15px;
  left: 15px;
  width: calc(100% - 30px);
  background: #fff;
  border-radius: 16px;
  z-index: 500;
  padding: 24px;
  box-sizing: border-box;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const StyledTitle = styled.h3`
  font-size: 22px;
  line-height: 30px;
  font-weight: 700;
  margin: 0;
`;

export const StyledCloseIcon = styled.img`
  cursor: pointer;
`;

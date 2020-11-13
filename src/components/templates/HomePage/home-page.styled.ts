import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PageMain = styled.main`
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  padding: 10px;
  background: rebeccapurple;
  color: white;
  text-align: center;
`;

export const StartDemoLink = styled(motion.a)`
  font-size: 30px;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  display: block;
  max-width: 300px;
  margin: 0 auto;

  &:hover,
  &:focus {
    text-decoration: underline double;
  }
`;

export const StartJokeButton = styled(motion.button)`
  background: white;
  color: black;
  border: none;
  border-radius: 0;
  padding: 10px;
  font-size: 20px;
  font-family: var(--font-family-heading);
  margin: 20px;
  font-weight: bold;
`;

export const JokeP = styled.p`
  font-size: 24px;
`;

export const OrP = styled.p`
  margin: 20px 10px 10px;
  font-size: 20px;
  font-weight: bold;
`;

export const BlockSpan = styled.span`
  display: block;
`;
export const BlockSpanVariable = styled(BlockSpan)`
  @keyframes fontWeight {
    0% {
      font-weight: 200;
    }
    50% {
      font-weight: 500;
    }
    100% {
      font-weight: 200;
    }
  }
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  animation: 500ms linear 1s infinite fontWeight;
`;

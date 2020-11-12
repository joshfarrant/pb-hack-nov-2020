import { useEffect, useRef, ReactElement } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

import { StyledContainer } from './tick-animation.styled';

export const TickAnimation = (): ReactElement => {
  const animationContainer = useRef();
  const lottieAnimation = useRef<AnimationItem>();

  useEffect(() => {
    lottieAnimation.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: '/assets/animations/tick.json',
    });
  }, []);

  return (
    <StyledContainer
      ref={animationContainer}
      style={{
        width: 100,
        height: 100,
      }}
    />
  );
};

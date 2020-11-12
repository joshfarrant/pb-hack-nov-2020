import { useEffect, useRef, useState, ReactElement } from 'react';
import lottie, { AnimationItem, AnimationSegment } from 'lottie-web';

import { StyledButton } from './heart-button.styled';

const segments = {
  in: [0, 60] as AnimationSegment,
  out: [61, 120] as AnimationSegment,
};

export const HeartAnimation = (): ReactElement => {
  const animationContainer = useRef();
  const [isHearted, setIsHearted] = useState(false);
  const lottieAnimation = useRef<AnimationItem>();

  useEffect(() => {
    lottieAnimation.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/assets/animations/heart.json',
    });
  }, []);

  return (
    <StyledButton
      ref={animationContainer}
      onClick={e => {
        const segment = segments[isHearted ? 'in' : 'out'];
        lottieAnimation.current.playSegments(segment, true);
        setIsHearted(lastState => !lastState);
      }}
    />
  );
};

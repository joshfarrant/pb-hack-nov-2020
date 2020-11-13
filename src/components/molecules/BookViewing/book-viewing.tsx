/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useRef, useState, ReactElement } from 'react';
import lottie, { AnimationItem, AnimationSegment } from 'lottie-web';

import {
  RadioButtonContainer,
  WrappingDiv,
  RadioBtnInput,
  AnimationContainer,
  RadioButtonDiv,
  ButtonContainer,
} from './book-viewing.styled';
import { Button } from '../../atoms/Button';

const segments = {
  in: [0, 78] as AnimationSegment,
  out: [79, 110] as AnimationSegment,
};

export const BookViewing = ({
  closeModal,
}: {
  closeModal: () => void;
}): ReactElement => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const animationContainer = useRef();
  const [lottieAnimation, setLottieAnimation] = useState<AnimationItem>();

  useEffect(() => {
    if (!animationContainer.current) {
      return;
    }

    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/assets/animations/success.json',
    });

    if (showAnimation) {
      anim.playSegments(segments.in, true);
    }

    setLottieAnimation(anim);
  }, [showAnimation]);

  // useEffect(() => {
  //   console.debug('useEffect');
  //   const anim = lottie.loadAnimation({
  //     container: animationContainer.current,
  //     renderer: 'svg',
  //     loop: false,
  //     autoplay: false,
  //     path: '/assets/animations/success.json',
  //   });

  //   setLottieAnimation(anim);
  // }, []);

  // useEffect(() => {
  //   if (showAnimation) {
  //     lottieAnimation.playSegments(segments.in, true);
  //   }
  // }, [showAnimation]);

  const availableDates = [
    '9.00 on Saturday 14 November',
    '10.00 on Saturday 14 November',
    '13.00 on Saturday 14 November',
  ];

  return (
    <WrappingDiv>
      {showAnimation ? (
        <AnimationContainer ref={animationContainer} />
      ) : (
        <RadioButtonContainer>
          {availableDates.map((x, i) => {
            const id = `date${i}`;
            return (
              <RadioButtonDiv>
                <RadioBtnInput
                  id={id}
                  type="radio"
                  value={id}
                  name="date"
                  checked={selectedIdx === i}
                  onChange={e => {
                    if (e.target.checked) {
                      setSelectedIdx(i);
                    }
                  }}
                />
                <label htmlFor={id}>{x}</label>
              </RadioButtonDiv>
            );
          })}
        </RadioButtonContainer>
      )}
      <ButtonContainer>
        {showAnimation ? (
          <Button
            color="primary"
            onClick={() => {
              closeModal();
            }}
          >
            Done
          </Button>
        ) : (
          <>
            <Button
              color="primary"
              onClick={() => {
                setShowAnimation(true);
              }}
            >
              Book now
            </Button>
            <Button color="secondary">Choose another time</Button>
          </>
        )}
      </ButtonContainer>
    </WrappingDiv>
  );
};

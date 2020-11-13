/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useRef, useState, ReactElement } from 'react';
import lottie from 'lottie-web';

import {
  RadioButtonContainer,
  WrappingDiv,
  RadioBtnInput,
  AnimationContainer,
  RadioButtonDiv,
  ButtonContainer,
} from './book-viewing.styled';
import { Button } from '../../atoms/Button';

export const BookViewing = ({
  closeModal,
}: {
  closeModal: () => void;
}): ReactElement => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const animationContainer = useRef();
  const animationOutContainer = useRef();
  const [runAnimOut, setRunAnimOut] = useState(false);
  const [anim2, setAnim2] = useState();

  useEffect(() => {
    const animIn = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/assets/animations/success-in.json',
    });

    const animOut = lottie.loadAnimation({
      container: animationOutContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/assets/animations/success-out.json',
    });

    setAnim2(animOut);

    if (showAnimation) {
      animIn.play();
      setTimeout(() => {
        setHasAnimated(true);
      }, 2000);
    }
  }, [showAnimation]);

  useEffect(() => {
    if (anim2 && runAnimOut) {
      anim2.play();
    }
  }, [runAnimOut]);

  const availableDates = [
    '9.00 on Saturday 14 November',
    '10.00 on Saturday 14 November',
    '13.00 on Saturday 14 November',
  ];

  return (
    <WrappingDiv>
      {showAnimation ? (
        <>
          <AnimationContainer
            ref={animationContainer}
            hasAnimated={hasAnimated}
          />
          <AnimationContainer
            ref={animationOutContainer}
            hasAnimated={!hasAnimated}
          />
        </>
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
              setRunAnimOut(true);
              setTimeout(() => {
                closeModal();
              }, 800);
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

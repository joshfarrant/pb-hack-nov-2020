/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import {
  RadioButtonContainer,
  WrappingDiv,
  RadioBtnInput,
  RadioButtonDiv,
  ButtonContainer,
} from './book-viewing.styled';

import { Button } from '../../atoms/Button';

export const BookViewing: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const availableDates = [
    '9.00 on Saturday 14 November',
    '10.00 on Saturday 14 November',
    '13.00 on Saturday 14 November',
  ];

  return (
    <WrappingDiv>
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
      <ButtonContainer>
        <Button color="primary">Book now</Button>
        <Button color="secondary">Choose another time</Button>
      </ButtonContainer>
    </WrappingDiv>
  );
};

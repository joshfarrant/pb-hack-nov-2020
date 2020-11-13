/* eslint-disable jsx-a11y/label-has-associated-control */
import { ReactElement } from 'react';

import {
  RadioButtonContainer,
  WrappingDiv,
  RadioBtnInput,
  RadioButtonDiv,
  ButtonContainer,
} from './book-viewing.styled';

import { Button } from '../atoms/Button';

export const BookViewing = (): ReactElement => {
  return (
    <WrappingDiv>
      <RadioButtonContainer>
        <RadioButtonDiv>
          <RadioBtnInput id="date1" type="radio" value="date1" name="date" />
          <label htmlFor="date1"> 9.00 on Saturday 14 November </label>
        </RadioButtonDiv>
        <RadioButtonDiv>
          <RadioBtnInput id="date2" type="radio" value="date2" name="date" />
          <label htmlFor="date2"> 13.00 on Saturday 14 November </label>
        </RadioButtonDiv>
        <RadioButtonDiv>
          <RadioBtnInput id="date3" type="radio" value="date3" name="date" />
          <label htmlFor="date3"> 10.00 on Saturday 14 November </label>
        </RadioButtonDiv>
      </RadioButtonContainer>
      <ButtonContainer>
        <Button color="primary">Book now</Button>
        <Button color="secondary">Choose another time</Button>
      </ButtonContainer>
    </WrappingDiv>
  );
};

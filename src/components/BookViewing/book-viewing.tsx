
import { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import React from "react";

import {
    RadioButtonContainer, Paragraph, WrappingDiv, RadionBtnInput,RadioButtonDiv
} from './book-viewing.styled';
import { ButtonContainer } from './book-viewing.styled';
import { Button } from '../atoms/Button';


export const BookViewing = (): ReactElement => {

    return (
        <WrappingDiv>
            <RadioButtonContainer>
                <RadioButtonDiv>
                    <RadionBtnInput id="date1" type="radio" value="date1" name="date" />
                    <label htmlFor="date1"> 9.00 on Saturday 14 November </label>
                </RadioButtonDiv>
                <RadioButtonDiv>
                    <RadionBtnInput id="date2" type="radio" value="date2" name="date" />
                    <label htmlFor="date2"> 13.00 on Saturday 14 November </label>
                </RadioButtonDiv>
                <RadioButtonDiv>
                    <RadionBtnInput id="date3" type="radio" value="date3" name="date" />
                    <label htmlFor="date3"> 10.00 on Saturday 14 November </label>
                </RadioButtonDiv>
            </RadioButtonContainer>
            <ButtonContainer>
              <Button color="primary">Book now</Button>
              <Button color="secondary">Choose another time</Button>
            </ButtonContainer>
        </WrappingDiv>
    )
}



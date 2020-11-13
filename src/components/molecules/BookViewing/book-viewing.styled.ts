import styled, { css } from 'styled-components';

export const WrappingDiv = styled.div``;

export const RadioButtonContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  margin: 20px 0 30px;
`;

export const RadioBtnInput = styled.input`
  appearance: none;
  background-color: white;
  border: 1px solid #8a2d87;
  border-radius: 50%;
  display: flex;
  flex: 0 1 24px;
  height: 24px;
  margin: 0;
  margin-right: 4px;
  position: relative;
  top: 0;
  transition: 0.2s all ease-out;
  width: 24px;

  &::after {
    background-color: white;
    border-radius: 100%;
    content: '';
    display: block;
    height: 8px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 8px;
  }

  &:focus {
    box-shadow: 0px 0px 0px 2px #c856c4;
    outline: none;
  }

  &:checked {
    border-width: 2px;
    &::after {
      background-color: #400f4c;
    }
  }
`;

export const RadioButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 14px;
  & label {
    margin-left: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  padding: 0;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AnimationContainer = styled.div<any>`
  height: 225px;
  width: 100%;
  ${({ hasAnimated }) => {
    if (hasAnimated) {
      return css`
        display: none;
      `;
    }
  }}
`;

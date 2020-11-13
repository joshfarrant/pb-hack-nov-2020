import styled from 'styled-components';

export const WrappingDiv = styled.div`  
`;


export const Paragraph = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

export const RadioButtonContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  margin: 10px 0;
`;

export const RadionBtnInput = styled.input`
  appearance: none;
  background-color: white;
  border: 2px solid #8A2D87;
  border-radius: 50%;
  display: flex;
  flex: 0 1 32px;
  height: 32px;
  margin-right: rems(10);
  position: relative;
  top: 0;
  transition: 0.2s all ease-out;
  width: 32px;
  
  &::after{
    background-color: white;
    border-radius: 100%;
    content: "";
    display: block;
    height: 16px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 16px;
  }

  &:focus{
    box-shadow: 0px 0px 0px 2px #C856C4;
    outline: none;
  }

  &:checked{
    &::after{
        background-color: #400F4C;
    }

  }
`

export const RadioButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  & label{
    margin-left: 5px;
  }
`
export const ButtonContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 15px;
  padding: 0 0 24px;
`;

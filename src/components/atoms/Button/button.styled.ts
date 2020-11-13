import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 14px 8px;
  flex: 1;
  font-family: var(--font-family-heading);
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  border-radius: 2px;
  cursor: pointer;

  ${({ color }) => {
    let textColor = '#282637';
    let backgroundColor = '#fff';
    let borderColor = textColor;

    if (color === 'primary') {
      textColor = '#FFFFFF';
      backgroundColor = '#8A2D87';
      borderColor = backgroundColor;
    }

    return css`
      color: ${textColor};
      background-color: ${backgroundColor};
      border: 1px solid ${borderColor};
    `;
  }}
`;

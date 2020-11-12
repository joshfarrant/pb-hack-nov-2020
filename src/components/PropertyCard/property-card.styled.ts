import styled from 'styled-components';

export const StyledTab = styled.li`
  flex: 1;
  padding: 1rem 0;
  color: ${properties => properties.theme.color.grey6};

  &:focus {
    outline: 0.1rem solid ${properties => properties.theme.color.purple};
  }

  &[aria-selected='true'] {
    color: ${properties => properties.theme.color.purple};
    border-bottom: 0.3rem solid ${properties => properties.theme.color.purple};
  }
`;

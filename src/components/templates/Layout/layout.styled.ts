import styled from 'styled-components';

export const StyledContainer = styled.div`
  background: #000;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const StyledDevice = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  max-width: 500px;
  max-height: 900px;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-y: scroll;
`;

export const StyledMain = styled.main`
  flex: 1;
  width: 100%;
  padding: 18px 0;
`;

export const StyledHeader = styled.header`
  width: 100%;
  flex: 0 0 54px;
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledLogo = styled.img`
  height: 28px;
`;

export const StyledBackContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 0 15px;
`;

export const StyledLinkText = styled.span`
  display: block;
  margin-left: 4px;
  color: var(--grey-color);
  font-weight: var(--font-weight-bold);
`;

export const StyledBackLink = styled.a`
  cursor: pointer;
  display: contents;
`;

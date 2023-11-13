import styled from "styled-components";

export const MainControl = styled.main`
  flex-grow: 1;

  max-width: 1120px;
  margin: 0 auto;

  width: 100%;
  
  padding: 130px 0 48px;
`;

export const ContentControl = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const Wrapper = styled.div`
  height: 100vh;

  @media (max-width: 1200px) {
    ${MainControl} {
      max-width: 375px;
      padding: 140px 16px 40px;
    }
  }
`;
import styled from "styled-components";

export const Container = styled.section`
  &:not(:last-child){
    margin: 0 0 3.5rem;
  }
  
  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 2rem;
    font-weight: 500;
    
    margin-bottom: 1.5rem;
  }

  @media (max-width: 1200px) {
    &:not(:last-child){
      margin: 0 0 1.5rem;
    }

    text-align: center;

    h1{
      font-size: 1.5rem;
    }
  }
`;

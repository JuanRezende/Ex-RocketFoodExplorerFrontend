import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Form = styled.form`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 4rem;
  width: 476px;

  > h1,
  a {
    font-weight: 500;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15rem;

  padding: 5.6rem 6.75rem;

  height: 100vh;

  img {
    height: 48px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4rem;

    padding: 0 2.5rem;

    img {
      height: 44px;
    }

    ${Form} {
      background: none;
      padding: 0;
      width: 100%;

      h1 {
        display: none;
      }
    }
  }
`;

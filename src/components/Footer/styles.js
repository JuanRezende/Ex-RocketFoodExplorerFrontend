import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  padding: 16px 0;
  max-width: 1120px;
`;

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_200};

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    font-size: 0.6rem;
    padding: 0 24px;

    img {
      width: 120px;
    }

    ${Container}{
      max-width: 375px;
    }
  }
`;




import { styled } from "styled-components";

export const Container = styled.div``;

export const TitleBanner = styled.h2`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  font-size: 2.5rem;
  font-weight: 500;
  line-height: 3.5rem;

  margin-bottom: 8px;
`;

export const SubtitleBanner = styled.p`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  font-family: "Roboto", sans-serif;
  line-height: 100%;
`;

export const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.COLORS.GRADIENT_1} 0%,
    ${({ theme }) => theme.COLORS.GRADIENT_2} 100%
  );
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  padding: 6rem;

  width: 1120px;
  margin: 0 auto;
  margin-top: 128px;
  margin-bottom: 62px;

  img {
    position: absolute;
    bottom: 0;
    left: -56px;
  }

  @media (max-width: 1200px) {
    padding: 1rem;
    width: auto;
    margin: 0 0 32px;

    img {
      position: absolute;
      bottom: 0;
      left: -20px;

      height: 7rem;
    }

    ${Container} {
      z-index: 1;
      max-width: 12rem;
    }

    ${TitleBanner} {
      font-size: 1.125rem;
      line-height: 140%;
    }

    ${SubtitleBanner} {
      font-size: 0.75rem;
      line-height: 140%;
    }
  }
`;

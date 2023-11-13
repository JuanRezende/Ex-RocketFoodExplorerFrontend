import styled from "styled-components";

export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.875rem;

  min-width: 108px;

  span {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PriceProduct = styled.span`
  color: ${({ theme }) => theme.COLORS.BLUE_LIGHT_200};
  font-size: 2rem;
`;

export const DescriptionProduct = styled.p`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 0.875rem;
  line-height: 1.375rem;
`;

export const TitleProduct = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;

  &::after {
    content: " >";
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: inherit;
  justify-content: space-between;

  a{
    width: fit-content;
    margin: 0 auto;
  }
`;

export const FavButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;

  position: absolute;
  top: 16px;
  right: 18px;
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};
  text-align: center;

  display: flex;
  flex-direction: column;

  width: 340px;
  height: 100%;
  margin: 0 auto;

  position: relative;
  padding: 24px;

  svg,
  img {
    cursor: pointer;
  }

  /* > svg {
    position: absolute;
    top: 16px;
    right: 18px;
  } */

  img {
    width: 176px;
    height: 176px;
    margin-bottom: 15px;
  }

  > :first-child{
    align-self: end;
  }

  @media (max-width: 1200px) {
    width: 240px;

    img {
      width: 100px;
      height: 100px;
    }

    ${ButtonContainer} {
      flex-direction: column;
      align-items: center;

      ${QuantityBox}{
        span {
          font-size: 1.25rem;
        }
      }
    }

    ${PriceProduct}{
      font-size: 1.5rem;
    }

    ${DescriptionProduct} {
      display: none;
    }

    ${TitleProduct}{
      font-size: 1rem;
    }
  }
`;

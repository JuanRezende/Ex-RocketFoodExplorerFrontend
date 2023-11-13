import styled from "styled-components";
import {Wrapper as Button } from '../../components/Button/styles';

export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.875rem;

  min-width: 108px;

  svg{
    cursor: pointer;
  }

  span{
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;

  ${Button}{
    width: fit-content;
  }
`;

export const TagsBox = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const DescriptionProduct = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const TitleProduct = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 3rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProductImg = styled.img`
  height: 380px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    ${ProductImg}{
      height: 264px;
    }

    ${TitleProduct}{
      font-size: 1.5rem;
    }

    ${DescriptionProduct}{
      font-size: 1rem;
    }
    
    ${TagsBox}{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
    }

    ${ButtonContainer}{
      ${Button}{
        flex: 1;
      }
    }
  }
`;

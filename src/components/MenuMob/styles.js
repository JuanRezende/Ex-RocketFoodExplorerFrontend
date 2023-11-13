import styled, { css } from "styled-components";
import { Search } from "../Header/styles";

export const MenuOptionsMob  = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  button{
    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    padding: 10px;
    
    font-size: 1.5rem;
    text-align: left;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 24px;

  display: flex;
  align-items: center;
  gap: 32px;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  span{
    font-size: 1.5rem;
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  
  display: flex;
  flex-direction: column;
  gap: 40px;

  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 150;

  padding: 120px 24px 40px;

  opacity: 0;
  pointer-events: none;

  > svg {
    position: absolute;
    top: 16px;
    left: 16px;
  }

  ${Search} {
    padding-left: 20px;
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
  `}
`;
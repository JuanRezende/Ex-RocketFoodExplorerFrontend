import styled from "styled-components";
import { Wrapper as Button } from "../Button/styles";
import { Wrapper as Input } from "../Input/styles";

export const MenuMob = styled.button`
  border: none;
  background: none;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  margin: 0 auto;
  max-width: 1120px;
`;

export const Brand = styled.img`
  width: 192px;
  vertical-align: middle;
`;

export const Search = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding-left: 70px;

  ${Input} {
    label {
      display: none;
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    vertical-align: middle;
  }
`;

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  padding: 24px 0;

  .MenuMob {
    display: none;
  }

  nav {
    display: flex;
    gap: 32px;
  }

  ${Button} {
    font-size: 0.875rem;
    min-width: 216px;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 1200px) {
    .MenuMob {
     display: initial;
    }

    ${Brand} {
      width: 190px;
    }

    ${Search} {
      display: none;
    }

    ${Button} {
      background: none;
      padding: 0;
      min-width: auto;

      span {
        display: none;
      }
    }

    ${Logout} {
      display: none;
    }
  }
`;

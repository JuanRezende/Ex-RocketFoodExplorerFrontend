import styled from "styled-components";
import { Wrapper as Input } from "../../components/Input/styles";

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: fit-content;
  }
`;

export const CenterBox = styled.div`
  display: flex;
  gap: 2rem;

  > :first-child {
    flex: 1;
  }

  > :nth-child(2) {
    flex: 0.575;
  }
`;

export const TagBox = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border-radius: 5px;

  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  overflow-y: auto;
  max-height: 150px;

  padding: 8px;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const CategoryBox = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  select {
    cursor: pointer;

    color: #fff;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border-radius: 5px;
    border: none;

    width: 100%;
    padding: 0.75rem;

    font-size: 16px;
    line-height: 26px;
  }
`;

export const SelectImg = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 5px;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 12px 32px;
  margin-top: 8px;
`;

export const InputBox = styled.div`
  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  span,
  svg {
    color: #fff;
  }

  input[type="file"] {
    display: none;
  }
`;

export const TopBox = styled.div`
  display: flex;
  gap: 2rem;

  ${Input} {
    flex: 1;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 140%;
  margin-bottom: 32px;
`;

export const Wrapper = styled.main`
  width: 100%;

  @media (max-width: 1200px) {
    ${TopBox}, ${CenterBox}{
      display: flex;
      flex-direction: column;
    }

    ${ButtonBox}{
      button {
        width: -webkit-fill-available;
      }
    }
  }
`;

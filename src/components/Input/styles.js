import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 5px;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    width: 100%;

    padding: 12px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: 8px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  .button-remove {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > input {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    max-width: 140px;
    height: 32px;
    padding: 8px 16px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  svg {
    vertical-align: middle;
  }
`;
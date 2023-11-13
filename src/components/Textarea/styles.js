import styled from "styled-components";

export const STextarea = styled.textarea`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 8px;
  border: none;

  width: 100%;
  height: 150px;
  resize: none;

  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

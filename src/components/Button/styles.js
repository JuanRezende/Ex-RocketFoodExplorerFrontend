import { styled } from "styled-components";

export const Wrapper = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: 0;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  width: 100%;
  padding: 12px 32px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 1200px) {
    padding: 8px 20px;
  }
`;

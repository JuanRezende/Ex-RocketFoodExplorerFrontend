import styled from "styled-components";

export const Container = styled.span`
  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  border-radius: 5px;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 24px;

  padding: 4px 8px;
  width: fit-content;
`;
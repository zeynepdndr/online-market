import styled from "styled-components";
import theme from "theme";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
`;
export const Title = styled.span`
  color: #393939;
  font-weight: 400;
  -webkit-box-orient: vertical;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
export const Price = styled.div`
  color: ${theme.palette.secondary.main};
  margin-top: 4px;
  font-weight: 600;
  line-height: 18px @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
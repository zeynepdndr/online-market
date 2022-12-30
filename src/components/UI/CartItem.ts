import styled from "styled-components";
import theme from "../../theme";

export const StyledContainer = styled.div`
  border: 1px solid ${theme.palette.secondary.main};
  padding: 25px 12px 18px;
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
  font-weight: 600;
  line-height: 18px @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
export const Description = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
export const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`;
const Action = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: ${theme.palette.primary.main};
  }
`;

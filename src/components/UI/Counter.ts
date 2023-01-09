import styled from "styled-components";
import theme from "theme";

export const Counter = styled.div`
  background-color: ${theme.palette.primary.light};
  color: ${theme.palette.primary.main};
  border: 1px solid rgba(0, 0, 0.08);
  border-radius: 8px;
  overflow: hidden;
  box-shodow: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 98px;
`;
export const StyledButton = styled.button`
  font-weight: 600;
  width: 32px;
  height: 32px;
`;
export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.palette.primary.light};
  background-color: ${theme.palette.primary.main};
  width: 32px;
  height: 32px;
`;

export const Paragraph = styled.div`
  color: ${theme.palette.primary.main};
  justify-content: center;
  align-items: center;
`;

export default Counter;

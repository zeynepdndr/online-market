import styled from "styled-components";
import theme from "theme";

const RadioButton = styled.div`
  color: ${theme.palette.secondary.main};
  height: 1.125rem;
  width: 1.125rem;
  border: 1px solid #dbdbff;
  font-size: 13px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 8px;
  transition: border-color 0.15s;
  padding: 4px 8px;

  &:checked::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: red;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(0);
  }

  &:hover {
    color: ${theme.palette.secondary.dark};
  }
`;

export default RadioButton;

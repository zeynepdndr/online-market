import styled from "styled-components";
import theme from "theme";

export const Item = styled.label`
  display: flex;
  align-items: center;
  vertical-align:center;
  user-select:none;
  cursor:pointer;
  margin-bottom:16px;
`;

export const CheckBoxLabel = styled.span`
  height: 24px;
`;

const Checkbox = styled.input`
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${CheckBoxLabel} {
    background: red;
    &::after {
      content: "";
      font-family: "FontAwesome";
      display: block;
      color: pink;
      width: 14px;
      height: 14px;
      margin: 4px;
    }
  }
  &:checked + ${CheckBoxLabel} {
    background: yellow;
    &::after {
      content: "";
      font-family: "FontAwesome";
      display: block;
      color: orange;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;

export default Checkbox;

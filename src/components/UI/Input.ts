import styled from "styled-components";
import theme from "../../theme";

const Input = styled.input`
  width: 248,
  height: 48,
  borderRadius: 2,
  color: ${theme.palette.text.primary},
  border: "2px solid #E0E0E0",
  "&:focus": {
    outline: "none",
    borderColor: "pink",
  },
  `;

export default Input;

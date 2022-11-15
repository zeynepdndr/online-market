import { styled } from "@mui/system";

const Input = styled("input")(({ theme, ...props }) => ({
  width: 248,
  height: 48,
  borderRadius: 2,
  color: theme.palette.text.secondary,
  border: "2px solid #E0E0E0",
  "&:focus": {
    outline: "none",
    borderColor: "pink",
  },
}));

export default Input;

import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const StyledButton = styled(Button, { name: "StyledButton", slot: "Wrapper" })(
  ({ theme }) => ({
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,
    borderRadius: 2,

    "&:hover": {
      background: theme.palette.secondary.main,
    },

    "&:active": {
      background: theme.palette.secondary.main,
    },
  })
);

export default StyledButton;

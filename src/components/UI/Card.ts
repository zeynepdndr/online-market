import { styled } from "@mui/system";
import Box from "@mui/material/Box";

const Card = styled(Box, { name: "StyledCard", slot: "Wrapper" })(
  ({ theme }) => ({
    width: 124,
    height: 225,
    background: theme.palette.primary.light,
    borderRadius: 0,
    // ...theme.typography.h6,
  })
);

export default Card;

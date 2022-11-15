import { styled } from "@mui/system";
import theme from "../../theme";
import Box from "@mui/material/Box";
const StyledCard = styled(Box, { name: "StyledCard", slot: "Wrapper" })({
  width: 124,
  height: 225,
  background: "red",
  borderRadius: 0,
});

export default StyledCard;

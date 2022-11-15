import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";

const NavbarContainer = styled(AppBar)(({ theme, ...props }) => ({
  position: "inherit",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexFlow: "row nowrap",
  backgroundColor: theme.palette.primary,
  color: theme.palette.primary,
  height: 76.64,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

export default NavbarContainer;

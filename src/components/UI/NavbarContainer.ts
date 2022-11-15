import { styled } from "@mui/system";
import theme from "../../theme";
import AppBar from "@mui/material/AppBar";

// const NavbarContainer = styled.nav`
//   align-items: center;
//   display: flex;
//   flex-flow: row nowrap;
//   background: ${theme.palette.primary.main};
//   height: 56px;
//   padding: 0 30px;
// `;

const NavbarContainer = styled(AppBar)(({ theme, ...props }) => ({
  backgroundColor: theme.palette.primary,
  position: "fixed",
  color: theme.palette.primary,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

export default NavbarContainer;

import styled from "styled-components";
import theme from "../../theme";

const NavbarContainer = styled.div`
  position: "inherit",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexFlow: "row nowrap",
  backgroundColor:${theme.palette.primary},
  color: ${theme.palette.secondary},
  height: 76.64,
  paddingTop:${theme.spacing(2)},
  paddingBottom: ${theme.spacing(2)},`;

export default NavbarContainer;

// import { styled } from "@mui/system";
// import Box from "@mui/material/Box";

// const Card = styled(Box, { name: "StyledCard", slot: "Wrapper" })(
//   ({ theme }) => ({
//     width: 124,
//     height: 225,
//     background: theme.palette.primary.light,
//     borderRadius: 0,
//     // ...theme.typography.h6,
//   })
// );

import styled from "styled-components";
import theme from "../../theme";

const Card = styled.article`
  background-color: ${theme.palette.secondary.light};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.palette.primary.main};
  height: 40px;
  width: 121.02px;
  border-radius: 8px;
`;
export default Card;

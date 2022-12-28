import styled from "styled-components";
import theme from "../../theme";

const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  background: ${theme.palette.secondary.light};
  box-shadow: rgb(93 62 188 / 4%) 0px 6px 24px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  color: #525252;
  cursor: pointer;
`;

export default FilterBox;

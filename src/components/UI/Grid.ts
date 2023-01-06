import styled from "styled-components";

const Grid = styled.div`
// change it
  display: grid;
  grid-template-columns: 1fr min(100%, 663px) 1fr;
  flex: "1 1 0%";
  grid-column:2/auto
`;

export default Grid;

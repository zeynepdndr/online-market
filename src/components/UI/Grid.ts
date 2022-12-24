import styled from "styled-components";

const Grid = styled.div`
// change it
  display: grid;
  grid-template-columns: repeat(1,1fr 3fr 1fr);
  grid-template-rows: 50px 50px
  grid-gap: 5px
`;

export default Grid;

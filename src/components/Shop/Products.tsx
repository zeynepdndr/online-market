import React, { useState } from "react";
import Card from "../UI/Card";
import H4 from "../UI/H4";
import NavbarContainer from "../UI/NavbarContainer";
import ProductList from "./ProductList";
import Button from "@mui/material/Button";

const Products: React.FC = () => {
  const [searchedTournamentName, setSearchedTournamentName] = useState("");

  return (
    <>
      <H4>Products</H4>
      <section>Filter section</section>
      <ProductList />
      <Card>
        <Button variant="text">Text</Button>
      </Card>
    </>
  );
};

export default Products;

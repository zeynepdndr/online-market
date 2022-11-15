import React, { useState } from "react";
import Card from "../UI/Card";
import H4 from "../UI/H4";
import ProductList from "./ProductList";
import Button from "../UI/Button";

const Products: React.FC = () => {
  const [searchedTournamentName, setSearchedTournamentName] = useState("");

  return (
    <>
      <H4>Products</H4>
      <section>Filter section</section>
      <ProductList />
      <Card>
        <Button>Add</Button>
      </Card>
    </>
  );
};

export default Products;

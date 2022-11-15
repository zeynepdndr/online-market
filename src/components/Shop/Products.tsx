import React, { useState } from "react";
import Card from "../UI/Card";
import H4 from "../UI/H4";
import ProductList from "./ProductList";
import Button from "../UI/Button";
import Input from "../UI/Input";

const Products: React.FC = () => {
  const [searchedTournamentName, setSearchedTournamentName] = useState("");

  return (
    <>
      <H4>Products</H4>
      <section>Filter section</section>
      <ProductList />
      <Input placeholder="Search Brand" />
      <Card>
        <Button>Add</Button>
      </Card>
    </>
  );
};

export default Products;

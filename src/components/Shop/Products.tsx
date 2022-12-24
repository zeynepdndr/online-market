import React, { useState } from "react";
import Card from "../UI/Card";
import H4 from "../UI/H4";
import ProductList from "./ProductList";
import Button from "../UI/Button";
import Input from "../UI/Input";
import H6 from "../UI/H6";

const Products: React.FC = () => {
  const [searchedTournamentName, setSearchedTournamentName] = useState("");
  const [products, setProducts] = useState({ a: "a" });

  return (
    <>
      <H6>Products</H6>
      <section>Filter section</section>
      <ProductList />
      {/* <Input placeholder="Search Brand" /> */}
    </>
  );
};

export default Products;

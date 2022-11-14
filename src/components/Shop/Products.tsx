import React, { useState } from "react";
import H4 from "../UI/H4";
import ProductList from "./ProductList";

const Products: React.FC = () => {
  const [searchedTournamentName, setSearchedTournamentName] = useState("");

  return (
    <>
      <H4>Products</H4>
      <section>Filter section</section>
      <ProductList />
    </>
  );
};

export default Products;

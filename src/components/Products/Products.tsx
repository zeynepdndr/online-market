import React, { useState } from "react";
import ProductList from "./ProductList";

const Products: React.FC = () => {
  const [searchedTournamentName, setSearchedTournamentName] = useState("");

  return (
    <>
      <h1>Products</h1>
      <section>Filter section</section>
      <ProductList />
    </>
  );
};

export default Products;

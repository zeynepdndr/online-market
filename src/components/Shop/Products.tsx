import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import H4 from "../UI/H4";
import ProductList from "./ProductList";
import Button from "../UI/Button";
import Input from "../UI/Input";
import H6 from "../UI/H6";

const Products: React.FC = () => {
  const [searchedTournamentName, setSearchedTournamentName] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        console.log(res);
      });
  }, []);

  return (
    <>
      <H6>Products</H6>
      <section>Filter section</section>
      <ProductList products={products} />
      {/* <Input placeholder="Search Brand" /> */}
    </>
  );
};

export default Products;

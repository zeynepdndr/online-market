import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import H4 from "../UI/H4";
import ProductList from "./ProductList";
import Button from "../UI/Button";
import Input from "../UI/Input";
import H6 from "../UI/H6";
import RadioButton from "../UI/RadioButton";
import useSort from "../../hooks/use-sort";

const Products: React.FC = () => {
  const [searchedTournamentName, setSearchedTournamentName] = useState("");
  const [products, setProducts] = useState([]);
  const { sortedBy, sortedOrder, sortedProducts, setSortProducts } =
    useSort(products);

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
      <div
        id="sub-categories"
        style={{ display: "flex", flexDirection: "row", marginBottom: 16 }}
      >
        <RadioButton>Mug</RadioButton>
        <RadioButton>Shirt</RadioButton>
      </div>

      <Button onClick={setSortProducts}>Hey lets sort</Button>
      <ProductList products={sortedProducts} />
      {/* <Input placeholder="Search Brand" /> */}
    </>
  );
};

export default Products;

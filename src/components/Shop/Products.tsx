import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import H4 from "../UI/H4";
import ProductList from "./ProductList";
import Button from "../UI/Button";
import Input from "../UI/Input";
import H6 from "../UI/H6";
import RadioButton from "../UI/RadioButton";

const Products: React.FC = () => {
  const [searchedTournamentName, setSearchedTournamentName] = useState("");
  const [products, setProducts] = useState([]);

  //For sorting mechanism
  const [sortedBy, setSortedBy] = useState<null | string>(null);
  const [sortedOrder, setSortedOrder] = useState<null | string>(null);

  let sortedProducts = products;

  const getSortedValue = (product: any) => {
    return sortedBy === "price" ? product.price : product.added;
  };

  if (sortedOrder && sortedBy) {
    sortedProducts = [...products].sort((a, b) => {
      const valueA = getSortedValue(a);
      const valueB = getSortedValue(b);

      const reverseOrder = sortedOrder === "asc" ? 1 : -1;

      return (valueA - valueB) * reverseOrder;
    });
  }

  const handleClick = () => {
    setSortedOrder("desc");
    setSortedBy("added");
  };

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

      <Button onClick={handleClick}>Hey lets sort</Button>
      <ProductList products={sortedProducts} />
      {/* <Input placeholder="Search Brand" /> */}
    </>
  );
};

export default Products;

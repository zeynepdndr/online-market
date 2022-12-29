import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import H4 from "../UI/H4";
import ProductList from "./ProductList";
import Button from "../UI/Button";
import Input from "../UI/Input";
import H6 from "../UI/H6";
import RadioButton from "../UI/RadioButton";
import useSort from "../../hooks/use-sort";
import { useDispatch } from "react-redux";

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { sortedBy, sortedOrder, sortedProducts, setSortProducts } =
    useSort(products);

  useEffect(() => {
    // fetch("http://localhost:4000/products")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setProducts(res);
    //     console.log(res);
    //   });
  }, []);

  useEffect(() => {
    const sendProductData = async () => {
      // dispatch(
      //   uiActions.showNotification({
      //     status: 'pending',
      //     title: 'Sending...',
      //     message: 'Sending cart data!',
      //   })
      // );
      const response = await fetch("http://localhost:4000/products");
      const data = await response.json();
      console.log("data,data", data);
      setProducts(data);
      if (!response.ok) {
        throw new Error("Fetching products data failed.");
      }
      // setProducts(response);
      // console.log(res);
      //   dispatch(
      //     uiActions.showNotification({
      //       status: 'success',
      //       title: 'Success!',
      //       message: 'Sent cart data successfully!',
      //     })
      //   );
      // };

      // if (isInitial) {
      //   isInitial = false;
      //   return;
      // }
    };
    sendProductData().catch((error) => {
      console.log("an error");
    });
  }, [dispatch]);

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

import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

interface IProductListProps {
  products: any[];
}

const ProductList: React.FC<IProductListProps> = ({ products }) => {
  let productList = <h4>No Products found!</h4>;

  if (products.length > 0) {
    productList = (
      <>
        {products.map((product: any) => (
          <ProductItem
            key={product.id}
            id={product.added}
            description={product.description}
            name={product.name}
            price={product.price}
          />
        ))}
      </>
    );
  }

  let content = productList;

  // if (props.error) {
  //   content = <Alert severity="error">{props.error.message}</Alert>;
  // }

  // if (props.loadingStatus === "pending") {
  //   content = <CircularProgress color="success" />;
  // }

  return <div>{content}</div>;
};

export default ProductList;

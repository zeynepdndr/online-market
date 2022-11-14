import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export interface IProductItem {
  id: string;
  name: string;
}

type ProductListProps = {
  searchedName?: string;
};

const ProductList: React.FC<ProductListProps> = ({ searchedName }) => {
  return <>Product Content & Items</>;
};

export default ProductList;

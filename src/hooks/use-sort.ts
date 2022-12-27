import { useState } from "react";

function useSort(data: any) {
  const [sortedBy, setSortedBy] = useState<null | string>(null);
  const [sortedOrder, setSortedOrder] = useState<null | string>(null);

  let sortedProducts = data;

  const getSortedValue = (product: any) => {
    return sortedBy === "price" ? product.price : product.added;
  };

  if (sortedOrder && sortedBy) {
    sortedProducts = [...data].sort((a, b) => {
      const valueA = getSortedValue(a);
      const valueB = getSortedValue(b);

      const reverseOrder = sortedOrder === "asc" ? 1 : -1;

      return (valueA - valueB) * reverseOrder;
    });
  }
  const setSortProducts = () => {
    setSortedOrder("asc");
    setSortedBy("price");
  };

  return { sortedBy, sortedOrder, sortedProducts, setSortProducts };
}

export default useSort;

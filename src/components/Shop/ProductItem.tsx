import React from "react";
import Card from "../UI/Card";
import cocaColaEnergy from "../../assets/cocaColaEnergy.jpeg";
import Button from "../UI/Button";

interface IProductItemProps {
  id: number;
  description: string;
  name: string;
  price: string;
}

const ProductItem: React.FC<IProductItemProps> = ({
  id,
  name,
  description,
  price,
}) => {
  return (
    <Card key={id}>
      <img alt={name} src={cocaColaEnergy} width={100} />
      <span style={{ color: "#5d3ebc", marginBottom: 8 }}>${price}</span>
      <span style={{ marginBottom: 6 }}>{name}</span>
      <Button>Add</Button>
    </Card>
  );
};

export default ProductItem;

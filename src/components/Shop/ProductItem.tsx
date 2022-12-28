import React from "react";
import Card from "../UI/Card";
import cocaColaEnergy from "../../assets/cocaColaEnergy.jpeg";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

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
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <Card key={id}>
      <img alt={name} src={cocaColaEnergy} width={100} />
      <span style={{ color: "#5d3ebc", marginBottom: 8 }}>${price}</span>
      <span style={{ marginBottom: 6 }}>{name}</span>
      <Button onClick={addToCartHandler}>Add</Button>
    </Card>
  );
};

export default ProductItem;

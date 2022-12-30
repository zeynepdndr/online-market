import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";
import {
  Actions,
  Price,
  Description,
  StyledContainer,
  Title,
} from "../UI/CartItem";
import { Item } from "../UI/Checkbox";
import Button from "../UI/Button";

const CartItem = (props: any) => {
  const dispatch = useDispatch();
  console.log("ndjkfnds", props.item);
  const { name, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <StyledContainer>
      <>
        <Title>{name}</Title>
        <Price>${total.toFixed(2)} </Price>
      </>
      <Button>nfdnf</Button>

      {/* <Description>(${price.toFixed(2)}/item)</Description>x{" "}
      <span>{quantity}</span> */}
      {/* <ActionButton>0 Comments</ActionButton>
      <ActionButton>0 Likes</ActionButton>
      <ActionButton>0 Views</ActionButton> */}
    </StyledContainer>
  );
};

export default CartItem;

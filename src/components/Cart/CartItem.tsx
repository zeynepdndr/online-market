import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import {
  Price,
  StyledContainer,
  Title,
} from "../UI/CartItem";

import Counter, { Paragraph, StyledButton, Text } from "../UI/Counter";
import trashIcon from "../../assets/trashIcon.svg";

const CartItem = (props: any) => {
  const dispatch = useDispatch();
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
      <div>
        <Title>{name}</Title>
        <Price>${total.toFixed(2)} </Price>
      </div>
      <Counter>
        <StyledButton onClick={removeItemHandler}>
          <Paragraph>
            {quantity === 1 ? <img alt="Trash Icon" src={trashIcon} /> : "-"}
          </Paragraph>
        </StyledButton>
        <Text>{quantity}</Text>
        <StyledButton onClick={addItemHandler}>
          <Paragraph>+</Paragraph>
        </StyledButton>
      </Counter>
    </StyledContainer>
  );
};

export default CartItem;

import React, { useState } from "react";
import Container from "../UI/Container";
import basket from "../../assets/basket.svg";
import m from "../../assets/addIcon.svg";
import H6 from "../UI/H6";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const BasketSummary: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  console.log("erwe", cartItems);

  let cartItemList, cartContent;
  if (cartItems.length > 0) {
    cartItemList = cartItems.map((item: any) => (
      <CartItem
        key={item.id}
        item={{
          id: item.itemId,
          name: item.name,
          quantity: item.quantity,
          total: item.totalPrice,
          price: item.price,
        }}
      />
    ));
    cartContent = cartItemList;
  } else {
    cartContent = (
      <div
        style={{
          paddingTop: 40,
          paddingBottom: 56,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img alt="Basket" src={basket} />
        <div>Your Basket is empty</div>
        <div>Add product(s) to your basket to place an order.</div>
      </div>
    );
  }

  return (
    <>
      <H6>Basket</H6>
      <Container>{cartContent}</Container>
      <img alt="Basket" src={m} />
    </>
  );
};

export default BasketSummary;

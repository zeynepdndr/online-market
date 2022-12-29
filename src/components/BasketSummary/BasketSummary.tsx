import React, { useState } from "react";
import Container from "../UI/Container";
import basket from "../../assets/basket.svg";
import m from "../../assets/addIcon.svg";
import H6 from "../UI/H6";
import { useSelector } from "react-redux";

const BasketSummary: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.items);

  const ne = cartItems.map((item: any) => (
    // <CartItem
    //   key={item.id}
    //   item={{
    //     id: item.id,
    //     title: item.name,
    //     quantity: item.quantity,
    //     total: item.totalPrice,
    //     price: item.price,
    //   }}
    // />
    <h1>hı{item.name}</h1>
  ));
  const summaryContent = (
    <div
      style={{
        paddingTop: 40,
        paddingBottom: 56,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {ne}
      <img alt="Basket" src={basket} />
      <div>Your Basket is empty</div>
      <div>Add product(s) to your basket to place an order.</div>
    </div>
  );

  return (
    <>
      <H6>Basket</H6>
      <Container>{summaryContent}</Container>
      <img alt="Basket" src={m} />
    </>
  );
};

export default BasketSummary;

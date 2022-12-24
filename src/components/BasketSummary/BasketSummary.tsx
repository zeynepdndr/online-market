import React, { useState } from "react";
import Container from "../UI/Container";
import basket from "../../assets/basket.svg";
import m from "../../assets/addIcon.svg";
import H6 from "../UI/H6";

const BasketSummary: React.FC = () => {
  const summaryContent = (
    <div>
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

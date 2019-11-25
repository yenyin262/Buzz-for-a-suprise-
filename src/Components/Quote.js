import React from "react";
import { BtnConsumer } from "../Context/BtnContext";

const Quote = () => (
  <BtnConsumer>
    {({ getQuote }) => {
      return getQuote ? <p>{getQuote}</p> : "";
    }}
  </BtnConsumer>
);

export default Quote;

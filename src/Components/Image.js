import React from "react";
import { BtnConsumer } from "../Context/BtnContext";

const Image = () => (
  <BtnConsumer>
    {({ getImage }) => {
      console.log(getImage, "image");
      return getImage ? <img src={getImage} /> : "";
    }}
  </BtnConsumer>
);

export default Image;

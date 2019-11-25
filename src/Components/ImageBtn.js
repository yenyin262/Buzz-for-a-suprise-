import React from "react";
import { BtnConsumer } from "../Context/BtnContext";
import { Button } from "@material-ui/core";

const ImageBtn = () => (
  <BtnConsumer>
    {({ pressBuzzerForImage }) => (
      <Button onClick={() => pressBuzzerForImage()}>Buzz for an Image</Button>
    )}
  </BtnConsumer>
);

export default ImageBtn;

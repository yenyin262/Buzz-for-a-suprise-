import React from "react";
import { BtnConsumer } from "../Context/BtnContext";
import { Button } from "@material-ui/core";

const QuoteBtn = () => (
  <BtnConsumer>
    {({ pressBuzzerForQuotes }) => (
      <Button
        variant="contained"
        color="primary"
        onClick={() => pressBuzzerForQuotes()}
      >
        Buzz for a Quote
      </Button>
    )}
  </BtnConsumer>
);

export default QuoteBtn;

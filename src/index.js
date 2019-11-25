import React from "react";
import ReactDOM from "react-dom";
import { BtnProvider } from "./Context/BtnContext";
import ImageBtn from "./Components/ImageBtn";
import QuoteBtn from "./Components/QuoteButton";
import Image from "./Components/Image";
import Quote from "./Components/Quote";
const App = () => {
  return (
    <div>
      <BtnProvider>
        <div>
          <Image />
          <ImageBtn />
          <Quote />
          <QuoteBtn />
        </div>
      </BtnProvider>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));

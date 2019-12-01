import React from "react";
import ReactDOM from "react-dom";
import { BtnProvider } from "./Context/BtnContext";
import ImageBtn from "./Components/ImageBtn";
import QuoteBtn from "./Components/QuoteButton";
import Image from "./Components/Image";
import Quote from "./Components/Quote";
import NavBar from "./Components/NavBar";
const App = () => {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <BtnProvider>
        <NavBar />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flex: "1 1 auto"
          }}
        >
          <div>
            <Image />
            <ImageBtn />
          </div>
          <div>
            <QuoteBtn />
            <Quote />
          </div>
        </div>
      </BtnProvider>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));

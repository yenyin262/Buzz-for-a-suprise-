import React, { Component } from "react";
import ClientID from "../config/api";

const BtnContext = React.createContext();

export class BtnProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Image: false,
      Quote: false
    };
  }
  closeSnackbar = () => {
    this.setState({
      Image: false,
      Quote: false
    });
  };
  pressBuzzerForImage = () => {
    fetch("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: `Client-ID ${ClientID}`
      }
    }).then(response => console.log(response.data, "response"));
  };

  pressBuzzerForImage = () => {
    fetch("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: `Client-ID ${ClientID}`
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ Image: json.urls.small });
        //console.log(json.urls.regular, "response");
      });
  };

  pressBuzzerForQuotes = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ Quote: json.joke });
        // console.log(json, "response");
      });
  };
  render() {
    const { children } = this.props;
    return (
      <BtnContext.Provider
        value={{
          pressBuzzerForImage: this.pressBuzzerForImage,
          pressBuzzerForQuotes: this.pressBuzzerForQuotes,
          getImage: this.state.Image,
          getQuote: this.state.Quote,
          closeSnackbar: this.closeSnackbar
        }}
      >
        {children}
      </BtnContext.Provider>
    );
  }
}

export const BtnConsumer = BtnContext.Consumer;

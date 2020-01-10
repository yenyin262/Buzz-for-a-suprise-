import React from "react";
import { BtnConsumer } from "../Context/BtnContext";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { IconButton } from "@material-ui/core";
import { getOuterBindingIdentifiers } from "@babel/types";

const Image = () => (
  <BtnConsumer>
    {({ getImage, closeSnackbar }) => {
      return (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={!!getImage}
          onClose={closeSnackbar}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
        >
          {getImage ? (
            <SnackbarContent
              aria-describedby="client-snackbar"
              message={
                <span id="client-snackbar">
                  <img src={getImage} />
                </span>
              }
              action={[
                <IconButton
                  key="close"
                  aria-label="close"
                  color="inherit"
                  onClick={closeSnackbar}
                >
                  <CloseIcon />
                </IconButton>
              ]}
            />
          ) : (
            ""
          )}
        </Snackbar>
      );
    }}
  </BtnConsumer>
);

export default Image;

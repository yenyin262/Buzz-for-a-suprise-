import React from "react";
import { BtnConsumer } from "../Context/BtnContext";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const Quote = () => (
  <BtnConsumer>
    {({ getQuote, closeSnackbar }) => {
      return getQuote ? (
        <div style={{ display: "flex" }}>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={!!getQuote}
            onClose={closeSnackbar}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
          >
            <SnackbarContent
              aria-describedby="client-snackbar"
              message={<span id="client-snackbar">{getQuote}</span>}
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
          </Snackbar>

          {/* <IconButton color="primary" onClick={() => closeSnackbar()}>
            <Close />
          </IconButton>{" "} */}
        </div>
      ) : (
        ""
      );
    }}
  </BtnConsumer>
);

export default Quote;

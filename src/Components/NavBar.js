import AppBar from "@material-ui/core/AppBar";
import React from "react";
import style from "./NavBar.module.css";
const NavBar = () => {
  return (
    <AppBar position="static" className={style.navbar}>
      <p style={{ color: "white", fontSize: "32px", margin: "20px auto" }}>
        Buzz for a Suprise!
      </p>
    </AppBar>
  );
};

export default NavBar;

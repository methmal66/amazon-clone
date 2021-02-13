import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import logo from "./logo.png";

class Header extends Component {
  static instance: Header;

  constructor(props: any) {
    if (!Header.instance) {
      super(props);
      Header.instance = this;
    }
    return Header.instance;
  }

  render() {
    const amazonLogo = (
      <Link to="/">
        <img
          className="Header_image"
          src={logo}
          alt="amazon logo"
        />
      </Link>
    );

    return (
      <div className="Header_root">
        <Grid container>
          <Grid item>{amazonLogo}</Grid>
        </Grid>
      </div>
    );
  }
}

export default Header;

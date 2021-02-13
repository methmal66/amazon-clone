import React, { Component } from "react";
import Header from "./Header";

class Checkout extends Component {
  static instance:Checkout;

  constructor(props:any) {
    if (!Checkout.instance) {
      super(props)
      Checkout.instance = this;
    }
    return Checkout.instance;
  }

  render() {
    return (
      <div>
        <Header />
        Checkout
      </div>
    );
  }
}

export default Checkout;

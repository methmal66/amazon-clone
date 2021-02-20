import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { Icon } from "@iconify/react";
import bxsUser from "@iconify-icons/bx/bxs-user";
import bsxCart from "@iconify-icons/bx/bxs-cart";
import searchOutlined from "@iconify-icons/ant-design/search-outlined"

class Header extends Component {
  render() {
    return (
      <div className="Header_root">
        {this.amazonLogo}
        {this.search}
        {this.buttons}
      </div>
    );
  }

  amazonLogo = (
    <Link to="/">
      <img className="Header_image" src={logo} alt="amazon logo" />
    </Link>
  );

  search = (
    <div className="Header_search">
      <input type="text" className="Header_searchbar" />
      <div className="Header_searchIconHolder">
        <Icon className="Header_icon" icon={searchOutlined} />
      </div>
    </div>
  );

  buttons = (
    <div>
      <a href="/login">
        <button className="Header_btn">
          <Icon className="Header_icon" icon={bxsUser} />
        </button>
      </a>
      <a href="/checkout">
        <button className="Header_btn">
          <Icon className="Header_icon" icon={bsxCart} />
        </button>
      </a>

    </div>
  );
}

export default Header;

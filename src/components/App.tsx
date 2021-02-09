import { Component } from "react";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render = (): JSX.Element => {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

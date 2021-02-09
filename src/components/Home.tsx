import { Component } from "react";
import Header from "./Header";

class Home extends Component {
  static instance: Home;

  constructor(props: {}) {
    if (!Home.instance) {
      super(props);
      Home.instance = this;
    }
    return Home.instance;
  }

  render() {
    return (
      <div>
        <Header />
        Home
      </div>
    );
  }
}

export default Home;

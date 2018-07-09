import React from "react";
import MyIntroduce from "./MyIntroduce";
import MyWorks from "./MyWorks";

export default class Main extends React.Component {
  state = {
    currentState: ""
  };

  render() {
    return (
      <nav>
        <li onClick={e => this.setState({ currentState: "About" })}>About</li>
        {this.state.currentState ? <MyIntroduce /> : ""}
        <li onClick={e => this.setState({ currentState: "Works" })}>Works</li>
        {this.state.currentState ? <MyWorks /> : ""}
      </nav>
    );
  }
}

import React from "react";
import MyIntroduce from "./MyIntroduce";
import MyWorks from "./MyWorks";

export default class Main extends React.Component {
  state = {
    currentState: ""
  };

  render() {
    return (
      <ul className="menuList">
        <li
          onClick={e =>
            this.setState({
              currentState: "About"
            })
          }
          className="aboutList"
        >
          About
        </li>
        <p className="menuListPara">
          {this.state.currentState === "About" ? <MyIntroduce /> : ""}
        </p>

        <li
          onClick={e => this.setState({ currentState: "Works" })}
          className="worksList"
        >
          Works
        </li>
        {this.state.currentState === "Works" ? <MyWorks /> : ""}
      </ul>
    );
  }
}

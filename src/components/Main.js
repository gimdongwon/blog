import React from "react";
import MyIntroduce from "./MyIntroduce";
import MyWorks from "./MyWorks";

export default class Main extends React.Component {
  state = {
    currentState: ""
  };

  render() {
    return (
      <div>
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

          <li
            onClick={e =>
              this.setState({
                currentState: "Works"
              })
            }
            className="worksList"
          >
            Works
          </li>
        </ul>
        {this.state.currentState === "About" ? <MyIntroduce /> : ""}
        {this.state.currentState === "Works" ? <MyWorks /> : ""}
      </div>
    );
  }
}

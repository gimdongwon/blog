import React from "react";
import MyIntroduce from "./MyIntroduce";
import MyWorks from "./MyWorks";

export default class Main extends React.Component {
  state = {
    currentState: ""
  };

  onHomeClick = () => {
    this.setState({
      currentState: ""
    });
  };
  onAboutClick = () => {
    this.setState({
      currentState: "About"
    });
  };
  onWorksClick = () => {
    this.setState({
      currentState: "Works"
    });
  };
  render() {
    let style = {
      margin: "500px"
    };
    return (
      <div>
        <ul className="menuList">
          <li onClick={this.onHomeClick} className="aboutList">
            Home
          </li>
          <li onClick={this.onAboutClick} className="aboutList">
            About
          </li>
          <li onClick={this.onWorksClick} className="worksList">
            Works
          </li>
        </ul>
        {this.state.currentState === "About" ? (
          <MyIntroduce />
        ) : this.state.currentState === "Works" ? (
          <MyWorks style={style} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

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
      },
      left = { margin: "40px" };
    return (
      <div className="main">
        <ul className="menuList">
          <li onClick={this.onHomeClick} className="aboutList">
            Index
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
          <p style={left}>index..👋</p>
        )}
      </div>
    );
  }
}

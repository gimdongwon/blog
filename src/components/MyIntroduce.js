import React from "react";
import SkilsItems from "./SkilsItems";
import ExperienceItems from "./ExperienceItems";
import OthersItems from "./OthersItems";
export default class MyIntroduce extends React.Component {
  state = {
    pages: ""
  };
  render() {
    return (
      <div>
        <p>
          Hihi! nice to meet you. My name is dongwon kim, I wanna be a front end
          developer. <br />So, I am studying HTML, CSS, JavaScript, React.js,
          Restful API, etc... <br />My dreams are a lot of things, one of thing
          in strong wish is will be a great React-developer in korea. <br />Thank
          you for reading this my writing. We will be able to friendly.
        </p>

        <ul className="listItems">
          <li
            onClick={e => this.setState({ pages: "Skils" })}
            className="SkilsList"
          >
            Skils
          </li>
          {this.state.pages === "Skils" ? <SkilsItems /> : ""}
          <li
            onClick={e => this.setState({ pages: "Experience" })}
            className="ExperienceList"
          >
            Experience
          </li>
          {this.state.pages === "Experience" ? <ExperienceItems /> : ""}
          <li
            onClick={e => this.setState({ pages: "Others" })}
            className="OthersList"
          >
            Others
          </li>
          {this.state.pages === "Others" ? <OthersItems /> : ""}
        </ul>
      </div>
    );
  }
}

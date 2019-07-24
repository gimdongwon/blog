import React from "react";
import SkilsItems from "./SkilsItems";
import ExperienceItems from "./ExperienceItems";
import OthersItems from "./OthersItems";
export default class MyIntroduce extends React.Component {
  state = {
    pages: "",
    skilsToggleOn: false,
    experienceToggleOn: false,
    othersToggleOn: false
  };
  skilsClick = e => {
    this.setState(prevState => ({
      skilsToggleOn: !prevState.skilsToggleOn
    }));
  };
  experiencsClick = e => {
    this.setState(prevState => ({
      experiencsToggleOn: !prevState.experiencsToggleOn
    }));
  };
  othersClick = e => {
    this.setState(prevState => ({
      othersToggleOn: !prevState.othersToggleOn
    }));
  };
  render() {
    return (
      <div>
        <ul className="listItems">
          <p>
            Hihi! nice to meet you. My name is dongwon kim, I wanna be a
            Front-end developer. <br />
            So, I am studying HTML, CSS, JavaScript, React.js, Restful API,
            etc... <br />
            My dreams are a lot of things, one of thing in strong wish is will
            be a great React-developer in korea. <br />
            Thank you for reading this my writing. We will be able to friendly.
          </p>
          <li onClick={this.skilsClick} className="SkilsList xLarge">
            Skils
          </li>
          <br />
          {this.state.skilsToggleOn ? <SkilsItems /> : ""}
          <li onClick={this.experiencsClick} className="ExperienceList xLarge">
            Experience
          </li>
          <br />
          {this.state.experiencsToggleOn ? <ExperienceItems /> : ""}
          <li onClick={this.othersClick} className="OthersList xLarge">
            Others
          </li>
          {this.state.othersToggleOn ? <OthersItems /> : ""}
        </ul>
      </div>
    );
  }
}

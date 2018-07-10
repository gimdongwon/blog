import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Dongwon Kim</h1>
        </header>
        <headeritem>
          <div>
            ehddnjs8989@gmail.com <p> Seoul, Korea </p>
          </div>
          <a href="https://github.com/gimdongwon">github</a>
          <br />
          <a href="https://github.com/gimdongwon">Linkedin</a>
        </headeritem>
      </React.Fragment>
    );
  }
}

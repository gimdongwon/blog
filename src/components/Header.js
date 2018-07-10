import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Dongwon Kim</h1>
          <nav>
            <div className="emailTag">
              <address>
                <a href="mailto:ehddnjs8989@gmail.com">ehddnjs8989@gmail.com</a>
              </address>{" "}
              <br />
              Seoul, Korea
            </div>
            <div className="linkTag">
              <a href="https://github.com/gimdongwon">github</a>
            </div>
          </nav>
          <p className="copyTag">roh woohyeon'page copy thing</p>
        </header>
      </React.Fragment>
    );
  }
}

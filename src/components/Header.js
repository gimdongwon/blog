import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Dongwon Kim</h1>
          <nav>
            <img
              src="https://avatars3.githubusercontent.com/u/37524650?s=400&u=15521ab9fb5bcc7adede0cb18d3dd7422b2b6f94&v=4"
              alt="dongwon"
              width="200px"
            />
            <div className="emailTag">
              <address>
                <a href="mailto:ehddnjs8989@gmail.com">ehddnjs8989@gmail.com</a>
              </address>
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

import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1 className="header_title">Dongwon Kim</h1>
          <div className="nav_wrap">
            <nav>
              <img
                src="https://avatars3.githubusercontent.com/u/37524650?s=400&u=15521ab9fb5bcc7adede0cb18d3dd7422b2b6f94&v=4"
                alt="dongwon"
                width="200px"
              />
              <div className="emailTag">
                <address>
                  <a href="mailto:ehddnjs8989@gmail.com" className="linkTag">
                    ehddnjs8989@gmail.com
                  </a>
                </address>
                <p>Seoul, Korea</p>
                <p>I can do this all day</p>
              </div>
              <div className="linkTag">
                <a href="https://github.com/gimdongwon">Github</a>
              </div>
            </nav>
            <p className="copyTag">roh woohyeon'page copy thing</p>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

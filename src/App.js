import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Helmet } from "react-helmet";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kimdongwon</title>
          <link
            rel="apple-touch-icon"
            href="http://mysite.com/img/apple-touch-icon-57x57.png"
          />
        </Helmet>
        <Header className="header" />
        <Main className="Main" />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header" />
        <Main className="Main" />
      </div>
    );
  }
}

export default App;

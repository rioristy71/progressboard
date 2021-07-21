import "../styles/App.scss";

import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">PROGRESS BOARD</div>

        <Board />
      </div>
    );
  }
}

export default App;

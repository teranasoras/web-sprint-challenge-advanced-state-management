import React, { Component } from "react";
import "./App.css";
import SmurfList from './smurflist';
import SmurfForm from './smurfform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm/>
        <SmurfList/>
      </div>
    );
  }
}

export default App;

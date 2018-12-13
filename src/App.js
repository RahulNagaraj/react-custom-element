import React, { Component } from "react";
import { Input } from "./InputComponent";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    inputValue: ""
  };
  handleOnChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input
            label="Name"
            inputValue={inputValue}
            onChangeHandler={this.handleOnChange}
          />
        </header>
      </div>
    );
  }
}

export default App;

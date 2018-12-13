import React, { Component } from "react";
import CustomInput from "./CustomInputComponent";
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
          <CustomInput
            inputValue={inputValue}
            onChangeHandler={this.handleOnChange}
          />
        </header>
      </div>
    );
  }
}

export default App;

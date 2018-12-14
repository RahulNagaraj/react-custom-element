import React, { Component } from "react";
import { CustomInput } from "./InputComponent";
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
      <div className="">
        <CustomInput
          label="Name"
          inputValue={inputValue}
          onChangeHandler={this.handleOnChange}
        />
      </div>
    );
  }
}

export default App;

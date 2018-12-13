import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CustomInput extends Component {
  static defaultProps = {
    rules: {
      inputType: "text",
      pattern: "",
      validator: () => {}
    },
    name: "custom-input",
    inputValue: "",
    required: false,
    readonly: false
  };
  static propTypes = {
    rules: PropTypes.shape({
      inputType: PropTypes.oneOf(["text", "number"]),
      pattern: PropTypes.string,
      validator: PropTypes.func
    }),
    name: PropTypes.string,
    inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    required: PropTypes.bool,
    readonly: PropTypes.bool
  };
  handleOnChange = e => {
    const { onChangeHandler } = this.props;
    onChangeHandler(e);
  };
  render() {
    const {
      rules: { inputType },
      name,
      inputValue
    } = this.props;
    return (
      <form>
        <input
          type={inputType}
          name={name}
          value={inputValue}
          onChange={this.handleOnChange}
        />
      </form>
    );
  }
}

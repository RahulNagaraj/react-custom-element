import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Input extends Component {
  static defaultProps = {
    rules: {
      inputType: "text",
      pattern: "",
      validatorFn: () => {},
      required: false,
      readonly: false
    },
    label: "Label",
    name: "custom-input",
    inputValue: ""
  };
  static propTypes = {
    rules: PropTypes.shape({
      inputType: PropTypes.oneOf(["text", "number"]),
      pattern: PropTypes.string,
      validatorFn: PropTypes.func,
      required: PropTypes.bool,
      readonly: PropTypes.bool
    }),
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    onChangeHandler: PropTypes.func.isRequired
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

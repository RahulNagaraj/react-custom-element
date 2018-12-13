const app = document.getElementById("app");

class CustomInput extends React.Component {
  static defaultProps = {
    rules: {
      inputType: "number"
    }
  };
  static propTypes = {
    rules: PropTypes.shape({
      inputType: PropTypes.oneOf(["text", "number"])
    }),
    name: PropTypes.string.isRequired
  };
  state = {
    inputValue: ""
  };
  handleOnChange = e => {
    console.log(e.target.name);
    this.setState(prevState => {
      inputValue: e.target.value;
    });
  };
  render() {
    return (
      <form>
        <input
          type={this.props.rules.inputType}
          name={this.props.name}
          value={this.state.inputValue}
          onChange={this.handleOnChange}
        />
      </form>
    );
  }
}

ReactDOM.render(
  <div>
    <CustomInput />
  </div>,
  app
);

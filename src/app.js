/* eslint-disable */

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.state = {
      options: props.options
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }) );
      }
    } catch (e) {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if ( prevState.options.length !== this.state.options.length ) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    } 
  }
  componentWillUnmount() {
    console.log('Component unmounted')
  }
  deleteOptions() {
    this.setState(() =>  ({ options: [] }) );
  }
  deleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert('You should do: ' + option);
  }
  addOption(option) {
    if (!option) {
      return 'Enter valid value to add item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    }

    this.setState((state) => ({ options: state.options.concat([option]) }) );
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer!';
    
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick = {this.handlePick}
          />
        <Options 
          options = {this.state.options} 
          deleteOptions = {this.deleteOptions}
          deleteOption = {this.deleteOption}
          />
        <AddOption 
          addOption = {this.addOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What Should I Do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteOptions}>Remove All</button>
      { props.options.length === 0 && <p>Please add an option to get started.</p> }
      { props.options.map((option) => (
        <Option 
          key={option} 
          optionText={option}
          deleteOption={props.deleteOption}
          />
        )) 
      }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.deleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  addOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);
    e.target.elements.option.focus();
    
    this.setState(() => ({ error }) );

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

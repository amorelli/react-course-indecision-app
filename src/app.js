/* eslint-disable */

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer.';
    const options = ['Thing 1', 'Thing 2', 'Thing 3'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options = {options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('You clicked a button');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I Do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll() {
    // alert('Remove All');
    console.log(this.props.options);
  }
  render() {
    return (
    <div>
      <button onClick={this.removeAll}>Remove All</button>
      {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
    </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      console.log(option);
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/* eslint-disable */

import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  addOption = (e) => {
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

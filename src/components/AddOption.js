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
        <form className="add-option" onSubmit={this.addOption} autoComplete="off">
          <input className="add-option__input" type="text" name="option"></input>
          <button className="button">Add Option</button>
        </form>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
      </div>
    );
  }
}

/* eslint-disable */

import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = { 
    options: [],
    selectedOption: undefined
   };

  deleteOptions = () => {
    this.setState(() =>  ({ options: [] }) );
  }

  deleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  clearOption = () => {
    this.setState(() => ({ selectedOption: undefined }) )
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }) )
  }

  addOption = (option) => {
    if (!option) {
      return '⚠ Enter valid value to add item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return '⚠ This option already exists.';
    }

    this.setState((state) => ({ options: state.options.concat([option]) }) );
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
    console.log('Component unmounted');
  }
  
  render() {
    const subtitle = 'Can\'t Decide?';
    
    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0}
            handlePick = {this.handlePick}
          />
          <div className="widget">
            <Options 
              options = {this.state.options} 
              deleteOptions = {this.deleteOptions}
              deleteOption = {this.deleteOption}
            />
            <AddOption 
              addOption = {this.addOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          clearOption={this.clearOption}
        />
      </div>
    );
  }
}

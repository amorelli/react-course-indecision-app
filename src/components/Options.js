/* eslint-disable */

import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
      <button 
        className="button button--link"
        onClick={props.deleteOptions}
      >
        Remove All
      </button>
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


export default Options;
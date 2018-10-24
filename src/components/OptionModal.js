/* eslint-disable */

import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.clearOption}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.clearOption}>Okay</button>
    </Modal>
  );

export default OptionModal;

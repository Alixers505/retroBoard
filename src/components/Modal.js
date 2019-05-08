import React from 'react';

import Button from './Button';

class Modal extends React.Component {
  static defaultProps = {
    onClose: () => {
      return;
    },
    onSubmit: () => {
      return;
    },
    value: ''
  };
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      header: 'Add a Comment'
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleOnAddCardClick = () => {
    this.props.onSubmit(this.state.value);
  };
  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal-box">
          <Button
            className="close-modal"
            onClick={this.props.onClose}
            text="𝗫"
          />
          <label className="modal-title">
            <h3>{this.state.header}</h3>
          </label>
          <textarea
            type="text"
            rows="6"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Button
            className="submit-card"
            onClick={this.handleOnAddCardClick}
            text="Submit"
            type="submit"
          />
        </div>
      </div>
    );
  }
}

export default Modal;

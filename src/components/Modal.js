import React from 'react';

import Button from './Button';

class Modal extends React.Component {
  static defaultProps = {
    onClose: () => {
      return;
    },
    addCard: () => {
      return;
    }
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
            <h3>Add a Comment</h3>
          </label>
          <textarea rows="6" defaultValue="More time for documentation" />
          <Button
            className="submit-card"
            onClick={this.props.addCard}
            text="Submit"
          />
        </div>
      </div>
    );
  }
}

export default Modal;

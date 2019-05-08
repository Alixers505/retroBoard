import React from 'react';

import Button from './Button';

class Card extends React.Component {
  static defaultProps = {
    onEditClick: () => {
      return;
    },
    onDeleteClick: () => {
      return;
    }
  };

  render() {
    return (
      <div className="card">
        <Button
          onClick={this.props.onEditClick}
          text="✎"
          className="edit-card"
        />
        <div id={this.props.id} key={this.props.id}>
          {this.props.value}
        </div>
        <Button
          onClick={this.props.onDeleteClick}
          text="🗑"
          className="delete-card"
        />
      </div>
    );
  }
}

export default Card;

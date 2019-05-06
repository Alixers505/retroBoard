import React from 'react';

import Button from './Button';

class Card extends React.Component {
  editCard = () => {
    console.log('Edit this card');
  };
  deleteCard = () => {
    console.log('Delete this card');
  };

  render() {
    return (
      <div className="card">
        <Button onClick={this.editCard} text="✎" className="edit-card" />
        <div id={this.props.id} key={this.props.id}>
          {this.props.value}
        </div>
        <Button onClick={this.deleteCard} text="🗑" className="delete-card" />
      </div>
    );
  }
}

export default Card;

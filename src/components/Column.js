import React from 'react';
import uuid from 'uuid/v1';
import Card from './BoardCard';
import Button from './Button';

class Column extends React.Component {
  static defaultProps = {
    onAddClick: () => {
      return;
    }
  };
  constructor(props) {
    super(props);
  }
  addCard = () => {
    // Accept input
    // Display input on card
    console.log('Added a card to this column');
  };
  handleOnAddClick = () => {
    // when button is clicked
    // set currentColumnID to that column's ID
    this.props.onAddClick(this.props.id);
  };
  render() {
    return (
      <div className="board-col">
        <div className="flex-row">
          <input className="col-title" defaultValue="Column Title" />
          <Button
            onClick={this.handleOnAddClick}
            text="✚"
            className="add-card"
          />
        </div>

        {!!this.props.cards.length && (
          <ul className="card-list">
            {this.props.cards.map(card => {
              return <Card id={card.id} key={card.id} value={card.value} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default Column;

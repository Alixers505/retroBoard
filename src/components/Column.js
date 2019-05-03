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

    this.state = {
      cards: [
        {
          id: uuid()
        }
      ]
    };
  }
  addCard = () => {
    // Accept input
    // Display input on card
    console.log('Added a card to this column');
  };
  render() {
    return (
      <div className="board-col">
        <div className="flex-row">
          <input className="col-title" defaultValue="Column Title" />
          <Button
            onClick={this.props.onAddClick}
            text="✚"
            className="add-card"
          />
        </div>

        <ul className="card-list">
          {this.state.cards.map(card => {
            return <Card id={card.id} key={card.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Column;

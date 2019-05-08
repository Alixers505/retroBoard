import React from 'react';
import Card from './BoardCard';
import Button from './Button';

class Column extends React.Component {
  static defaultProps = {
    onAddClick: () => {
      return;
    },
    onEditCard: () => {
      return;
    },
    onDeleteCard: () => {
      return;
    },
    title: '',
    id: '',
    cards: []
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
              return (
                <Card
                  onEditClick={() =>
                    this.props.onEditCard(this.props.id, card.id, card.value)
                  }
                  onDeleteClick={() =>
                    this.props.onDeleteCard(this.props.id, card.id)
                  }
                  id={card.id}
                  key={card.id}
                  value={card.value}
                />
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default Column;

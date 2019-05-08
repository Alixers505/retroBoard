import React from 'react';
import uuid from 'uuid/v1';
import Column from './Column';
import Modal from './Modal';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      columns: [
        {
          title: '',
          id: uuid(),
          cards: []
        },
        {
          title: '',
          id: uuid(),
          cards: []
        },
        {
          title: '',
          id: uuid(),
          cards: []
        }
      ],
      currentColumnID: null,
      currentCardID: null,
      editCardValue: ''
    };
  }
  openModal = (colID, cardID, cardValue) => {
    this.setState(state => {
      return {
        modalOpen: true,
        currentColumnID: colID,
        currentCardID: cardID,
        editCardValue: cardValue
      };
    });
  };
  closeModal = () => {
    this.setState(state => {
      return {
        modalOpen: false
      };
    });
  };
  addCard = cardValue => {
    const card = {
      value: cardValue,
      id: uuid()
    };
    // Find the column
    const column = this.state.columns.find(column => {
      return column.id === this.state.currentColumnID;
    });

    // add card to returned column
    if (column != null) {
      column.cards.push(card);
    }

    this.setState(state => {
      return {
        modalOpen: false
      };
    });
  };
  editCard = (columnID, cardID, cardValue) => {
    // Find the column
    const column = this.state.columns.find(column => {
      return column.id === columnID;
    });
    // Find the card
    const card = column.cards.find(card => {
      return card.id === cardID;
    });
    // Find card value
    const currentCardValue = card.value;

    this.openModal(columnID, card, currentCardValue);
  };

  deleteCard = (columnID, cardID) => {
    this.setState(prevState => ({
      columns: prevState.columns.map(column => {
        if (column.id !== columnID) {
          return column;
        }

        return {
          ...column,
          cards: column.cards.filter(card => card.id !== cardID)
        };
      })
    }));
  };

  render() {
    return (
      <div>
        <h1>New Board</h1>
        <div id="board">
          {this.state.columns.map(column => {
            return (
              <Column
                onAddClick={this.openModal}
                onEditCard={this.editCard}
                onDeleteCard={this.deleteCard}
                title={column.title}
                id={column.id}
                cards={column.cards}
                key={column.id}
              />
            );
          })}
        </div>
        {this.state.modalOpen && (
          <Modal onClose={this.closeModal} addCard={this.addCard} />
        )}
      </div>
    );
  }
}

export default Board;

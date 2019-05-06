import React from 'react';
import uuid from 'uuid/v1';
import Column from './Column';
import Modal from './Modal';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      editingCard: false,
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
      currentColumnID: null
    };
  }
  openModal = colID => {
    this.setState(state => {
      return {
        modalOpen: true,
        currentColumnID: colID
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

  render() {
    return (
      <div>
        <h1>New Board</h1>
        <div id="board">
          {this.state.columns.map(column => {
            return (
              <Column
                onAddClick={this.openModal}
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

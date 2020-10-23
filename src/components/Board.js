import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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
          id: uuidv4(),
          cards: []
        },
        {
          title: '',
          id: uuidv4(),
          cards: []
        },
        {
          title: '',
          id: uuidv4(),
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
      id: uuidv4()
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
        modalOpen: false,
        currentColumnID: null
      };
    });
  };
  editCard = (columnID, cardID) => {
    // Find the column
    const column = this.state.columns.find(column => {
      return column.id === columnID;
    });
    // Find the card
    const card = column.cards.find(card => {
      return card.id === cardID;
    });

    this.openModal(columnID, card.id, card.value);
  };

  updateCard = cardValue => {
    this.setState(prevState => {
      const { currentColumnID, currentCardID, columns } = prevState;
      return {
        columns: columns.map(column => {
          if (column.id !== currentColumnID) {
            return column;
          }

          return {
            ...column,
            cards: [
              ...column.cards.filter(card => card.id !== currentCardID),
              { id: currentCardID, value: cardValue }
            ]
          };
        }),
        modalOpen: false,
        currentColumnID: null,
        currentCardID: null,
        editCardValue: ''
      };
    });
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
          <Modal
            onClose={this.closeModal}
            value={this.state.editCardValue}
            onSubmit={this.state.currentCardID ? this.updateCard : this.addCard}
          />
        )}
      </div>
    );
  }
}

export default Board;

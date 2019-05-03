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
      ]
    };
  }
  openModal = () => {
    this.setState(state => {
      return {
        modalOpen: true
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
        {this.state.modalOpen && <Modal onClose={this.closeModal} />}
      </div>
    );
  }
}

export default Board;

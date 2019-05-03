import React from 'react';
import Board from '../components/Board';
import Column from '../components/Column';

const NewBoard = () => {
  return (
    <div>
      <h1>New Board</h1>
      <div id="board">
        <Column />
        <Column />
        <Column />
      </div>
    </div>
  );
};

export default Board;

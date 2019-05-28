import React from 'react';

import Board from '../components/Board';

const NewBoard = () => {
  return (
    <div>
      <h2 id="pageTitleWrapper">
        <label for="pageTitle" />
        <input id="pageTitle" defaultValue="New Board" />
      </h2>
      <Board />
    </div>
  );
};

export default NewBoard;

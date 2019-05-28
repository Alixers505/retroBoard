import React from 'react';

import Board from '../components/Board';

const DemoBoard = () => {
  return (
    <div>
      <h2 id="pageTitleWrapper">
        <label for="pageTitle" />
        <input id="pageTitle" defaultValue="Demo Board" />
      </h2>
      <Board />
    </div>
  );
};

export default DemoBoard;

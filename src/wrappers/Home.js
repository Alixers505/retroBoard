import React from 'react';

const Home = () => {
  return (
    <div id="home">
      <section>
        <h2 id="pageTitle">Welcome to RainbowRetro</h2>
        <p class="subtitle">
          A cheerful application for conducting your retrospective meetings.
        </p>
      </section>
      <div class="section-wrapper">
        <section class="section-card section-alert">
          <h3 class="alert">Current Functionality</h3>
          <ul>
            <li>
              Go to <a href="/new-board/">New Board</a>
            </li>
            <li>Update page title</li>
            <li>Update column title</li>
            <li>Add (✚) new cards to each column</li>
            <li>Edit (✎) the content of the cards</li>
            <li>Delete (🗑) a card</li>
          </ul>
        </section>
        <section class="section-card section-info">
          <h3 class="info">Upcoming Iterations</h3>
          <ul>
            <li>Add the ability to choose the number of columns</li>
            <li>Create demo board</li>
            <li>Add print functionality</li>
            <li>Add download functionality</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;

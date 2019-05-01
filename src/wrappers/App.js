import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import NewBoard from './NewBoard';
import DemoBoard from './DemoBoard';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <div>
              <h1>
                <Link to="/" id="logo">
                  retroBoard
                </Link>
              </h1>
            </div>
            <ul>
              <li>
                <Link to="/new-board/">New Board</Link>
              </li>
              <li>
                <Link to="/demo-board/">Demo Board</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/new-board/" component={NewBoard} />
            <Route path="/demo-board/" component={DemoBoard} />
          </Switch>
        </main>
        <footer>
          <nav>
            Created by
            <a href="https://github.com/Alixers505">Alysha Buselt</a>
            🐻
          </nav>
        </footer>
      </div>
    </Router>
  );
};

export default App;

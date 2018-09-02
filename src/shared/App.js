import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

const App = () => (
  <div className="app">
    <main>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route component={NoMatch} />
      </Switch>
    </main>
  </div>
);

export default App;

import React from 'react';
import Home from './components/home';
import './sass/main.scss';
import Timelinee from './components/timeline';
import {Box} from './components/testpage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/timeline" component={Timelinee}/>
            <Route path="/reveal" component={Box}/>
          </Switch>
      </Router>

    </div>
  );
}

export default App;

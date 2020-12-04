import React from 'react';
import Home from './components/home';
import './sass/main.scss';
import Timelinee from './components/timeline';
import {Box} from './components/testpage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carousel from './components/carousel';
import Projects from './components/projects';
import PageNotFound from './components/pageNotFound';
function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/timeline" component={Timelinee}/>
            <Route path="/projects/:project" render={(props) => <Projects  {...props} key={props.location.key}/>}/>
            <Route path="*" component={PageNotFound}/>
          </Switch>
      </Router>

    </div>
  );
}

export default App;

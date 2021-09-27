import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home/Home';
import About from './About/About';
import Task1 from './Task1/Task1';
import Task2 from './Task2/Task2';
import Task3 from './Task3/Task3';
import Task4 from './Task4/Task4';
import Task5 from './Task5/Task5';
import Task6 from './Task6/Task6';

import './App.css';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/task/1" component={Task1} />
        <Route path="/task/2" component={Task2} />
        <Route path="/task/3" component={Task3} />
        <Route path="/task/4" component={Task4} />
        <Route path="/task/5" component={Task5} />
        <Route path="/task/6" component={Task6} />
      </Switch>
    </Router>
  );
};

export default App;
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><News key="general" country="in" pageSize={6} category="general" /></Route>
            <Route exact path="/business"><News key="business" country="in" pageSize={6} category="business" /></Route>
            <Route exact path="/entertainment"><News key="entertainment" country="in" pageSize={6} category="entertainment" /></Route>
            <Route exact path="/science"><News key="science" country="in" pageSize={6} category="science" /></Route>
            <Route exact path="/sports"><News key="sports" country="in" pageSize={6} category="sports" /></Route>
            <Route exact path="/technology"><News key="technology" country="in" pageSize={6} category="technology" /></Route>
          </Switch>

        </Router>
      </div>
    )
  }
}

export default App

import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  apiKey="53fea7ff0f974b3d945d714ef38f47c8"
  state={
    progress: 0,
  }
  setProgress= (progress) =>{
    this.setState({progress: progress});
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <div>
            <LoadingBar
              height={3}
              color='gold '
              progress={this.state.progress}
              // onLoaderFinished={() => setProgress(0)}
            />
            <Switch>
              <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="us" pageSize={6} category="general" /></Route>
              <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" pageSize={6} category="business" /></Route>
              <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" pageSize={6} category="entertainment" /></Route>
              <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" pageSize={6} category="science" /></Route>
              <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" pageSize={6} category="sports" /></Route>
              <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" pageSize={6} category="technology" /></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App

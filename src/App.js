import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News country="in" pageSize={6} category="general"/>
      </div>
    )
  }
}

export default App

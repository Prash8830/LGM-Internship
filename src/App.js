import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App =()=> {
  const apiKey="53fea7ff0f974b3d945d714ef38f47c8"

  const [progress, setProgress] = useState(0)


    return (
      <div>
        <Router>
          <NavBar />
          <div>
            <LoadingBar
              height={3}
              color='gold '
              progress={progress}
              // onLoaderFinished={() => setProgress(0)}
            />
            <Switch>
              <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" country="us" pageSize={6} category="general" /></Route>
              <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" country="in" pageSize={6} category="business" /></Route>
              <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" country="in" pageSize={6} category="entertainment" /></Route>
              <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" country="in" pageSize={6} category="science" /></Route>
              <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" country="in" pageSize={6} category="sports" /></Route>
              <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" country="in" pageSize={6} category="technology" /></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  
}

export default App

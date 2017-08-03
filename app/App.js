import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/Home.js';
import Forecast from './components/Forecast.js';
import Header from './components/Header.js';
import Detail from './components/Detail.js';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/forecast/:location" component={Forecast} />
          <Route path="/detail/:location" component={Detail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
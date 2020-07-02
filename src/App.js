import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './Home.js'
import Details from './Details.js'
import Details24Hours from './Details24Hours.js'
import Details48Hours from './Details48Hours.js'
import Details72Hours from './Details72Hours.js'
import Details96Hours from './Details96Hours.js'
import Details120Hours from './Details120Hours.js'
import Details144Hours from './Details144Hours.js'

export default function App() {
  return (
    <div className='main-body'>
      <nav className="nav-bar">
        <Link to="/">Weather App</Link>
      </nav>
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* Need to route to different paths or it will render the same page*/}
        <Route path="/weather/:time">
          <Details />
        </Route>
        <Route path="/weatherIn24Hours/:time">
          <Details24Hours />
        </Route>
        <Route path="/weatherIn48Hours/:time">
          <Details48Hours />
        </Route>
        <Route path="/weatherIn72Hours/:time">
          <Details72Hours />
        </Route>
        <Route path="/weatherIn96Hours/:time">
          <Details96Hours />
        </Route>
        <Route path="/weatherIn120Hours/:time">
          <Details120Hours />
        </Route>
        <Route path="/weatherIn144Hours/:time">
          <Details144Hours />
        </Route>
      </main>
    </div>
  );
}

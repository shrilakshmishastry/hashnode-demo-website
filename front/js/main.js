import React from 'react';
import {Switch,Route}  from 'react-router-dom';
import Home from './home.js'

const Main=()=>(

  <main className="col-md-6 bg-primary">
    <Switch>
      <Route path='/home' component={Home}>
      </Route>
      <Route path='/'>
      </Route>
    </Switch>
  </main>
)
export default Main

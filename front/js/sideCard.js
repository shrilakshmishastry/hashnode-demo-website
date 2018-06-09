import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './home.js';
const Side=()=>(
  <Switch>
    <Route path='/home' component={Home}>
    </Route>
  </Switch>

)
export default Side

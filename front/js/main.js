import React from 'react';
import {Switch,Route}  from 'react-router-dom';
import Home from './home.js'
import WebFont from 'webfontloader';
WebFont.load({
  google:{
    families: ['Roboto','sans-serif' ]
  }
});
const Main=()=>(

  <main className="col-md-8 bg-warning">
    <Switch>
      <Route path='/home' component={Home}>
      </Route>
      <Route path='/'>
      </Route>
    </Switch>
  </main>
)
export default Main

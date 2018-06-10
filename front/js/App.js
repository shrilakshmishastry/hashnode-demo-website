import React from 'react';
import Main from './main.js';
import Header from './header.js';
import Side from './sideCard.js'
import WebFont from 'webfontloader';
WebFont.load({
  google:{
    families: ['Anton','sans-serif' ]
  }
});
const App=()=>(
  <div className="d-flex flex-row justify-content-between">
    <Header/>
    <Main/>
    <Side/>
  </div>
)
export default App

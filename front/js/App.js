import React from 'react';
import Main from './main.js';
import Header from './header.js';
import Side from './sideCard.js'
const App=()=>(
  <div className="d-flex flex-row justify-content-between bg-warning">
    <Header/>
    <Main/>
    <Side/>
  </div>
)
export default App

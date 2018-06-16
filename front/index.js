import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
require('/home/shri/hashnode/front/images/favicon.png')
import Favicon from 'react-favicon'
import App from './js/App.js'
import WebFont from 'webfontloader';
import styled from 'styled-components';
WebFont.load({
  google:{
    families: ['Anton','sans-serif' ]
  }
});
render(
  <div >

  <BrowserRouter>
      <App/>
  </BrowserRouter>
  </div>,
  document.getElementById('root')
);

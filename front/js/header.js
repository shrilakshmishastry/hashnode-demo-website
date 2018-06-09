import React,{component} from 'react';
import {Nav,NavItem,NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import Home from './home.js'
const Header = ()=>(
  <div className="">
    <Nav vertical>
      <NavItem>
        <Link to="/home" >Home
        </Link>

      </NavItem>
      <NavItem>
        <Link to="/">node
        </Link>
      </NavItem>
    </Nav>
  </div>
)
export default Header

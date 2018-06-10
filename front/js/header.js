import React,{component} from 'react';
import {Nav,NavItem,NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
require('/home/shri/hashnode/front/images/hashnode-logo-full.svg')
import Home from './home.js'
const Header = ()=>(
  <div className=" d-flex flex-column ml-4">
    <Nav vertical className="ml-3">
      <NavItem className="">
        <Link to="/home" ><img src="/templates/hashnode-logo-full.svg" width="150px" height="50px"/>
        </Link>

      </NavItem>
      <NavItem className="d-flex mt-4 flex-row text-dark">
        <Link to="/home" className="text-dark">
        <i className="fa fa-commenting-o mr-2 text-dark">
        </i>
        <span className="ml-4">
        Posts
        </span>
        </Link>
      </NavItem>
      <NavItem  className="d-flex  mt-4 flex-row text-dark">
        <Link to="/"  className="text-dark">
          <i className="fa fa-bullhorn"></i>
          <span className="ml-4">
          News
          </span>
        </Link>
      </NavItem>
      <NavItem className="d-flex  mt-4 flex-row text-dark" >
        <Link to="#"  className="text-dark">
          <i className="fa fa-cogs"></i>
          <span className="ml-4">Communities
          </span>
        </Link>
      </NavItem>
      <NavItem className="d-flex  mt-4 flex-row text-dark">
      <Link to="#"  className="text-dark">
        <i className="fa fa-commenting-o"></i>
        <span className="ml-4">AMAs
        </span>
      </Link>
      </NavItem>
      <NavItem className="d-flex  mt-4 flex-row text-dark">
      <Link to="#"  className="text-dark">
        <i className="fa fa-money"></i>
        <span className="ml-4">Crypto Rewards
        </span>
      </Link>
      </NavItem>
      <NavItem className="d-flex  mt-4 flex-row justify-content-between text-dark">
      <Link to="#"  className="text-dark">
        <i className="fa fa-ellipsis-h"></i>
        <span className="ml-4">More
        </span>
      </Link>
      </NavItem>
    </Nav>
  </div>
)
export default Header

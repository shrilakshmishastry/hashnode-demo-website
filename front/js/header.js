import React,{Component,props} from 'react';
import {Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom';
require('/home/shri/hashnode/front/images/hashnode-logo-full.svg')
import Home from './home.js'
import styled from 'styled-components';

class Header extends React.Component{
      constructor(props){
          super(props);
          this.toggle=this.toggle.bind(this);
          this.ishover=this.ishover.bind(this);
          this.state={
              isOpen:false,
              hover:false,
              
              color:'primary'
          };
          this.style={
            color:"red"
          };
      }

      toggle(){
        this.setState({
          isOpen:!this.state.isOpen
        });
      }
      ishover(){
        this.setstyle({
            color:"black"
        });
      }
      hcolor(){
        if(this.state.hover){
          color:'secondary'
        }

      }
      render(){
        return(
          <div>
            <Navbar className="flex-column" color="light" light expand="lg">
              <NavbarBrand>
                Hashnode
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} vertical="true" navbar>
                <Nav className="ml-auto flex-column" vertical >
                  <NavItem>

                      <Link to='/home'>
                        <span style={this.style} onMouseEnter={this.ishover} >HOME</span>
                      </Link>

                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }

}
export default Header

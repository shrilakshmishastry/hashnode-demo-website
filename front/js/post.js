import React from 'react';
<Div className=" d-flex col-md-4 flex-column ">
  <Nav vertical className="">

    <NavItem className="">
      <Link to="/home" ><img src="/templates/hashnode-logo-full.svg" width="170px" height="70px"/>
      </Link>

    </NavItem>
<Span>
<Link to="/home" className="text-dark">
    <NavItem className="d-flex mt-4 flex-row text-dark">


      <i className="fa fa-commenting-o  text-dark">
      </i>
      <span className="ml-4">
      Posts
      </span>

    </NavItem>
      </Link>
</Span>
<Span>
<Link to="/"  className="text-dark">
    <NavItem  className="d-flex  mt-4 flex-row text-dark">

        <i className="fa fa-bullhorn"></i>
        <span className="ml-4">
        News
        </span>

    </NavItem>
    </Link>
    </Span>
    <Span>
    <Link to="#"  className="text-dark">
    <NavItem className="d-flex  mt-4 flex-row text-dark" >

        <i className="fa fa-cogs"></i>
        <span className="ml-4">Communities
        </span>

    </NavItem>
    </Link>
    </Span>
    <Span>
    <Link to="#"  className="text-dark">
    <NavItem className="d-flex  mt-4 flex-row text-dark">

      <i className="fa fa-commenting-o"></i>
      <span className="ml-4">AMAs
      </span>

    </NavItem>
    </Link>
    </Span>
    <Span>
    <Link to="#"  className="text-dark">
    <NavItem className="d-flex  mt-4 flex-row text-dark">

      <i className="fa fa-money"></i>
      <span className="ml-4">Crypto Rewards
      </span>

    </NavItem>
    </Link>
    </Span>
    <Span>
      <Link to="#"  className="text-dark">
    <NavItem className="d-flex  mt-4 flex-row  text-dark">
      <i className="fa fa-ellipsis-h"></i>
      <span className="ml-4">More
      </span>

    </NavItem>
    </Link>
    </Span>
  </Nav>
</Div>

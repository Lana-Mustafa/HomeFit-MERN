import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import SearchBox from '../components/SearchBox';
import * as userActions from '../store/actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(userActions.logout());
  };

  return (
    <header>
      <Navbar className="navbare" variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand><img src="/homefit1.png" className="logonav"></img></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto link'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart link'></i><span >Cart</span>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown className="link" title={userInfo.name} id='username' >
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item >Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item  onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link className="singinuser">
                    <i className='fas fa-user singinuser' ></i><span className="singinuser"> Sign In</span>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='admin'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item >Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item >Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item >Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    </header>
  );
};

export default Header;

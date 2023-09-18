import {
  Navbar,
  Nav,
  Form,
  FormControl,
  InputGroup,
  Container,
} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import CartContext from '../contexts/CartContext';
import { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserContext from '../contexts/UserContext';
import SearchContext from '../contexts/SearchContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const { updateSearchTerm } = useContext(SearchContext);

  const location = useLocation();

  const handleSearch = (event) => {
    const textToSearch = event.target.value;
    updateSearchTerm(textToSearch);
  };

  const getTotalCartQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Navbar expand='lg' className='border-bottom'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src='/src/assets/logo.svg' alt='Logo' />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/products'>
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to='/users'>
              Users
            </Nav.Link>
          </Nav>
          {location.pathname === '/products' ? (
            <Form className='d-flex'>
              <InputGroup>
                <InputGroup.Text>
                  <i className='bi bi-search'></i>
                </InputGroup.Text>
                <FormControl
                  type='text'
                  placeholder='Search'
                  onChange={handleSearch}
                  className='border-1 border-bottom mr-2'
                />
              </InputGroup>
            </Form>
          ) : null}

          <Nav>
            <Nav.Link as={Link} to='/cart'>
              <i className='bi bi-cart'></i>
              <span style={{ color: 'black', marginLeft: '6px' }}>
                {getTotalCartQuantity()}
              </span>
            </Nav.Link>
            {Object.keys(user).length > 0 ? (
              <Nav.Link as={Link} to={`/users/${user.id}`}>
                <p>{user?.username}ola</p>
              </Nav.Link>
            ) : (
              location.pathname !== '/login' && (
                <Nav.Link as={Link} to='/login'>
                  Login
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

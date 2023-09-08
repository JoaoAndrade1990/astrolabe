import { Navbar, Nav, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../contexts/CartContext';
import {useContext} from 'react'

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <Navbar expand='lg' className='border-bottom'>
      <div className='container '>
        <Navbar.Brand as={Link} to='/'>
          <img src='/src/assets/logo.svg' alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse
          id='basic-navbar-nav'
          className='d-flex justify-content-between'
        >
          <Nav>
            <Nav.Link as={Link} to='/products'>
              Shop
            </Nav.Link>
            
            <Nav.Link as={Link} to='/users'>
              Users
            </Nav.Link>
          </Nav>

          <Form className='d-flex'>
            <InputGroup>
              <InputGroup.Text>
                <i className='bi bi-search'></i>
              </InputGroup.Text>
              <FormControl
                type='text'
                placeholder='Search'
                className='border-1 border-bottom mr-2'
              />
            </InputGroup>
          </Form>

          <Nav>
            <Nav.Link as={Link} to='/cart'>
              <i className='bi bi-cart'></i>
              <span style={{ color: 'black', marginLeft: '6px' }}>
                {cart.length !== 0 ? cart.length : null}
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to='/login'>
              Login
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;


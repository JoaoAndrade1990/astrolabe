import { Navbar, Nav, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="border-bottom">
      <div className="container ">
        <Navbar.Brand href="#">
          <img
            src='src/assets/logo.svg'
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        
        <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-between'>
          <Nav>
            <Nav.Link as={Link} to="/">Shop</Nav.Link>
            <Nav.Link as={Link} to="/category">About</Nav.Link>
          </Nav>


          <Form inline className='d-flex'>
            <InputGroup>
                <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
              <FormControl type="text" placeholder="Search" className="border-1 border-bottom mr-2" />
            </InputGroup>
          </Form>


          <Nav >
            <Nav.Link as={Link} to="/cart">
              <i className="bi bi-cart"></i>
              <span style={{ color: 'black', marginLeft: '6px' }}>3</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
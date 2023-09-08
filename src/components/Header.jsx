import {
  Navbar,
  Nav,
  Form,
  FormControl,
  InputGroup,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/src/assets/logo.svg" alt="Logo" />
        </Navbar.Brand>
        <Form className="d-flex">
          <InputGroup>
            <InputGroup.Text>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Search"
              className="border-1 border-bottom mr-2"
            />
          </InputGroup>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart">
              <i className="bi bi-cart"></i>
              <span style={{ color: "black", marginLeft: "6px" }}>
                {cart.length !== 0 ? cart.length : null}
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

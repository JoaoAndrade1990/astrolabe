import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className='border-top mt-4'>
        <Container className='py-4'>
          <Row>
            <Col md={5} className='mb-sm-4 mb-md-0'>
              <h4>Signup for our newsletter</h4>
              <p style={{ fontSize: '14px' }}>
                Be the first to know about our special, new product launches,
                and events.
              </p>
              <Form inline className='d-flex' style={{ width: '92%' }}>
                <InputGroup>
                  <FormControl
                    type='text'
                    placeholder='Email Address'
                    className='border-1 border-bottom mr-2'
                  />
                  <InputGroup.Text className='p-0'>
                    <Button variant='outline-secondary b-radius-0'>
                      Sign Up
                    </Button>
                  </InputGroup.Text>
                </InputGroup>
              </Form>
            </Col>
            <Col md={7}>
              <Row>
                <Col md={4} className='mb-sm-4 mb-md-0'>
                  <h5>Shop</h5>
                  <ul className='list-unstyled'>
                    {[
                      'Womens',
                      'Mens',
                      'Kids',
                      'Shoes',
                      'Equipment',
                      'By Activity',
                      'Gift Cards',
                      'Sale',
                    ].map((item, index) => (
                      <li key={index}>
                        <Link
                          to={`/${item}`}
                          className='text-muted text-decoration-none'
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col md={4} className='mb-sm-4 mb-md-0'>
                  <h5>Help</h5>
                  <ul className='list-unstyled'>
                    {[
                      'Help Center',
                      'Order Status',
                      'Size Charts',
                      'Returns & Warranty',
                      'Contact Us',
                    ].map((item, index) => (
                      <li key={index}>
                        <Link
                          to={`/${item}`}
                          className='text-muted text-decoration-none'
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col md={4} className='mb-sm-4 mb-md-0'>
                  <h5>About</h5>
                  <ul className='list-unstyled'>
                    {[
                      'About Us',
                      'Responsibility',
                      'Technology & Innovation',
                      'Explore our stories',
                    ].map((item, index) => (
                      <li key={index}>
                        <Link
                          to={`/${item}`}
                          className='text-muted text-decoration-none'
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className='bg-dark'>
        <div className='container text-center'>
          <p className='text-white p-2 mb-0'>
            © 2023 João Andrade (Sigma Company) - Web Dev. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

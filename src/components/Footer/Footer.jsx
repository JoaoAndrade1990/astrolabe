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
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Footer.css';

const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories').then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <>
      <footer className='border-top mt-4'>
        <Container className='py-4'>
          <Row className='d-flex justify-content-center'>
            <Col md={6} className='mb-sm-4 mb-md-0'>
              <h4>Signup for our newsletter</h4>
              <p style={{ fontSize: '14px' }}>
                Be the first to know about our special, new product launches,
                and events.
              </p>
              <Form className='d-flex' style={{ width: '92%' }}>
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

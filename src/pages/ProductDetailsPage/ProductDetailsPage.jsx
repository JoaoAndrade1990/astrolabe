import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import { useContext } from 'react';
import usersProducts from '../../constants/index';

function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(usersProducts);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(result);
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Row>
            <Col xs={12} md={6}>
              <img
                src={result.image}
                alt={result.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '400px',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </Col>
            <Col xs={12} md={6}>
              <br />
              <h1>{result.title}</h1>
              <p>{result.description}</p>
              <p>Price: {result.price}€</p>

              <Button className='mb-4' variant='dark' onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </Col>
          </Row>
          <Row className='d-none d-md-block'></Row>
        </>
      )}
    </Container>
  );
}

export default ProductDetailsPage;

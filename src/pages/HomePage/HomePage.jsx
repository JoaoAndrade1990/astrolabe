import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'; // Import the ProductCard component
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './HomePage.css';
import Loading from '../../components/Loading/Loading';

function HomePage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setResults(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className='popular-products-title'>Popular Products</h2>
          <Row>
            {results.map((product) => (
              <Col
                key={product.id}
                md={3}
                className='mb-4 d-flex align-items-stretch'
              >
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}

export default HomePage;

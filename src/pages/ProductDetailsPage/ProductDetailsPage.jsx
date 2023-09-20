import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import { useContext } from 'react';
import usersProducts from '../../constants/index';
import { Link } from 'react-router-dom';

function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userSellingProduct, setUserSellingProduct] = useState(null);

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

    const userIndex = usersProducts.findIndex((user) =>
      user.products.includes(parseInt(id))
    );

    if (userIndex !== -1) {
      setUserSellingProduct(usersProducts[userIndex]);

      axios
        .get(`https://fakestoreapi.com/users/${userIndex + 1}`)
        .then((res) => {
          setUserSellingProduct((prevUser) => ({
            ...prevUser,
            userData: res.data,
          }));
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [id]);

  const handleAddToCart = () => {
    addToCart(result);
  };

  return (
    <Container style={{ marginBottom: '100px' }}>
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
              <p>
                Sold by:{' '}
                {userSellingProduct.userData ? (
                  <Link
                    className='text-dark'
                    to={`/users/${userSellingProduct.userData.id}`}
                  >
                    {userSellingProduct.userData.username}
                  </Link>
                ) : (
                  ''
                )}
              </p>
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

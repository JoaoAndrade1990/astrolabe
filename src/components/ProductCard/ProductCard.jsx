import PropTypes from 'prop-types';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/cart';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className='product-card'>
      <div className='product-card-image-wrapper'>
        <Link
          to={`/product/${product.id}`}
          className='text-decoration-none w-100'
        >
          <Card.Img
            variant='top'
            src={product.image}
            alt={product.title}
            className='product-card-image'
          />
        </Link>
      </div>
      <div className='product-card-content p-3'>
        <div className='mb-3'>
          <Card.Title className='product-card-title'>
            <Link
              to={`/product/${product.id}`}
              className='text-decoration-none text-black'
            >
              {product.title}
            </Link>
          </Card.Title>
        </div>
        <Row>
          <Col>
            <Card.Text className='product-card-price'>
              {product.price}€
            </Card.Text>
          </Col>
          <Col className='d-flex justify-content-end'>
            <Button
              variant='dark'
              className='product-card-button btn-sm'
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;

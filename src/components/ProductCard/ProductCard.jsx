import PropTypes from 'prop-types';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <Card className='product-card'>
      <div className='product-card-image-wrapper'>
        <Card.Img
          variant='top'
          src={product.image}
          alt={product.title}
          className='product-card-image'
        />
      </div>
      <div className='product-card-content p-3'>
        <div className='mb-3'>
          <Card.Title className='product-card-title'>
            {product.title}
          </Card.Title>
        </div>
        <Row>
          <Col>
            <Card.Text className='product-card-price'>
              {product.price}€
            </Card.Text>
          </Col>
          <Col className='d-flex justify-content-end'>
            <Button variant='dark' className='product-card-button btn-sm'>
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

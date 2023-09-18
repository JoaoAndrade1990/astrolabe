import { useContext } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';

function CartPage() {
  const { cart } = useContext(CartContext);

  const isCartEmpty = cart.length === 0;

  const subtotal = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const shipping = 5;

  const total = subtotal + shipping;

  return (
    <>
      {isCartEmpty ? (
        <Row className='vh-100 justify-content-start align-items-center'>
          <Col md={12} className='text-center '>
            <div className='my-5'>
              <h1>Cart is empty. Start shopping.</h1>
              <Link to='/products' className='btn btn-primary mt-3 btn-dark'>
                Go to Products
              </Link>
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          <h1>Your Cart</h1>
          <Col md={6}>
            <div className='d-flex align-items-center mb-4'>
              <p className='mb-0'>Not ready to checkout?</p>

              <Link
                to='/products'
                className='link-underline link-underline-opacity-10 mx-3'
              >
                Continue Shopping
              </Link>
            </div>
            {cart.map((product) => (
              <Card key={product.id} className='mb-3'>
                <Card.Body>
                  <Row>
                    <Col md={3}>
                      <img
                        src={product.image}
                        alt='Product'
                        className='img-fluid'
                      />
                    </Col>
                    <Col md={9}>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>Price: {product.price}€</Card.Text>
                      <Card.Text>Quantity: {product.quantity}</Card.Text>{' '}
                      {/* You can adjust the quantity */}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={6}>
            <h4>Order Summary</h4>
            <Row>
              <Col>
                <p>Subtotal</p>
                <p>Shipping</p>
                <p>Total</p>
              </Col>
              <Col>
                <p>{subtotal.toFixed(2)}€</p>
                <p>{shipping.toFixed(2)}€</p>
                <p>{total.toFixed(2)}€</p>
              </Col>
              <Button variant='dark' className='product-card-button btn-sm'>
                Continue to Checkout
              </Button>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
}

export default CartPage;

import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <>
      <Row>
        <h1>Your Cart</h1>
        <Col md={6}>
          <p>Not ready to checkout?</p>{" "}
          <Link to="/category">Continue Shopping</Link>
          <Row>
            <Col md={3}>Image</Col>
            <Col md={9}>Details</Col>
          </Row>
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
              <p>12,99€</p>
              <p>Calculated at the next step</p>
            </Col>
            <Button variant="dark" className="product-card-button btn-sm">
              Continue to Checkout
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default CartPage;

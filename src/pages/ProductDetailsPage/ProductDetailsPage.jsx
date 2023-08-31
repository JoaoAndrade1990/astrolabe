import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "../../components/Loading/Loading";
import axios from "axios";

function ProductDetailsPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/1").then((res) => {
      setResults(res.data.id);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
        <h1>Old Coin</h1>
          <Row>
            <Col
            >
            </Col>
            <Col>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut perferendis, voluptatum deserunt iure harum illum minima aliquam sit molestiae earum fugit qui modi quod, a dolorum voluptatibus repellendus suscipit!</p>
            <p>Price: 299.99€</p>
            {/* <button variant='dark' className='product-card-button btn-sm'>Add to Cart</button> */}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default ProductDetailsPage;

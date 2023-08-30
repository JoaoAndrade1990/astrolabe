import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard"; // Import the ProductCard component
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./CategoryPage.css";
import Loading from "../../components/Loading/Loading";
import Form from "react-bootstrap/Form";

function CategoryPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setResults(res.data);
      setLoading(false);
    });

    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const filteredProducts = (category) => {
    console.log(category);
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="popular-products-title">Popular Products</h2>
          <Row>
            <Col xs={12} sm={12} md={3}>
              <h4>Categories</h4>
              <Form>
                {categories.map((category) => (
                  <div key={`${category}`} className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id={`${category}`}
                      label={`${category}`}
                      className="text-capitalize"
                      onClick={() => filteredProducts(category)}
                    />
                  </div>
                ))}
              </Form>
            </Col>
            <Col md={9}>
              <Row>
                {results.map((product) => (
                  <Col
                    key={product.id}
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    className="mb-4 d-flex align-items-stretch"
                  >
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default CategoryPage;

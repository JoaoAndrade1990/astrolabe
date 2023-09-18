import { useState, useEffect, useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'; // Import the ProductCard component
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './CategoryPage.css';
import Loading from '../../components/Loading/Loading';
import Form from 'react-bootstrap/Form';
import SearchContext from '../../contexts/SearchContext';

function CategoryPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { searchTerm = '' } = useContext(SearchContext);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      let filteredProducts = res.data;
      if (searchTerm) {
        filteredProducts = res.data.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      setResults(filteredProducts);
      setLoading(false);
    });

    axios.get('https://fakestoreapi.com/products/categories').then((res) => {
      setCategories(res.data);
    });
  }, [searchTerm]);

  const filteredProducts = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const filteredResults = selectedCategory
    ? results.filter((product) => product.category === selectedCategory)
    : results;

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className='popular-products-title'>Popular Products</h2>
          <Row>
            <Col xs={12} sm={12} md={3}>
              <h4>Categories</h4>
              <Form>
                <div key='all' className='mb-3'>
                  <Form.Check
                    type='radio'
                    name='category'
                    id='all'
                    label='All Categories'
                    className='text-capitalize'
                    onClick={() => filteredProducts(null)}
                    checked={selectedCategory === null}
                  />
                </div>
                {categories.map((category) => (
                  <div key={`${category}`} className='mb-3'>
                    <Form.Check
                      type='radio'
                      name='category'
                      id={`${category}`}
                      label={`${category}`}
                      className='text-capitalize'
                      onClick={() => filteredProducts(category)}
                    />
                  </div>
                ))}
              </Form>
            </Col>
            <Col md={9}>
              <Row>
                {filteredResults.map((product) => (
                  <Col
                    key={product.id}
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    className='mb-4 d-flex align-items-stretch'
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

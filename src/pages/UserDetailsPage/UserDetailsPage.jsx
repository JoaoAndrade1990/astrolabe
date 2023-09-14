// import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
import "./UserDetailsPage.css";
import usersProducts from "../../constants";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";

function UserDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  // const [userProducts, setUserProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productsList } = useContext(UserContext);

  const getUserProducts = (userId) => {
    return usersProducts[userId].products.map((productId) => {
      return productsList.find((product) => product.id === productId);
    });
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <br />
          <h1>Profile Page</h1>
          <br />
          <br />
          <Row>
            <Col lg={6}>
              <h3 className="text-capitalize">
                {user.name.firstname} {user.name.lastname}
              </h3>
              <p>
                <b>Username:</b> {user.username}
              </p>
              <p>
                <b>Email:</b> {user.email}
              </p>
              <p>
                <b>Phone:</b> {user.phone}
              </p>
              <p>
                <b>Address:</b> {user.address.street}, No. {user.address.number}
                , {user.address.zipcode}
              </p>
              <p className="text-capitalize">{user.address.city}</p>
            </Col>
            <Col lg={6}>
              <br />
              <h4>Selling Products</h4>
              <br />
              <Row>
                {getUserProducts(user.id - 1).map((product, index) => (
                  <Col key={index} xs={4} sm={4} md={4} lg={4}>
                    <Link to={`/products/${product.id}`}>
                      <img
                        className="image"
                        src={product.image}
                        alt={product.title}
                      />
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      )}
    </Container>
  );
}

// UserDetailsPage.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.shape({
//       firstname: PropTypes.string.isRequired,
//       lastname: PropTypes.string.isRequired,
//     }),
//     id: PropTypes.number.isRequired,
//     username: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
//     address: PropTypes.shape({
//       street: PropTypes.string.isRequired,
//       number: PropTypes.number.isRequired,
//       zipcode: PropTypes.string.isRequired,
//       city: PropTypes.string.isRequired,
//     }),
//   }).isRequired,
// };

export default UserDetailsPage;

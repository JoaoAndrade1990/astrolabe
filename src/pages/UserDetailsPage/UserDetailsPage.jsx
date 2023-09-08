import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
import "./UserDetailsPage.css";

function UserDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
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
                , (zipcode) {user.address.zipcode}
              </p>
              <p className="text-capitalize">{user.address.city}</p>

              {/* 
          {user.address} */}
            </Col>
            <Col lg={6}>
              <br />
              <h4>Selling Products</h4>
              <br />
              <Row>
                <Col xs={4} sm={4} md={4} lg={4}>
                  <img
                    className="image"
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    alt=""
                  />
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                  <img
                    className="image"
                    src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                    alt=""
                  />
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                  <img
                    className="image"
                    src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                    alt=""
                  />
                </Col>
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

UserDetailsPage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }),
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      zipcode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default UserDetailsPage;

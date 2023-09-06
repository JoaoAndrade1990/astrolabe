import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import UserCard from '../../components/UserCard/UserCard';
import ProductCard from '../../components/ProductCard/ProductCard';

function UsersPage() {
    const [usersResults, setUsersResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    axios
        .get(`https://fakestoreapi.com/users`)
        .then((res) => {
            setUsersResults(res.data);
            setLoading(false);
            console.log(res.data);
        });
        console.log(usersResults);
    }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Users Page</h1>
         <Row>  
          {usersResults.map((user) => (
            <Col xs={12} sm={12} md={12} lg={6}

            key={user.id}
            className="mt-4 mb-4"
            >
            <UserCard user={user} />
            
            </Col>
          ))}
          </Row>
        </>
      )}
    </Container>
  );
}

export default UsersPage;

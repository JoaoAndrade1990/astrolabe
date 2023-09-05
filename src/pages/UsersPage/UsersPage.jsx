import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import UserCard from '../../components/UserCard/UserCard';

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
            <Col
            key={user.id}
            className=""
            > {user.id}
            </Col>
          ))}
          </Row>
        </>
      )}
    </Container>
  );
}

export default UsersPage;

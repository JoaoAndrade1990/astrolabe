import { useState, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import UserContext from '../../contexts/UserContext';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loginSuccess] = useState(false);
  const [error, setError] = useState('');

  const [data, setData] = useState({});

  const {users, setUser} = useContext(UserContext);

  const navigate = useNavigate()

  const handleChange = (event) =>{
    setData({...data, [event.target.name]:event.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.username || !data.password) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
      axios.post("https://fakestoreapi.com/auth/login",data)
        .then(response => {
          console.log(response);
          if (response.data.token) {
            Cookies.set("user_fake_token", response.data.token);
            setLoading(false);
            setError("")
            const userInfo = users.filter(user => user.username === data.username)
            setUser(userInfo[0]);
            navigate("/");
          }
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
          setError(error.response.data);
        })
  };



  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <br />
          <br />
          <Row>
            <div className='mx-auto col-10 col-md-8 col-lg-6'>
              <Form onSubmit={handleSubmit}>
                <h3 className='text-center'>Welcome Back</h3>
                <br />
                <div className={`form-group ${error ? 'has-error' : ''}`}>
                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    className='form-control'
                    id='username'
                    aria-describedby='username'
                    placeholder='Enter username'
                    name='username'
                    onChange={handleChange}
                  />
                  {/* <small id='emailHelp' className='form-text text-muted'>
                    We'll never share your email with anyone else.
                  </small> */}
                </div>
                <br />
                <div className={`form-group ${error ? 'has-error' : ''}`}>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    placeholder='Enter Password'
                    name='password'
                    onChange={handleChange}
                  />
                </div>
                <br />
                {error && <div className='alert alert-danger'>{error}</div>}
                {formSubmitted && loginSuccess && (
                  <div className='alert alert-success'>
                    Login realizado com sucesso!
                  </div>
                )}
                <Row>
                  <Col>
                    <Button
                      type='submit'
                      className='btn btn-primary btn-lg btn-block w-100'
                      variant='dark'
                      onClick={() => setFormSubmitted(true)}
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
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
          <br />
          <br />
          <br />
        </>
      )}
    </Container>
  );
}

export default LoginPage;

import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import Form from 'react-bootstrap/Form';

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      setError('Campos obrigatórios');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === 'email@gmail.com' && password === '123456') {
        setLoginSuccess(true);
        setError('');
      } else {
        setLoginSuccess(false);
        setError('Credenciais inválidas. Tente novamente.');
      }
    }, 500);
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
                  <label htmlFor='email'>Email address</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    aria-describedby='email'
                    placeholder='Enter email'
                  />
                  <small id='emailHelp' className='form-text text-muted'>
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <br />
                <div className={`form-group ${error ? 'has-error' : ''}`}>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    placeholder='Enter Password'
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

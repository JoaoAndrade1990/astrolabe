import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Loading from "../../components/Loading/Loading";
import Form from "react-bootstrap/Form";

function LoginPage() {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
        <br />
        <br />
        <Row> 
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          <Form> 
            <h3 className="text-center">Welcome Back</h3>
            <br />
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <br />
            <Row>
                <Col> 
                <Button type="submit"  className="btn btn-primary btn-lg btn-block w-100" 
            variant='dark'>Submit</Button>
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

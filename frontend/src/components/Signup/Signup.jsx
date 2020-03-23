import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import img from '../../images/signup-bg.png';
import './signup.css';

export default class Signup extends Component {
  render() {
    return <Container className="mt-5">
      <Row className='signup'>
        <Col xs="12" sm="12" md="5">
          <h4>Sign Up</h4>
          <p className="text-muted">Please Create an Account to Continue</p>
          <Form className="myForm">

            <Form.Group controlId="formBasicText">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Row>
              <Col xs="12">
                <Button variant="primary" type="submit">
                  Sign Up
              </Button>
              </Col>
              <Col xs="12" className="forgotPass">
                <a href="/">Forgot password?</a>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col xs="12" sm="12" md="7">
          <img className="img-fluid" src={img} alt="authentication" />
        </Col>
      </Row>
    </Container>;
  }
}

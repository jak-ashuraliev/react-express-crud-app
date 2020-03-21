import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

const initialState = {
  vendorName: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  emailError: ""
};

class PostForm extends Component {
  state = initialState;

  // changeHandler
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // submitHandler
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    // clear the form
    this.setState(initialState);

    axios
      .post("http://localhost:3000/vendor", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { vendorName, firstName, lastName, phone, email } = this.state;

    return (
      <div>
        <Container className="text-left">
          <Row>
            <Col>
              <Form
                onSubmit={this.submitHandler}
                style={{ width: "400px", margin: "50px auto" }}
              >
                <h3 className="text-muted">Add New Vendor</h3>
                <br></br>
                <Form.Group controlId="formBasicText">
                  <p className="text-muted mb-0">Vendor name:</p>

                  <Form.Control
                    type="text"
                    name="vendorName"
                    value={vendorName}
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                  <p className="text-muted mb-0">First name:</p>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                  <p className="text-muted mb-0">Last name:</p>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                  <p className="text-muted mb-0">Phone:</p>
                  <Form.Control
                    type="phone"
                    name="phone"
                    value={phone}
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <p className="text-muted mb-0">Email:</p>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Button variant="warning" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PostForm;

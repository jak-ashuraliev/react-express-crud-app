import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

export default class ModalEmployeePut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      department: '',
      phone: '',
      email: '',
      emailError: ''
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { firstName, lastName, department, phone, email } = this.state;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5>Edit / Update Employee Information</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs="12" sm="5" md="5" lg="5" xl="5">
              <Form onSubmit={this.submitHandler}>
                <Form.Group controlId="formBasicText">
                  <p className="text-muted mb-0">Fist name:</p>

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
                  <p className="text-muted mb-0">Department:</p>
                  <Form.Control
                    type="text"
                    name="department"
                    value={department}
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

                <Button variant="success" type="submit">
                  Update
								</Button>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

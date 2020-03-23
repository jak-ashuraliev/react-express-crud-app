import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class GetUser extends Component {
  render() {
    return (
      <Row>
        <Col xs='12' sm='12' md='12' lg='12' xl='12'>
          <h6 style={{ color: '#3f4d67', fontWeight: 'normal' }}>List of current users</h6>
          <hr></hr>
        </Col>
      </Row>
    )
  }
}

import React, { Component } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";

export default class GetVendor extends Component {
  state = {
    isLoaded: false,
    vendors: []
  };

  async componentDidMount() {
    const url = "http://localhost:3000/vendor";
    const response = await fetch(url);
    const vendorData = await response.json();
    this.setState({
      vendors: vendorData,
      isLoaded: true
    });
  }

  render() {
    const { isLoaded, vendors } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container>
          <Row>
            <Col>
              <h3 className="mt-5 mb-5 text-muted">List of Current Vendors</h3>
              <Table
                responsive="xs"
                striped
                bordered
                hover
                variant="light"
                className="text-left"
              >
                <thead>
                  <tr>
                    <th>Vendor Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                  </tr>
                </thead>
                {vendors.map(vendor => (
                  <tbody key={vendor._id}>
                    <tr>
                      <td>{vendor.vendorName}</td>
                      <td>{vendor.firstName}</td>
                      <td>{vendor.lastName}</td>
                      <td>{vendor.phone}</td>
                      <td>{vendor.email}</td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

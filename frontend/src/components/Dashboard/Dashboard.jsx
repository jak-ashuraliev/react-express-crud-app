import React, { Component } from "react";
import "./dashboard.css";
import { Row, Col } from "react-bootstrap";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs='12' sm='12' md='12' lg='12' xl='12'>
            <h6 style={{ color: '#3f4d67', fontWeight: 'normal' }}>Dashboard</h6>
            <hr></hr>
          </Col>
          <Col md="6">
            <div className="card daily-sales">
              <div className="card-block">
                <h6 className="mb-4">Daily Users</h6>
                <Row className="row d-flex align-items-center">
                  <Col col="9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>
                      98
                    </h3>
                  </Col>
                  <Col className="col-3 text-right">
                    <p className="m-b-0">67%</p>
                  </Col>
                </Row>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="card monthly-sales">
              <div className="card-block">
                <h6 className="mb-4">Monthly Users</h6>
                <Row className="row d-flex align-items-center">
                  <Col col="9">
                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                      <i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>
                      1,245
                    </h3>
                  </Col>
                  <Col className="col-3 text-right">
                    <p className="m-b-0">36%</p>
                  </Col>
                </Row>
                <div className="progress m-t-30" style={{ height: "7px" }}>
                  <div
                    className="progress-bar progress-c-theme2"
                    role="progressbar"
                    style={{ width: "35%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

/*  */

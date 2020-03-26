import React, { Component } from 'react';
import './Login.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../images/authentication.png';
import { Link } from 'react-router-dom';

export default class Login extends Component {
	render() {
		return (
			<Container className="mt-5 login">
				<Row className="test">
					<Col xs="12" sm="12" md="5">
						<h4>Login</h4>
						<p className="text-muted">Please Login to Continue</p>
						<Form className="myForm">
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
										<Link to="/dashboard">Login</Link>
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
			</Container>
		);
	}
}

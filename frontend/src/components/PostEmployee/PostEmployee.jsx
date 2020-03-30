import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import img from '../../images/add-file.png';
import './PostEmployee.css';
import axios from 'axios';

const initialState = {
	firstName: '',
	lastName: '',
	department: '',
	phone: '',
	email: '',
	emailError: ''
};

class PostEmployee extends Component {
	state = initialState;

	// changeHandler
	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// submitHandler
	submitHandler = (e) => {
		e.preventDefault();
		// console.log(this.state);

		// clear the form
		this.setState(initialState);

		axios
			.post('http://localhost:3000/employee', this.state)
			.then((res) => {
				// console.log(res);
			})
			.catch((err) => {
				// console.log(err);
			});
	};

	render() {
		const { firstName, lastName, department, phone, email } = this.state;

		return (
			<div>
				<Container className="text-left">
					<Row>
						<Col xs="12" sm="12" md="12" lg="12" xl="12">
							<h6 style={{ color: '#3f4d67', fontWeight: 'normal' }}>Add New Employee</h6>
							<hr />
						</Col>
					</Row>
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

								<Button variant="warning" type="submit">
									Add Employee
								</Button>
							</Form>
						</Col>

						<Col xs="12" sm="7" md="7" lg="7" xl="7">
							<img className="img-fluid mt-5" src={img} alt="add file" />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default PostEmployee;
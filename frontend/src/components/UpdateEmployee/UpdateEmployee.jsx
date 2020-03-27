import React, { Component } from 'react';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import ModalEmployeePut from '../ModalEmployeePut/ModalEmployeePut';

// const initialState = {
// 	firstName: '',
// 	lastName: '',
// 	department: '',
// 	phone: '',
// 	email: '',
// 	emailError: ''
// };

export default class UpdateEmployee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			employees: [],
			modalShow: false
		};
	}

	async componentDidMount() {
		const url = 'http://localhost:3000/employee';
		const response = await fetch(url);
		const employeeData = await response.json();
		this.setState({
			employees: employeeData,
			isLoaded: true
		});
	}

	render() {
		const { isLoaded, employees } = this.state;
		let modalHide = () => this.setState({ modalShow: false });

		if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<Container>
					<Row>
						<Col xs="12" sm="12" md="12" lg="12" xl="12">
							<h6 style={{ color: '#3f4d67', fontWeight: 'normal' }}>Update Employee</h6>
							<hr />
						</Col>
						<Col>
							<Table responsive="xs" striped bordered hover variant="light" className="text-left">
								<thead>
									<tr>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Department</th>
										<th>Phone</th>
										<th>Email</th>
										<th>Action</th>
									</tr>
								</thead>
								{employees.map((employee) => (
									<tbody key={employee._id}>
										<tr>
											<td>{employee.firstName}</td>
											<td>{employee.lastName}</td>
											<td>{employee.department}</td>
											<td>{employee.phone}</td>
											<td>{employee.email}</td>
											<td>
												<div className="text-center">
													<Button
														onClick={() => this.setState({ modalShow: true })}
														className="btn-sm"
														variant="success"
													>
														Edit
													</Button>
													<ModalEmployeePut show={this.state.modalShow} onHide={modalHide} />
												</div>
											</td>
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

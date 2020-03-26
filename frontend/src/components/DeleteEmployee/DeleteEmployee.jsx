import React, { Component } from 'react';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import './DeleteEmployee.css';

export default class DeleteEmployee extends Component {
	state = {
		isLoaded: false,
		employees: []
	};

	async componentDidMount() {
		const url = 'http://localhost:3000/employee';
		const response = await fetch(url);
		const employeeData = await response.json();
		this.setState({
			employees: employeeData,
			isLoaded: true
		});
	}

	removeEmployee(_id) {
		if (window.confirm('Are you sure you want to delete this employee?')) {
			fetch('http://localhost:3000/employee/' + _id, {
				method: 'DELETE',
				header: { Accpet: 'application/json', 'Content-Type': 'application/json' }
			});
		}
	}

	render() {
		const { isLoaded, employees } = this.state;

		if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<Container>
					<Row>
						<Col xs="12" sm="12" md="12" lg="12" xl="12">
							<h6 style={{ color: '#3f4d67', fontWeight: 'normal' }}>Remove Employee</h6>
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
														onClick={() => this.removeEmployee(employee._id)}
														className="btn-sm"
														variant="danger"
													>
														Remove
													</Button>
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

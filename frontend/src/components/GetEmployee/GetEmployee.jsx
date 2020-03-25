import React, { Component } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';

export default class GetEmployee extends Component {
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

	render() {
		const { isLoaded, employees } = this.state;

		if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<Container>
					<Row>
						<Col xs="12" sm="12" md="12" lg="12" xl="12">
							<h6 style={{ color: '#3f4d67', fontWeight: 'normal' }}>Current employees</h6>
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

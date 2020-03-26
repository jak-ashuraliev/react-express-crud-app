import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navigation.css';

export default function Navigation() {
	return (
		<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
			<Navbar.Brand href="/">ReactApp</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/location">Map</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href="/">Login</Nav.Link>
					<Nav.Link className="btn-singup" href="/signup">
						Sign Up
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

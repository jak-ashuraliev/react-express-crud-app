import React from 'react';
import './sidenav.css';

export default function SideNav(props) {
	return (
		<div className="sideNav">
			<nav>
				<ul>
					<li className="navLogo">
						<i className="fab fa-adn" /> Admin
					</li>
					<label>NAVIGATION</label>
					<li>
						<a className="active" href="/dashboard">
							<i className="fas fa-th-large" /> Dashboard
						</a>
					</li>
					<li>
						<a href="/user">
							<i className="fas fa-users" /> Users
						</a>
					</li>
					<li>
						<a href="/add-user">
							<i className="fas fa-user-plus" /> Add user
						</a>
					</li>
					<li>
						<a href="/remove-user">
							<i className="fas fa-user-minus" /> Remove user
						</a>
					</li>
					<li>
						<a href="/update-user">
							<i className="fas fa-user-edit" /> Edit user
						</a>
					</li>
					<li>
						<a href="/location">
							<i className="fas fa-map-marker-alt" /> Location
						</a>
					</li>
					<label>SETTINGS</label>
					<li>
						<a href="##" onClick={() => props.setChanged()}>
							<i className="fas fa-sign-out-alt" /> Logout
						</a>
					</li>
				</ul>
			</nav>
			<div className="footnote">
				<hr />
				<small>by Jak Ashuraliev</small>
			</div>
		</div>
	);
}

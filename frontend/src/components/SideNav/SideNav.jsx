import React from "react";
import './sidenav.css';

export default function SideNav() {
  return (
    <div>
      <nav>
        <ul>
          <li className='navLogo'><i className="fab fa-adn"></i> Admin</li>
          <label>NAVIGATION</label>
          <li><a className='active' href="/dashboard"><i className="fas fa-th-large"></i> Dashboard</a></li>
          <li><a href="/user"><i className="fas fa-users"></i> Users</a></li>
          <li><a href="/add-user"><i className="fas fa-user-plus"></i> Add user</a></li>
          <li><a href="/remove-user"><i className="fas fa-user-minus"></i> Remove user</a></li>
          <li><a href="/update-user"><i className="fas fa-user-edit"></i> Edit user</a></li>
          <li><a href="/location"><i className="fas fa-map-marker-alt"></i> Location</a></li>
          <label>SETTINGS</label>
          <li><a href="/"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
        </ul>
      </nav>
      <div className="footnote">
        <hr></hr>
        <small>Hand coded by Jak Ashuraliev</small>
      </div>
    </div>
  );
}

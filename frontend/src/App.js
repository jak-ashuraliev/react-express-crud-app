import React, { Component } from "react";
import "./App.css";
// import PostVendor from "./components/PostVendor/PostVendor";
// import GetVendor from "./components/GetVendor/GetVendor";
// import ControlledTabs from "./components/ControlledTabs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
// import Navigation from "./components/Navigation/Navigation";
// import Home from "./components/Home/Home";
import Location from "./components/Location/Location";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import SideNav from "./components/SideNav/SideNav";
import GetUser from "./components/GetUser/GetUser";
import PostUser from "./components/PostUser/PostUser";
import DeleteUser from "./components/DeleteUser/DeleteUser";
import UpdateUser from "./components/UpdateUser/UpdateUser";

class App extends Component {
  render() {
    return (
      <Container fluid className='app-container'>
        <div>
          <SideNav />
        </div>
        <div className="App">
          <Container className="main-container">
            <Router>
              <Route exact path="/" component={Login} />
              <Route path="/location" component={Location} />
              <Route path="/signup" component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/user" component={GetUser} />
              <Route path="/add-user" component={PostUser} />
              <Route path="/remove-user" component={DeleteUser} />
              <Route path="/update-user" component={UpdateUser} />
            </Router>
          </Container>
        </div>

      </Container>

    );
  }
}

export default App;

import React, {
	Component
} from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import {
	Container
} from 'react-bootstrap';
// import PostVendor from "./components/PostVendor/PostVendor";
// import GetVendor from "./components/GetVendor/GetVendor";
// import ControlledTabs from "./components/ControlledTabs";
// import Navigation from "./components/Navigation/Navigation";
// import Home from './components/Home/Home';
import Location from './components/Location/Location';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import SideNav from './components/SideNav/SideNav';
import GetEmployee from './components/GetEmployee/GetEmployee';
import PostEmployee from './components/PostEmployee/PostEmployee';
import DeleteEmployee from './components/DeleteEmployee/DeleteEmployee';
import UpdateEmployee from './components/UpdateEmployee/UpdateEmployee';

class App extends Component {
	render() {
		return ( <
				Container fluid className = "app-container" >
				<
				SideNav setChanged = {
					this.setChanged
				}
				/>  <
				div className = "App" >
				<
				Container className = "main-container" >
				<
				Router >
				<
				Route exact path = "/"
				component = {
					Dashboard
				}
				/> <
				Route exact path = "/login"
				component = {
					Login
				}
				/> {
				' '
			} <
			Route path = "/location"
		component = {
			Location
		}
		/> {' '} <
		Route path = "/signup"
		component = {
			Signup
		}
		/> {' '} <
		Route path = "/dashboard"
		component = {
			Dashboard
		}
		/> {' '} <
		Route path = "/employee"
		component = {
			GetEmployee
		}
		/> {' '} <
		Route path = "/add-employee"
		component = {
			PostEmployee
		}
		/> {' '} <
		Route path = "/remove-employee"
		component = {
			DeleteEmployee
		}
		/> {' '} <
		Route path = "/update-employee"
		component = {
			UpdateEmployee
		}
		/> {
		' '
	} < /
	Router > {
			' '
		} {
			' '
		} <
		/Container>{' '} {
	' '
} <
/div>{' '} {
' '
} <
/Container>
);
}
}

export default App;
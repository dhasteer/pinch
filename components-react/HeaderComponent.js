import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'; 

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}


	render() {
		return (
		        <Navbar dark expand="md">
		          <div className="container">
		          	<NavbarToggler onClick={this.toggleNav} />
		            <NavbarBrand className="mr-auto" href="/">
		            	<img src={require('../pinchlogo.png')} height="30" width="41"
		            		alt="Pinch" />
		            </NavbarBrand>
		            <Collapse isOpen={this.state.isNavOpen} navbar>
		            	<Nav navbar>
		            		<NavItem>
		            			<NavLink className="nav-link" to="/home">
		            				<span className="fa fa-home fa-lg"></span> Home
		            			</NavLink>
		            		</NavItem>
		            		<NavItem>
		            			<NavLink className="nav-link" to="/about-us">
		            				<span className="fa fa-group fa-lg"></span> About Us
		            			</NavLink>
		            		</NavItem>
		            		<NavItem>
		            			<NavLink className="nav-link" to="/app-simulation">
		            				<span className="fa fa-tablet fa-lg"></span> App Simulation
		            			</NavLink>
		            		</NavItem>
		            	</Nav>
		            </Collapse>
		          </div>
		        </Navbar>
		)
	}
}

export default Header;
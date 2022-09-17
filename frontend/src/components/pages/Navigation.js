import React from 'react';
import { Link } from 'react-router-dom';

const scrollToAbout = () => {
	let header = document.getElementById("header");
	let offset = header.offsetHeight;
	let elementPos = document.getElementById("about-us").offsetTop;
	window.scrollTo({
		top: elementPos - offset,
		behavior: "smooth"
	})
};

const scrollToService = () => {
	let header = document.getElementById("header");
	let offset = header.offsetHeight;
	let elementPos = document.getElementById("services").offsetTop;
	window.scrollTo({
		top: elementPos - offset,
		behavior: "smooth"
	})
};

const scrollToTeam = () => {
	let header = document.getElementById("header");
	let offset = header.offsetHeight;
	let elementPos = document.getElementById("team").offsetTop;
	window.scrollTo({
		top: elementPos - offset,
		behavior: "smooth"
	})
};

const scrollToHome = () => {
	let header = document.getElementById("header");
	let offset = header.offsetHeight;
	let elementPos = document.getElementById("home").offsetTop;
	window.scrollTo({
		top: elementPos - offset,
		behavior: "smooth"
	})
};

const Navigation = ({ onRouteChange, isSignedIn }) => {
	return (
		<header id="header" className="fixed-top header-scrolled">
			<div className="container d-flex ">
				<nav id="navbar" className="navbar">
					<ul>
						<li><Link className="nav-link scrollto active" to="#" onClick={scrollToHome}>Home</Link></li>
						<li><Link className="nav-link scrollto" to="#" onClick={scrollToAbout}>About</Link></li>
						<li><Link className="nav-link scrollto" to="#" onClick={scrollToService}>Services</Link></li>
						<li><Link className="nav-link scrollto" to="#" onClick={scrollToTeam}>Team</Link></li>
						{/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
							<ul>
								<li><a href="#">Drop Down 1</a></li>
								<li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
									<ul>
										<li><a href="#">Deep Drop Down 1</a></li>
										<li><a href="#">Deep Drop Down 2</a></li>
										<li><a href="#">Deep Drop Down 3</a></li>
										<li><a href="#">Deep Drop Down 4</a></li>
										<li><a href="#">Deep Drop Down 5</a></li>
									</ul>
								</li>
								<li><a href="#">Drop Down 2</a></li>
								<li><a href="#">Drop Down 3</a></li>
								<li><a href="#">Drop Down 4</a></li>
							</ul>
						</li> */}
						<li><Link className="nav-link scrollto" to="/signin">Signin</Link></li>
					</ul>
					<i className="bi bi-list mobile-nav-toggle"></i>
				</nav>
			</div>
		</header>
	);
}

export default Navigation;
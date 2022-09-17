import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Usernav = () => {

	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem('usertoken');
		navigate('/');
	}

	return (
		<header id="user-header" className="header-scrolled">
			<div>
				<nav className="navbar">
					<ul>
						<li className='image-input'><input style={{ width: "100%" }} ></input></li>
						<li><a href='/'>HOME</a></li>
						<li className="dropdown"><a href="#"><span>MENU</span> <i className="bi bi-chevron-down"></i></a>
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
						</li>
						<li className='user-seek'>
							<i className='fa fa-search zoom-icon'></i>
							<input type='text' className='seek-input'></input>
							<i className='fa fa-microphone seek-microphone'></i>
						</li>
						<li ><i className='fa fa-phone icon-size'></i></li>
						<li ><i className='fas fa-cart-arrow-down icon-size'></i></li>
						<li ><i className='fas fa-bell icon-size'></i></li>
						<li ><i className='fa fa-user icon-size'></i></li>
						<li><i class="fa fa-sign-out icon-size" aria-hidden="true" onClick={logout}></i></li>
					</ul>
					<i className="bi bi-list mobile-nav-toggle"></i>
				</nav>
			</div>
		</header>
	);
}

export default Usernav;
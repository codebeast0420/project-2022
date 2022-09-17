import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getProfile } from '../UserFunctions';
import { useNavigate } from 'react-router';

const Usernavcert = (props) => {

	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [inf, setInf] = useState('');
	const navigate = useNavigate();

	const token = localStorage.usertoken;

	useEffect(() => {
		setInf(props.id);
		if (props.id !== '3') {
			getProfile(token).then(res => {
				if (res.status === 'success') {
					setName(res.surname);
					setId(res.id);
					setEmail(res.email);
				}
			})
		}
	}, [])

	const certifiedDoc = () => {
		axios
			.post('users/read-doc', { sendId: id })
			.then((result) => {
				console.log("result", result.data);
				if (result.data.length !== 0)
					navigate('/user-doc');
				else
					alert("There is no data!");
			})
			.catch((err) => {
				console.log(err);
			})
	}

	const logout = () => {
		localStorage.removeItem('usertoken');
		navigate('/');
	}

	return (
		<header id="user-header" className="header-scrolled">
			<div>
				<nav className="navbar">
					<ul id='has-cert'>
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
						<li className='term-cert'>
							{inf === '1' &&
								<Link to="#" className='btn account-btn' onClick={certifiedDoc}>My Certified Documentation</Link>}
							{inf === '2' &&
								<Link to="/use-account" className='btn account-btn'>Go to user account</Link>}
							{inf === '3' &&
								<Link to="/" className='btn account-btn'>Go to Home</Link>}
							<img src='certified.png' className='certified-iconin'></img>
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

export default Usernavcert;
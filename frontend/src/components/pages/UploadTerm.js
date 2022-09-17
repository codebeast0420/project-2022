import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Usernavcert from './Usernavcert';
import { getProfile } from '../UserFunctions'

const UploadTerm = () => {
	const [id, setId] = useState('');
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const navigate = useNavigate();
	useEffect(() => {
		const token = localStorage.usertoken
		if (token) {
			getProfile(token).then(res => {
				if (res) {
					console.log(res);
					if (res.status === 'success') {
						setName(res.surname);
						setId(res.id);
						setEmail(res.email);
					} else {
						localStorage.removeItem('usertoken')
						navigate(`/signin`)
					}
				}
			});

		} else {
			localStorage.removeItem('usertoken')
			navigate(`/signin`)
		}
	}, [])
	return (
		<div>
			<Usernavcert id="1"/>
			<div className='user-detail'>
				<div className='col-md-3'>
					<p>Client ID: {id}</p>
				</div>
				<div className='col-md-3'>
					<p>Company or native User: </p>
				</div>
				<div className='col-md-3'>
					<p>Representative Name: </p>
				</div>
				<div className='col-md-3'>
					<p>Email: {email}</p>
				</div>
			</div>
			<div className='register-doc'>
				<Link to='#' className='resiger-doc-btn'>Register Documentation in your certified area</Link>
			</div>
			<div className='confrim-sen'>
				<p>Before registering documentation in your private area, read and accept terms and conditions for registering certified documentation</p>
			</div>
			<Link to='#' className='read-accept-btn'>
				Read and Accept terms and conditions
			</Link>
			<div className='term-area'>
				<Link to='/' className='do-not-accept'>
					I have read and don't accept
					I don't record documentation in my private area
				</Link>
				<img className='cross-img' src='cross.png'></img>
			</div>
			<div className='term-area'>
				<Link to='/upload-doc' className='accpet-btn'>
					<p>I have read and accept terms and conditions</p>
					<p>I register documentation in my certified private area</p>
				</Link>
				<img className='accept-img' src='yes.png'></img>
				<img className='after-accpet' src='upload.png'></img>
			</div>
		</div>
	)
}

export default UploadTerm;
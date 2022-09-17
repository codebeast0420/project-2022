import React, { useState, useEffect } from 'react';
import Usernavcert from './Usernavcert';
import { useNavigate } from 'react-router';
import AdminRegiDoc from './AdminRegiDoc';
import axios from 'axios';
import emailjs from '@emailjs/browser'
import CompareDoc from './CompareDoc';
import DocValid from './DocValid';
import UserSearch from './UserSearch';
import MsgBox from './MsgBox';
import ModSearch from './UserList';
import Modify from './Modify';
import UserList from './UserList';
import DatePicker from "react-datepicker";
import AlertUser from './AlertUser';
import AlertDoc from './AlertDoc';
import { getProfile } from '../UserFunctions';

const AdminUser = () => {
	const [searchname, setSearchname] = useState(false);
	const [searchdetail, setSearchdetail] = useState(false);
	const [userstatus, setUserstatus] = useState(false);
	const [registerUser, setRegisterUser] = useState(false);
	const [registerTemUser, setRegisterTemUser] = useState(false);
	const [canUser, setCanuser] = useState(false);
	const [modUser, setModUser] = useState(false);
	const [registerDoc, setRegisterDoc] = useState(-1);
	const [compare, setCompare] = useState(false);
	const [valid, setValid] = useState(false);
	const [sendmsg, setSendmsg] = useState(false);
	const [allUserList, setAllUserList] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [id, setId] = useState('');
	const [myDoc, setMyDoc] = useState([]);
	const [userData, setUserData] = useState([]);
	const [index, setIndex] = useState('');
	const [modifyIndex, setModifyIndex] = useState(-1);
	const [modData, setModData] = useState({});
	const [docData, setDocData] = useState([]);
	const [docindex, setDocindex] = useState(-1);
	const [docprocess, setDocprocess] = useState(-1);
	const [viewAllUser, setViewAllUser] = useState(false);
	const [viewModUser, setViewModUser] = useState(false);
	const [viewRegUser, setViewRegUser] = useState(false);
	const [viewAllDoc, setViewAllDoc] = useState(false);
	const [viewSelDoc, setViewSelDoc] = useState(false);
	const [viewDateDoc, setViewDateDoc] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const [lastDate, setLastDate] = useState(new Date());
	const [alert_user, setAlert_user] = useState([]);
	const [alert_doc, setAlert_doc] = useState([{}]);
	const [view_new_user, setViewNewUser] = useState(false);
	const [view_new_doc, setViewNewDoc] = useState(false);
	const [view_person_doc, setViewPersonDoc] = useState(false);
	const [tempIndex, setTempIndex] = useState(0);
	const [modPhone, setModPhone] = useState(0);
	const [isEmailError, setIsEmailError] = useState(0);
	const navigate = useNavigate();
	useEffect(() => {
		const token = localStorage.usertoken
		if (token) {
			getProfile(token).then(res => {
				if (res) {
					console.log(res);
					if (res.status === 'success') {
						if (res.role === 0)
							navigate(`/signin`)
					}
				}
			});

		} else {
			localStorage.removeItem('usertoken')
			navigate(`/signin`)
		}
		const interval = setInterval(() => {
			axios
				.get('users/notification')
				.then((res) => {
					console.log("notification", res.data.user);
					if (res.data.user.length > 0)
						setAlert_user(res.data.user);
					console.log(alert_user.length);
					if (res.data.doc.length > 1)
						setAlert_doc(res.data.doc);
					// console.log("name", res.data.doc[1].name[0].name);
				})
				.catch((err) => {
					console.log(err);
				})
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (viewSelDoc === false) {
			setRegisterDoc(-1);
		}
	}, [viewSelDoc]);

	const changeName = (e) => {
		e.persist();
		setIndex(e.target.value);
	}

	const getAllUser = () => {
		if (allUserList === false) {
			axios
				.get('users/get-all-users')
				.then((result) => {
					setUserData(result.data);
				})
				.catch((err) => {
					console.log(err);
				})
		}
		else {
			setRegisterDoc(-1);
		}
		setAllUserList(!allUserList)
	}

	const viewUserAgain = (val) => {
		setRegisterDoc(val);
		setAllUserList(true);
	}

	const nameResult = (val) => {
		setSearchdetail(false);
		axios
			.post('users/search-name', { name: val })
			.then((result) => {
				setSearchname(true);
				setUserData(result.data);
			})
			.catch((err) => {
				console.log(err);
			})
	}

	const viewPerDoc = (val) => {
		axios
			.post('users/search-name', { name: val })
			.then((result) => {
				setViewPersonDoc(true);
				setUserData(result.data);
			})
			.catch((err) => {
				console.log(err);
			})
	}

	const docResult = (val) => {
		console.log("!!!", userData[val]);
		axios
			.post('users/get-docs', { email: userData[val].email })
			.then((result) => {
				setViewSelDoc(false);
				setRegisterDoc(2);
				setDocData(result.data);
				setTempIndex(val);
			})
			.catch((err) => {
				console.log(err);
			})
	}

	const userDoc = (val) => {
		setAllUserList(false);
		axios
			.post('users/get-docs', { email: val })
			.then((result) => {
				setRegisterDoc(1);
				setDocData(result.data);
			})
			.catch((err) => {
				console.log(err);
			})
	}

	const detailResult = (val) => {
		setSearchname(false);
		axios
			.post('users/search-detail', { detail: val })
			.then((result) => {
				setSearchdetail(true);
				setUserData(result.data);
			})
			.catch((err) => {
				console.log(err);
			})
	}

	const _viewDateDoc = () => {
		setViewDateDoc(!viewDateDoc);
		setRegisterDoc(-1);
	}
	const modify = (val) => {
		axios
			.post('users/search-detail', { detail: val })
			.then((result) => {
				setModUser(true);
				setUserData(result.data);
			})
			.catch((err) => {
				console.log(err);
			})
	}

	const searchDate = (val) => {
		let dateResult = [];
		setAllUserList(false);
		if (lastDate < startDate) {
			alert("Incorrect Date")
		}
		else {
			axios
				.get('users/get-all-docs')
				.then((result) => {
					setRegisterDoc(val);
					console.log("startDate", startDate, lastDate);
					result.data.map((data, index) => {
						let date1 = new Date(data.creation_date);
						console.log("date", date1);
						if (date1 >= startDate && date1 <= lastDate)
							dateResult = [...dateResult, data];
					})
					setDocData(dateResult);
				})
		}
	}
	const modifyChange = (e) => {
		e.persist();
		setModData({ ...modData, [e.target.name]: e.target.value });
	}

	const validDoc = (num) => {
		setDocindex(num);
		setDocprocess(docData[num].inprocess);
		setValid(true);
	}

	const openFile = () => {
		const newWindow = window.open("http://localhost:5000/files/" + docData[docindex].docname, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	const compareDoc = (num) => {
		setDocindex(num);
		setCompare(true);
	}
	const select_modUser = (index) => {
		setModData(userData[index]);
		setModifyIndex(index);
		setModUser(false);
	}

	const select_user = (index) => {
		userDoc(userData[index].email);
		setRegisterDoc(1);
		setModUser(false);
	}

	const ChangeUser = () => {
		if (!/\S+@\S+\.\S+/.test(modData.email)) {
			setIsEmailError(1);
		}
		else {
			let phoneNum;
			if (modPhone !== 0)
				phoneNum = modPhone;
			else phoneNum = modData.telephone;
			axios
				.post('users/modify-detail', { content: modData, sendId: userData[modifyIndex].id, category: userData[modifyIndex].category, phone: phoneNum })
				.then((result) => {
					setModifyIndex(-1);
					alert("Modify Successful!");
					setModPhone(0);
					setIsEmailError(0);
				})
				.catch((err) => {
					console.log(err);
				})
		}
	}

	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		subject: '',
		message: ''
	});

	const process = (num) => {
		if (num === 1) return (
			<div className='status-yellow-small'>
				<p>validation in progress</p>
			</div>
		)
		if (num === 2) return (
			<div className='regi-des' style={{ backgroundColor: "green", marginLeft: "12%" }}>
				<p>certificate</p>
			</div>
		)
		if (num === 3) return (
			<div className='regi-des' style={{ backgroundColor: "red", marginLeft: "12%" }}>
				<p>not correct, must be modified</p>
			</div>
		)
		if (num === 4) return (
			<div className='regi-des' style={{ backgroundColor: "green", marginLeft: "12%" }}>
				<p>correct, registered</p>
			</div>
		)
	}

	const sendEmailBox = () => {
		setSendmsg(true);
	}
	const sendEmail = (e) => {
		axios
			.post('users/send-mail', { inprocess: docprocess, sendId: docData[docindex].id })
			.then((result) => {
				setSendmsg(false);
				setValid(false);
				docResult(tempIndex);
				alert("Valid Successful!");
			})
			.catch((err) => {
				console.log(err);
			})
	};

	const allUser = () => {
		setViewAllUser(!viewAllUser);
		axios
			.get('users/get-all-users')
			.then((result) => {
				setUserData(result.data);
			})
			.catch((err) => {
				console.log(err);
			})
	}
	const viewNewUser = () => {
		setViewNewUser(!view_new_user);
		if (view_new_user === true) {
			axios
				.get('users/reset-user-alert')
				.then((result) => {
				})
				.catch((err) => {
					console.log(err);
				})
			setAlert_user([]);
		}

	}

	const viewNewDoc = () => {
		setViewNewDoc(!view_new_doc);
		if (view_new_doc === true) {
			axios
				.get('users/reset-doc-alert')
				.then((result) => {
				})
				.catch((err) => {
					console.log(err);
				})
			setAlert_doc([{}]);
		}
	}

	useEffect(() => {
		if (viewSelDoc === false) {
			setSearchdetail(false);
			setSearchname(false);
		}
	}, [viewAllUser]);

	const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value })

	return (
		<div>
			{modData.telephone}
			<Usernavcert id='3' />
			<div className='select-file admin-first-sen'>
				<div className='cert-main-sen'>
					<p>Admnistrator management panel</p>
				</div>
			</div>
			<div className='notification-part'>
				<div className='cert-main-sen part-long user-management-title main-part-top'>
					<p>Notification reception panel</p>
				</div>
				<div className='regcan-user'>
					<a className='cert-main-sen main-top notification' href='#' onClick={viewNewUser}>
						<p>A new user register</p>
						{alert_user.length > 0 && (
							<span class="badge">{alert_user.length}</span>
						)}
					</a>
				</div>
				{view_new_user === true &&
					<AlertUser exit={viewNewUser} user={alert_user} />
				}
				<div className='regcan-user'>
					<a className='cert-main-sen main-top notification' href='#' onClick={viewNewDoc}>
						<p>A user registered documents</p>
						{alert_doc.length > 1 && (
							<span class="badge">{alert_doc.length - 1}</span>
						)}
					</a>
				</div>
				{view_new_doc === true &&
					<AlertDoc exit={viewNewDoc} docs={alert_doc} />
				}
				<div className='regcan-user'>
					<a className='cert-main-sen main-top notification' href='#'>
						<p>A registered user send and email</p>
					</a>
				</div>
				<div className='regcan-user'>
					<a className='cert-main-sen main-top notification' href='#'>
						<p>A unregistered user send and email</p>
					</a>
				</div>
			</div>
			<div className='user-management main-part-top'>
				<div className='cert-main-sen part-long user-management-title'>
					<p>User management</p>
				</div>
				<div className='view-users'>
					<a className='cert-main-sen main-top' href='#view-all-users' onClick={allUser}>
						<p>List of all users</p>
					</a>
					{viewAllUser === true && (
						<div className='users-btn-group' id='view-all-users'>
							<UserSearch exit={setViewAllUser} userData={userData} id='#search-detail' />
							<div className='search-username main-top'>
								<div className='row'>
									<input type='text' placeholder='select user search by name' className='search-user-input' onChange={changeName}></input>
									<a href='#' className='btn btn-secondary' onClick={() => nameResult(index)}>search</a>
								</div>
							</div>
							<div className='search-detail row main-top'>
								<div className='row' id='#user-status'>
									<input type='text' placeholder='select user search by detail' className='search-detail-input' onChange={changeName}></input>
									<a href='#search-detail' className='btn btn-secondary' onClick={() => detailResult(index)}>search</a>
								</div>
							</div>
							<div className='user-state main-top'>
								<a href='#' className='btn btn-secondary account-btn' onClick={() => setUserstatus(true)}>Users status</a>
								{userstatus === true && (
									<div className='view-data main-top' id='#user-status'>
										<button type="button" className="close" onClick={() => setUserstatus(false)}>&times;</button>

									</div>
								)}
							</div>
						</div>
					)}
				</div>
				<div className='regcan-user' id='#regi-new-user'>
					<a className='cert-main-sen main-top' href='#regi-new-user' onClick={() => setViewRegUser(!viewRegUser)}>
						<p>Register a new user</p>
					</a>
					{viewRegUser === true && (
						<div className='users-btn-group'>
							<div className='user-state main-top'>
								<a href='/register' className='btn btn-secondary account-btn' >Register User</a>
								{registerUser === true && (
									<div className='view-data main-top'>
										<button type="button" clFassName="close" onClick={() => setRegisterUser(false)}>&times;</button>

									</div>
								)}
							</div>
							{/* <div className='user-state main-top'>
								<a href='#' className='btn btn-secondary account-btn' onClick={() => setRegisterTemUser(true)}>Register Temperarily User</a>
								{registerTemUser === true && (
									<div className='view-data main-top'>
										<button type="button" className="close" onClick={() => setRegisterTemUser(false)}>&times;</button>

									</div>
								)}
							</div>
							<div className='user-state main-top'>
								<a href='#' className='btn btn-secondary account-btn' onClick={() => setCanuser(true)}>Cancel User</a>
								{canUser === true && (
									<div className='view-data main-top'>
										<button type="button" className="close" onClick={() => setCanuser(false)}>&times;</button>

									</div>
								)}
							</div> */}
						</div>
					)}
				</div>
				<div className='mod-userdata'>
					<a className='cert-main-sen main-top' href='#' onClick={() => setViewModUser(!viewModUser)}>
						<p>Modification of user</p>
					</a>
					{viewModUser === true && (
						<div className='users-btn-group'>
							<div className='user-state main-top'>
								<div className='row'>
									<input type='text' placeholder='select user search by name' className='search-user-input' onChange={changeName}></input>
									<a href='#' className='btn btn-secondary' onClick={() => modify(index)}>Modify user data</a>
								</div>
								{modUser === true && (
									<UserList exit={setModUser} select={select_modUser} userData={userData} />
								)}
							</div>
						</div>
					)}
				</div>
				{modifyIndex !== -1 && (
					<Modify exit={setModifyIndex} modData={modData} userData={userData} modifyChange={modifyChange} modifyIndex={modifyIndex} ChangeUser={ChangeUser} telephone={modPhone} changePhone={setModPhone} error={isEmailError}/>
				)}
			</div>
			<div className='regcan-user'>
				<a className='cert-main-sen main-top' href='#'>
					<p>Temporary user cancellation</p>
				</a>
			</div>
			<div className='regcan-user' id='#definitive-can-user'>
				<a className='cert-main-sen main-top' href='#definitive-can-user'>
					<p>Definitive cancellation of user</p>
				</a>
			</div>
			<div className='reg-doc main-part-top'>
				<div className='cert-main-sen part-long user-management-title'>
					<p>Documents management</p>
				</div>
				<div className='regcan-user' id='#all-user'>
					<a className='cert-main-sen main-top' href='#all-user' onClick={() => getAllUser()}>
						<p>All registered documents of all users</p>
					</a>
					{allUserList === true && (
						<UserList exit={setAllUserList} select={select_user} userData={userData} />
					)}
					{registerDoc === 1 && (
						<AdminRegiDoc exit={viewUserAgain} docData={docData} compare={compareDoc} valid={validDoc} />
					)}
				</div>
				<div className='regcan-user' id='#user-with-doc'>
					<a className='cert-main-sen main-top' href='#user-with-doc' onClick={() => setViewSelDoc(!viewSelDoc)}>
						<p>All registered documents of selected user</p>
					</a>
					{viewSelDoc === true && (
						<div className='row main-top' id='#select-doc'>
							<input type='text' placeholder='select user search by name' className='search-detail-input' onChange={changeName}></input>
							<a href='#select-doc' className='btn btn-secondary' onClick={() => viewPerDoc(index)}>search</a>
						</div>
					)}
					{view_person_doc === true && (
						<UserList exit={setViewPersonDoc} select={docResult} userData={userData} />
					)}
				</div>
				{registerDoc === 2 && (
					<AdminRegiDoc exit={setRegisterDoc} docData={docData} compare={compareDoc} valid={validDoc} />
				)}
				{compare === true && (
					<CompareDoc exit={setCompare} docname={docData[docindex].docname} compare={compare} />
				)}
				{valid === true && (
					<DocValid valid={valid} exit={setValid} process={process} docprocess={docprocess} setProcess={setDocprocess} sendMail={sendEmailBox} openFile={openFile} docName={docData[docindex].docname}/>
				)}
				<div className='regcan-user' id='doc-with-date'>
					<a className='cert-main-sen main-top' href='#doc-with-date' onClick={() => _viewDateDoc()}>
						<p>All registered documents with date</p>
					</a>
					{viewDateDoc === true && (
						<div className='date-part row'>
							<div className='select-date'>
								<label className="date-label">From:</label>
								<DatePicker selected={startDate} className="second-line creation-date" onChange={(date: Date) => setStartDate(date)} />
							</div>
							<div className='select-date'>
								<label className='date-label'>To:</label>
								<DatePicker selected={lastDate} className="second-line creation-date" onChange={(date: Date) => setLastDate(date)} />
							</div>
							<a href='#' className='btn btn-secondary' style={{ marginTop: "10px" }} onClick={() => searchDate(3)}>Search</a>
						</div>
					)}
					{registerDoc === 3 && (
						<AdminRegiDoc exit={setRegisterDoc} docData={docData} compare={compareDoc} valid={validDoc} />
					)}
				</div>
			</div>

			{sendmsg === true && (
				<MsgBox sendmsg={sendmsg} exit={setSendmsg} email={email} sendEmail={sendEmail} />
			)}
		</div>
	)
}

export default AdminUser;
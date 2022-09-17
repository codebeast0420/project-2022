import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Usernavcert from './Usernavcert';
import { getProfile } from '../UserFunctions';
import FilePreviewer from 'react-file-previewer';
import axios from 'axios';
import Lightbox from "react-images-zoom-print";

const Userdoc = () => {
	const [id, setId] = useState('');
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const navigate = useNavigate();
	const [myDoc, setMyDoc] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [compare, setCompare] = useState(false);
	const [docnum, setDocnum] = useState(0);
	const [printModal, setPrintModal] = useState(false);

	useEffect(() => {
		const token = localStorage.usertoken;
		if (token) {
			getProfile(token).then(res => {
				if (res) {
					if (res.status === 'success') {
						setName(res.surname);
						setId(res.id);
						setEmail(res.email);
						axios
							.post('users/read-doc', { sendId: res.id })
							.then((result) => {
								console.log(result.data);
								if (result.data.length === 0)
									navigate('/use-account');
								else
									setMyDoc(result.data);
							})
							.catch((err) => {
								console.log(err);
							})
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
	}, []);

	const docprop = (num) => {
		setDocnum(num);
		setShowModal(true);
	}

	const comparewith = (num) => {
		setDocnum(num);
		setCompare(true);
	}

	const process = (num) => {
		if (num === 1) return (
			<div className='status-yellow-small'>
				<p>validation in progress</p>
			</div>
		)
		if (num === 2) return (
			<div className='row'>
				<div className='certificate-opt status-com'>
					<p>certificate</p>
				</div>
				<div className='noval-require status-com'>
					<p>no validation required</p>
				</div>
			</div>
		)
		if (num === 3) return (
			<div className='status-red-long status-com'>
				<p>not correct, the document must be modified</p>
			</div>
		)
		if (num === 4) return (
			<div className='status-green-long status-com'>
				<p>correct, register as validated certificated</p>
			</div>
		)
	}

	const openFile = (num) => {
		setDocnum(num);
		const newWindow = window.open("http://localhost:5000/files/" + myDoc[num].docname, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	const printImage = (num) => {
		setDocnum(num);
		setPrintModal(true);
	}

	// const handlePrint = useReactToPrint({
	// 	content: () => componentRef.current,
	// });

	return (
		<div>
			<Usernavcert id="2" />
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
			<div className='select-file title'>
				<div className='cert-main-sen'>
					<p>My certified Documentation</p>
				</div>
			</div>
			<div className='row doc-main'>
				<div className='doc-main-header'>
					<div className='col-md-6'>
						<div className='cert-main-sen'>
							<p>Document name</p>
						</div>
					</div>
					<div className='col-md-6 row'>
						<div className='col-sm-9 doc-status'>
							<div className='cert-main-sen'>
								<p>Documentation status</p>
							</div>
							<div className='status-part'>
							</div>
						</div>
						<div className='col-sm-3 doc-option'>
							<div className='cert-main-sen'>
								<p>options</p>
							</div>
						</div>
					</div>
				</div>
				<div className='doc-part'>
					{myDoc.map((each, index) => {
						return (
							<div className='row'>
								<div className='col-md-6'>
									<a className='each-doc' href='#' onClick={() => docprop(index)}>
										<p>{each.docname}:{each.status}</p>
									</a>
								</div>
								<div className="col-md-6 row">
									<div className='col-sm-9'>
										{process(each.inprocess)}
									</div>
									<div className='col-sm-3'>
										<div className="dropdown-btn">
											<a className="dropbtn btn btn-secondary mybtn" href='#'>option</a>
											<div className="dropdown-content">
												<a href="#" onClick={() => comparewith(index)}>Compare with normative</a>
												<a href="#" onClick={() => docprop(index)}>Watch file properties</a>
												{each.category === 1 && <a href="#" onClick={() => openFile(index)}>Read Document</a>}
												{each.category === 2 && <a href="#" onClick={() => openFile(index)}>Watch Image</a>}
												{each.category === 3 && <a href="#" onClick={() => openFile(index)}>Listen Audio</a>}
												{each.category === 4 && <a href="#" onClick={() => openFile(index)}>Watch Video</a>}
												{each.category === 1 && <a href="#" onClick={() => openFile(index)}>Print document</a>}
												{each.category === 2 && <a href="#" onClick={() => printImage(index)}>Print image</a>}
												<a href={`http://localhost:5000/files/${myDoc[index].docname}`} download>Download</a>
											</div>
										</div>
									</div>
								</div>
							</div>)
					})}
				</div>
			</div>
			{showModal === true && (
				<div className={`confirm-modal ${showModal === true ? 'show' : ''}`}>
					<div className='conmodal-content'>
						<div className='conmodal-header'>
							<button type="button" className="close" onClick={() => setShowModal(false)}>&times;</button>
							<h4>Properties</h4>
						</div>
						<div className='conmodal-body'>
							<div className='preview'>
								{myDoc[docnum].category !== 2 && <iframe className='preview-iframe' src={`http://localhost:5000/files/${myDoc[docnum].docname}`} />}
								{myDoc[docnum].category === 2 && <img className='preview-iframe' src={`http://localhost:5000/files/${myDoc[docnum].docname}`} />}
							</div>
							<div className='row'>
								<p className='col-md-4'>{myDoc[docnum].docname}</p>
								<div className='col-md-8 row'>
									<p className='col-sm-4'>author:{myDoc[docnum].author}</p>
									<p className='col-sm-4'>creation date: {myDoc[docnum].creation_date}</p>
									<div className='col-sm-4'></div>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-7 row'>
									<p className='col-sm-4'>affects:{myDoc[docnum].affects}</p>
									<p className='col-sm-8'>document keywords:{myDoc[docnum].dockeyword}</p>
								</div>
								<div className='col-md-5'></div>
							</div>
							<div>
								<p>description of the document: {myDoc[docnum].description}</p>
							</div>
							<div>
								<p>extended document information:{myDoc[docnum].information}</p>
							</div>
							<div className='check-content'>
								<p style={{ paddingLeft: "8px" }} >{myDoc[docnum].status}</p>
							</div>
							<div>
								<p>priority content from 1 (minimum priority) to 10 (maximum priority): {myDoc[docnum].priority}</p>
							</div>
							<div>
								<p>the document must be inspected by the audit department of the certification:{myDoc[docnum].inspected}</p>
							</div>
							<div>
								<p>requires urgent review(before 12hours):{myDoc[docnum].urgent}</p>
							</div>
						</div>
					</div>
				</div>
			)}
			{compare === true && (
				<div className={`confirm-modal  compare ${compare === true ? 'show' : ''}`}>
					<div className='conmodal-content'>
						<div className='conmodal-header'>
							<button type="button" className="close" onClick={() => setCompare(false)}>&times;</button>
							<h4>Compare</h4>
						</div>
						<div className='compare-part'>
							<div className='compare-doc'>
								<iframe className='preview-iframe' style={{ height: "500px" }} src={`http://localhost:5000/files/${myDoc[docnum].docname}`} />
							</div>
							<div className='compare-nor'>

							</div>
						</div>
					</div>
				</div>
			)}
			{printModal === true && (
				<Lightbox
					images={[
						{
							src:
								"http://localhost:5000/files/" + myDoc[docnum].docname
						}
					]}
					onClose={() => setPrintModal(false)}
					isOpen={true}
					rotatable={true}
					zoomable={true}
					onPrint={() => window.print()}
					className="backgroundColor"
					style={{ backgroundColor: "red" }}
				/>
			)}

		</div>
	)
}

export default Userdoc;
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from "react-bootstrap"
import FilePreviewer from 'react-file-previewer';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FileDetail = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [anotherFile, setAnotherFile] = useState(false);
	const [detail, setDetail] = useState({});
	const [checkcon, setCheckcon] = useState([]);
	const [rename, setRename] = useState(false);
	const [checkerror, setCheckerror] = useState({});
	const [othername, setOthername] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [url, setUrl] = useState('');
	const [category, setCategory] = useState(0);
	const [extension, setExtension] = useState('');
	const [showUploadBtn, setShowUploadBtn] = useState(false);
	const [otherSelBtn, setOtherSelBtn] = useState(false);
	const [name_list, setNameList] = useState([]);
	const [file_list, setFileList] = useState([]);
	const [end, setEnd] = useState(false);
	const [count, setCount] = useState(1);
	const current = new Date();
	const date = `${current.getFullYear() % 100}.${current.getMonth() + 1}.${current.getDate()}.${current.getHours()}.${current.getMinutes()}.${current.getSeconds()}`;
	const distroyModal = (val) => {
		props.showThis(val);
	};

	useEffect(() => {
		setUrl(URL.createObjectURL(props.file));
		setCategory(props.category);
		let filename_arry = [];
		filename_arry = props.filename.split('.')
		setExtension(filename_arry[filename_arry.length - 1]);
	}, [])

	useEffect(() => {
		if (end === true) {
			alert('Upload Successful')

			setShowModal(false);
			setAnotherFile(false);
			setNameList([]);
			setFileList([]);
			props.setProgress(0);
			setCount(1);
			setEnd(false);
		}
	}, [end])

	let temp_rename = '';
	const uploadThis = async (e) => {
		e.preventDefault();
		let che = checkcon.toString();
		await props.upload(date + "-" + (othername !== '' ? othername + '.' + extension : props.filename), props.file);
		Doc(detail, che, date + "-" + (othername !== '' ? othername + '.' + extension : props.filename), category);
		for (let i = 0; i < name_list.length; i++) {
			const name = date + "-" + (name_list[i]);
			await props.upload(name, file_list[i]);
			Doc(detail, che, name, category);
		}
		if (props.progress === 0) {
			setCount(count+1);
			setEnd(true);
		}
	};

	const handleChange = (event) => {
		event.persist();
		setDetail(detail => ({ ...detail, [event.target.name]: event.target.value }));
	};



	const changeCheck = (event) => {
		event.persist();
		setCheckcon(checkcon => [...checkcon, event.target.value]);
		// check_val = [...check_val, event.target.value]
	}
	const showResult = (bool) => {
		let errors = {};
		if (!detail.author) {
			errors.author = 'Author is required';
		}
		if (!detail.affects) {
			errors.affects = 'Affect is required';
		}
		if (!detail.document_keywords) {
			errors.document_keywords = 'Document Keyword is required';
		}
		if (!detail.extended) {
			errors.extended = 'Document Keyword is required';
		}
		if (!detail.description) {
			errors.description = 'Description of document is required';
		}
		if (!detail.priority_content) {
			errors.priority_content = 'Priority is required';
		}
		setCheckerror(errors);
		if (Object.keys(errors).length === 0) {
			setShowModal(bool);
		}
	}

	const changeName = (event) => {
		// setOthername(event.target.value);
		temp_rename = event.target.value;
	}

	const RenameFile = () => {
		setOthername(temp_rename);
		setRename(false);
	}

	const noOtherFile = () => {
		setShowUploadBtn(true);
		setOtherSelBtn(true);
	}

	const closeOtherFile = () => {
		setAnotherFile(false);
		setShowUploadBtn(false);
		setOtherSelBtn(false);
	}

	const uploadMulti = () => {
		// setAnotherFile(true);
		let selfile = document.querySelector("#Multifile").files[0];
		setNameList([...name_list, selfile.name]);
		setFileList([...file_list, selfile]);
	}

	const Doc = (de, che, name, cat) => {
		const newDoc = {
			docname: name,
			userId: props.userId,
			author: de.author,
			affects: de.affects,
			dockeyword: de.document_keywords,
			description: de.description,
			creation_date: startDate.toLocaleDateString(),
			information: de.extended,
			status: che,
			priority: de.priority_content,
			inspected: de.inspected,
			urgent: de.require,
			category: cat,
		}
		return axios
			.post('users/save-doc', newDoc)
			.then((res) => {
				console.log(res);
				console.log("asdf", props.userId);
			})
			.catch((err) => {
				console.log(err);
			})
	}

	return (
		<div className='file-detail'>
			<div className='file-detail-sen'>
				<p>Descriptive data of the document</p>
			</div>
			<div className='main-detail'>
				<div className="filename">
					<p>{othername !== '' ? othername + '.' + extension : props.filename}</p>
				</div>
				<div className='first-line'>
					<img className='require' src='require.png' />
					<input type='text' className={`first-line-input author ${checkerror.author && 'is-danger'}`} value={detail.author} name="author" placeholder='author' onChange={handleChange} />
					<button className='first-line-input' onClick={() => setRename(true)}>Rename the document</button>
					<button className='first-line-input' onClick={() => setOthername('')}>Keep original name</button>
					<div className='preview'>
						{props.isImg === 0 && <iframe className='preview-iframe' src={url} />}
						{props.isImg === 1 && <FilePreviewer file={{ url }} />}
					</div>
				</div>
				<div className='second-line'>
					{/* <input type='text' className={`second-line creation-date ${checkerror.creation_date && 'is-danger'}`} name="creation_date" placeholder='creation date(mm/dd/yyyy)' onChange={handleChange} /> */}
					<div className='calendar'>
						<img className='require' src='require.png' />
						<label className='creation-label'>Creation date</label>
						<DatePicker selected={startDate} className={`second-line creation-date ${checkerror.creation_date && 'is-danger'}`} name="creation_date" onChange={(date: Date) => setStartDate(date)} />
					</div>
					<img className='require affect-require' src='require.png' />
					<input type='text' className={`second-line affects ${checkerror.affects && 'is-danger'}`} name="affects" placeholder='affects' onChange={handleChange} />
					<img className='require doc-require' src='require.png' />
					<input type='text' className={`second-line document-key ${checkerror.document_keywords && 'is-danger'}`} name="document_keywords" placeholder='document keywords' onChange={handleChange} />
				</div>
				<div className='third-line'>
					<img className='require' src='require.png' />
					<input type='text' className={`description-doc ${checkerror.description && 'is-danger'}`} name="description" placeholder='Write the description of document.(max 200 characters)' onChange={handleChange}></input>
				</div>
				<div className='forth-line'>
					<img className='require' src='require.png' />
					<input type='text' className={`extend-doc ${checkerror.extended && 'is-danger'}`} name="extended" placeholder='Extended document information. (max 200 characters)' onChange={handleChange}></input>
				</div>
				<div className='check-part'>
					<div className='checkline'>
						<div className='first-column'>
							<input type='checkbox' id='confidential' name="confidential" value='confidential' onChange={changeCheck}></input>
							<label htmlFor='confidential'> confidential</label>
						</div>
						<div className='second-column'>
							<input type='checkbox' id='opening-key' name="opening-key" value='has opening key' onChange={changeCheck}></input>
							<label htmlFor='opening-key'> has opeining key</label>
						</div>
						<div className='third-column'>
							<input type='checkbox' id='forbidden-print' name='forbidden-print' value='forbidden print' onChange={changeCheck}></input>
							<label htmlFor='forbidden-print'> forbidden print</label>
						</div>
					</div>
					<div className='checkline'>
						<div className='first-column'>
							<input type='checkbox' id='internal-origin' name='internal-origin' value='internal origin' onChange={changeCheck}></input>
							<label htmlFor='internal-origin'> internal origin</label>
						</div>
						<div className='second-column'>
							<input type='checkbox' id='external-origin' name='external-origin' value='external origin' onChange={changeCheck}></input>
							<label htmlFor='external-origin'> external origin</label>
						</div>
						<div className='third-column'>
							<input type='checkbox' id='administration-origin' name='administration-origin' value='administration origin' onChange={changeCheck}></input>
							<label htmlFor='administration-origin'> public administration origin</label>
						</div>
					</div>
					<div className='checkline'>
						<div className='first-column'>
							<input type='checkbox' id='technical-content' name='technical-content' value='technical content' onChange={changeCheck}></input>
							<label htmlFor='technical-content'>technical content</label>
						</div>
						<div className='second-column'>
							<input type='checkbox' id='analytical-report' name='analytical-report' value='analytical report' onChange={changeCheck}></input>
							<label htmlFor='analytical-report'>analytical report</label>
						</div>
						<div className='third-column'>
							<input type='checkbox' id='legal-content' name='legal-content' value='legal content' onChange={changeCheck}></input>
							<label htmlFor='legal-content'>legal content</label>
						</div>
						<div className='standard-column'>
							<input type='checkbox' id='certificate' name='certificate' value='certificate' onChange={changeCheck}></input>
							<label htmlFor='certificate'>certificate</label>
						</div>
						<div className='standard-column'>
							<input type='checkbox' id='consumer-document' name='consumer-document' value='consumer document' onChange={changeCheck}></input>
							<label htmlFor='consumer-document'>consumer document</label>
						</div>
					</div>
					<div className='checkline'>
						<div className='first-column'>
							<input type='checkbox' id='supplier-document' name='supplier-document' value='supplier document' onChange={changeCheck}></input>
							<label htmlFor='supplier-document'>supplier document</label>
						</div>
						<div className='second-column'>
							<input type='checkbox' id='production-document' name='production-document' value='production document' onChange={changeCheck}></input>
							<label htmlFor='production-document'>production document</label>
						</div>
						<div className='long-column'>
							<input type='checkbox' id='distribution-logic' name='distribution-logic' value='distribution logic document' onChange={changeCheck}></input>
							<label htmlFor='distribution-logic'>distribution logic document</label>
						</div>
						<div className='long-column'>
							<input type='checkbox' id='product-sales' name='product-sales' value='product sales document' onChange={changeCheck}></input>
							<label htmlFor='product-sales'>product sales document</label>
						</div>
					</div>
					<div className='checkline'>
						<div className='long-column'>
							<input type='checkbox' id='traceability' name='traceability' value='traceability document' onChange={changeCheck}></input>
							<label htmlFor='traceability'>traceability document</label>
						</div>
						<div className='long-column'>
							<input type='checkbox' id='R-D' value='R&D document'></input>
							<label htmlFor='R-D'>R&D document</label>
						</div>
						<div className='long-column'>
							<input type='checkbox' id='staff-training' name='staff' value='staff training document' onChange={changeCheck}></input>
							<label htmlFor='staff-training'>staff training document</label>
						</div>
						<div className='long-column'>
							<input type='checkbox' id='marketing-doc' name='marketing' value='marketing document' onChange={changeCheck}></input>
							<label htmlFor='marketing-doc'>marketing document</label>
						</div>
					</div>
					<div className='checkline'>
						<div className='long-long-column'>
							<input type='checkbox' id='microbiological' name='microbiological' value='microbiological safety and quality' onChange={changeCheck}></input>
							<label htmlFor='microbiological'>microbiological safety and quality</label>
						</div>
						<div className='long-long-column'>
							<input type='checkbox' id='physical-chemical' name='physical' value='physical chemical safety and quality' onChange={changeCheck}></input>
							<label htmlFor='physical-chemical'>physical chemical safety and quality</label>
						</div>
						<div className='long-long-column'>
							<input type='checkbox' id='environmental' name='environmental' value='environmental safety and quality' onChange={changeCheck}></input>
							<label htmlFor='environmental'>environmental safety and quality</label>
						</div>
					</div>
					<div className='checkline'>
						<div className='long-long-column'>
							<input type='checkbox' id='parasitological' name='parasitological' value='parasitological safety and quality' onChange={changeCheck}></input>
							<label htmlFor='parasitological'>parasitological safety and quality</label>
						</div>
						<div className='long-long-column'>
							<input type='checkbox' id='internal-non' name='internal' value='internal non-conformity document' onChange={changeCheck}></input>
							<label htmlFor='internal-non'>internal non-conformity document</label>
						</div>
						<div className='long-long-column'>
							<input type='checkbox' id='external-non' name='external' value='external non-conformity document' onChange={changeCheck}></input>
							<label htmlFor='external-non'>external non-conformity document</label>
						</div>
					</div>
					<div className='checkline'>
						<div className='short-column'>
							<input type='checkbox' id='other-content' name='other' value='other content' onChange={changeCheck}></input>
							<label htmlFor='other-content'>other content</label>
						</div>
						<input type='text' className='content-type-input' name='content-type' value={detail.content_type} placeholder='write content type' onChange={handleChange}></input>
					</div>
				</div>
				<div className='bottom-area'>
					<div>
						<img className='require' src='require.png' />
						<label className='bottom-label'>priority content from 1 (minimum priority) to 10 (maximum priority)</label>
						<input
							type='text'
							className={`priority-input ${checkerror.priority_content && 'is-danger'}`}
							onKeyPress={(event) => {
								if (!/[0-9]/.test(event.key)) {
									event.preventDefault();
								}
							}}
							name="priority_content"
							onChange={handleChange}>

						</input>
					</div>
					<div>
						<img className='require' src='require.png' />
						<label className='bottom-label'>the document must be inspected by the audit department of certification</label>
						<input type='radio' id='inspected_yes' className='inspected-check' name='inspected' value='yes' onChange={handleChange} />
						<label htmlFor='inspected_yes'>yes</label>
						<input type='radio' id='inspected_no' className='inspected-check' name='inspected' value='no' onChange={handleChange} />
						<label htmlFor='inspected_no'>no</label>
					</div>
					<div>
						<img className='require' src='require.png' />
						<label className='bottom-label'>requires urgent review (before 12 hours)</label>
						<input type='radio' id='require_yes' className='inspected-check' name='require' value='yes' onChange={handleChange} />
						<label htmlFor='require_yes'>yes</label>
						<input type='radio' id='require_no' className='inspected-check' name='require' value='no' onChange={handleChange} />
						<label htmlFor='require_no'>no</label>
					</div>
					<button className='btn btn-primary first-ok' onClick={() => showResult(true)}>OK</button>
					<button className='btn btn-primary' onClick={() => distroyModal(0)}>Cancel</button>
				</div>
			</div>
			{showModal === true && (
				<div className={`confirm-modal ${showModal === true ? 'show' : ''}`}>
					<div className='conmodal-content'>
						<div className='conmodal-header'>
							<button type="button" className="close" onClick={() => setShowModal(false)}>&times;</button>
							<h4>Confirm your file</h4>
						</div>
						<div className='conmodal-body'>
							<div className='preview'>
								{props.isImg === 0 && <iframe className='preview-iframe' src={url} />}
								{props.isImg === 1 && <FilePreviewer file={{ url }} />}
							</div>
							<div className='row'>
								<p className='col-md-4'>{date}.{othername !== '' ? othername : props.filename}</p>
								<div className='col-md-8 row'>
									<p className='col-sm-4'>author:{detail.author}</p>
									<p className='col-sm-4'>creation date: {detail.creation_date}</p>
									<div className='col-sm-4'></div>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-7 row'>
									<p className='col-sm-4'>affects:{detail.affects}</p>
									<p className='col-sm-8'>document keywords:{detail.document_keywords}</p>
								</div>
								<div className='col-md-5'></div>
							</div>
							<div>
								<p>description of the document: {detail.description}</p>
							</div>
							<div>
								<p>extended document information:{detail.extended}</p>
							</div>
							<div className='check-content'>
								{checkcon && checkcon.map((check, index) => (
									<p style={{ paddingLeft: "8px" }} key={`act-${index}`}>{check},</p>
								)
								)}
							</div>
							<div>
								<p>priority content from 1 (minimum priority) to 10 (maximum priority): {detail.priority_content}</p>
							</div>
							<div>
								<p>the document must be inspected by the audit department of the certification:{detail.inspected}</p>
							</div>
							<div>
								<p>requires urgent review(before 12hours):{detail.require}</p>
							</div>
						</div>
						<div className='conmodal-footer'>
							<button type="button" className="btn btn-primary btn-margin" onClick={() => setAnotherFile(true)}>OK</button>
							<button type="button" className="btn btn-primary btn-margin" onClick={() => setShowModal(false)}>Change description</button>
						</div>

					</div>
				</div>
			)}
			{anotherFile === true && (
				<div className={`confirm-modal ${anotherFile === true ? 'show' : ''}`}>
					<div className='another-content'>
						<div className='conmodal-header'>
							<button type="button" className="close" onClick={closeOtherFile}>&times;</button>
							<h4>Do you want to register more documents with the same descriptive data?</h4>
						</div>
						<div className='conmodal-body'>
							<div style={{ textAlign: 'center' }}>
								<p>Selected File List</p>
								<div>
									<p>{props.filename}</p>
									{name_list && name_list.map((name, index) => (
										<p key={index}>{name}</p>
									))}
								</div>
							</div>
							<div className='conmodal-footer'>
								{showUploadBtn === false && (
									<div style={{ display: 'flex' }}>
										<div>
											<label className="btn btn-primary btn-margin" htmlFor="Multifile" >
												select other file
												{props.category === 1 && (
													<input id="Multifile" type="file" name='files' className="upfile-input" accept="text/*, .pdf" onChange={uploadMulti} />
												)}
												{props.category === 2 && (
													<input id="Multifile" type="file" name='files' className="upfile-input" accept="image/*" onChange={uploadMulti} />
												)}
												{props.category === 3 && (
													<input id="Multifile" type="file" name='files' className="upfile-input" accept="audio/*" onChange={uploadMulti} />
												)}
												{props.category === 4 && (
													<input id="Multifile" type="file" name='files' className="upfile-input" accept="video/*" onChange={uploadMulti} />
												)}
											</label>
										</div>
										<button type="button" className="btn btn-primary btn-margin" onClick={uploadThis}>Upload Selected File</button>
										<button type="button" className="btn btn-primary btn-margin" onClick={closeOtherFile}>Cancel</button>
									</div>
								)}
								{props.progress > 0 && <ProgressBar now={props.progress} label={`${props.progress}%`} />}
							</div>
						</div>
					</div>
				</div>
			)}
			{rename == true && (
				<div className={`confirm-modal ${rename === true ? 'show' : ''}`}>
					<div className='another-content'>
						<div className='conmodal-header'>
							<h4>Please rename your file</h4>
							<button type="button" className="close" onClick={() => setRename(false)}>&times;</button>
							<input type='text' id='rename-input' placeholder='Filename' onChange={changeName}></input>
						</div>
						<div className='conmodal-body'>
							<div className='conmodal-footer'>
								<button type="button" className="btn btn-primary btn-margin" onClick={RenameFile}>OK</button>
								<button type="button" className="btn btn-primary btn-margin" onClick={() => setRename(false)}>No</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default FileDetail;
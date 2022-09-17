import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from "react-bootstrap"
import { useNavigate } from 'react-router';
import Usernavcert from './Usernavcert';
import { getProfile } from '../UserFunctions'
import FileDetail from './FileDetail';
import axios from 'axios';

const UploadDoc = () => {
	const [id, setId] = useState('');
	const [email, setEmail] = useState('');
	const [uploadstart, setUploadstart] = useState(-1);
	const [name, setName] = useState('');
	const [selectedfile, setSelectedfile] = useState('');
	const [filename, setFilename] = useState('');
	const [filedetailnum, setFiledetailnum] = useState(0);
	const navigate = useNavigate();
	const [resultname, setResultname] = useState('');
	const [isImg, setIsImg] = useState(0);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const token = localStorage.usertoken;
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
	}, []);

	const showChild = (val) => {
		setFiledetailnum(val);
	}

	const fileselect = (num) => {
		setFiledetailnum(num);
		setFilename('');
	}

	const selectText = (event) => {
		let selfile = document.querySelector("#inputTag").files[0];
		setSelectedfile(selfile);
		setFilename(selfile.name);
		setIsImg(0);
		selfile = 0;
	};

	const selectAudio = (event) => {
		let selfile = document.querySelector("#inputTag_audio").files[0];
		setSelectedfile(selfile);
		setFilename(selfile.name);
		setIsImg(0);
		selfile = 0;
	};

	const selectImage = (event) => {
		let selfile = document.querySelector("#inputTag_image").files[0];
		setSelectedfile(selfile);
		setFilename(selfile.name);
		setIsImg(1);
		selfile = 0;
	};

	const selectVideo = (event) => {
		let selfile = document.querySelector("#inputTag_video").files[0];
		setSelectedfile(selfile);
		if (selfile.name) {
			setFilename(selfile.name);
		}
		setIsImg(0);
		selfile = 0;
	};

	const uploadFile = async (filename, file) => {
		console.log(progress);
		const formData = new FormData();
		formData.append("file", file);
		formData.append("fileName", filename);
		try {
			const res = await axios.post('users/upload', formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
					onUploadProgress: data => {
						setProgress(Math.round((100 * data.loaded) / data.total));
						console.log(progress);
					},
				}
			)
			.then(() => {
				// alert("Upload success!");
			})
		} catch (ex) {
			console.log(ex);
		}
	};

	return (
		<div>
			<Usernavcert id="1" />
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
			<div className='select-file'>
				<div className='select-sen'>
					<p>select the documentation from your computer or your mobile phone</p>
				</div>
				<div>
					<label className="select-file-btn" htmlFor="inputTag" onClick={() => fileselect(1)}>
						select a text file
						<input id="inputTag" type="file" className="upfile-input" accept="text/*, .pdf" onChange={selectText} multiple />
					</label>
				</div>
				<img className='browser-icon first-brow-ico' src='browser.png'></img>
				<img className='doc-icon imag' src='image.png'></img>
				{(filedetailnum === 1 && filename !== '') && <FileDetail upload={uploadFile} showThis={showChild} filename={filename} file={selectedfile} isImg={isImg} userId={id} setProgress={setProgress} category={filedetailnum} progress={progress}/>}
				<div>
					<label className="select-file-btn" htmlFor="inputTag_image" onClick={() => fileselect(2)}>
						select a image file
						<input id="inputTag_image" type="file" className="upfile-input" accept="image/*" onChange={selectImage} />
					</label>
				</div>
				<img className='browser-icon second-brow-ico' src='browser.png'></img>
				<img className='doc-icon imag' src='image.png'></img>
				{(filedetailnum === 2 && filename !== '') && <FileDetail showThis={showChild} upload={uploadFile} filename={filename} file={selectedfile} isImg={isImg} userId={id} setProgress={setProgress} category={filedetailnum} progress={progress}/>}
				<div>
					<label className="select-file-btn" htmlFor="inputTag_audio" onClick={() => fileselect(3)}>
						select a audio file
						<input id="inputTag_audio" type="file" className="upfile-input" accept="audio/*" onChange={selectAudio} />
					</label>
				</div>
				<img className='browser-icon third-brow-ico' src='browser.png'></img>
				<img className='doc-icon audio' src='audio.png'></img>
				{(filedetailnum === 3 && filename !== '') && <FileDetail showThis={showChild} upload={uploadFile} filename={filename} file={selectedfile} isImg={isImg} userId={id} setProgress={setProgress} category={filedetailnum} progress={progress}/>}
				<div>
					<label className="select-file-btn" htmlFor="inputTag_video" onClick={() => fileselect(4)}>
						select a video file
						<input id="inputTag_video" type="file" className="upfile-input" accept="video/*" onChange={selectVideo} />
					</label>
				</div>
				<img className='browser-icon forth-brow-ico' src='browser.png'></img>
				<img className='doc-icon video' src='video.png'></img>
				{(filedetailnum === 4 && filename !== '') && <FileDetail showThis={showChild} upload={uploadFile} filename={filename} file={selectedfile} isImg={isImg} userId={id} setProgress={setProgress} category={filedetailnum} progress={progress} />}
			</div>
			<div className='create-file'>
				<div className='select-sen'>
					<p>create and upload new document	</p>
				</div>
				<div className='select-file-btn create-image'>
					<Link to='#' >create a new image</Link>
				</div>
				<img className='create-icon first' src='create.png'></img>
				<img className='doc-icon create-img' src='image.png'></img>
				{filedetailnum === 5 && <FileDetail />}
				<div className='select-file-btn'>
					<Link to='#' >create a new audio</Link>
				</div>
				<img className='create-icon second' src='create.png'></img>
				<img className='doc-icon create-audio' src='audio.png'></img>
				{filedetailnum === 6 && <FileDetail />}
				<div className='select-file-btn'>
					<Link to='#' >create a new video</Link>
				</div>
				<img className='create-icon third' src='create.png'></img>
				<img className='doc-icon create-video' src='video.png'></img>
				{filedetailnum === 7 && <FileDetail />}
			</div>
		</div>
	)
}

export default UploadDoc;
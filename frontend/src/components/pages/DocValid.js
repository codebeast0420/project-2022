import React from 'react';

const DocValid = (props) => {

	const exitThis = (val) => {
		props.exit(val);
	}
	return (
		<div className={`confirm-modal  compare ${props.valid == true ? 'show' : ''}`}>
			<div className='conmodal-content'>
				<div className='conmodal-header'>
					<button type="button" className="close" onClick={() => exitThis(false)}>&times;</button>
					<h4>{`Document name: ${props.docName}`}</h4>
				</div>
				<div className='conmodal-body valid'>
					<div className='row'>
						<p style={{ color: "black" }}>Current Document status: </p>
						{props.process(props.docprocess)}
					</div>
					<div className='cert-main-sen main-doc-top'>
						<p>No vaildation required</p>
					</div>
					<div className='row main-doc-top'>
						<a className='regi-opt' style={{ backgroundColor: "green" }} onClick={() => props.setProcess(2)} href="#">
							<p>option 1</p>
						</a>
						<div className='regi-des' style={{ backgroundColor: "green" }}>
							<p>certificate</p>
						</div>
					</div>
					<div className='cert-main-sen main-doc-top'>
						<p>Certified validation requires</p>
					</div>
					<div className='row main-doc-top'>
						<a className='regi-opt' style={{ backgroundColor: "yellow", color: "black" }} onClick={() => props.setProcess(1)} href="#">
							<p>option 2</p>
						</a>
						<a className='regi-des' style={{ backgroundColor: "yellow", color: "black" }}>
							<p>validation in progress</p>
						</a>
					</div>
					<div className='row main-doc-top'>
						<a className='regi-opt' style={{ backgroundColor: "red" }} onClick={() => props.setProcess(3)} href="#">
							<p>option 3</p>
						</a>
						<div className='regi-des' style={{ backgroundColor: "red" }}>
							<p>not correct, must be modified</p>
						</div>
					</div>
					<div className='row main-doc-top'>
						<a className='regi-opt' style={{ backgroundColor: "green" }} onClick={() => props.setProcess(4)} href="#">
							<p>option 4</p>
						</a>
						<div className='regi-des' style={{ backgroundColor: "green" }}>
							<p>correct, registered</p>
						</div>
					</div>
					<div className='valid-btns'>
						<button className='btn btn-primary main-doc-top valid-btn'  onClick={props.openFile}>Review</button>
						<button className='btn btn-primary main-doc-top'  onClick={props.sendMail}>Valid</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DocValid;
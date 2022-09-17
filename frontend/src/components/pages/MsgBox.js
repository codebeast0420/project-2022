import React from 'react';

const MsgBox = (props) => {

	return (
		<div className={`confirm-modal ${props.sendmsg == true ? 'show' : ''}`}>
			<div className='conmodal-content'>
				<div className='conmodal-header'>
					<button type="button" className="close" onClick={() => props.exit(false)}>&times;</button>
					<h4>Send Email</h4>
					<p>Send to:{props.email}</p>
					<p>Documet Name:</p>
				</div>
				<div className='conmodal-body msg-body'>
					<textarea type='textbox' className='msg-area'></textarea>
					<a className='btn btn-secondary main-top account-btn msg-btn' style={{ color: "black" }} href='#' onClick={props.sendEmail}>Send Mail</a>
				</div>
			</div>
		</div>
	)
}

export default MsgBox;
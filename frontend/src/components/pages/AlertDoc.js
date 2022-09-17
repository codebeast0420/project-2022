import React from 'react';
const AlertDoc = (props) => {
	return (
		<div className='view-data main-top'>
			<button type="button" className="close" onClick={props.exit}>&times;</button>
			{props.docs.length !== 1 && props.docs
				.filter((doc, index) => index > 0)
				.map((doc, index) => 
					(
						<div className='main-top nameresult' key={`doc-${index}`} style={{ textAlign: "center" }}>
							<p>{doc.name[0].name} has uploaded new documentation "{doc.docname}"!</p>
						</div>
					)
			)}
			{props.docs.length === 1 && (
				<div className='main-top nameresult' style={{ textAlign: "center" }}>
					<p>There is no new documentation</p>
				</div>
			)}
		</div>
	)
}

export default AlertDoc;
import React from 'react';

const AdminRegiDoc = (props) => {


	const exitThis = (val) => {
		props.exit(val);
	}

	return (
		<div className='view-data main-top'>
						<button type="button" className="close" onClick={() => exitThis(-1)}>&times;</button>
						{props.docData.length !== 0 && props.docData.map((doc, index) => {
							return (
								<div className='row main-top'>
									<div className='each-doc col-md-6 regi-ptag'>
										<p>Document name:{doc.docname}</p>
									</div>
									<div className='col-md-6 regi-opt-btn row'>
										<a className='btn btn-secondary account-btn' href='#' onClick={() => { props.compare(index) }}>compare with normative</a>
										<a className='btn btn-secondary account-btn' href='#' onClick={() => { props.valid(index) }}>review and validation</a>
									</div>
								</div>
							)
						}
						)}
						{props.docData.length === 0 && (
							<div className='main-top nameresult' style={{ textAlign: "center" }}>
								<p>There is no documents</p>
							</div>
						)}
					</div>
	)
}

export default AdminRegiDoc;
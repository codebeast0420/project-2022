import React from 'react';

const CompareDoc = (props) => {


	const exitThis = (val) => {
		props.exit(val);
	}

	return (
		<div className={`confirm-modal  compare ${props.compare == true ? 'show' : ''}`}>
			<div className='conmodal-content'>
				<div className='conmodal-header'>
					<button type="button" className="close" onClick={() => exitThis(false)}>&times;</button>
					<h4>Compare</h4>
				</div>
				<div className='compare-part'>
					<div className='compare-doc'>
						<iframe className='preview-iframe' style={{ height: "500px" }} src={`http://localhost:5000/files/${props.docname}`} />
					</div>
					<div className='compare-nor'>

					</div>
				</div>
			</div>
		</div>
	)
}

export default CompareDoc;
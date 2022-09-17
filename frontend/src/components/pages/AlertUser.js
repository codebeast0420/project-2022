import React from 'react';

const AlertUser = (props) => {
	return (
		<div className='view-data main-top'>
			<button type="button" className="close" onClick={props.exit}>&times;</button>
			{props.user.length !== 0 && props.user.map((use, index) => {
				return (
					<div className='main-top nameresult' style={{ textAlign: "center" }}>
						<p>{use} has registered!</p>
					</div>
				)
			}
			)}
			{props.user.length === 0 && (
				<div className='main-top nameresult' style={{ textAlign: "center" }}>
					<p>There is no user</p>
				</div>
			)}
		</div>
	)
}

export default AlertUser;
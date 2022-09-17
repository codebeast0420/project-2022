import React from 'react';

const UserList = (props) => {
	return (
		<div className='view-data main-top'>
			<button type="button" className="close" onClick={() => props.exit(false)}>&times;</button>
			{props.userData.length !== 0 && props.userData.map((user, index) => {
				return (
					<a className='main-top nameresult' href='#' onClick={() => props.select(index)}>
						<p style={{ paddingLeft: "10px" }}>id: {user.id}</p>
						<p style={{ paddingLeft: "10px" }}>name: {user.name}</p>
						<p style={{ paddingLeft: "10px" }}>email: {user.email}</p>
						<p style={{ paddingLeft: "10px" }}>actividad: {user.actividad}</p>
						<p style={{ paddingLeft: "10px" }}>country: {user.country}</p>
						<p style={{ paddingLeft: "10px" }}>city: {user.city}</p>
						<p style={{ paddingLeft: "10px" }}>telephone: {user.telephone}</p>
						<p style={{ paddingLeft: "10px" }}>street: {user.street}</p>
						<p style={{ paddingLeft: "10px" }}>buildingnumber: {user.buildingnumber}</p>
						<p style={{ paddingLeft: "10px" }}>zip: {user.zip}</p>
						<p style={{ paddingLeft: "10px" }}>billingname: {user.billingname}</p>
						<p style={{ paddingLeft: "10px" }}>billingaddress: {user.billingaddress}</p>
						<p style={{ paddingLeft: "10px" }}>vat: {user.vat}</p>
						<p style={{ paddingLeft: "10px" }}>otherTax: {user.othertax}</p>
						<p style={{ paddingLeft: "10px" }}>Enter Date: {user.createdAt}</p>
					</a>
				)
			}
			)}
			{props.userData.length === 0 && (
				<div className='main-top nameresult' style={{ textAlign: "center" }}>
					<p>There is no user</p>
				</div>
			)}
		</div>
	)
}

export default UserList;
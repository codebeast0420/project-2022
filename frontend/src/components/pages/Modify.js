import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import Countries from 'react-select-country';
import axios from 'axios';

const Modify = (props) => {
	const [activities, setActivities] = useState([
		{ id: '', activity: '', createdAt: '' }
	]);
	// useEffect(() => {
	// 	setPhone(props.modData.telephone);
	// }, [])
	useEffect(() => {
		getActivity();
		console.log("data", props.modData)
	}, []);

	function getActivity() {
		axios
			.get('users/acitivity')
			.then(response => {
				setActivities(response.data);
			})
			.catch((err) => {
				console.log(err);
			})
	}

	return (
		<div className={`confirm-modal ${props.modifyIndex !== -1 ? 'show' : ''}`}>
			<div className={`${props.userData[props.modifyIndex].category === 0 ? 'conmodal-content-mod' : 'conmodal-content-mod-com'}`}>
				<div className='conmodal-header'>
					<button type="button" className="close" onClick={() => props.exit(-1)}>&times;</button>
					<h4>Change the data which you want</h4>
				</div>
				<div className='conmodal-body modify'>
					<div className='row'>
						<div className='col-md-6'>
							<p className='modify-label'>Name:</p>
						</div>
						<div className=' col-md-6'>
							<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='name' value={props.modData.name} onChange={props.modifyChange}></input>
						</div>
					</div>
					<div className='row'>
						<div className=' col-md-6'>
							<p className='modify-label'>Surname:</p>
						</div>
						<div className=' col-md-6'>
							<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='surname' value={props.modData.surname} onChange={props.modifyChange}></input>
						</div>
					</div>
					<div className='row'>
						<div className=' col-md-6'>
							<p className='modify-label'>Second name:</p>
						</div>
						<div className=' col-md-6'>
							<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='second_surname' value={props.modData.second_surname} onChange={props.modifyChange}></input>
						</div>
					</div>
					<div className='row'>
						<div className=' col-md-6'>
							<p className='modify-label mod-actividad'>Actividad:</p>
						</div>
						<div className=' col-md-6'>
							<select className='form-control' name="actividad" value={props.modData.actividad} onChange={props.modifyChange}>
								<option>{props.userData[props.modifyIndex].actividad}</option>
								{activities && activities.map((act, index) => (
									<option key={`act-${index}`}>{act.activity}</option>
								)
								)}
							</select>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-6'>
							<p className='modify-label'>Email:</p>
						</div>
						<div className=' col-md-6'>
							<input type='text' className={`form-control modify-input ${props.error === 1 && 'is-danger'}`} style={{ width: "auto" }} name='email' value={props.modData.email} onChange={props.modifyChange}></input>
							{props.error === 1 && <p>Email Address is invalid!</p>}
						</div>
					</div>
					<div className='row'>
						<div className=' col-md-6'>
							<p className='modify-label mod-phone'>Telephone:</p>
						</div>
						<div className=' col-md-6'>
							<PhoneInput
								country={1}
								name="telephone"
								value={props.telephone || props.modData.telephone.toString()}
								onChange={props.changePhone}
							/>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-6'>
							<p className='modify-label mod-country'>Country:</p>
						</div>
						<div className='col-md-6'>
							<Countries className='form-control' id="countryName" name="country" selected={props.userData[props.modifyIndex].country} value={props.modData.country} onChange={props.modifyChange} />
						</div>
					</div>
					<div className='row'>
						<div className=' col-md-6'>
							<p className='modify-label'>City:</p>
						</div>
						<div className=' col-md-6'>
							<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='city' value={props.modData.city} onChange={props.modifyChange}></input>
						</div>
					</div>
					<div className='row'>
						<div className=' col-md-6'>
							<p className='modify-label'>Street:</p>
						</div>
						<div className=' col-md-6'>
							<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='street' value={props.modData.street} onChange={props.modifyChange}></input>
						</div>
					</div>
					<div className='row'>
						<div className=' col-md-6'>
							<p className='modify-label'>Building Address:</p>
						</div>
						<div className=' col-md-6'>
							<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='buildingnumber' value={props.modData.buildingnumber} onChange={props.modifyChange}></input>
						</div>
					</div>
					<div className='row'>
						<div className=' col-md-6'>
							<p className='modify-label'>Zip:</p>
						</div>
						<div className=' col-md-6'>
							<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='zip' value={props.modData.zip} onChange={props.modifyChange}></input>
						</div>
					</div>
					<div className='row'>
						<div className=' col-md-6'>
							<p className='modify-label'>Billing Name:</p>
						</div>
						<div className=' col-md-6'>
							<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='billingname' value={props.modData.billingname} onChange={props.modifyChange}></input>
						</div>
					</div>
					<div className='row'>
						<div className=' col-md-6'>
							<p className='modify-label'>Billing Address:</p>
						</div>
						<div className=' col-md-6'>
							<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='billingaddress' value={props.modData.billingaddress} onChange={props.modifyChange}></input>
						</div>
					</div>
					<div className='row'>
						<div className=' col-md-6'>
							<p className='modify-label'>VAT:</p>
						</div>
						<div className=' col-md-6'>
							<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='vat' value={props.modData.vat} onChange={props.modifyChange}></input>
						</div>
					</div>
					<div className='row'>
						<div className=' col-md-6'>
							<p className='modify-label'>Other Tax:</p>
						</div>
						<div className=' col-md-6'>
							<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='othertax' value={props.modData.othertax} onChange={props.modifyChange}></input>
						</div>
					</div>
					{props.userData[props.modifyIndex].category == 1 && (
						<div>
							<div className='row'>
								<div className=' col-md-6'>
									<p className='modify-label'>Web site:</p>
								</div>
								<div className=' col-md-6'>
									<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='website' value={props.modData.website} onChange={props.modifyChange}></input>
								</div>
							</div>
							<div className='row'>
								<div className=' col-md-6'>
									<p className='modify-label'>Employees:</p>
								</div>
								<div className=' col-md-6'>
									<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='employees' value={props.modData.employees} onChange={props.modifyChange}></input>
								</div>
							</div>
							<div className='row'>
								<div className=' col-md-6'>
									<p className='modify-label'>Products:</p>
								</div>
								<div className=' col-md-6'>
									<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='products' value={props.modData.products} onChange={props.modifyChange}></input>
								</div>
							</div>
							<div className='row'>
								<div className=' col-md-6'>
									<p className='modify-label'>Subsidary:</p>
								</div>
								<div className=' col-md-6'>
									<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='subsidary' value={props.modData.subsidary} onChange={props.modifyChange}></input>
								</div>
							</div>
							<div className='row'>
								<div className=' col-md-6'>
									<p className='modify-label'>Position:</p>
								</div>
								<div className=' col-md-6'>
									<input type='text' className='form-control modify-input' style={{ width: "auto" }} name='position' value={props.modData.position} onChange={props.modifyChange}></input>
								</div>
							</div>
						</div>
					)}
					<a className='main-top nameresult' href='#' onClick={props.ChangeUser}>Modify</a>
				</div>
			</div>
		</div>
	)
}

export default Modify;
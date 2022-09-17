import React, { useState, useEffect } from "react";
import { getActivities, registerCom } from "../UserFunctions";
import Countries from 'react-select-country';
import validate from "./companyValid";
import useForm from "./useForm";
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const CompanyRegister = () => {
	const [vat, setVat] = useState(0);
	const [othertax, setOthertax] = useState(0);
	const [phone, setPhone] = useState(0);
	const {
		values,
		errors,
		handleSubmit,
		handleChange
	} = useForm(login, validate);
	useEffect(() => {
		getActivity();
		values.name = localStorage.getItem("username");
		values.email = localStorage.getItem("email");
	}, []);
	useEffect(() => {
		values.phone = phone;
	}, [phone]);
	const [activities, setActivities] = useState([
		{ id: '', activity: '', createdAt: '' }
	]);
	const navigate = useNavigate();
	function login() {
		Companyuser(values);
	}
	function getActivity() {
		getActivities()
			.then((res) => {
				setActivities(res);
			})
	}
	const Companyuser = (val) => {
		const newUser = {
			_name: val.name,
			_email: val.email,
			_password: localStorage.getItem("user"),
			_surname: val.surname,
			_second_surname: val.second_surname,
			_position: val.position,
			_actividad: val.actividad,
			_telephone: phone,
			_companyName: val.companyName,
			_companysite: val.companySite,
			_employeeNum: val.employeeNum,
			_products: val.products,
			_subsidiary: val.subsidiary,
			_country: val.country,
			_city: val.city,
			_street: val.street,
			_buildingnum: val.buildingnumber,
			_zip: val.zip,
			_billingname: val.billingname,
			_billingadd: val.billingaddress,
			_vat: val.attach,
			_otherTax: val.otherconcept,
			_bankaccount: val.bankaccount

		}
		registerCom(newUser).then((res) => {
			alert("You registered success");
			navigate('/signin');
		});
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-5 mt-5 mx-auto">
					<form>
						<h1 className="h3 mb-3 font-weight-normal">Register</h1>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.name && 'is-danger'}`}
								name="name"
								placeholder="Name"
								required
								value={values.name || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<p className="help is-danger">{errors.name}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.surname && 'is-danger'}`}
								name="surname"
								placeholder="Surame"
								required
								value={values.surname || ''}
								onChange={handleChange}
							/>
							{errors.surname && (
								<p className="help is-danger">{errors.surname}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.second_surname && 'is-danger'}`}
								name="second_surname"
								placeholder="Second surname"
								required
								value={values.second_surname || ''}
								onChange={handleChange}
							/>
							{errors.second_surname && (
								<p className="help is-danger">{errors.second_surname}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.position && 'is-danger'}`}
								name="position"
								placeholder="Position in company"
								required
								value={values.position || ''}
								onChange={handleChange}
							/>
							{errors.position && (
								<p className="help is-danger">{errors.position}</p>
							)}
						</div>
						<div className="form-group">
							<select placeholder="Acti" className={`form-control ${errors.actividad && 'is-danger'}`} name="actividad" values={values.actividad || ''} onChange={handleChange}>
								<option>Select Activity</option>
								{activities && activities.map((act, index) => (
									<option key={`act-${index}`}>{act.activity}</option>
								)
								)}
							</select>
							{errors.actividad && (
								<p className="help is-danger">{errors.actividad}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="email"
								className={`form-control ${errors.email && 'is-danger'}`}
								name="email"
								placeholder="Email"
								required
								value={values.email || ''}
								onChange={handleChange}
							/>
							{errors.email && (
								<p className="help is-danger">{errors.email}</p>
							)}
						</div>
						<div className={`form-group ${errors.phone && 'is-danger'}`}>
							<PhoneInput
								country={'us'}
								name="phone"
								value={phone}
								onChange={setPhone}
							/>
							{errors.phone && (
								<p className="help is-danger">{errors.phone}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.companyName && 'is-danger'}`}
								name="companyName"
								placeholder="Company Name"
								required
								value={values.companyName || ''}
								onChange={handleChange}
							/>
							{errors.companyName && (
								<p className="help is-danger">{errors.companyName}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.companySite && 'is-danger'}`}
								name="companySite"
								placeholder="Company Web site"
								required
								value={values.companySite || ''}
								onChange={handleChange}
							/>
							{errors.companySite && (
								<p className="help is-danger">{errors.companySite}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.employeeNum && 'is-danger'}`}
								name="employeeNum"
								placeholder="Approximate Number of Employees"
								onKeyPress={(event) => {
									if (!/[0-9]/.test(event.key)) {
										event.preventDefault();
									}
								}}
								required
								value={values.employeeNum || ''}
								onChange={handleChange}
							/>
							{errors.employeeNum && (
								<p className="help is-danger">{errors.employeeNum}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.products && 'is-danger'}`}
								name="products"
								placeholder="Products"
								required
								value={values.products || ''}
								onChange={handleChange}
							/>
							{errors.products && (
								<p className="help is-danger">{errors.products}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.subsidiary && 'is-danger'}`}
								name="subsidiary"
								placeholder="Subsidiary companies"
								required
								value={values.subsidiary || ''}
								onChange={handleChange}
							/>
							{errors.subsidiary && (
								<p className="help is-danger">{errors.subsidiary}</p>
							)}
						</div>
						<div className="form-group">
							<Countries empty=" -- Select country --" className={`form-control ${errors.country && 'is-danger'}`} id="countryName" name="country" value={values.country} onChange={handleChange} />
							{errors.country && (
								<p className="help is-danger">{errors.country}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.city && 'is-danger'}`}
								name="city"
								placeholder="City"
								required
								value={values.city || ''}
								onChange={handleChange}
							/>
							{errors.city && (
								<p className="help is-danger">{errors.city}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.street && 'is-danger'}`}
								name="street"
								placeholder="Street/Avenue/"
								required
								value={values.street || ''}
								onChange={handleChange}
							/>
							{errors.street && (
								<p className="help is-danger">{errors.street}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.buildingnumber && 'is-danger'}`}
								name="buildingnumber"
								placeholder="BuildingNumber/Floor/Door"
								value={values.buildingnumber || ''}
								onChange={handleChange}
							/>
							{errors.buildingnumber && (
								<p className="help is-danger">{errors.buildingnumber}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.zip && 'is-danger'}`}
								name="zip"
								placeholder="Zip"
								onKeyPress={(event) => {
									if (!/[0-9]/.test(event.key)) {
										event.preventDefault();
									}
								}}
								required
								value={values.zip || ''}
								onChange={handleChange}
							/>
							{errors.zip && (
								<p className="help is-danger">{errors.zip}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.billingname && 'is-danger'}`}
								name="billingname"
								placeholder="BillingName"
								required
								value={values.billingname || ''}
								onChange={handleChange}
							/>
							{errors.billingname && (
								<p className="help is-danger">{errors.billingname}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.billingaddress && 'is-danger'}`}
								name="billingaddress"
								placeholder="BillingAddress"
								required
								value={values.billingaddress || ''}
								onChange={handleChange}
							/>
							{errors.billingaddress && (
								<p className="help is-danger">{errors.billingaddress}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.taxIden && 'is-danger'}`}
								name="taxIden"
								placeholder="CIF/Tax Identification"
								required
								value={values.taxIden || ''}
								onChange={handleChange}
							/>
							{errors.taxIden && (
								<p className="help is-danger">{errors.taxIden}</p>
							)}
						</div>
						<div className="form-group">
							<input
								type="checkbox"
								name="vat"
								value={vat}
								onChange={() => setVat(vat + 1)}
							/> Does the invoice have to include VAT
						</div>
						{vat % 2 === 1 &&
							<div className="form-group">
								<input
									className="form-control"
									type="text"
									name="attach"
									placeholder="Attach"
									value={values.attach || ''}
									onChange={handleChange} />
							</div>
						}
						<div className="form-group">
							<input
								type="checkbox"
								name="othertax"
								value={othertax}
								onChange={() => setOthertax(othertax + 1)}
							/> Does the invoice have to include other tax
						</div>
						{othertax % 2 === 1 &&
							<div className="form-group otherTax">
								<input
									className="form-control half-form"
									type="text"
									name="otherconcept"
									placeholder="Concept"
									value={values.otherconcept || ''}
									onChange={handleChange} />
								<input
									className="form-control half-form"
									type="text"
									name="otherval"
									placeholder="Value"
									value={values.otherval || ''}
									onChange={handleChange} />
							</div>
						}
						{/* <div className="form-group">
							<input
								type="text"
								className={`form-control ${errors.bankaccount && 'is-danger'}`}
								name="bankaccount"
								placeholder="BankAccount"
								required
								value={values.bankaccount || ''}
								onChange={handleChange}
							/>
							{errors.bankaccount && (
								<p className="help is-danger">{errors.bankaccount}</p>
							)}
						</div> */}
						<button
							type="submit"
							onClick={handleSubmit}
							className="btn btn-lg btn-primary btn-block"
						>
							Register!
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default CompanyRegister;

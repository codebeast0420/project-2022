import React, { useState } from "react";
import validate from "./LoginFormValidationRules";
import useForm from "../useForm";
import { useNavigate, useSearchParams } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const [robot, setRobot] = useState('');
  const onChange = (value) => {
    setRobot(value);
  }
  const {
    values,
    errors,
    handleSubmit,
    handleChange
  } = useForm(next, validate);
  const navigate = useNavigate();
  function next() {
    if (robot !== '') {
      if (values.registerCategory === 'person')
        navigate('/register-detail');
      if (values.registerCategory === 'company')
        navigate('/register-company');
    }
    else alert("You are ROBOT!");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mt-5 mx-auto">
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
            <div className="form-group">
              <input
                type="password"
                className={`form-control ${errors.password && 'is-danger'}`}
                name="password"
                placeholder="Password"
                required
                value={values.password || ''}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="help is-danger">{errors.password}</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className={`form-control ${errors.confirm_password && 'is-danger'}`}
                name="confirm_password"
                placeholder="Confirm Password"
                required
                value={values.confirm_password || ''}
                onChange={handleChange}
              />
              {errors.confirm_password && (
                <p className="help is-danger">{errors.confirm_password}</p>
              )}
            </div>
            <ReCAPTCHA className="form-group" style={{ marginLeft: "10px" }}
              sitekey={`6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`}
              onChange={onChange}
            />
            <div className="registerCategory form-group" onChange={handleChange}>
              <div className="form-group">
                <input type="radio" id="register_company" value="company" name="registerCategory" /> Register as Company
              </div>
              <div className="form-group">
                <input type="radio" id="register_person" value="person" name="registerCategory" /> Register as Person
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-lg btn-primary btn-block"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

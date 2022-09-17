import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { login } from '../UserFunctions';
import { useNavigate } from 'react-router';
import validate from './SigninForm';
import useForm from './useForm';
import { getProfile } from '../UserFunctions';


const Signin = () => {
  const [dberrors, setDBErrors] = useState("");
  const [robot, setRobot] = useState('');


  const {
    values,
    errors,
    handleSubmit,
    handleChange
  } = useForm(handleFormSubmit, validate);

  const navigate = useNavigate();

  const onChange = (value) => {
    setRobot(value);
  }

  function handleFormSubmit() {
    const user = {
      email: values.email,
      password: values.password
    }

    login(user).then(res => {
      if (res) {
        console.log(res)
        if (!res.error) {
          if (robot !== '') {
            getProfile(localStorage.usertoken)
              .then((result) => {
                if (result.role == 1)
                  navigate('/admin-users')
                else
                  navigate(`/use-account`)
              })
          }

          else alert("You are ROBOT!")
        }
        else {
          setDBErrors(res.error);
        }
      }
    })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-4 mt-5 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.email && 'is-danger'}`}
              name="email"
              style={{ width: '100%', marginLeft: '0px' }}
              placeholder="Enter email"
              value={values.email || ''}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="help is-danger">{errors.email}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password && 'is-danger'}`}
              name="password"
              placeholder="Password"
              value={values.password || ''}
              style={{ width: '100%', marginLeft: '0px' }}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="help is-danger">{errors.password}</p>
            )}
          </div>
          <ReCAPTCHA
            sitekey={`6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`}
            onChange={onChange}
            style={{ margin: "auto" }}
          />
          {dberrors && <div className='alert alert-dark'>Incorrect Email or password</div>}
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-lg btn-primary btn-block"
            style={{ margin: "10px 0px" }}
          >
            Sign in
          </button>
          <Link className='signUp' to='/register' style={{ color: "blue", marginRight: "8%" }}>Create account </Link>
          <Link className='signUp' to='/forgot' style={{ color: "red" }}>Forgot Password?</Link>
        </div>
      </div>
    </div>
  )
}

export default Signin

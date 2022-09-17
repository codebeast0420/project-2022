import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getProfile, updatePassword } from '../UserFunctions'
import { useNavigate } from 'react-router';
import Usernav from './Usernav';
import axios from 'axios'

const UseAccount = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [myDoc, setMyDoc] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.usertoken;
    if (token) {
      getProfile(token).then(res => {
        if (res) {
          console.log(res);
          if (res.status === 'success') {
            console.log("token data", res)
            setName(res.surname);
            setId(res.id);
            setEmail(res.email);
          } else {
            localStorage.removeItem('usertoken')
            navigate(`/signin`)
          }
        }
      });

    } else {
      localStorage.removeItem('usertoken')
      navigate(`/signin`)
    }
  }, [])

  const certifiedDoc = () => {
    axios
      .post('users/read-doc', { sendId: id })
      .then((result) => {
        console.log("result",result.data);
        if (result.data.length !== 0)
          navigate('/user-doc');
        else
          alert("There is no data!");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const onSubmit = e => {
    e.preventDefault()
    const token = localStorage.usertoken;
    const updatePasswordRequest = {
      token: token,
      email: email,
      password: password,
    }

    updatePassword(updatePasswordRequest).then((res) => {
      setMessage(res.message);
    }).catch(err => {
      setMessage(err.message);
    })
  }


  return (
    <div>
      <Usernav />
      <div className='user-account'>
        <div className='function-area'>
          <Link to="/" className='btn account-btn contract-btn'>Contracts</Link>
          <img src='user.png' className='contract-icon'></img>
        </div>
        <div className='function-area'>
          <Link to="/" className='btn account-btn invoice-btn'>Invoice and Payment detail</Link>
        </div>
        <div className='function-area'>
          <Link to="/" className='btn account-btn contact-btn'>My Contact Data</Link>
          <div className='contact-data'>
            <p>Client ID: {id}</p>
            <p>User Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        </div>
        <div className='function-area'>
          <Link to="#" className='btn account-btn privacy-btn'>Data Protection and privacy</Link>
        </div>
        <div className='function-area'>
          <Link to="#" className='btn account-btn contribution-btn'> My Contribution improvement</Link>
          <img src='contribution.png' className='contribution-icon'></img>
        </div>
        <div className='function-area'>
          <Link to="#" className='btn account-btn certified-btn' onClick={certifiedDoc}>My Certified Documentation</Link>
          <img src='certified.png' className='certified-icon'></img>
        </div>
        <div className='function-area'>
          <Link to="#" className='btn account-btn security-btn'>Account access and security</Link>
        </div>
        <div className='function-area'>
          <Link to="#" className='btn account-btn profile-btn'>Profile Information</Link>
        </div>
        <div className='function-area'>
          <Link to="#" className='btn account-btn person-btn'>My Personal Care Center</Link>
          <img src='person.png' className='person-icon'></img>
        </div>
        <div className='function-area'>
          <Link to="/upload-term" className='btn account-btn upload-btn'>Enter Documentation</Link>
          <img src='upload.png' className='upload-icon'></img>
        </div>
        {/* <UploadFiles /> */}
      </div>
    </div>
  )
}

export default UseAccount

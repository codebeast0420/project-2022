import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/nav.css';
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import Signin from "./components/Signin/Signin";
import Register from "./components/register/Register";
import Land from "./components/pages/Land";
import UploadFiles from './components/FileUpload/FileUpload';
import UseAccount from './components/pages/UseAccount';
import Forgot from './components/pages/Forgot';
import RegisterDetail from './components/register/RegisterDetail';
import CompanyRegister from './components/register/CompanyRegister';
import UploadTerm from './components/pages/UploadTerm';
import UploadDoc from './components/pages/UploadDoc';
import Userdoc from './components/pages/Userdoc';
import AdminUser from './components/pages/AdminUser';

function App () {
	return (
			<div className="App" >
			<Router>
				<Routes>
					<Route exact path='/' element={<Land />} />
					<Route exact path='/signin' element={<Signin />} />
					<Route exact path='/register' element={<Register />} />
					<Route exact path='/file-upload' element={<UploadFiles />} />
					<Route exact path='/use-account' element={<UseAccount />} />
					<Route exact path='/forgot' element={<Forgot />} />
					<Route exact path='/register-detail' element={<RegisterDetail />} />
					<Route exact path='register-company' element={<CompanyRegister />} />
					<Route exact path='/upload-term'  element={<UploadTerm />} />
					<Route exact path='/upload-doc' element={<UploadDoc />} />
					<Route exact path='/user-doc' element={<Userdoc />} />
					<Route exact path='/admin-users' element={<AdminUser />} />
				</Routes>
			</Router>
		</div>
	);

}
export default App;
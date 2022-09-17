import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      name: newUser._name,
      email:newUser._email,
      password:newUser._password,
      surname: newUser._surname,
			second_surname:newUser._second_surname,
			actividad: newUser._actividad,
			telephone: newUser._telephone,
			country: newUser._country,
			city: newUser._city,
			street: newUser._street,
			buildingnum: newUser._buildingnum,
			zip: newUser._zip,
			billingname: newUser._billingname,
			billingadd: newUser._billingadd,
			vat: newUser._vat,
			otherTax: newUser._otherTax,
      bankaccount:newUser._bankaccount
    })
    .then(response => {
      // if(response.data.error !== '')
      // alert(response.data.error);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const registerCom = newUser => {
  return axios
    .post('users/register-com', {
      name: newUser._name,
      email:newUser._email,
      password:newUser._password,
      surname: newUser._surname,
			second_surname:newUser._second_surname,
			position:newUser._position,
			actividad: newUser._actividad,
			telephone: newUser._telephone,
      companyName: newUser._companyName,
			companysite: newUser._companysite,
			employeeNum: newUser._employeeNum,
			products: newUser._products,
			subsidiary: newUser._subsidiary,
			country: newUser._country,
			city: newUser._city,
			street: newUser._street,
			buildingnumber: newUser._buildingnum,
			zip: newUser._zip,
			billingname: newUser._billingname,
			billingadd: newUser._billingadd,
			vat: newUser._vat,
			otherTax: newUser._otherTax,
      bankaccount:newUser._bankaccount
    })
    .then(response => {
      // if(response.data.error !== '')
    })
    .catch((err) => {
      console.log(err);
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data.token);
      return response.data;
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = token => {
  return axios
    .get('users/profile', {
      headers: { Authorization: token }
    })
    .then(response => {
      response.data.status = 'success';
      return response.data
    })
    .catch(err => {
      console.dir(err)
      return {'error':err.message,'status':'failed'};
    })
}

export const updatePassword = updatePasswordRequest => {
  return axios
    .put(
      `users/password/`,
      {
        email:updatePasswordRequest.email,
        password: updatePasswordRequest.password,
        new_password: updatePasswordRequest.new_password
      },
      {
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': updatePasswordRequest.token 
        }
      }
    )
    .then(function(response) {
        return response.data;
    }).catch(err=>{
      console.dir("err",err);
      return err.message;
    })
}

export const getActivities = () => {
  return axios
  .get('users/acitivity')
  .then(response => {
    return response.data
  })
  .catch((err) => {
    console.log(err);
  })
}
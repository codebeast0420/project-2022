export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.surname) {
    errors.surname = 'Surname is required';
  }
  if (!values.second_surname) {
    errors.second_surname = 'Second Surname is required';
  }
  if (!values.city) {
    errors.city = 'City is required';
  }
  if (!values.street) {
    errors.street = 'Street is required';
  }
  if (!values.zip) {
    errors.zip = 'Zip is required';
  }
  if (!values.buildingnumber) {
    errors.buildingnumber = 'Building number is required';
  }
  if (!values.billingname) {
    errors.billingname = 'Billing name is required';
  }
  if (!values.billingaddress) {
    errors.billingaddress = 'Billing address is required';
  }
  if (!values.taxIden) {
    errors.taxIden = 'Tax is required';
  }
  // if (!values.bankaccount) {
  //   errors.bankaccount = 'Bank account is required';
  // }
  if (!values.actividad) {
    errors.actividad = 'Activity is required';
  }
  if (!values.phone) {
    errors.phone = 'Phone is required';
  }
  if (!values.country) {
    errors.country = 'Country is required';
  }
  return errors;
};

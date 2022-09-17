export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 10) {
    errors.password = 'Password must be 10 or more characters';
  } else if (!/[!@#$%^&*]/.test(values.password)) {
    errors.password = 'Password must containt character, special character and number!';
  }
  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.confirm_password) {
    errors.confirm_password = 'Confirm Password';
  }
  if (values.confirm_password && values.confirm_password !== values.password) {
    errors.confirm_password = 'Confirm Incorrect!'
  }
  return errors;
};

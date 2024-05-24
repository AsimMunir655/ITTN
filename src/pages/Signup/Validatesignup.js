export default function validatesignup(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.username) {
    errors.username = "user name is required";
  } else if (values.username.length < 3) {
    errors.username = "username needs to be more than 3 characters";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be more than 8 characters";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "confirm password is required";
  }
  if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "confirm password is not match with password";
  }

  return errors;
}

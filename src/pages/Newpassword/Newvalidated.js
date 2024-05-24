export default function Newvalidated(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.code) {
    errors.code = "enter code";
  }
  if (!values.newPassword) {
    errors.newPassword = "enter new password";
  } else if (values.newPassword.length < 3) {
    errors.newPassword = "Password needs to be more than 3 characters";
  }
  return errors;
}

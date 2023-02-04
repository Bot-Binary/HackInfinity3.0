import toast from 'react-hot-toast'
import POSTsignup from './Paths'

/** validate register form */
export async function registerValidation(values) {
  //   console.log(values);
  const errors ={};
   emailVerify(errors, values);
  passwordVerify(errors, values);

  console.log(errors);
  
  if (Object.keys(errors).length === 0) {
    // await toast.success("Registration Successfull");
    return {};
  } else {
    toast.error("Error in registration");
    return errors;
  }
}

function passwordVerify(errors={}, values) {
  /* eslint-disable no-useless-escape */
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  // const errors={};

  if (!values.password) {
    errors.password = toast.error("Password Required...!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password...!");
  } else if (values.password.length < 8) {
    errors.password = toast.error("Password must be more than 8 characters long");
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must have special character");
  }

  if (values.password !== values.cpassword) {
    errors.exist = toast.error("Password not match...!");
  }
  return errors;
}

/** validate confirm password */
/** validate email */
function emailVerify(errors = {}, values) {
  // const errors = {};
  if (!values.email) {
    errors.email = toast.errors("Email Required...!");
  } else if (values.email.includes(" ")) {
    errors.email = toast.errors("Wrong Email...!")
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = toast.errors("Invalid email address...!")
  }
  return errors;
}


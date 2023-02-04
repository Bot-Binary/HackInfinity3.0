import { Link } from 'react-router-dom'
import {POSTsignup} from '../utilities/axios/Paths'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Sign_up() {


  const [formData, setFormData] = useState(
    {
      email: "",
      name: "",
      phone: "",
      password: "",
      cpassword: "",
      usertype: ""
    }
  )

  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }


  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formData);
    const errors = POSTsignup(formData);
    // toast('Here is your toast.');
  }

  return (
<>
    <Toaster />

    <div className="container">
      <div className="title">Registration</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Email</span>
              <input type="email" placeholder="Enter your email" name="email" onChange={handleChange} value={formData.email} required />
            </div>
            <div className="input-box">

              <span className="details">Full Name</span>
              <input type="text" placeholder="Enter your name" name="name" onChange={handleChange} value={formData.name} required />
            </div>


            <div className="input-box">
              <span className="details" name="phone" onChange={handleChange}>Phone Number</span>
              <input type="text" placeholder="Enter your number" name="phone" onChange={handleChange} value={formData.phone} required />
            </div>
            <div className="input-box">
              <span className="details">DOB</span>
              <input type="date" required />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type="password" placeholder="Enter your password"name="password" onChange={handleChange} value={formData.password} required />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input type="password" placeholder="Confirm your password" name="cpassword" onChange={handleChange} value={formData.cpassword} required />
            </div>


          </div>
          <div className="gender-details" onChange={handleChange} value={formData.type}>
            <input type="radio" name="usertype" value="parent" id="dot-1" />
            <input type="radio" name="usertype" value="child" id="dot-2" />
            <span className="gender-title">User Type</span>

            <div className="category d-flex justify-content-start">
              <label htmlFor="dot-1" className="me-4">
                <span className="dot one"></span>
                <span className="gender">Parent</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="gender">Child</span>
              </label>
            </div>


          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
        <span>Already have an account ?<Link to='/login'> Click here</Link></span>

      </div>
    </div>
    </>
  )
}
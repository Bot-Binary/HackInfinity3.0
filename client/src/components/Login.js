import { Link } from 'react-router-dom'
import { POSTlogin } from '../utilities/axios/Paths'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import "../App.css"

export default function Sign_up() {

  const navigate = useNavigate();

  var auth = false;
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
      usertype: ""
    }
  )


  const [parentprofileData, setParentProfileData] = useState({})
  const [childprofileData, setChildProfileData] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const Loggedin = await POSTlogin(formData)
    // console.log(Loggedin);


    if (Loggedin) {
      if (formData.usertype === "parent") {
        localStorage.setItem('Profile', JSON.stringify(Loggedin));
        navigate('/Parent');
      }
      if (formData.usertype === "child") {
        // setChildProfileData({...Loggedin});
        // console.log({...Loggedin});
        localStorage.setItem('Profile', JSON.stringify(Loggedin));
        navigate('/Child');
      }
    }
  
    else {
    // console.log("Hhhh");
    console.log("THIS IS ERROR FROM LOGIN.js at 47");
  }
  // console.log(Loggedin);
}

return (

  <>
    <Toaster />

    <div className='bodyx'>
      <div className="containerx">
        <div className="title">Login</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details flex-y">
              <div className="input-box" style={{ "width": "calc(100% - 20px)" }}>
                <span className="details" >Email</span>
                <input type="email" placeholder="Enter your email" name="email" onChange={handleChange} value={formData.email} required />
              </div>

              <div className="input-box" style={{ "width": "calc(100% - 20px)" }}>
                <span className="details">Password</span>
                <input type="password" placeholder="Enter your password" name="password" onChange={handleChange} value={formData.password} required />
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

            {/* </div> */}
            <div className="button">
              <input type="submit" value="Login" />
            </div>
          </form>
          <span>Don't  have an account ?<Link to='/signup'> Click here</Link></span>

        </div>
      </div>
    </div>
  </>
)
}


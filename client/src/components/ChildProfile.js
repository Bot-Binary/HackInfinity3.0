import React, { useRef, useState } from "react";
import ChildNav from "./ChildNav";
import Sidenavbar from "./Sidenavbar";
const ChildProfile = () => {
  const [profile, setProfile] = useState({ email: "", phoneno: "", name: "" });
  const ref = useRef(null);
  const refClose = useRef(null);
  const handleClick = () => {

  }
  const editProfile = () => {
    ref.current.click();
    setProfile({
      email: "Bhavya@gmail.com",
      phoneno: "820055454",
      name: "Bhavya",

    });
  };
  function onChange3(event) {
    const { name, value } = event.target
    setProfile(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }
  return (
    <>
      <div>
        <div className="wrapper">

          <ChildNav/>
          <button
            type="button"
            ref={ref}
            className="btn btn-primary d-none"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          ></button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Edit Note
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form className="my-3">
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Email
                      </label>
                      <input
                        value={profile.email}
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        onChange={onChange3}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        value={profile.phoneno}
                        type="text"
                        className="form-control"
                        id="phoneno"
                        name="phoneno"
                        onChange={onChange3}

                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="tag" className="form-label">
                        Tag
                      </label>
                      <input
                        value={profile.name}
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={onChange3}
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    ref={refClose}
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={handleClick}
                    className="btn btn-primary"
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section className="vh-120 container " style={{ "background-color": "#f4f5f7" }}>

            <div className="container  py-5 h-100">
              <h6 className="text-center" style={{ "color": "#242a38", "font-size": "2.3rem", "margin-bottom": "-3rem" }}>Profile</h6>

              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-6 mb-4 mb-lg-0">
                  <div className="card mb-3" style={{ "border-radius": ".5rem" }}>
                    <div className="row g-0">
                      <div className="col-md-4 gradient-custom text-center text-white" style={{ "border-top-left-radius": "border-top-left-radius" }}>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="Avatar" className="img-fluid my-5" style={{ "width": "80px" }} />
                        <h5 style={{ "color": "black" }}>Marie Horwitz</h5>
                        <button className="btn btn-outline-dark mb-5" onClick={editProfile} >Edit Profile</button>
                        <i className="far fa-edit mb-5"></i>
                      </div>
                      <div className="col-md-8 d-flex">
                        <div className="card-body p-4">
                          <div className="d-flex flex-column pt-2 mt-5">
                            <div className="col-6 mb-3">
                              <h6>Email</h6>
                              <p className="text-muted">info@example.com</p>
                            </div>
                            <div className="col-6 mb-3">
                              <h6>Phone</h6>
                              <p className="text-muted">123 456 789</p>
                            </div>
                          </div>


                          <div className="d-flex justify-content-start">
                            <a href="/"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                            <a href="/"><i className="fab fa-twitter fa-lg me-3"></i></a>
                            <a href="/"><i className="fab fa-instagram fa-lg"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div></>
  );
};

export default ChildProfile;
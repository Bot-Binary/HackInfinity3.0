import React, { useState, useRef } from "react";
import LatestOrders from "./LatestOrders";
import Sidenavbar from "./Sidenavbar";
import Card from "./Card";
import "../App";

const Dashboard = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const ref = useRef(null);
  // const refClose = useRef(null);
  const addChild = () => {
    ref.current.click();
  };


  // const onChange2 = (e) => {
  //   setstate({ ...state, [e.target.email]: e.target.password });
  // };


  function onChange2(event) {
    const { name, value } = event.target
    setCredential(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }






  return (
    <div>
      <div className="wrapper">
        <Sidenavbar />
        
        <div id="content">
          <div className="container pt-3">
            <button
              type="button"
              ref={ref}
              class="btn btn-primary d-none"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            ></button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Add a child
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Child Email address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={onChange2}
                          value={credential.email}
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                          Child Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          onChange={onChange2}
                          value={credential.password}
                        />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    {/* <button
                      type="button"
                      class="btn btn-secondary btn-dark"
                      data-bs-dismiss="modal"
                      ref={refClose}
                    >
                      Close
                    </button> */}
                    <button type="button" class="btn btn-primary btn-dark">
                      Confirm Connection
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Card addChild={addChild} />
          </div>
          <div className="container pt-3">
            <LatestOrders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

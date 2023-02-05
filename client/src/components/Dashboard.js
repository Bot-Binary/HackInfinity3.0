import React, { useState, useRef, useEffect } from "react";
import LatestOrders from "./LatestOrders";
import Sidenavbar from "./Sidenavbar";
import Card from "./Card";
import ChildUsers from "./ChildUsers";
import ChildData from "./ChildData";
import "../App";
import {POSTAddchild} from "../utilities/axios/Paths"
import toast, { Toaster } from 'react-hot-toast';


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

  const [profile, setProfile] = useState({});
  const [history, setHistory] = useState({});
  let localprofile = {};
  let localhistory = [];

  useEffect(() => {
    localprofile = JSON.parse(localStorage.getItem('Profile'));
    if (localprofile) setProfile(localprofile);
    console.log(localprofile)

    // if (localhistory) setHistory(localhistory);
    // console.log(history);
  }, []);


  // const onChange2 = (e) => {
  //   setstate({ ...state, [e.target.email]: e.target.password });
  // };






  const [amount,setAmount] = useState({
    pay_amount: "",
    password: "",
});

function onChange1(event) {
    const { name, value } = event.target
    setAmount(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }
  function submitPayment() {
        // POSTAddmoney(amount)
        console.log(amount)
  }

  const ref3 = useRef(null);
  // const refClose = useRef(null);





  function onChange2(event) {
    const { name, value } = event.target
    setCredential(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const handleAddchild = async () => {
    const data = {
      sid: JSON.parse(localStorage.getItem('Profile')).email,
      jid: credential.email,
      jpassword: credential.password
    }
    
    console.log(localprofile.email);

    await POSTAddchild(data);
  }

  return (
<>
    <Toaster />
    <div>
      <div className="wrapper">
        <Sidenavbar />

        <div id="content">
          <div className="container pt-3">




          {/* modal */}
          <button
                type="button"
                ref={ref3}
                className="btn btn-primary d-none"
                data-bs-toggle="modal3"
                data-bs-target="#exampleModal333"
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
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Payment
                        </h1>
                        <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label
                            htmlFor="exampleInputAmount1"
                            className="form-label"
                            >
                            Amount to pay
                            </label>
                            <input
                            type="number"
                            className="form-control"
                            id="exampleInputAmount1"
                            name="amount"
                            onChange={onChange1}
                            value={amount.pay_amount}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                            >
                            Your account Password
                            </label>
                            <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            onChange={onChange1}
                            value={amount.password}
                            />
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                        type="button"
                        className="btn btn-secondary btn-dark"
                        data-bs-dismiss="modal"
                        >
                        Cancel
                        </button>
                        <button type="button" className="btn btn-primary btn-dark" onClick={submitPayment}>
                        Confirm payment
                        </button>
                    </div>
                    </div>
                </div>
                </div>




            {/* Modal taken from botstrap */}
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
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Add a child
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label hmtlFor="exampleInputEmail1" className="form-label">
                          Child Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          name="email"
                          aria-describedby="emailHelp"
                          onChange={onChange2}
                          value={credential.email}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                          Child Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          name="password"
                          onChange={onChange2}
                          value={credential.password}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    {/* <button
                      type="button"
                      className="btn btn-secondary btn-dark"
                      data-bs-dismiss="modal"
                      ref={refClose}
                    >
                      Close
                    </button> */}
                    <button type="button" className="btn btn-primary btn-dark" onClick={handleAddchild}>
                      Confirm Connection
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Card addChild={addChild} />
          </div>
          <div className="container pt-3">
            <ChildUsers childs={profile} ref3={ref3}/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;

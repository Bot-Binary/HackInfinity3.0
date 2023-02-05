import React, { useRef, useState } from 'react'
import {POSTAddmoney, POSTNewcategory, POSTDropcategory} from "../utilities/axios/Paths"
import {Link} from "react-router-dom";

const ChildData = ({ profile, ref3 }) => {

 


    // const [amount,setAmount] = useState({
    //     pay_amount: "",
    //     password: "",
    // });

    // function onChange1(event) {
    //     const { name, value } = event.target
    //     setAmount(prevFormData => {
    //       return {
    //         ...prevFormData,
    //         [name]: value
    //       }
    //     })
    //   }
    //   function submitPayment() {
    //         // POSTAddmoney(amount)
    //         console.log(amount)
    //   }




    return (

        <div>
            
                {/* modal taken from bootstrap */}

                {/* modal
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
                </div> */}
                
                <div>
                {profile.children ? profile.children.map((e) => (
                    <div className="container mb-2 text-center">
                        <div className="row">
                            <div className="col">{e.name}</div>
                            <div className="col">₹ {e.balance}</div>
                            <Link className="col btn btn-primary" to={"/modal"} >Add Money</Link>
                        </div>
                    </div>
                )) : "No child Transaction history"}
                </div>
        </div>

    );
}

            export default ChildData;

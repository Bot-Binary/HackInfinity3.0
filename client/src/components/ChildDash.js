import React from "react";
import { useState, useRef } from "react";
// import img1 from "../components/Images/1.png";
import ChildNav from "./ChildNav";
import QrScanner from "qr-scanner";


const ChildDash = () => {
  // const [shopName, setShopName] = useState("");
  
  const [selectedFile, setSelectedFile] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);
  const ref = useRef(null);
  const refClose = useRef(null);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsFilePicked(true);
  };

  function handleSubmission() {
    QrScanner.scanImage(selectedFile)
      .then((result) => console.log(result))
      .catch((error) => console.log(error || "No QR code found."));
      ref.current.click();
  }

  const [amount, setAmount] = useState({
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


  return (
    <div>
      <div className="wrapper xname">
        <ChildNav />

        <div className="m-5  widthx">
          {/* cards */}
          <div className="d-flex flex-wrap justify-content-center">
            <div className="card mx-4 my-1 " style={{ width: "15rem" }}>
              <div className="card-body">
                {/* <div className="imgx">
                  <img src={img1} alt="" />
                </div> */}
                <h5 className="card-title">Your Balance</h5>
                <p className="card-text" style={{ "font-size": "1.3rem", "color": "black" }}>
                  ₹ 1,00,000
                </p>
              </div>
            </div>

            <div className="card mx-4 my-1" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Scan to Pay</h5>
                <div>
                  <input
                    className="mb-2"
                    type="file"
                    id="myFile"
                    name="filename"
                    onChange={changeHandler}
                  />
                  <button
                    className="mt-2 btn btn-secondary"
                    type="submit"
                    onClick={handleSubmission}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>



          {/* Modal */}
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
                        name="pay_amount"
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
                    ref={refClose}
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary btn-dark">
                    Confirm payment{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>










          {/* (Your)children history with shops */}
          <div className="m-5 ">
            <div className="card mt-5">
              <div
                className="my-3 mx-4 fw-bold"
                style={{ color: "#242a38", "font-size": "1.7rem" }}
              >
                Your Transaction History
              </div>
              <div className="container text-center">
                <div className=" card-header mb-2">
                  <div className="row">
                    <div className="col">Shop</div>
                    <div className="col">Payment</div>
                    <div className="col">Date</div>
                  </div>
                </div>
              </div>

              <div className="container mb-2 text-center">
                <div className="row">
                  <div className="col">Shubham Medical</div>
                  <div className="col">₹ 18</div>
                  <div className="col">5-02-1023</div>
                </div>
              </div>
            </div>
          </div>

          {/* eligible shop list */}
          <div>
            <div className="card m-5 d-flex p-2">
              <div
                className="my-3 mx-4 fw-bold"
                style={{ color: "#242a38", "font-size": "1.7rem" }}
              >
                Eligible shops
              </div>
              <div className="container text-center">
                <div className=" card-header mb-2">
                  <div className="row">
                    <div className="col">Shop</div>
                    <div className="col">Category</div>
                  </div>
                </div>
              </div>

              <div className="container mb-2 text-center">
                <div className="row">
                  <div className="col">General Stationary</div>
                  <div className="col">Stationary</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildDash;

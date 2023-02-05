import React from "react";
import { useState, useRef, useEffect, useNavigate} from "react";
// import img1 from "../components/Images/1.png";
import ChildNav from "./ChildNav";
import QrScanner from "qr-scanner";
import Transaction from "./Transaction"
import { GETPaymenthistory, POSTPayment, GETJunior } from "../utilities/axios/Paths"
import EligibleShops from "./EligibleShops";
import toast, { Toaster } from 'react-hot-toast';


const ChildDash = () => {
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


  const [amount, setAmount] = useState({
    juniorid: "",
    to: "",
    category: "",
    amount: "",
    password: "",
  });

  useEffect(() => {
    localhistory = GETPaymenthistory(localprofile.email)
      .then((localhistory) => {
        setHistory(localhistory);
        console.log(history);
      });
  }, []);


  // used QRScanner library to add qr code scanning functionality
  
  const [selectedFile, setSelectedFile] = useState();
  const ref = useRef(null);
  const refClose = useRef(null);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsFilePicked(true);
  };

  async function handleSubmission() {
     await QrScanner.scanImage(selectedFile)
      .then((result) => {
        result = JSON.parse(result)
         setAmount(prevFormData => {
          return {
            ...prevFormData,
            juniorid: profile.email,
            to: result.id,
            category: result.category,
          }
        })
        // console.log(amount)
      })
      .catch((error) => console.log(error || "No QR code found."));
    ref.current.click();

    // const profile = JSON.parse(localStorage.getItem('Profile'));
    // console.log(profile);
  }

  function onChange1(event) {
    const { name, value } = event.target
    setAmount(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  // const updateNote = (currentNote) => {
  //   ref.current.click();
  //   setNote({
  //     id: currentNote._id,
  //     etitle: currentNote.title,
  //     edescription: currentNote.description,
  //     etag: currentNote.tag,
  //   });
  // }

  const  submitPayment = async () => {

    // setAmount(prevamount => {
    //   return {
    //     ...prevamount,
    //     juniorid: profile.email,
    //   }
    // })
    
    // const Loggedin = {
    //   ...localprofile,
    //   amount : ,
    // }
    await POSTPayment(amount)
    const Loggedin = await GETJunior(amount.juniorid);
    localStorage.setItem('Profile', JSON.stringify(Loggedin));
    window.location.reload(false);

    refClose.current.click();
  }







return (
  <>

  {/* used react-hot-toast library to diaplay toasts */}
  <Toaster />
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
              <p className="card-text my-3" style={{ "fontSize": "1.3rem", "color": "black" }}>
                ₹ {profile.balance}
              </p>
            </div>
          </div>

          <div className="card mx-4 my-1" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Scan to Pay</h5>
              <div>
                <input
                  className="mb-2 "
                  type="file"
                  id="myFile"
                  name="filename"
                  onChange={changeHandler}
                  required
                />
                {selectedFile ? <button
                  className="mt-2 btn btn-outline-dark"
                  type="submit"
                  onClick={handleSubmission}
                >
                  Submit
                </button> : <button
                  className="mt-2 btn btn-outline-dark disabled"
                  type="submit"
                  onClick={handleSubmission}
                >
                  Submit
                </button>}
              </div>
            </div>
          </div>
        </div>



        Modal
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










        {/* (Your)children history with shops */}
        <div className="m-5 ">
          <div className="card mt-5">
            <div
              className="my-3 mx-4 fw-bold"
              style={{ color: "#242a38", "fontSize": "1.7rem" }}
            >
              Your Transaction History
            </div>
            <div className="container text-center">
              <div className=" card-header mb-2">
                <div className="row">
                  {/* <div className="col">Shop</div> */}
                  <div className="col">Shop</div>
                  <div className="col">Payment</div>
                  <div className="col">Date</div>
                </div>
              </div>
            </div>


            <Transaction history={history} />


          </div>
          {/* <div className="container mb-2 text-center">
                <div className="row">
                  <div className="col">Shubham Medical</div>
                  <div className="col">₹ 18</div>
                  <div className="col">5-02-1023</div>
                </div>
              </div> */}
        </div>

        {/* eligible shop list */}
        <div>
          <div className="card m-5 d-flex p-2">
            <div
              className="my-3 mx-4 fw-bold"
              style={{ color: "#242a38", "fontSize": "1.7rem" }}
            >
              Eligible shops
            </div>

            <div className="container text-center">
              <div className=" card-header mb-2">
                <div className="row">
                  <div className="col">Shop</div>
                </div>
              </div>
            </div>

            {/* <div className="container mb-2 text-center">
              <div className="row">
                <div className="col">General Stationary</div>
                <div className="col">Stationary</div>
              </div>
            </div> */}
            <EligibleShops shops={profile.allowed} />
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
);
};

export default ChildDash;


// {
//   "_id": "63de306e8f50f43426c2273f",
//   "name": "googleee",
//   "email": "sanghanijay36@gmail.com",
//   "phone": "9924590036",
//   "payid": "9924590036@bot",
//   "password": "$2a$08$GqkQ.g5rRdbqdOU50NZtMuN8FKGwaGfgpR1PA/gep.XSWY8L1xBJC",
//   "balance": 0,
//   "allowed": [],
//   "__v": 0,
//   "pid": "sanghanijay36@gmail.com"
// }
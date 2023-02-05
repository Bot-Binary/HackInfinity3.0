import Sidenavbar from "./Sidenavbar";
import {Link } from "react-router-dom";

export default function ChildDetail() {
  return (

    <div className="wrapper">
        <Sidenavbar />

    <div className="m-5 container">

    {/* cards */}
      <div className="d-flex flex-wrap justify-content-center">

        <div className="card mx-4 my-1" style={{ width: "16rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#848586" }}>
              this/that child Balance
            </h5>
            <p
              className="card-text"
              style={{ "fontSize": "1.3rem", color: "black" }}
            >
              ₹ 1,00,000
            </p>
          </div>
        </div>


        <div className="card mx-4 my-1" style={{ width: "16rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#848586" }}>
              Total Money remaining to this/that child wallet
            </h5>
            <p
              className="card-text"
              style={{ "fontSize": "1.3rem", color: "black" }}
            >
              ₹ 25,000
            </p>
          </div>
        </div>

      </div>



    
    {/* select category for spending of this/that child  */}

    <div className="m-5">
    <label htmlFor="select_cat">Select category for spending of this/that child &nbsp;</label>
    <select name="category" id="select_cat" multiple>
        <option value="Grocery">Grocery</option>
        <option value="Stationary">Stationary</option>
        <option value="Parlour">Parlour</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Medical">Medical</option>
    </select>
    </div>




    {/*  this/that child history with shops */}
    <div className="m-5 ">
            <div className="card mt-5">
              <div className="my-3 mx-4 fw-bold" style={{ "color": "#242a38", "fontSize": "1.7rem" }}>This/that child Transaction History</div>
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

          <div className="d-flex justify-content-center">
          <Link className="btn btn-outline-secondary" to={'/childusers'}>Back</Link>
          </div>
    </div>

    </div>
  );
}

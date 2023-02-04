import Sidenavbar from "./Sidenavbar";

export default function ChildUsers() {
  return (
    <>
    <div className="wrapper">
        <Sidenavbar />
      

    <div className="card m-5 p-3" style={{"width": "100%"}}>
      <div className="my-3 mx-4 fw-bold text-center" style={{"color":"#242a38","font-size":"1.7rem"}}>Children users</div>
      <div className="container text-center">
        <div className=" card-header mb-2">
          <div className="row">
            <div className="col">Children Name</div>
            <div className="col">Total Money Given</div>
            <div className="col">Total Money Spend</div>
            <div className="col"></div>
          </div>
        </div>
      </div>

      <div className="container mb-2 text-center">
        <div className="row">
          <div className="col">Weekend</div>
          <div className="col">₹ 25,000</div>
          <div className="col">₹ 10,000</div>
          <div className="col btn btn-primary"><a href="/">'ChildDetail' of this/that child</a></div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

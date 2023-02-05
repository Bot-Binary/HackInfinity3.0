import Sidenavbar from "./Sidenavbar";
import ChildData from "./ChildData";
import { useState, useEffect } from "react";
export default function ChildUsers({childs, ref3}) {

  // const [profile, setProfile] = useState({});

  // let localprofile = {};
  // const {childrens, setChildrens} = useState([]);

  // useEffect( () => {
  //   localprofile =  JSON.parse(localStorage.getItem('Profile'));
  //   if (localprofile) setProfile(localprofile);
  //   console.log(localprofile.children)
  //   setChildrens(localprofile.children)

  //   // if (localhistory) setHistory(localhistory);
  //   // console.log(history);
  // }, []);

  return (
    <>
      <div className="wrapper">
        <div className="card m-5 p-3" style={{ "width": "100%" }}>
          {/* <button onClick={()=>console.log(localprofile.children)}>dfdf<button/> */}
          <div className="my-3 mx-4 fw-bold text-center" style={{ "color": "#242a38", "fontSize": "1.7rem" }}>Children users</div>
          <div className="container text-center">
            <div className=" card-header mb-2">
              <div className="row">
                <div className="col">Children Name</div>
                <div className="col">Balance</div>
                <div className="col"></div>
              </div>
            </div>
          </div>
          <ChildData profile={childs} ref3={ref3}/>
        </div>
      </div>
    </>
  );
}

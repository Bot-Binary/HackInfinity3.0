import React from "react";
import {Link} from "react-router-dom"

const Sidenavbar = () => {
  return (
    <nav id="sidebar">
    <div className="sidebar-header sidex">
      <h3>HackInfinity</h3>
    </div>

    <ul className="list-unstyled components">
      <li className="">
        <Link to="/Parent" data-toggle="collapse">
          Home
        </Link>
        <ul className="collapse list-unstyled" id="homeSubmenu">
          <li>
            <Link to="/">Home 1</Link>
          </li>
        </ul>
      </li>
      
      {/* <li>
        <a to="/">Contact</a>
        <Link to="/contact">Contact</Link>
      </li> */}
      <li>
        {/* <a to="/">Edit Profile</a> */}
        <Link to="/Profile">Profile</Link>
      </li>
      <li>
        {/* <a to="/">Logout</a> */}
        <Link to="/login" onClick={async () => await localStorage.clear()}>Logout</Link>
      </li>
    </ul>
  </nav>
  );
};

export default Sidenavbar;

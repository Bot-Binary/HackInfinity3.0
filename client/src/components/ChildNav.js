import React from "react";
import {Link} from "react-router-dom";
const ChildNav = () => {
  return (
    <nav id="sidebar">
    <div className="sidebar-header">
      <h3>HackInfinity</h3>
    </div>

    <ul className="list-unstyled components">
      <li >
        <Link to="/Child" data-toggle="collapse">
          Home
        </Link>
      </li>
      {/* <li>
        <Link to="/">Contact</a>
        <Link to="/contact">Contact</Link>
      </li> */}
      <li>
        {/* <Link to="/">Edit Profile</a> */}
        <Link to="/ChildProfile"> Profile</Link>
      </li>
      <li>
        {/* <Link to="/">Logout</a> */}
        <Link to="/Login" onClick={async ()=> await localStorage.clear()}>Logout</Link>
      </li>
    </ul>
  </nav>
  );
};

export default ChildNav;

import React from "react";

const Sidenavbar = () => {
  return (
    <nav id="sidebar">
    <div className="sidebar-header sidex">
      <h3>Bootstrap Sidebar</h3>
    </div>

    <ul className="list-unstyled components">
      <li className="active">
        <a href="#homeSubmenu" data-toggle="collapse">
          Home
        </a>
        <ul className="collapse list-unstyled" id="homeSubmenu">
          <li>
            <a href="/">Home 1</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/childusers">Child Users</a>
      </li>
      <li>
        {/* <a href="/">Contact</a> */}
        <a href="/contact">Contact</a>
      </li>
      <li>
        {/* <a href="/">Edit Profile</a> */}
        <a href="/edit_profile">Edit Profile</a>
      </li>
      <li>
        {/* <a href="/">Logout</a> */}
        <a href="/logout">Logout</a>
      </li>
    </ul>
  </nav>
  );
};

export default Sidenavbar;

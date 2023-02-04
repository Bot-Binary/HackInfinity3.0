import React from "react";
import ChildUsers from "./ChildUsers";
// import SideNavbar from './Sidenavbar'
const ChildHome = () => {
    return (
        <div>
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
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
                            <a href="/children">Child Users</a>
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



                <div id="content">
                    <div className="container pt-3">
                        <ChildUsers/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChildHome;

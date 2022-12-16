import React from "react";
import { Link,NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">React User</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about">about</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">contact</NavLink>
                        </li>    
                    </ul>
                </div>
                <button className="btn btn-outline-dark test-light" ><NavLink className="nav-link"exact to="/user/add">Add User</NavLink></button>
            </div>
        </nav>
        </div>
    );
};

export default NavBar;



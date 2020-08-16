import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>

            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto p-0">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid p-0">
                                <NavLink className="navbar-brand" to="/">RoundTree</NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                                        </li>
                                        {/* <li classNameName="nav-item">
                                            <NavLink className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        <li classNameName="nav-item">
                                        <NavLink className="nav-link" to="/about">About</NavLink>
                                        </li> */}
                                        <li classNameName="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contac Us</NavLink>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
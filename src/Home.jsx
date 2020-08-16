import React from 'react';
import web from "../src/images/firstsection.svg"
import { NavLink } from 'react-router-dom';
 
const Home = () => {
  return(
    <>
       <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto p-0">
                        <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>Welcome to Round Tree</h1>
                            <h3 className="my-3">We are the pool of Techies, who belives in quality work along with cutting edge technology.</h3>
                            <NavLink to="/contact" className="cstmbtn btn-grad mt-4">
                                Get in Touch
                            </NavLink>
                        </div>
                        <div className="col-lg-6 pt-5 pt-lg-0 order-1 order-lg-2 header-img">
                            <img src={web} className="img-fluid animated"/>        
                        </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    </>

  );
};

export default Home;

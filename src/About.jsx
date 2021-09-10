import React from "react";
import web from "../src/images/A.gif";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 
                d-flex  align-items-center justify-content-center flex-column">
                    <h1> Welcome to About Page of
                    <strong className="brand-name"> K12</strong></h1>
                    <br/>
                    <h2>We calculate the total number of hours the employee worked.</h2>
                    <br/>
                    <div className="mt-3">
                        <NavLink to="/contact" className="btn-get-started ">
                            Contact Us Now
                        </NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={web} className="img-fluid animated" alt="About img"/>
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

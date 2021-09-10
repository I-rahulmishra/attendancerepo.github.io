import React from "react";
import web from "../src/images/A.gif";

const Contact = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div
                  className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 
                d-flex  align-items-center justify-content-center flex-column"
                >
                  <h1>Contact me at 6366386070</h1>
                  <br />
                  <h2>for more information</h2>
                  <br />
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

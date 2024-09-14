import React, { useState, useEffect, useRef } from 'react';

function FilterDetails() {

  return (
    <>
    {/* header page */}
      <section className="about-section">
        <div className="container perfect2 py-3">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h4 className="text-dark">Lorem ipsum dolor sit amet.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore.
              </p>
              <p>
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur
              </p>
            </div>
            <div className="col-lg-5 ms-auto">
              <img
                src="images/application fill illustration.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

 
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h4>Popular Colleges</h4>
          </div>
          {[...Array(9)].map((_, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card-7">
                <div className="black">
                  <div className="row p-3">
                    <div className="col-2">
                      <div className="rounding"></div>
                    </div>
                    <div className="col-10">
                      <h5 className="text-white f-18">
                        Parul University, <br />
                        Vadodara
                      </h5>
                      <div className="grid-auto mt-4">
                        <h6 className="text-white">
                          <i className="fa-solid fa-money-bill me-1"></i>500 INR
                        </h6>
                        <a href="" className="btn-11">
                          411 Courses
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="blue-btn w-100 mt-4">Apply Now</button>
              </div>
            </div>
          ))}
          <div className="col-12 text-center mt-5">
            <a href="" className="blue-btn f-12">
              Load All Colleges <i className="fa-solid fa-angle-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="section-caf d4 pt-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <h6 className="fw-bold">
                The Common Application Form (CAF) is a unique interface through
                which a student can apply to numerous colleges using one window.
              </h6>
            </div>
            <div className="row">
              <div className="col-lg-6 mt-5 text-center">
                <div className="mixing">
                  <a href="">
                    <img
                      src="images/play-button.png"
                      className="play-button"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-5 mt-5 ms-auto">
                <img src="images/wow-img.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h4>
              <span className="underline">How it</span> works?
            </h4>
          </div>
          <div className="row text-center align-items-center">
            {[
              "Search & Shortlist College",
              "Search & Shortlist College",
              "Search & Shortlist College",
              "Search & Shortlist College",
            ].map((text, index) => (
              <div className="col-lg-3 col-sm-6 mt-lg-5 mt-3" key={index}>
                <img
                  src={`images/${index + 1}.png`}
                  className="img-fluid"
                  alt=""
                />
                <p className="f-12 mt-4">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-5"></div>
    </>
  );
}

export default FilterDetails;

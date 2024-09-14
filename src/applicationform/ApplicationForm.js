

import React from 'react'
import FilterDetails from '../about_us/FilterDetails'
import AboutTrendingCourse from '../about_us/AboutTrendingCourse'
import CollegeDetails from './CollegeDetails'
function ApplicationForm() {

    const AddmissionProcess = [
        {
            ImagePath: require("../images/search.png"),
            processName: "Search & Shortlist College"
        },
        {
            ImagePath: require("../images/fill_form1.png"),
            processName: "Search & Shortlist College"
        },
        {
            ImagePath: require("../images/make_payment.png"),
            processName: "Search & Shortlist College"
        },
        {
            ImagePath: require("../images/get_admission.png"),
            processName: "Search & Shortlist College"
        },

    ]
    return (
        <>
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
                                src={require("../images/application fill illustration.png")}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* filter college and other details */}
            <FilterDetails />

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

            {/* The Common Application Form section */}
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
                                            src={require("../images/play-button.png")}
                                            className="play-button"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 mt-5 ms-auto">
                                <img src={require("../images/wow-img.png")}
                                    className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* how it works section or application form  */}
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h4>
                            <span className="underline">How it</span> works?
                        </h4>
                    </div>

                    <div className="row text-center align-items-center">
                        {AddmissionProcess.map((data, index) => (
                            <div className="col-lg-3 col-sm-6 mt-lg-5 mt-3" key={index}>
                                <img
                                    src={data.ImagePath}
                                    className="img-fluid"
                                    alt=""
                                />
                                <p className="f-12 mt-4">{data.processName}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>


            {/* Why you should choose CAF section */}
            <div class="bg-f7">
                <div class="container py-5 mt-5">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h6>Why you should choose <span class="fw-bold f-18">CAF</span></h6>
                        </div>
                        <div class="col-lg-4 col-md-6 text-center mt-3 mt-lg-5">
                            <div class="rounding2"></div>
                            <h6>Lorem, ipsum dolor.</h6>
                            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                        <div class="col-lg-4 col-md-6 text-center mt-3 mt-lg-5">
                            <div class="rounding2"></div>
                            <h6>Lorem, ipsum dolor.</h6>
                            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                        <div class="col-lg-4 col-md-6 text-center mt-3 mt-lg-5">
                            <div class="rounding2"></div>
                            <h6>Lorem, ipsum dolor.</h6>
                            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                </div>
            </div>

            <AboutTrendingCourse />
            <CollegeDetails />

        </>

    )
}

export default ApplicationForm
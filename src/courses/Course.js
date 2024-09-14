

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faShare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function Course() {

  const [rating, setRating] = useState(4.6);
  const totalStars = 5;
  return (
    <>


      <div className="banner-section2">
        <div className="banner-section-content pt-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-6">
                <h6>Course / Engineering / B. Tech</h6>
              </div>
              <div className="col-lg-4 col-6 ms-auto">
                <h6 className="float-end">
                  <FontAwesomeIcon icon={faShare} className="me-2" />
                  Share Page
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="banner-section4">
        <div className="container perfect1 faq-banner">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <h3>B. Tech (Bachelor of Technology)</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here,
              </p>
            </div>
            <div className="col-lg-2 ms-auto">
              <a href="" className="transparent-btn3">
                Free Counselling
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-news">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-2">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-overview-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#newstab-1"
                    type="button"
                    role="tab"
                    aria-controls="newstab-1"
                    aria-selected="true"
                  >
                    Overview
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-syllabus-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#newstab-2"
                    type="button"
                    role="tab"
                    aria-controls="newstab-2"
                    aria-selected="false"
                  >
                    Syllabus
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-jobs-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#newstab-3"
                    type="button"
                    role="tab"
                    aria-controls="newstab-3"
                    aria-selected="false"
                  >
                    Jobs
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-salary-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#newstab-4"
                    type="button"
                    role="tab"
                    aria-controls="newstab-4"
                    aria-selected="false"
                  >
                    Salary
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-placement-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#newstab-5"
                    type="button"
                    role="tab"
                    aria-controls="newstab-5"
                    aria-selected="false"
                  >
                    Placement
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-colleges-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#newstab-6"
                    type="button"
                    role="tab"
                    aria-controls="newstab-6"
                    aria-selected="false"
                  >
                    Popular Colleges
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="card-3 p-3">
              <h5>B. Tech course overview</h5>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id es Sed ut perspiciatis unde omnis iste
                natus error sit{" "}
                <a href="" className="a">
                  Read More
                </a>
              </p>
              <h5>Content List</h5>
              <ul className="listing2">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-3 p-3">
              <h6>Other Related Courses</h6>
              <span className="time">Mon 22 Apr 2023 08:05am</span>
              <span className="small d-block">Lorem ipsum dolor sit</span>
              <p className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <hr />
              <span className="time">Mon 22 Apr 2023 08:05am</span>
              <span className="small d-block">Lorem ipsum dolor sit</span>
              <p className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <hr />
              <span className="time">Mon 22 Apr 2023 08:05am</span>
              <span className="small d-block">Lorem ipsum dolor sit</span>
              <p className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <hr />
              <span className="time">Mon 22 Apr 2023 08:05am</span>
              <span className="small d-block">Lorem ipsum dolor sit</span>
              <p className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="call-back">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-2 p-0">
              {/* <img src={require("../images/blobe.png")} className="img-fluid" alt="" /> */}
            </div>
            <div className="col-lg-4">
              <p className="p">Can't find right guidence</p>
              <h6 className="text-white">
                No Problem! Speak to our expert sefty from home
              </h6>
              <button className="blue-btn mt-2">Request a call back</button>
            </div>
            <div className="col-lg-4">
              {/* <img
                src={require("../images/Illustration.png")}
                className="img-fluid mt-lg-0 mt-2 float-lg-end"
                alt=""
              /> */}
            </div>
            <div className="col-2">
              {/* <img src={require("../images/blobe2.png")} className="img-fluid aa" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h5 className="fw-bolder">Recommended College</h5>
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <div className="card college-card">
              {/* <img src={require("../images/drs.png")} alt="" /> */}
              <div className="card-body p-2 py-3">
                <div className="grid">
                  <div className="round-box2"></div>
                  <div>
                    <h5 className="text-dark">CMC Vellore</h5>
                    <h6>
                      {/* <i className="fa-solid fa-location-dot me-2"></i> */}
                      <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                      Bengaluru, Karnataka
                    </h6>
                    <span>{rating} </span>
                    {[...Array(totalStars)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={
                          index < rating ? "text-warning" : "text-muted"
                        }
                      />
                    ))}
                    <span>(1847)</span>
                    <span className="float-end">
                      <i className="fa-solid fa-money-bill me-1"></i>Fee
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a href="" className="transparent-btn2 fw-bold">
                    Download Brochure
                  </a>
                  <a href="" className="transparent-btn2 fw-bold">
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <div className="card college-card">
              {/* <img src={require("../images/drs.png")} alt="" /> */}
              <div className="card-body p-2 py-3">
                <div className="grid">
                  <div className="round-box2"></div>
                  <div>
                    <h5 className="text-dark">IIT Madras</h5>
                    <h6>
                      <i className="fa-solid fa-location-dot me-2"></i>
                      Bengaluru, Karnataka
                    </h6>
                    <span>{rating} </span>
                    {[...Array(totalStars)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={
                          index < rating ? "text-warning" : "text-muted"
                        }
                      />
                    ))}
                    <span>(1847)</span>
                    <span className="float-end">
                      <i className="fa-solid fa-money-bill me-1"></i>Fee
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a href="" className="transparent-btn2 fw-bold">
                    Download Brochure
                  </a>
                  <a href="" className="transparent-btn2 fw-bold">
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <div className="card college-card">
              {/* <img src={require("../images/drs.png")} alt="" /> */}
              <div className="card-body p-2 py-3">
                <div className="grid">
                  <div className="round-box2"></div>
                  <div>
                    <h5 className="text-dark">IIM, Ahmedabad</h5>
                    <h6>
                      <i className="fa-solid fa-location-dot me-2"></i>
                      Bengaluru, Karnataka
                    </h6>
                    <span>{rating} </span>
                    {[...Array(totalStars)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={
                          index < rating ? "text-warning" : "text-muted"
                        }
                      />
                    ))}
                    <span>(1847)</span>
                    <span className="float-end">
                      <i className="fa-solid fa-money-bill me-1"></i>Fee
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a href="" className="transparent-btn2 fw-bold">
                    Download Brochure
                  </a>
                  <a href="" className="transparent-btn2 fw-bold">
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="card-3 p-3">
              <h5>B. Tech Course Highlights</h5>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint
                occaecat cupidatat non.
              </p>
              <table
                className="mytable2 table table-bordered table-hover"
                width="100%"
              >
                <thead>
                  <tr>
                    <th width="30%">Particulars</th>
                    <th>B.Tech Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>B.Tech full form </td>
                    <td>Bachelor of Technology</td>
                  </tr>
                  <tr>
                    <td>Commonly Known As</td>
                    <td>B.Tech Course</td>
                  </tr>
                  <tr>
                    <td>Level</td>
                    <td>Undergraduate</td>
                  </tr>
                  <tr>
                    <td>B.Tech Course Duration</td>
                    <td>4 years</td>
                  </tr>
                  <tr>
                    <td>Semester/Yearly</td>
                    <td>Semester</td>
                  </tr>
                  <tr>
                    <td>B Tech entry procedure</td>
                    <td>
                      Entrance test followed by counselling by the authorities.
                    </td>
                  </tr>
                  <tr>
                    <td>B Tech Entrance Exam</td>
                    <td>JEE Main, JEE Advanced, GATE</td>
                  </tr>
                  <tr>
                    <td>B Tech Eligibility Criteria</td>
                    <td>
                      Should have completed className 10+2 in PCM or PCB from a
                      recognized institute/board
                    </td>
                  </tr>
                  <tr>
                    <td>B Tech Syllabus</td>
                    <td>The syllabus depends on B Tech specializations</td>
                  </tr>
                  <tr>
                    <td>B.Tech Course Fees</td>
                    <td>INR 5,00,000 to Rs. 12,00,000</td>
                  </tr>
                  <tr>
                    <td>Top B Tech Colleges</td>
                    <td>BITSAT, VITEEE, IITs, NITs, IIITs</td>
                  </tr>
                  <tr>
                    <td>Types of Careers</td>
                    <td>
                      Civil Engineer, Mechanical Engineer, Computer Engineer,
                      Electrical Engineer, Marine Engineer
                    </td>
                  </tr>
                  <tr>
                    <td>B.Tech Salary</td>
                    <td>
                      B.Tech salary range from INR 5,00,000 to INR 7,00,000
                      (Average)
                    </td>
                  </tr>
                  <tr>
                    <td>Top Recruiters</td>
                    <td>
                      Google, Apple, Hindustan Unilever Ltd, ISRO, Microsoft,
                      Amazon, Flipkart, Intel, TATA Consultancy
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="call-back">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-1 p-0">
              {/* <img src={require("../images/blobe.png")} className="img-fluid" alt="" /> */}
            </div>
            <div className="col-lg-6">
              <p className="p">Don't Miss Anythinks!</p>
              <h6 className="text-white">
                Subscribe now and get latest updates on colleges news,exam and
                much more.{" "}
              </h6>
              <button className="blue-btn mt-2">Subscribe Now</button>
            </div>
            <div className="col-lg-3">
              {/* <img
                src={require("../images/Illustration.png")}
                className="img-fluid mt-lg-0 mt-2 float-lg-end"
                alt=""
              /> */}
            </div>
            <div className="col-1">
              {/* <img src={require("../images/blobe2.png")} className="img-fluid aa" alt="" /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="card-3 p-3">
              <h5>List of Popular B Tech Specializations in India</h5>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint
                occaecat cupidatat non.
              </p>
              <table
                className="mytable3 table table-bordered table-hover"
                width="100%"
              >
                <thead>
                  <tr>
                    <th width="30%">Particulars</th>
                    <th>B.Tech Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>B.Tech in Genetic Engineering</td>
                    <td>B.Tech in Agriculture Engineering</td>
                  </tr>
                  <tr>
                    <td>B.Tech in Production Engineering</td>
                    <td>B.Tech in Petroleum Engineering</td>
                  </tr>
                  <tr>
                    <td>B.Tech in Computer Science</td>
                    <td>B.Tech in Plastic Engineering</td>
                  </tr>
                  <tr>
                    <td>B.Tech in Data Science and Engineering</td>
                    <td>B.Tech in Artificial Intelligence</td>
                  </tr>
                  <tr>
                    <td>B.Tech in Mechanical Engineering</td>
                    <td>B.Tech in Automobile Engineering</td>
                  </tr>
                  <tr>
                    <td>Biotechnology Engineering</td>
                    <td>B.Tech in Marine Engineering</td>
                  </tr>
                  <tr>
                    <td>B.Tech in Civil Engineering</td>
                    <td>B.Tech in Electronics and Communication Engineering</td>
                  </tr>
                  <tr>
                    <td>B.Tech in Food Technology</td>
                    <td>B.Tech in Chemical Engineering</td>
                  </tr>
                  <tr>
                    <td>B.Tech in Information Technology</td>
                    <td>B.Tech in Electrical Engineering</td>
                  </tr>
                  <tr>
                    <td>B.Tech in Telecommunication Engineering</td>
                    <td>B.Tech in Aeronautical Engineering</td>
                  </tr>
                  <tr>
                    <td>B.Tech in Software Engineering</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <h5>List of Popular B Tech Specializations in India</h5>
              <ul className="listing2">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="card-3 p-3">
              <h5>Latest Updates On B.Tech Entrance Exam In 2024 </h5>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint
                occaecat cupidatat non.
              </p>
              <div className="responsive">
                <table
                  className="mytable2 table table-bordered table-hover"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th>Exam</th>
                      <th>What is the exam is for?</th>
                      <th>Types of Exam</th>
                      <th>Mode of Exam</th>
                      <th>Dates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="blue">JEE Main</td>
                      <td>
                        Conducted by NTA at a national level for Engineering
                        candidates all over the India. The mode of the exam is
                        online mode.
                      </td>
                      <td>National Level</td>
                      <td>Online</td>
                      <td>
                        Session 1 - January 24 to February 1, 2024 Session 2 -
                        April 1 to 15, 2024
                      </td>
                    </tr>
                    <tr>
                      <td className="blue">JEE Advanced</td>
                      <td>
                        Conducted online by the IITs at national level. The JEE
                        Advanced 2024 Exam will be conducted by IIT Madras.
                      </td>
                      <td>National Level</td>
                      <td>Online</td>
                      <td>May 26, 2024</td>
                    </tr>

                    <tr>
                      <td className="blue">BITSAT</td>
                      <td>
                        Conducted by the Birla Institute of Technology and
                        Science, Pilani, for admissions to UG courses at its
                        campuses at Pilani, Goa and Hyderabad.
                      </td>
                      <td>University Level</td>
                      <td>Online - Computer Based Test (CBT)</td>
                      <td>Session 1 - May 2024 Session 2 - June 2024</td>
                    </tr>

                    <tr>
                      <td className="blue">SRMJEEE</td>
                      <td>
                        Conducted at the university level for admissions into
                        BTech, MTech and BSc courses at the SRM Institute of
                        Science and Technology campuses. You can also check What
                        is a Good Score & Rank in SRMJEEE 2024?
                      </td>
                      <td>University Level</td>
                      <td>Online</td>
                      <td>
                        Session 1 - April 19 to 21, 2024 Session 2 - June 21 to
                        23, 2024
                      </td>
                    </tr>

                    <tr>
                      <td className="blue">GUJSET</td>
                      <td>
                        It is a state level entrance exam conducted by Gujarat
                        Secondary and Higher Secondary Education Board for
                        admission to for admission to BTech and BPharma courses.
                      </td>
                      <td>State Level</td>
                      <td>Online</td>
                      <td>April 2, 2024</td>
                    </tr>
                    <tr>
                      <td className="blue">MHT CET</td>
                      <td>
                        Conducted by the Government of Maharashtra at the state
                        level for admission to for admission to various UG
                        courses.
                      </td>
                      <td>State Level</td>
                      <td>Online - Computer Based Test (CBT)</td>
                      <td>April 16 to 30, 2024</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5 perfect1">
        <div className="row">
          <div className="col-12">
            <div className="card-4">
              <form action="">
                <button
                  className="mt-4 search-btn w-100 d-flex justify-content-between align-items-center"
                  style={{ background: "#f7f7f7" }}
                >
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ color: "#CCCAD7" }}
                  ></i>
                  <input
                    type="text"
                    placeholder="Enter what are you looking for : College, Course, Specialization"
                  />
                </button>

                <div className="mt-4">
                  <button className="btn-5">
                    Filter <i className="fa-solid fa-filter"></i>
                  </button>
                  <button className="btn-6">Popular</button>
                  <button className="btn-7">Degree</button>
                  <button className="btn-7">Stream</button>
                  <button className="btn-7">Program Type</button>
                  <button className="btn-7">Entarance</button>
                  <button className="btn-7">Department</button>
                  <button className="btn-7">Duration</button>
                  <button className="btn-7">Top Colleges</button>
                  <button className="btn-7">Popular Cities</button>
                </div>

                <div className="mt-4">
                  <input type="checkbox" name="course" id="" />
                  <label for="" className="mx-1">
                    B.Tech
                  </label>
                  <input type="checkbox" name="course" id="" />
                  <label for="" className="mx-1">
                    MBA
                  </label>
                  <input type="checkbox" name="course" id="" />
                  <label for="" className="mx-1">
                    BALLB
                  </label>
                  <input type="checkbox" name="course" id="" />
                  <label for="" className="mx-1">
                    B.Sc
                  </label>
                  <input type="checkbox" name="course" id="" />
                  <label for="" className="mx-1">
                    B.Arch
                  </label>
                  <input type="checkbox" name="course" id="" />
                  <label for="" className="mx-1">
                    B.Des
                  </label>
                  <input type="checkbox" name="course" id="" />
                  <label for="" className="mx-1">
                    BA
                  </label>
                  <input type="checkbox" name="course" id="" />
                  <label for="" className="mx-1">
                    Engineering
                  </label>
                  <input type="checkbox" name="course" id="" />
                  <label for="" className="mx-1">
                    Degree
                  </label>
                  <input type="checkbox" name="course" id="" />
                  <label for="" className="mx-1">
                    Computer Science
                  </label>
                  <input type="checkbox" name="course" id="" />
                  <label for="" className="mx-1">
                    B.Tech
                  </label>
                  <input type="checkbox" name="course" id="" />
                  <label for="" className="mx-1">
                    B.Tech
                  </label>
                  <input type="checkbox" name="course" id="" />
                  <label for="" className="mx-1">
                    B.Tech
                  </label>

                  <h6 className="mt-3">Coures Type</h6>
                  <input type="checkbox" name="course" id="" />
                  <label for="">Regular</label>
                  <input type="checkbox" name="course" id="" />
                  <label for="">Distance</label>
                  <input type="checkbox" name="course" id="" />
                  <label for="">Autonomous</label>
                </div>
                <button className="btn-8 mt-3">
                  B.Tech <i className="fa-solid fa-xmark ms-1"></i>
                </button>
                <button className="btn-8 mt-3">
                  B.Des <i className="fa-solid fa-xmark ms-1"></i>
                </button>
                <button className="btn-8 mt-3">
                  Distance <i className="fa-solid fa-xmark ms-1"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <div className="card-3 p-3">
              <h5>B.Tech Admission Process 2024</h5>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint
                occaecat cupidatat non.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 stylish">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-4 col-6 upping">
                <div className="r-box">
                  <div className="r2-box">
                    <h4>1</h4>
                  </div>
                </div>
                <div className="r-btn">Reaserch</div>
              </div>
              <div className="col-lg-2 col-md-4 col-6 upping">
                <div className="r-box">
                  <div className="r2-box">
                    <h4>2</h4>
                  </div>
                </div>
                <div className="r-btn">Eligibility</div>
              </div>
              <div className="col-lg-2 col-md-4 col-6 upping">
                <div className="r-box">
                  <div className="r2-box">
                    <h4>3</h4>
                  </div>
                </div>
                <div className="r-btn">Application</div>
              </div>
              <div className="col-lg-2 col-md-4 col-6 upping">
                <div className="r-box">
                  <div className="r2-box">
                    <h4>4</h4>
                  </div>
                </div>
                <div className="r-btn">Selection</div>
              </div>
              <div className="col-lg-2 col-md-4 col-6 upping">
                <div className="r-box">
                  <div className="r2-box">
                    <h4>5</h4>
                  </div>
                </div>
                <div className="r-btn">Counselling</div>
              </div>
              <div className="col-lg-2 col-md-4 col-6 upping">
                <div className="r-box">
                  <div className="r2-box">
                    <h4>6</h4>
                  </div>
                </div>
                <div className="r-btn">Payment</div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <div className="card-3 p-3">
              <h5>B.Tech Admission Via Entarance</h5>
              <p className="p">
                To get entry into engineering, below is the sequence of steps
                that have to be followed by the candidates before applying for
                BTech.
              </p>
              <ul className="listing2">
                <li>
                  Candidates to be admitted to B.Tech have to appear for an
                  entrances
                </li>
                <li>
                  There are various national-level exams like JEE Main, which is
                  accepted by NITs, GFTIs, and JEE Advanced which is accepted
                  exclusively by IITs
                </li>
                <li>
                  Other than the exams mentioned above, other state-level exams
                  are accepted by many colleges like WBJEE, AP EAMCET, TS
                  EAMCET, KEAM, and MHT CET. other university-based exams such
                  as VITEEE, SRMJEEE, BITSAT, UPESEAT, etc
                </li>
                <li>
                  The exams are conducted mostly in April, May, and June every
                  year
                </li>
                <li>
                  After the declaration of the results, it is followed by
                  counseling, and the seat allotment process has been conducted
                  by the concerned authorities. During the counseling process,
                  candidates will have to choose the college and courses of
                  their choice based on the rank acquired by them
                </li>
                <li>
                  After the college is chosen, candidates will have to visit the
                  campus of the respective college to conduct the entry
                  formalities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <div className="card-3 p-3">
              <h5>BTech Admission via Lateral Entry</h5>
              <p className="p">
                Students with a 3-year diploma or a BSc degree in a qualifying
                technological study may apply for B Tech Lateral Entry. Students
                are admitted to the B Tech program in the third semester (second
                year). The B Tech Lateral Entry entry is entrance-based, and
                these entrances, also known as LEET, are administered annually
                by state-level education authorities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <div className="card-3 p-3">
              <h5>B.Tech Eligibility Criteria</h5>
              <p className="p">
                Candidates who wish to pursue BTech are advised to check the
                BTech Eligibility Criteria before filling out the BTech
                Application Form so that they do not miss out on anything and
                regret it at the last minute. The Eligibility Criteria for BTech
                may vary from institute to institute. We have sketched the
                Eligibility Criteria for BTech in the pointers below.
              </p>
              <ul className="listing2">
                <li>
                  Candidate should have completed 10+2 or equivalent
                  examinations from a recognized educational board like CBSE,
                  ICSE, etc.
                </li>
                <li>
                  They must belong to the Science Stream with Physics,
                  Chemistry, and Mathematics (PCM) as compulsory subjects.
                </li>
                <li>
                  Candidates are mandated to score at least 60% marks in
                  aggregate where a relaxation of 5% to 10% is given to the
                  candidates from the reserved categories.
                </li>
                <li>
                  Those who are interested in the regular mode of entry to the
                  BTech are through the entrances after className 12th. The
                  other mode is called as Lateral-Entry mode, wherein candidates
                  can enroll in BTech in the second year.
                </li>
                <li>
                  Those who possess a three-year diploma course in engineering
                  can enroll in BTech under the Lateral-Entry Scheme.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container pt-5">
        <div className="row">
          <div className="col-12 pb-3">
            <h6>FAQ’s About B.Tech !</h6>
          </div>
          <div className="row card-3 p-2">
            <div className="col-lg-8">
              <div className="accordion">
                <div className="at-item">
                  <div className="at-title">
                    <h2>Is BTech tough?</h2>
                  </div>
                  <div className="at-tab">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam sapiente magni architecto, sed sit sint nostrum
                    possimus delectus voluptatem cupiditate ea autem. Non
                    reprehenderit numquam vero modi eaque soluta dolore autem,
                    illum nam consectetur impedit consequuntur in, ex quidem
                    est.
                  </div>
                </div>
                <div className="at-item">
                  <div className="at-title">
                    <h2>
                      How many types of B.Tech specialisations are available?
                    </h2>
                  </div>
                  <div className="at-tab">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium temporibus rem commodi labore, esse amet quo
                    eveniet veniam similique vel porro, natus a distinctio
                    deleniti? Obcaecati quod quis optio, numquam quo vel ipsum
                    placeat consectetur laborum tempore deleniti minus cum.
                  </div>
                </div>
                <div className="at-item">
                  <div className="at-title">
                    <h2>Can we get a job after B.Tech?</h2>
                  </div>
                  <div className="at-tab">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias sequi quo id nemo ullam suscipit architecto, beatae
                    autem cum, similique eum laudantium. Fuga sapiente
                    necessitatibus porro suscipit libero inventore provident
                    nam, ullam sequi, eum error veniam, dolor explicabo eius
                    dolore.
                  </div>
                </div>
                <div className="at-item">
                  <div className="at-title">
                    <h2>Which B.Tech branch is best for my career? </h2>
                  </div>
                  <div className="at-tab">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias voluptatum aspernatur pariatur veritatis facilis
                    adipisci ducimus, animi quas voluptatibus repudiandae
                    officia. Obcaecati aspernatur optio quidem ad pariatur sunt
                    totam non, qui odio. Perspiciatis voluptate, iusto quasi
                    ipsa quaerat itaque ducimus.
                  </div>
                </div>

                <div className="at-item">
                  <div className="at-title">
                    <h2>Can I do B.Tech without math?</h2>
                  </div>
                  <div className="at-tab">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat debitis nostrum eius alias earum error, deleniti
                    aliquid tempora architecto, itaque voluptatum eaque
                    inventore aut deserunt minima corporis soluta maiores
                    eligendi ea! Ratione ullam blanditiis enim excepturi sunt
                    autem perferendis placeat.
                  </div>
                </div>
                <div className="at-item">
                  <div className="at-title">
                    <h2>What is the B.Tech qualification?</h2>
                  </div>
                  <div className="at-tab">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat debitis nostrum eius alias earum error, deleniti
                    aliquid tempora architecto, itaque voluptatum eaque
                    inventore aut deserunt minima corporis soluta maiores
                    eligendi ea! Ratione ullam blanditiis enim excepturi sunt
                    autem perferendis placeat.
                  </div>
                </div>
                <div className="at-item">
                  <div className="at-title">
                    <h2>Does a B.Tech degree have a scope?</h2>
                  </div>
                  <div className="at-tab">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat debitis nostrum eius alias earum error, deleniti
                    aliquid tempora architecto, itaque voluptatum eaque
                    inventore aut deserunt minima corporis soluta maiores
                    eligendi ea! Ratione ullam blanditiis enim excepturi sunt
                    autem perferendis placeat.
                  </div>
                </div>
                <div className="at-item">
                  <div className="at-title">
                    <h2>
                      Which is the top Private B.Tech College in India as per
                      NIRF Ranking ?
                    </h2>
                  </div>
                  <div className="at-tab">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat debitis nostrum eius alias earum error, deleniti
                    aliquid tempora architecto, itaque voluptatum eaque
                    inventore aut deserunt minima corporis soluta maiores
                    eligendi ea! Ratione ullam blanditiis enim excepturi sunt
                    autem perferendis placeat.
                  </div>
                </div>
                <div className="at-item">
                  <div className="at-title">
                    <h2>Is a B.Tech degree hard to study?</h2>
                  </div>
                  <div className="at-tab">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat debitis nostrum eius alias earum error, deleniti
                    aliquid tempora architecto, itaque voluptatum eaque
                    inventore aut deserunt minima corporis soluta maiores
                    eligendi ea! Ratione ullam blanditiis enim excepturi sunt
                    autem perferendis placeat.
                  </div>
                </div>
                <div className="at-item">
                  <div className="at-title">
                    <h2>
                      What are the government jobs available after completing a
                      BTech?
                    </h2>
                  </div>
                  <div className="at-tab">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat debitis nostrum eius alias earum error, deleniti
                    aliquid tempora architecto, itaque voluptatum eaque
                    inventore aut deserunt minima corporis soluta maiores
                    eligendi ea! Ratione ullam blanditiis enim excepturi sunt
                    autem perferendis placeat.
                  </div>
                </div>
                <p className="text-center mt-4">
                  Did you get your answer?
                  <a href="" className="ms-2">
                    Know More
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card faq-box">
                <h5>Trending Article</h5>
                <ul>
                  <li>
                    <a href="" className="a">
                      Lorem ipsum dollor site amet Lorem ipsum dollor site amet
                    </a>
                  </li>
                  <li>
                    <a href="" className="a">
                      Lorem ipsum dollor site amet Lorem ipsum dollor site amet
                    </a>
                  </li>
                  <li>
                    <a href="" className="a">
                      Lorem ipsum dollor site amet Lorem ipsum dollor site amet
                    </a>
                  </li>
                  <li>
                    <a href="" className="a">
                      Lorem ipsum dollor site amet Lorem ipsum dollor site amet
                    </a>
                  </li>
                  <li>
                    <a href="" className="a">
                      Lorem ipsum dollor site amet Lorem ipsum dollor site amet
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card faq-box mt-3">
                <h5>FAQs News</h5>
                <ul>
                  <li>
                    <a href="" className="a">
                      Lorem ipsum dollor site amet Lorem ipsum dollor site amet
                    </a>
                  </li>
                  <li>
                    <a href="" className="a">
                      Lorem ipsum dollor site amet Lorem ipsum dollor site amet
                    </a>
                  </li>
                  <li>
                    <a href="" className="a">
                      Lorem ipsum dollor site amet Lorem ipsum dollor site amet
                    </a>
                  </li>
                  <li>
                    <a href="" className="a">
                      Lorem ipsum dollor site amet Lorem ipsum dollor site amet
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="call-back2 mt-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 ms-auto">
              <p className="f52">
                Ask us and get personalized response free of cost
              </p>
              <h6 className="blue">Still have question about B.Tech?</h6>
              <button className="blue-btn mt-2">Ask a Question</button>
            </div>
            <div className="col-lg-3 ms-auto">
              {/* <img
                src= {require("../images/question.png")}
                className="img-fluid mt-lg-0 mt-2 float-lg-end"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="releated-college mb-5">
        <div className="container p-5">
          <div className="row">
            <div className="col-12">
              <h5>Related Colleges News</h5>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card card-3 mt-3 px-2 pt-5">
                <h6 className="p f29">
                  ISC 12th Chemistry Most Imp- ortant Topics 2024
                </h6>
                <p className="p">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card card-3 mt-3 px-2 pt-5">
                <h6 className="p f29">
                  ISC 12th Chemistry Most Imp- ortant Topics 2024
                </h6>
                <p className="p">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card card-3 mt-3 px-2 pt-5">
                <h6 className="p f29">
                  ISC 12th Chemistry Most Imp- ortant Topics 2024
                </h6>
                <p className="p">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card card-3 mt-3 px-2 pt-5">
                <h6 className="p f29">
                  ISC 12th Chemistry Most Imp- ortant Topics 2024
                </h6>
                <p className="p">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="trending-course">
        <div className="container pt-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="card">
                <div className="d-flex justify-content-between">
                  <div>
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ fontSize: "40px", width: "48px" }}
                    ></i>
                  </div>
                  <div>
                    <h5>Trending Courses</h5>
                    <p>
                      Gain professional expertise with online courses to amplify
                      your employability
                    </p>
                  </div>
                </div>
                <div className="top-college">
                  <button>B.Tech</button>
                  <button>B.Sc</button>
                  <button>MBA/BGDM</button>
                  <button>ME/M.Tech</button>
                  <button>MBBS</button>
                  <button>MD</button>
                  <button>B.Com</button>
                  <button>BBA/BBM</button>
                  <button>M.Sc</button>
                  <button>B.Ed</button>
                  <button>Polytechnic</button>
                  <button>
                    View More <i className=" fa fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="d-flex justify-content-between">
                  <div>
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ fontSize: "40px", width: "48px" }}
                    ></i>
                  </div>
                  <div>
                    <h5>Trending Exams</h5>
                    <p>
                      Easy Information and downloads on Exam preparation, dates,
                      counselling, syllabus and more
                    </p>
                  </div>
                </div>
                <div className="top-college">
                  <button>JEE Main</button>
                  <button>GATE</button>
                  <button>CATE</button>
                  <button>NEET</button>
                  <button>BITSAT</button>
                  <button>SRMJEEE</button>
                  <button>VITEEE</button>
                  <button>B.Com</button>
                  <button>B.Sc</button>
                  <button>BE/B.Tech</button>
                  <button>Nursing</button>
                  <button>
                    View More <i className="fa fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="container py-5 ">
        <div className="row">
          <div className="col-12">
            <h5>Comment</h5>
            <div className="comment-review mt-3">
              {[...Array(totalStars)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={index < rating ? "text-warning" : "text-muted"}
                />
              ))}
            </div>
            <div className="comment-form mt-3">
              <form action="">
                <textarea
                  name=""
                  id=""
                  placeholder="Write your message here.."
                ></textarea>
                <div className="float-end">
                  <p className="p">Charecter:0/500</p>
                  <button className="transparent-btn bg-remove">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Course
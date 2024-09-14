

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    
    faAngleRight,
    faShare,
    
  } from "@fortawesome/free-solid-svg-icons";

function Review() {
  return (
    <>
      <div className="banner-section2">
        <div className="banner-section-content pt-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-6">
                <h6>
                  <a href="#">Home / </a>WriteReview
                </h6>
              </div>
              <div className="col-lg-4 col-6 ms-auto">
                <h6 className="float-end">
                <FontAwesomeIcon icon={faShare} className="me-2" /> Share Page
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={require("../images/feedback.png")} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <span className="f-12 pinki">PROVIDE YOUR FAITH REVIEW</span>
            <h4 className="fw-bold mt-2">
              Guide Your Younger Generation With Your Faithful Review
            </h4>
            <p className="p mt-2">
              Share your College Experience with us to help prospective students
              in choosing the best college of their need. It doesn’t matter if
              it’s good or bad, as long as it’s honest and true.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul className="listing2 disc-none">
                  <li>
                    {" "}
                    
                    <FontAwesomeIcon icon={faAngleRight} className="me-1 " /> Lorem ipsum
                    dolor sit amet.
                  
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faAngleRight} className="me-1" />Lorem ipsum
                    dolor sit amet.
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faAngleRight} className="me-1" />Lorem ipsum
                    dolor sit amet.
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faAngleRight} className="me-1" />Lorem ipsum
                    dolor sit amet.
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faAngleRight} className="me-1" />Lorem ipsum
                    dolor sit amet.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="listing2 disc-none">
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faAngleRight} className="me-1" />Lorem ipsum
                    dolor sit amet.
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faAngleRight} className="me-1" />Lorem ipsum
                    dolor sit amet.
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faAngleRight} className="me-1" />Lorem ipsum
                    dolor sit amet.
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faAngleRight} className="me-1" />Lorem ipsum
                    dolor sit amet.
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faAngleRight} className="me-1" />Lorem ipsum
                    dolor sit amet.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <div className="card-5">
              <div className="row">
                <div className="col-lg-7">
                  <h5>Term & Condition</h5>
                  <h6 className="mt-3">We will reject your review if ?</h6>
                  <ol className="listing2 p-0 ps-3 mt-3">
                    <li>
                      It is too short or vague, without any useful information{" "}
                    </li>
                    <li>You have copied text from anywhere on the internet </li>
                    <li>
                      You have used junked characters, SMS language, slang or
                      abusive words in your review{" "}
                    </li>
                  </ol>
                </div>
                <div className="col-lg-4 ms-auto">
                  <img
                    src={require("../images/term1.png")}
                    className="img-fluid"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-5 mt-3 form-design">
        <div className="col-lg-11 m-auto">
          <form action="" className="">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Select College / University*
              </label>
              <select className="form-select">
                <option selected>Search your college</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Select Degree*
              </label>
              <select className="form-select">
                <option selected>Search your degree</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Select Course*
              </label>
              <select className="form-select">
                <option selected>Search your Course</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Passing Year*
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your passing year"
              />
            </div>
            <h5 className="py-3">Overall Review</h5>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Subject*
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Review*
              </label>
              <textarea name="" className="form-control" id="">
                Write Your Own Review
              </textarea>
              <p className="p f-12 float-end">0/250 charecters</p>
            </div>
            <div className="mb-3 text-center">
              <button className="blue-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="call-back2 mt-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 ms-auto">
              <p className="f52">
                Ask us and get personalized response free of cost
              </p>
              <h6 className="blue">Still have question about B Tech ?</h6>
              <button className="blue-btn mt-2">Ask a Question</button>
            </div>
            <div className="col-lg-3 ms-auto">
              <img
                src={require("../images/question.png")}
                className="img-fluid mt-lg-0 mt-2 float-lg-end"
                alt=""
              />
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
    </>
  )
}

export default Review
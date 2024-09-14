

import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShare, faStar } from "@fortawesome/free-solid-svg-icons";
import Subscribe from '../home/Subscribe';
import TrendingCourse from '../home/TrendingCourse';
import AboutTrendingCourse from '../about_us/AboutTrendingCourse';

function NewsDetails() {
  return (
    <>
      <div className="banner-section2">
        <div className="banner-section-content pt-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-6">
                <h6>
                  <a href="index.php">Home</a>/News Details
                </h6>
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
      <section className="latest-news">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-3"></div>
          </div>
        </div>
      </section>

      <div className="latest-news">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <button className="small-btn">All News</button>
              <button className="small-btn">College News</button>
              <button className="small-btn">University News</button>
              <button className="small-btn">Exam Updates</button>
              <button className="small-btn">Trending</button>
              <button className="small-btn">Question Paper</button>
              <button className="small-btn">Exam Dates</button>
              <button className="small-btn">JEE Mains Results</button>
              <button className="small-btn">NEET Counselling</button>
              <button className="small-btn">MBA Answer Sheet</button>
            </div>

            <div className="col-lg-9">
              <div className="card-image mt-4">
                <img src={require("../images/drs.png")} alt="" />
                <p className="text-center p">
                  <b className="text-dark">AIEEE</b> sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id es
                </p>
                <h5 className="fw-bold mt-4">
                  Sint occaecat cupidatat non sint occaecat cupidatat non
                  proident, sunt in culpa qui officia{" "}
                  <a href=""> deserunt mollit anim id es</a>{" "}
                </h5>
                <h6>
                  Sint occaecat cupidatat non sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id es
                  Sint occaecat cupidatat non sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id es
                  Sint occaecat cupidatat non sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id es
                  Sint occaecat cupidatat non sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id es
                  Sint occaecat cupidatat non sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim...{" "}
                  <a href="">Read More</a>{" "}
                </h6>
                <p className="p-bg mt-3">
                  occaecat cupidatat non sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim
                </p>
                <h6 className="fw-bold">
                  Helpful updates regard <a href="">NEET</a>
                </h6>
                <p>
                  Sint occaecat cupidatat non sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id es
                  Sint occaecat cupidatat non.
                </p>
                <ul className="listing">
                  <li>Sint occaecat cupidatat non sint occaecat cupidatat</li>
                  <li>Sint occaecat cupidatat non sint occaecat cupidatat</li>
                  <li>Sint occaecat cupidatat non sint occaecat cupidatat</li>
                  <li>Sint occaecat cupidatat non sint occaecat cupidatat</li>
                  <li>Sint occaecat cupidatat non sint occaecat cupidatat</li>
                  <li>Sint occaecat cupidatat non sint occaecat cupidatat</li>
                </ul>
                <h6>Sint occaecat cupidatat non sint occaecat cupidatat</h6>
                <table className="mytable table table-bordered table-hover mt-3">
                  <thead>
                    <tr>
                      <th>Important Link</th>
                      <th>
                        occaecat cupidatat non sint occaecat cupidatat non
                        proident.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lorem ipsum dolor sit</td>
                      <td>
                        <a href="">
                          occaecat cupidatat non sint occaecat cupidatat non
                          proident
                        </a>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Lorem ipsum dolor sit</td>
                      <td>
                        <a href="">
                          occaecat cupidatat non sint occaecat cupidatat non
                          proident
                        </a>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Lorem ipsum dolor sit</td>
                      <td>
                        <a href="">
                          occaecat cupidatat non sint occaecat cupidatat non
                          proident
                        </a>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Lorem ipsum dolor sit</td>
                      <td>
                        <a href="">
                          occaecat cupidatat non sint occaecat cupidatat non
                          proident
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            

            <div className="col-lg-3 col-md-6">
              <div className="perfect1 per-2">
                <button className="mt-4 search-btn w-100 d-flex justify-content-between align-items-center">
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ color: "#CCCAD7" }}
                  ></i>
                  <input type="text" placeholder="What are yo..." />
                  <div className="search">Search</div>
                </button>
              </div>
              <div className="card p-2">
                <h5>Categories</h5>
                <div className="d-flex mt-2">
                  <div className="mini-box2"></div>
                  <div className="ms-2">
                    <h6>NEET Entrance</h6>
                    <h6>
                      <FontAwesomeIcon icon={faClock} className="me-1" /> 6
                      March, 2023 | 08:05am
                    </h6>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="mini-box2"></div>
                  <div className="ms-2">
                    <h6>AIEEE Question Paper</h6>
                    <h6>
                      <FontAwesomeIcon icon={faClock} className="me-1" /> 6
                      March, 2023 | 08:05am
                    </h6>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="mini-box2"></div>
                  <div className="ms-2">
                    <h6>AIEEE Cheat Sheet</h6>
                    <h6>
                      <FontAwesomeIcon icon={faClock} className="me-1" />6
                      March, 2023 | 08:05am
                    </h6>
                  </div>
                </div>
              </div>


              <div className="card p-2">
                <h5>Trending News</h5>
                <div className="d-flex mt-2">
                  <div className="mini-box2"></div>
                  <div className="ms-2">
                    <h6>RGUHS Result 2024</h6>
                    <h6>
                      <FontAwesomeIcon icon={faClock} className="me-1" /> 6
                      March, 2023 | 08:05am
                    </h6>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="mini-box2"></div>
                  <div className="ms-2">
                    <h6>Mumbai University Result 2024</h6>
                    <h6>
                      <FontAwesomeIcon icon={faClock} className="me-1" />6
                      March, 2023 | 08:05am
                    </h6>
                  </div>
                </div>

                <div className="d-flex mt-2">
                  <div className="mini-box2"></div>
                  <div className="ms-2">
                    <h6>RGUSH Result 2024</h6>
                    <h6>
                      <FontAwesomeIcon icon={faClock} className="me-1" />{" "}
                      Saturday, Feb 24, 2024 | 12:42pm
                    </h6>
                  </div>
                </div>
              </div>
              <div className="card p-2">
                <h5>Populer News</h5>
                <div className="d-flex mt-2">
                  <div className="mini-box2"></div>
                  <div className="ms-2">
                    <h6>RGUHS Result 2024</h6>
                    <h6>
                      <FontAwesomeIcon icon={faClock} className="me-1" />6
                      March, 2023 | 08:05am
                    </h6>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="mini-box2"></div>
                  <div className="ms-2">
                    <h6>Mumbai University Result 2024</h6>
                    <h6>
                      <FontAwesomeIcon icon={faClock} className="me-1" />6
                      March, 2023 | 08:05am
                    </h6>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="mini-box2"></div>
                  <div className="ms-2">
                    <h6>RGUSH Result 2024</h6>
                    <h6>
                      <FontAwesomeIcon icon={faClock} className="me-1" />6
                      March, 2023 | 08:05am
                    </h6>
                  </div>
                </div>
              </div>
              <div className="card p-2 card-form">
                <h5>Subscribe to Newsletter</h5>
                <form action="" className="">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="number" placeholder="Mobile" />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-2">
        <div className="container p-5">
          <div className="row">
            <div className="col-12 pe-4 ps-4">
              <h5>Was this article helpful ?</h5>
              <p className="p">
                Sint occaecat cupidatat non sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id es
                Sint occaecat cupidatat non sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id.
              </p>
              <div className="text-center">
                <img src={require("../images/like.png")} className="img-fluid" alt="" />
                <img
                  src={require("../images/unlike.png")}
                  className="img-fluid ms-3"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="comment">
        <div className="container pt-5">
          <div className="row">
            <div className="col-12">
              <h5>Comment</h5>
              <div className="comment-review mt-3">
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
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
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h6 className="ms-4">4 Comments</h6>
                  <hr className="mt-3" />
                </div>
                <div className="col-10 m-auto mt-4">
                  <div className="comment-box">
                    <h6 className="user">Rajesh Kumar</h6>
                    <span className="date-time">Mon, 12 Jan 2024</span>
                    <span className="message">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo con
                    </span>
                    <span className="follow">Follow</span>
                    <span className="reply">Reply</span>
                  </div>

                  <div className="bg-3 py-4 ps-5 pe-3 comment-box mt-4">
                    <h6 className="user">Anjani Srivastava</h6>
                    <span className="date-time">Mon, 12 Jan 2024</span>
                    <span className="message">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo con
                    </span>
                    <span className="follow">Follow</span>
                    <span className="reply">Reply</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutTrendingCourse />

      <Subscribe />
   
    </>
  )
}

export default NewsDetails
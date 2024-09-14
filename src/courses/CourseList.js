

import React from 'react'
import FilterByCourse from './FilterByCourse'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CourseList() {

    const courses = ["Master of Arts", "CA", "MBA", "ME/M.tech", "MBBS", "MD", 'B.COM', "BBA/BBM", "M.Sc", "B.Ed", "Polytechnic"]
    const exams = ["Jee Mains", "GATE", "CATE", "NEET", "BITSAT", "SRMJEE", "VITEEE", "B.Com", "B.Sc", "BE/B.Tech", "Nursing"]
    const Durations = [6, 5, 4, 3, 2, 1]

    const CourseInCollege = [
        {
            CourseName: "Bachelor of Technology",
            Duration: "4 years",
            Fee: "50k - 1.5L",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]

    return (
        <>
            <div className="banner-section2">
                <div className="banner-section-content pt-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-6">
                                <h6><a href="#">Course /</a> Courses List</h6>
                            </div>
                            <div className="col-lg-4 col-6 ms-auto">
                                <h6 className="float-end"><i className="fa-solid fa-share me-2"></i>Share Page</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className="banner-section4">
                <div className="container perfect1 faq-banner">
                    <div className="row align-items-center">
                        <div className="col-lg-9">

                            <h3>List of Courses in India</h3>
                        </div>
                        <div className="col-lg-2 ms-auto">
                            <a href="" className="transparent-btn3">Know Your Predict</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* left side filter  */}
            <div className="container pb-5 pt-3">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="side-card p-3 mt-3">
                            <h5>Top Seraches</h5>
                            <form action="">
                                <input type="text" placeholder="Search" className="form-control mysearch mt-3 mb-3" />

                                {courses.map((course) => (
                                    <div className="mt-1">
                                        <input type="checkbox" name="courses" id="" />
                                        <label for="" className="small-label ms-1">{course}</label>
                                        {/* <p clasPredictorsName="p float-end">220</p> */}
                                    </div>

                                ))}

                            </form>
                        </div>

                        <div className="side-card p-3 mt-3">
                            <h5>Duration</h5>
                            <form action="">
                                <input type="text" placeholder="Search" className="form-control mysearch mt-3 mb-3" />

                                {Durations.map((duration) => (
                                    <div className="mt-1">
                                        <input type="checkbox" name="courses" id="" />
                                        <label for="" className="small-label ms-1">{duration} years</label>
                                        {/* <p className="p float-end">220</p> */}
                                    </div>

                                ))}

                                <div className="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" className="small-label ms-1">Less than 1 year</label>
                                </div>
                            </form>
                        </div>

                        <div className="side-card p-3 mt-3">
                            <h5>Mode of Courses</h5>
                            <form action="">
                                <input type="text" placeholder="Search" className="form-control mysearch mt-3 mb-3" />
                                <div className="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" className="small-label ms-1">Regular</label>
                                </div>
                                <div className="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" className="small-label ms-1">Distance</label>
                                </div>
                                <div className="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" className="small-label ms-1">Part Time</label>
                                </div>

                            </form>
                        </div>
                    </div>

                    {/* courses in college */}
                    <div className="col-lg-9">
                        <h5 className="blue fw-bold mt-2">We Found Total 893 Courses in India</h5>
                        <div className="card-5">
                            {CourseInCollege.map((course) => (
                                <div className="gridd">

                                    <div className="square-box" key={course.name}>
                                        <h5 className="blue fw-bold">B.Tech</h5>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold">{course.name}</h6>
                                        <img src={require("../images/heart-frame.png")} className="heart-img" alt="" />
                                        <span className="span3">
                                            <span className="text-dark fw-bold">Duration: </span>{course.duration}
                                        </span>
                                        <span className="span3 ms-3">
                                            <span className="text-dark fw-bold">Average Fees: </span>{course.Fee}
                                        </span>
                                        <hr />
                                        <p className="p">{course.details}</p>
                                        <a href="#" className="transparent-btn d-block text-center mybd">
                                            View Details <FontAwesomeIcon icon={faArrowRight} style={{ color: "#2e4084", }} />
                                        </a>
                                    </div>

                                </div>
                            ))}

                        </div>

                        <div className="row m-0">
                            <div className="col-5 bg-blue2">

                            </div>
                            <div className="col-7 bg-blue pb-5">
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing. </p>
                                <p className="p text-white">Lorem ipsum dolor sit amet, consectetur adipiscing.   </p>
                                <a href="" className="transparent-btn3">CTA For other</a>

                            </div>
                        </div>
                        <div className="card-5">

                            <div className="gridd">
                                <div className="square-box">
                                    <h5 className="blue fw-bold">B.Tech</h5>
                                </div>
                                <div>
                                    <h6 className="fw-bold">B.Tech - Automobile Engineering</h6>
                                    <img src={require("../images/heart-frame.png")} className="heart-img" alt="" />
                                    <span className="span3"><span className="text-dark fw-bold">Course Duration</span> : 4 years</span>

                                    <span className="span3 ms-3"><span className="text-dark fw-bold">Average Fees</span> : 50k - 1.5L INR</span>
                                    <hr />
                                    <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <a href="#" className="transparent-btn d-block text-center mybd">View Details <i className="fa-solid fa-arrow-right ms-1"></i></a>
                                    <div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-5">

                            <div className="gridd">
                                <div className="square-box">
                                    <h5 className="blue fw-bold">B.Tech</h5>
                                </div>
                                <div>
                                    <h6 className="fw-bold">B.Tech - Production Engineering</h6>
                                    <img src={require("../images/heart-frame.png")} className="heart-img" alt="" />
                                    <span className="span3"><span className="text-dark fw-bold">Course Duration</span> : 4 years</span>

                                    <span className="span3 ms-3"><span className="text-dark fw-bold">Average Fees</span> : 50k - 1.5L INR</span>
                                    <hr />
                                    <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <a href="#" className="transparent-btn d-block text-center mybd">View Details <i className="fa-solid fa-arrow-right ms-1"></i></a>
                                    <div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-5">

                            <div className="gridd">
                                <div className="square-box">
                                    <h5 className="blue fw-bold">B.Tech</h5>
                                </div>
                                <div>
                                    <h6 className="fw-bold">B.Tech - Mining Engineering</h6>
                                    <img src={require("../images/heart-frame.png")} className="heart-img" alt="" />
                                    <span className="span3"><span className="text-dark fw-bold">Course Duration</span> : 4 years</span>

                                    <span className="span3 ms-3"><span className="text-dark fw-bold">Average Fees</span> : 50k - 1.5L INR</span>
                                    <hr />
                                    <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <a href="#" className="transparent-btn d-block text-center mybd">View Details <i className="fa-solid fa-arrow-right ms-1"></i></a>
                                    <div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-5">

                            <div className="gridd">
                                <div className="square-box">
                                    <h5 className="blue fw-bold">B.Tech</h5>
                                </div>
                                <div>
                                    <h6 className="fw-bold">Master of Computer Management</h6>
                                    <img src={require("../images/heart-frame.png")} className="heart-img" alt="" />
                                    <span className="span3"><span className="text-dark fw-bold">Course Duration</span> : 4 years</span>

                                    <span className="span3 ms-3"><span className="text-dark fw-bold">Average Fees</span> : 50k - 1.5L INR</span>
                                    <hr />
                                    <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <a href="#" className="transparent-btn d-block text-center mybd">View Details <i className="fa-solid fa-arrow-right ms-1"></i></a>
                                    <div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-5">

                            <div className="gridd">
                                <div className="square-box">
                                    <h5 className="blue fw-bold">B.Tech</h5>
                                </div>
                                <div>
                                    <h6 className="fw-bold">Bachelor of Educations</h6>
                                    <img src={require("../images/heart-frame.png")} className="heart-img" alt="" />
                                    <span className="span3"><span className="text-dark fw-bold">Course Duration</span> : 4 years</span>

                                    <span className="span3 ms-3"><span className="text-dark fw-bold">Average Fees</span> : 50k - 1.5L INR</span>
                                    <hr />
                                    <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <a href="#" className="transparent-btn d-block text-center mybd">View Details <i className="fa-solid fa-arrow-right ms-1"></i></a>
                                    <div>

                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>

            {/* <FilterByCourse /> */}

            {/* <div className="container pt-5 perfect1">
                <div className="row">
                    <div className="col-12">
                        <div className="card-4">
                            <form action="">
                                <button className="mt-4 search-btn w-100 d-flex justify-content-between align-items-center" style={{ background: '#f7f7f7' }}><i className="fa-solid fa-magnifying-glass" style={{ color: '#CCCAD7' }}
                                ></i><input type="text" placeholder="Enter what are you looking for : College, Course, Specialization" /></button>

                                <div className="mt-4">
                                    <button className="btn-5">Filter <i className="fa-solid fa-filter"></i></button>
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
                                    <label for="" className="mx-1">B.Tech</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="" className="mx-1">MBA</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="" className="mx-1">BALLB</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="" className="mx-1">B.Sc</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="" className="mx-1">B.Arch</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="" className="mx-1">B.Des</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="" className="mx-1">BA</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="" className="mx-1">Engineering</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="" className="mx-1">Degree</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="" className="mx-1">Computer Science</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="" className="mx-1">B.Tech</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="" className="mx-1">B.Tech</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="" className="mx-1">B.Tech</label>


                                    <h6 className="mt-3">Coures Type</h6>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="">Regular</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="">Distance</label>
                                    <input type="checkbox" name="course" id="" />
                                    <label for="">Autonomous</label>
                                </div>
                                <button className="btn-8 mt-3">B.Tech <i className="fa-solid fa-xmark ms-1"></i></button>
                                <button className="btn-8 mt-3">B.Des <i className="fa-solid fa-xmark ms-1"></i></button>
                                <button className="btn-8 mt-3">Distance <i className="fa-solid fa-xmark ms-1"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="container pt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card-3 p-3">
                            <div className="row align-items-center">
                                <div className="col-lg-9">
                                    <h5>JEE Main 2024 Rank </h5>
                                    <p className="p">Predict your JEE Main 2024 Rank based on JEE Main Percentile by using JEE Main 2024 Rank Predictor.</p>
                                </div>

                                <div className="col-3">
                                    <a href="" className="blue-btn">Predict Now</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


            <div className="container pt-5">
                <div className="row">
                    <div className="col-12 pb-3">
                        <h6>FAQ’s About JEE Mains !</h6>
                    </div>
                    <div className="row card-3 p-2">
                        <div className="col-lg-8">
                            <div className="accordion">
                                <div className="at-item">
                                    <div className="at-title">
                                        <h2>Is JEE Mains tough?</h2>
                                    </div>
                                    <div className="at-tab">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente magni architecto, sed sit sint nostrum possimus delectus voluptatem cupiditate ea autem. Non reprehenderit numquam vero modi eaque soluta dolore autem, illum nam consectetur impedit consequuntur in, ex quidem est.

                                    </div>
                                </div>
                                <div className="at-item">
                                    <div className="at-title">
                                        <h2>How many types of B.Tech specialisations are available?</h2>
                                    </div>
                                    <div className="at-tab">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium temporibus rem commodi labore, esse amet quo eveniet veniam similique vel porro, natus a distinctio deleniti? Obcaecati quod quis optio, numquam quo vel ipsum placeat consectetur laborum tempore deleniti minus cum.

                                    </div>
                                </div>
                                <div className="at-item">
                                    <div className="at-title">
                                        <h2>Can we get a job after B.Tech?</h2>
                                    </div>
                                    <div className="at-tab">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi quo id nemo ullam suscipit architecto, beatae autem cum, similique eum laudantium. Fuga sapiente necessitatibus porro suscipit libero inventore provident nam, ullam sequi, eum error veniam, dolor explicabo eius dolore.
                                    </div>
                                </div>
                                <div className="at-item">
                                    <div className="at-title">
                                        <h2>Which B.Tech branch is best for my career?</h2>
                                    </div>
                                    <div className="at-tab">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatum aspernatur pariatur veritatis facilis adipisci ducimus, animi quas voluptatibus repudiandae officia. Obcaecati aspernatur optio quidem ad pariatur sunt totam non, qui odio. Perspiciatis voluptate, iusto quasi ipsa quaerat itaque ducimus.

                                    </div>
                                </div>

                                <div className="at-item">
                                    <div className="at-title">
                                        <h2>Can I do B.Tech without math?
                                        </h2>
                                    </div>
                                    <div className="at-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis nostrum eius alias earum error, deleniti aliquid tempora architecto, itaque voluptatum eaque inventore aut deserunt minima corporis soluta maiores eligendi ea! Ratione ullam blanditiis enim excepturi sunt autem perferendis placeat.
                                    </div>

                                </div>
                                <div className="at-item">
                                    <div className="at-title">
                                        <h2>What is the B.Tech qualification?
                                        </h2>
                                    </div>
                                    <div className="at-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis nostrum eius alias earum error, deleniti aliquid tempora architecto, itaque voluptatum eaque inventore aut deserunt minima corporis soluta maiores eligendi ea! Ratione ullam blanditiis enim excepturi sunt autem perferendis placeat.
                                    </div>

                                </div>
                                <div className="at-item">
                                    <div className="at-title">
                                        <h2>Does a B.Tech degree have a scope?
                                        </h2>
                                    </div>
                                    <div className="at-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis nostrum eius alias earum error, deleniti aliquid tempora architecto, itaque voluptatum eaque inventore aut deserunt minima corporis soluta maiores eligendi ea! Ratione ullam blanditiis enim excepturi sunt autem perferendis placeat.
                                    </div>

                                </div>
                                <div className="at-item">
                                    <div className="at-title">
                                        <h2>Which is the top Private B.Tech College in India as per NIRF Ranking ?
                                        </h2>
                                    </div>
                                    <div className="at-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis nostrum eius alias earum error, deleniti aliquid tempora architecto, itaque voluptatum eaque inventore aut deserunt minima corporis soluta maiores eligendi ea! Ratione ullam blanditiis enim excepturi sunt autem perferendis placeat.
                                    </div>

                                </div>
                                <div className="at-item">
                                    <div className="at-title">
                                        <h2>Is a B.Tech degree hard to study?
                                        </h2>
                                    </div>
                                    <div className="at-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis nostrum eius alias earum error, deleniti aliquid tempora architecto, itaque voluptatum eaque inventore aut deserunt minima corporis soluta maiores eligendi ea! Ratione ullam blanditiis enim excepturi sunt autem perferendis placeat.
                                    </div>

                                </div>
                                <div className="at-item">
                                    <div className="at-title">
                                        <h2>What are the government jobs available after completing a BTech?
                                        </h2>
                                    </div>
                                    <div className="at-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis nostrum eius alias earum error, deleniti aliquid tempora architecto, itaque voluptatum eaque inventore aut deserunt minima corporis soluta maiores eligendi ea! Ratione ullam blanditiis enim excepturi sunt autem perferendis placeat.
                                    </div>

                                </div>
                                <p className="text-center mt-4">Did you get your answer?<a href="" className="ms-2">Know More</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card faq-box">
                                <h5>Trending Article</h5>
                                <ul>
                                    <li><a href="" className="a">Lorem ipsum dollor site amet Lorem ipsum dollor site amet</a></li>
                                    <li><a href="" className="a">Lorem ipsum dollor site amet Lorem ipsum dollor site amet</a></li>
                                    <li><a href="" className="a">Lorem ipsum dollor site amet Lorem ipsum dollor site amet</a></li>
                                    <li><a href="" className="a">Lorem ipsum dollor site amet Lorem ipsum dollor site amet</a></li>
                                    <li><a href="" className="a">Lorem ipsum dollor site amet Lorem ipsum dollor site amet</a></li>
                                </ul>
                            </div>
                            <div className="card faq-box mt-3">
                                <h5>FAQs News</h5>
                                <ul>
                                    <li><a href="" className="a">Lorem ipsum dollor site amet Lorem ipsum dollor site amet</a></li>
                                    <li><a href="" className="a">Lorem ipsum dollor site amet Lorem ipsum dollor site amet</a></li>
                                    <li><a href="" className="a">Lorem ipsum dollor site amet Lorem ipsum dollor site amet</a></li>
                                    <li><a href="" className="a">Lorem ipsum dollor site amet Lorem ipsum dollor site amet</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="call-back2 mt-5">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 ms-auto">
                            <p className="f52">Ask us and get personalized response free of cost</p>
                            <h6 className="blue">Still have question about B Tech ?</h6>
                            <button className="blue-btn mt-2">Ask a Question</button>
                        </div>
                        <div className="col-lg-3 ms-auto">
                            <img src={require("../images/question.png")} className="img-fluid mt-lg-0 mt-2 float-lg-end" alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="container py-5 ">
                <div className="row">
                    <div className="col-12">
                        <h5>Comment</h5>
                        <div className="comment-review mt-3">
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <div className="comment-form mt-3">
                            <form action="">
                                <textarea name="" id="" placeholder="Write your message here.."></textarea>
                                <div className="float-end">
                                    <p className="p">Charecter:0/500</p>
                                    <button className="transparent-btn bg-remove">Submit Now</button>
                                </div>
                            </form>
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

                                <h6 className="p f29">ISC 12th Chemistry Most Imp-   ortant Topics 2024</h6>
                                <p className="p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card card-3 mt-3 px-2 pt-5">

                                <h6 className="p f29">ISC 12th Chemistry Most Imp-   ortant Topics 2024</h6>
                                <p className="p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card card-3 mt-3 px-2 pt-5">

                                <h6 className="p f29">ISC 12th Chemistry Most Imp-   ortant Topics 2024</h6>
                                <p className="p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card card-3 mt-3 px-2 pt-5">

                                <h6 className="p f29">ISC 12th Chemistry Most Imp-   ortant Topics 2024</h6>
                                <p className="p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                            </div>
                        </div>
                    </div>
                </div></div>
            <section className="trending-course">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <i className="fa-solid fa-bag-shopping" style={{ fontSize: '40px', width: '48px' }} ></i>
                                    </div>
                                    <div>
                                        <h5>Trending Courses</h5>
                                        <p>Gain professional expertise with online courses to amplify your employability</p>
                                    </div>
                                </div>
                                <div className="top-college">
                                    {/* <button>B.Tech</button>
            <button>B.Sc</button>
            <button>MBA/BGDM</button>
            <button>ME/M.Tech</button>
            <button>MBBS</button>
            <button>MD</button>
            <button>B.Com</button>
            <button>BBA/BBM</button>
            <button>M.Sc</button>
            <button>B.Ed</button>
            <button>Polytechnic</button> */}
                                    {courses.map((course, index) => (
                                        <button key={index}>{course}</button>
                                    ))}
                                    <button>View More <i className=" fa fa-angle-right"></i></button>

                                </div></div>


                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <i className="fa-solid fa-bag-shopping" style={{ fontSize: '40px', width: '48px' }} ></i>
                                    </div>
                                    <div>
                                        <h5>Trending Exams</h5>
                                        <p>Easy Information and downloads on Exam preparation, dates, counselling, syllabus and more</p>
                                    </div>
                                </div>
                                <div className="top-college">
                                    {/* <button>JEE Main</button>
        <button>GATE</button>
        <button>CATE</button>
        <button>NEET</button>
        <button>BITSAT</button>
        <button>SRMJEEE</button>
        <button>VITEEE</button>
        <button>B.Com</button>
        <button>B.Sc</button>
        <button>BE/B.Tech</button>
        <button>Nursing</button> */}
                                    {exams.map((exam, index) => (
                                        <button key={index}>{exam}</button>
                                    ))}
                                    <button>View More <i className="fa fa-angle-right"></i></button>

                                </div></div>
                        </div>

                    </div>
                </div>
            </section>




        </>
    )
}

export default CourseList
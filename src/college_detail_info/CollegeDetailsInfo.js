

import { faCalendarDays, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

function CollegeDetailsInfo() {
    useEffect(() => {
        fetch("htttd/${college}")
    })

    const Establishment = [
        {
            CollegeEstablishment: "1886",
            CollegeAffiliated: "AICTE, UGC, MHRD"
        }
    ]

    const courseData = [

        {
            courseName: "BE / B.Tech",
            numberOfCourses: "15 ",
            placementPercent: "100% Placement",
            ranking: "32 Rank of 2022",
            exam: "Exam : Jee Mains",
            rating: "7.8/10",
            noOfReview: "1542",
            specialization: "Specialization  Mechanical Engineering | Chemical Engineering.... ",
            fee: " Fee : 4.48Lakh | Seat : 868",

        },
        {
            courseName: "BE / B.Tech",
            numberOfCourses: "15 ",
            placementPercent: "100% Placement",
            ranking: "32 Rank of 2022",
            exam: "Exam : Jee Mains",
            rating: "7.8/10",
            noOfReview: "1542",
            specialization: "Specialization  Mechanical Engineering | Chemical Engineering.... ",
            fee: " Fee : 4.48Lakh | Seat : 868",

        },
    ]

    const colleges = [
        {
            name: "NIT Patna",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            city: "Benguluru",
            state: "Karnataka",
            EstablishmentYear: "1845",
            rating: "7.8/10",
            noOfReview: "1542",
        },

    ]
    return (
        <>
            <div class="banner-section55">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="text-white">National Institute of Technology, Patna</h1>
                            <div class="mini-add d-flex flex-wrap text-white mt-3">
                                <p class="me-4"><i class="fa-solid fa-location-dot me-2"></i>Patna, Bihar</p>
                                <p class="me-4"><i class="fa-solid fa-bookmark me-2"></i>AICTE, UGC, MHRD</p>
                                <p class="me-4"><i class="fa-solid fa-thumbtack me-2"></i>Estd 1886</p>
                                <p class="me-4"><i class="fa-solid fa-star text-white me-2"></i>Autonomous University</p>
                                <p class="me-4"><i class="fa-solid fa-thumbtack me-2"></i>Ranked 38 B. Tech by The Teek 2019</p>
                            </div>
                            <h3 class="text-white" className='d-flex'>
                                <p>7.8</p>
                                <div className='ms-3'>
                                    <FontAwesomeIcon className="fs-5" icon={faStar} />
                                    <FontAwesomeIcon className="fs-5" icon={faStar} />
                                    <FontAwesomeIcon className="fs-5" icon={faStar} />
                                    <FontAwesomeIcon className="fs-5" icon={faStar} />
                                    <FontAwesomeIcon className="fs-5" icon={faStar} />
                                </div>
                            </h3>
                            <p class="p text-white f-13 ms-5">485 Review</p>
                        </div>
                    </div>
                </div>
            </div>


            <section class="latest-news">
                <div class="container">
                    <div class="row">

                        {/* tab links below */}
                        <div class="col-md-12 mt-2">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#newstab-1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Info</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-2" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Course & Fee</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-3" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Review</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-4" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Admissions</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-5" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Placement</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-6" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">CutOff</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-7" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Faculty</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-8" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Hostel & Campus</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-9" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Scholarship</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-10" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Q&A</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-11" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">News</button>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- content below tabs About College / University Overview  section --> */}
                        <div class="row">
                            <div class="col-lg-9">

                                {/* about college discripition */}

                                <h5 class="fw-bold">About College / University</h5>
                                <p class="p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                    piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                                    Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                                    words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                                    literature, discovered the undoubtable source.</p>
                                <p class="p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                    piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                                    Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                                    words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                                    literature, discovered the undoubtable source. <br />Contrary to popular belief, Lorem Ipsum is not
                                    simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
                                    2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                                    up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                    the cites of the word in classical literature, discovered the undoubtable source.</p>
                                <h5 class="fw-bold">About College / University Overview</h5>


                                {/* course list */}
                                {Establishment.map((item, index) => (
                                    <div key={index}>
                                        {Object.entries(item).map(([key, value]) => (
                                            // <div key={key}>

                                            <table class="table table-bordered table-striped text-center">
                                                <tbody className="">
                                                    <tr className=''>
                                                        <td className='w-50'>{key}</td>
                                                        <td className='w-50'>{value}</td>

                                                    </tr>

                                                </tbody>
                                            </table>

                                        ))}
                                    </div>
                                ))}


                                {/* <!-- Facility of College --> */}
                                <div class="bg-66">
                                </div>
                                <h5 class="fw-bold mt-3">NIT Patna Popular Courses</h5>
                                <p class="p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                    piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                                    Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                                    words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                                    literature, discovered the undoubtable source.
                                </p>



                                <div class="row align-items-center mt-4">
                                    <div className=''>
                                        {courseData.map((data, index) => (
                                            <React.Fragment key={index} >
                                                <div className="card-5 col-12">
                                                    <div className="row align-items-center">

                                                        <div className="col-lg-8" >

                                                            <h6 className="fw-bold">{data.courseName}</h6>

                                                            <button className='me-2'>{data.numberOfCourses}  Courses</button>
                                                            <button className='me-2'>{data.placementPercent}</button>
                                                            <button className='me-2'>{data.ranking} Rank of 2022</button>
                                                            <button>Exam : {data.exam}</button>

                                                        </div>
                                                        <div className="col-lg-2 ms-5 ms-lg-auto">
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <div>
                                                                    <p><FontAwesomeIcon icon={faStar} className="fs-3" style={{ color: "#FFD43B", }} /></p>
                                                                </div>
                                                                <div>
                                                                    <span className="text-dark">{data.rating}</span>
                                                                    <p className="p">{data.noOfReview} Reviews</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-12 ">
                                                            <hr />
                                                            <p className="p">{data.specialization}
                                                            </p>
                                                            <h6>Fee : {data.fee} | Seat : {data.seats}</h6>
                                                            <div className="d-flex gap-3">
                                                                <a href="" className="btn-3">Free Details</a>
                                                                <a href="" className="btn-3">Download Brochure <i className="fa-solid fa-download ms-1"></i></a>
                                                                <a href="" className="btn-3">Compare <i className="fa-solid fa-code-compare ms-1"></i></a>
                                                                <a href="" className="btn-3">Share<i className="fa-solid fa-share ms-1"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        ))}
                                    </div>

                                </div>

                                <div className="row mt-4">

                                    <h5 class="fw-bold mt-4">Popular Engineering Colleges</h5>
                                    <p class="p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                        piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                    </p>

                                    {colleges.map((college) => (
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className='d-flex gap-3'>
                                                        <div>
                                                            <div class="round-box3"></div>
                                                        </div>

                                                        <div>
                                                            <h6 class="fw-bold text-dark">{college.name}</h6>
                                                            <p class="p">{college.about}</p>
                                                            <div class="mini-add d-flex flex-wrap mt-3 ">
                                                                <p class="me-4 f-14 "><FontAwesomeIcon className='text-dark me-2' icon={faLocationDot} />{college.city},{college.state}</p>
                                                                <p class="me-4 f-14"><FontAwesomeIcon icon={faCalendarDays} className='me-2' />{college.EstablishmentYear}</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-2 ms-lg-auto">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="">
                                                            <p><FontAwesomeIcon icon={faStar} className="fs-3" style={{ color: "#FFD43B", }} /></p>
                                                        </div>
                                                        <div className="">
                                                            <span className='text-dark'>{college.rating}</span>
                                                            <p>{college.noOfReview} Review</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-12 text-center">
                                                    <a href="" class="btn-3">View Details <i class="fa-solid fa-angle-right me-1"></i></a>
                                                    <a href="" class="btn-3">Download Brochure <i class="fa-solid fa-download me-1"></i></a>
                                                </div>

                                            </div>
                                        </div>

                                    ))}

                                </div>

                                <div className="row">
                                    <div class="d4 mt-5 py-3 px-2">
                                        <div class="row align-items-center">
                                            <div class="col-lg-8 p-4">
                                                <h6 class="fw-bold">Are you confused into selecting College or Courses ?</h6>

                                                <ul class="listing2">
                                                    <li>Contrary to popular belief, Lorem Ipsum is not s. It has roots</li>
                                                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</li>
                                                    <li>Contrary to popular belief, Lore</li>
                                                    <li>Contrary to popular belief, Lorem Ipsum is not simply ra</li>
                                                </ul>

                                                <a href="" class="blue-btn">Get Free Counselling<i
                                                    class="fa-solid fa-chevron-right ms-1"></i>
                                                </a>
                                            </div>

                                            <div class="col-lg-4 mt-4 mt-lg-0">
                                                <img src={require("../images/confused1.png")} class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>




                                    <div class="row video-section mt-3">
                                        <div class="owl-carousel owl-theme">
                                            <div class="item">
                                                <a href=""><img src={require("../images/card-video.png")} alt="" /></a>
                                            </div>
                                            <div class="item">
                                                <a href=""><img src={require("../images/card-video.png")} alt="" /></a>
                                            </div>
                                            <div class="item">
                                                <a href=""><img src={require("../images/card-video.png")} alt="" /></a>
                                            </div>
                                            <div class="item">
                                                <a href=""><img src={require("../images/card-video.png")} alt="" /></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}

export default CollegeDetailsInfo
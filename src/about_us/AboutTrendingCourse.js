

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBook } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon="fa-sharp fa-solid fa-book" />
function AboutTrendingCourse() {
    const Courses = ["B.Tech", "B.Sc", "MBA/BGDM", "ME/M.Tech", "MBBS", "MD", "B.Com", "BBA/BBM", "M.Sc", "B.Ed", "Polytechnic", "View More"]
    const Exams = ["JEE Main", "GATE", "CATE", "NEET", "BITSAT", "SRMJEEE", "VITEEE", "B.Com", "B.Sc", "BE/B.Tech", "Nursing"]
    return (
        <>
            <section className="trending-course">
                <div className="container pt-5">
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="d-flex ">
                                    <div>
                                        <FontAwesomeIcon className='fs-2' style={{ color: "#291892" }} icon={faBagShopping} />
                                    </div>
                                    <div className='ms-4'>
                                        <h5>Trending Courses</h5>
                                        <p>Gain professional expertise with online courses to amplify your employability</p>
                                    </div>
                                </div>
                                <div className="top-college">
                                    {Courses.map((course) => (

                                        <button >{course}</button>


                                    ))}

                                    <button>View More <i className="fa fa-angle-right"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">

                            <div className="card ">
                                <div className="d-flex">
                                    <div>
                                        <FontAwesomeIcon className='fs-2' style={{ color: "#291892" }} icon={faBook} />
                                    </div>
                                    <div className='ms-4'>
                                        <h5>Trending Exams</h5>
                                        <p>Easy Information and downloads on Exam preparation, dates, counselling, syllabus and more</p>
                                    </div>
                                </div>
                                <div className="top-college">
                                    {Exams.map((exam) => (

                                        <button >{exam}</button>
                                    ))}

                                    <button>View More <i className="fa fa-angle-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                

                </div>
        </section >
    </>
  )
}

export default AboutTrendingCourse
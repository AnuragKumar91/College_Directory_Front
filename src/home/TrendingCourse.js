import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faBagShopping, faBook } from '@fortawesome/free-solid-svg-icons'
import { AngleRightArraow } from '../icons/LocationIcon';
{/* <FontAwesomeIcon icon="fa-solid fa-mug-saucer" /> */ }
<FontAwesomeIcon icon="fa-sharp fa-solid fa-book" />
function TrendingCourse() {

    

    const Courses = ["B.Tech", "B.Sc", "MBA/BGDM", "ME/M.Tech", "MBBS", "MD", "B.Com", "BBA/BBM", "M.Sc", "B.Ed", "Polytechnic", "View More"]
    const Exams = ["JEE Main", "GATE", "CATE", "NEET", "BITSAT", "SRMJEEE", "VITEEE", "B.Com", "B.Sc", "BE/B.Tech", "Nursing"]

    function sendPath(path){
        console.log(path)
    }
    return (
        <section className="trending-course">
            <div className="container pt-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="d-flex ">
                                <div>
                                    <FontAwesomeIcon className='fs-2' style={{color:"#291892"}} icon={faBagShopping} />
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

                                <button>View More <AngleRightArraow /></button>
                            </div>
                        </div>

                        <div className="card mt-3">
                            <div className="d-flex">
                                <div>
                                    <FontAwesomeIcon className='fs-2' style={{color:"#291892"}} icon={faBook} />
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

                                <button>View More <AngleRightArraow /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={require("../images/trending-course.png")} className="img-fluid" alt="Trending Courses" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrendingCourse;



import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoPerson } from "react-icons/io5";


function Testomonial() {
    // slider setting below
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // take dynamic data from above
    const TestimonialData = [
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            name: "Suraj Shukla",
            jobRole: "Graphic Designer"
        },
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            name: "Suraj Shukla",
            jobRole: "Graphic Designer"
        },
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            name: "Suraj Shukla",
            jobRole: "Graphic Designer"
        }
    ];


    return (
        <>
            <section class="testmonials">
                <div class="container pt-5">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="row">
                                <div class="col-6">
                                    <div class="test-box">
                                        <img src={require("../images/course.png")} alt="" />
                                        <h6>Courses</h6>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="test-box">
                                        <img src={require("../images/exams.png")} alt="" />
                                        <h6>Exam</h6>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="test-box">
                                        <img src={require("../images/study_materials.png")} alt="" />
                                        <h6>Study Material</h6>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="test-box">
                                        <img src={require("../images/quiz.png")} alt="" />
                                        <h6>Quiz</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7 ms-0 ms-lg-5">
                            <div class="test-content mt-3 mt-md-0">
                                <h6>TESTMONIALS</h6>
                                <h4>WHAT OUR STUDENT SAY</h4>
                                <p>The story of people who achieved their higher education dreams with College Directory</p>
                            </div>

                            {/* Testomonial crousal */}
                            <div class="slider-box">
                                <div class="card">
                                    <div class="col-12">
                                        <Slider {...settings}>
                                            {TestimonialData.map((data) => (

                                                <div class="item">
                                                    <p>{data.description}</p>
                                                    <div className='d-flex'>
                                                        <p class="fw-bold"><IoPerson className='fs-5 me-2' /> </p>
                                                        <p className='"fw-bold'>{data.name}, {data.jobRole}</p>
                                                    </div>

                                                </div>
                                            ))}
                                        </Slider >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


  

        </>
    )
}

export default Testomonial
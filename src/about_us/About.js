
import React from 'react'
import CounterExamCourse from './CounterExamCourse'
import TestimonialAboutPage from './TestimonialAboutPage'
import AboutTrendingCourse from './AboutTrendingCourse'
import Subscribe from '../home/Subscribe'
import { FaPlay } from "react-icons/fa";

function About() {
    return (
        <>
            <section class="about-section">
                <div class="container perfect2">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <h4>About Us</h4>
                            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                                demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
                                foresee the pain and trouble that are bound to.</p>
                            <p>ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the
                                same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to
                                distinguish. In a free hour, when our power of choice is untrammeled and when nothing prevents our
                                being able to</p>
                            <p> ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is
                                the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy
                                to distinguish. In a free hour, when our power of choice is untrammeled and when nothing prevents
                                our being able to</p>
                        </div>
                        <div class="col-lg-5 ms-auto">
                            <img src={require("../images/about-right.png")} alt="" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-section2">
                <div class="container perfect2 py-5">
                    <div class="row align-items-center">
                        <div class="col-lg-4">
                            <img src={require("../images/mission.png")} class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-8 mt-3 mt-lg-0">
                            <h5>Our Mission</h5>
                            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                                demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
                                foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in
                                their duty through weakness of will, which is the same as saying through shrinking from toil and
                                pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of
                                choice is untrammeled and when nothing prevents our being able to</p>
                            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                                demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
                                foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in
                                their.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- this is our vission --> */}
            <section class="about-section2">
                <div class="container perfect2 pt-5">
                    <div class="row align-items-center">

                        <div class="col-lg-6">
                            <h5>Our Vission</h5>
                            <p class="">On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they
                                cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who
                                fail in their duty through weakness of will, which is the same as saying through shrinking from toil
                                and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power
                                of choice is untrammeled and when nothing prevents our being able to</p>
                            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                                demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                                the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their.
                            </p>
                        </div>
                        <div class="col-lg-6">
                            <img src={require("../images/vision.png")} class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* counter for exam course and monthly visit */}
            <CounterExamCourse />

            {/* video section */}
            <div class="container py-5">
                <div class="row">
                    <div class="col-12">
                        <div class="video-box">
                            <a href="" class="round">
                                <FaPlay className='fs-3' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <TestimonialAboutPage />

            <AboutTrendingCourse />

            <Subscribe />
        </>
    )
}

export default About
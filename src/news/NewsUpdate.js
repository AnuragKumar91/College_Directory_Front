

import { faMoneyCheckDollar, faPlay, faShare, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonGroup from '../news/ButtonGroup'
import PopularNews from './PopularNews';

import TrendingNews from './TrendingNews';
import ExamNews from './ExamNews';
import StarRating from '../home/StartRating';
import TopColleges from '../college/TopColleges';

function NewsUpdate() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,

        },
        laptop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 576 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
        },
    };

    const TrendingNewsData = [
        {
            title: "ISC 12th Chemistry Most Important Topics 2024",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
        },
        {
            title: "ISC 12th Chemistry Most Important Topics 2024",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
        },
        {
            title: "ISC 12th Chemistry Most Important Topics 2024",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
        },
        {
            title: "ISC 12th Chemistry Most Important Topics 2024",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
        },
    ]


    return (
        <>

            <div className="banner-section2">
                <div className="banner-section-content pt-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-6">
                                <h6><a href="1">Home</a>/News & Updates</h6>
                            </div>
                            <div className="col-lg-4 col-6 ms-auto">
                                <h6 className="float-end "><FontAwesomeIcon icon={faShare} className='me-2' />Share Page</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* navbar menu tabs */}
            <section className="latest-news">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <ul className="nav nav-pills mb-3 d-flex justify-content-between" id="pills-tab" role="tablist">

                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#newstab-1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All News</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-2" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Medical</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-3" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Engineering</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-4" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Exam Notice</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-5" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Placement</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-6" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Other</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#newstab-7" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">IT</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#newstab-8" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Art</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#newstab-9" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Science</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#newstab-10" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">More <i className="fa fa-caret-down"></i></button>
                                </li>

                            </ul></div>

                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active " id="newstab-1" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="card">
                                            <div className="youtube-box">

                                                <a href="" className="round-2">
                                                    <FontAwesomeIcon icon={faPlay} />
                                                </a>
                                            </div>
                                        </div></div>
                                    <div className="col-lg-8">
                                        <div className="card p-2">

                                            <div className="card-body p-3">
                                                <h5>Engineering</h5>
                                                <h5 className="fw-bold text-dark">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</h5>
                                                <h6>By- <span className="blue">Shishupal Singh</span> | February 21, 2024 12:45AM | 3 minute read</h6>
                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut enim ad minim veniam3</p>
                                                <button className="transparent-btn">Continue Reading</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div className="tab-pane fade show " id="newstab-2" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="row">

                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="tab-pane fade show " id="newstab-3" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-12">
                                        <h5>Exam News</h5>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">

                                                <h5 className="text-dark">Lorem ipsum dolor sit amet consectetur</h5>
                                                <p>Lorem ipsum dolor sit amet consect Lorem, ipsum dolor. Lorem, ipsum dolor.</p>
                                                <h6><i className="fa-regular fa-clock me-1"></i>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">

                                                <h5 className="text-dark">Lorem ipsum dolor sit amet consectetur</h5>
                                                <p>Lorem ipsum dolor sit amet consect Lorem, ipsum dolor. Lorem, ipsum dolor.</p>
                                                <h6><i className="fa-regular fa-clock me-1"></i>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">

                                                <h5 className="text-dark">Lorem ipsum dolor sit amet consectetur</h5>
                                                <p>Lorem ipsum dolor sit amet consect Lorem, ipsum dolor. Lorem, ipsum dolor.</p>
                                                <h6><i className="fa-regular fa-clock me-1"></i>Saturday, Feb 24, 2024 | 12:42pm</h6>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <h5>Trending News</h5>
                                            <div className="d-flex">
                                                <div className="mini-box2"></div>
                                                <div className="ms-2"><h6>RGUSH Result 2024</h6>
                                                    <h6><i className="fa-regular fa-clock me-1"></i>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="mini-box2"></div>
                                                <div className="ms-2"><h6>RGUSH Result 2024</h6>
                                                    <h6><i className="fa-regular fa-clock me-1"></i>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="mini-box2"></div>
                                                <div className="ms-2"><h6>RGUSH Result 2024</h6>
                                                    <h6><i className="fa-regular fa-clock me-1"></i>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="mini-box2"></div>
                                                <div className="ms-2"><h6>RGUSH Result 2024</h6>
                                                    <h6><i className="fa-regular fa-clock me-1"></i>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>


                            <div className="tab-pane fade show " id="newstab-4" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="row">

                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="tab-pane fade show " id="newstab-5" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="row">

                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="tab-pane fade show " id="newstab-6" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="row">

                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="tab-pane fade show " id="newstab-7" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="row">

                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="tab-pane fade show " id="newstab-8" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="row">

                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="tab-pane fade show " id="newstab-9" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="row">

                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card p-2">
                                            <img src={require("../images/drs.png")} alt="" />
                                            <div className="card-body p-0">
                                                <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                                <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>
                    </div></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card p-2">
                                <img src={require("../images/drs.png")} alt="" />
                                <div className="card-body p-0">
                                    <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                    <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card p-2">
                                <img src={require("../images/drs.png")} alt="" />
                                <div className="card-body p-0">
                                    <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                    <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card p-2">
                                <img src={require("../images/drs.png")} alt="" />
                                <div className="card-body p-0">
                                    <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                    <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card p-2">
                                <img src={require("../images/drs.png")} alt="" />
                                <div className="card-body p-0">
                                    <h6>Saturday, Feb 24, 2024 | 12:42pm</h6>
                                    <h5>ISC 12th Chemistry Most Important Topics 2024</h5>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* subscribe button */}
            <div className="middle-sec mt-5 py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-8 text-center ms-auto">
                            <p>Join us and get exclusive education updates! <Link to="" className=' ' style={{ "textDecoration": "none" }}>Subscribe Now</Link></p>
                        </div>
                        <div className="col-2">
                            <img src={require("../images/vector5.png")} className="img-fluid float-end" alt="" />
                        </div>

                    </div>
                </div>
            </div>

            {/* Tending news */}

            <div className="news-section4">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="fw-bold">Trending news</h5>
                        </div>
                        <div className="col-12 bca">

                            <Carousel
                                responsive={responsive}
                                arrows={true}
                                // centerMode={true}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                keyBoardControl={true}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                {TrendingNewsData.map((news) => (
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body p-1">
                                                <h5>{news.title}</h5>
                                                <p>{news.description}</p>

                                            </div>
                                        </div>
                                    </div>

                                ))
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>


            {/* latest news */}
            <div className="latest-news">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5>Exam News</h5>
                        </div>
                        <div className="col-lg-9 col-md-6 ">
                            <ExamNews />
                        </div>

                        <div className="col-lg-3 col-md-6 ">
                            <TrendingNews />
                            <PopularNews />

                        </div>
                    </div>
                </div>
            </div>


            {/* Top Colleges */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">

                        <div className="col-12">
                            <h5 className="fw-bold">Top Colleges</h5>
                        </div>

                        <TopColleges />
                    </div>


                </div>
            </div>
        </>
    )
}

export default NewsUpdate
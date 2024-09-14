import React from "react"
import { FaChevronRight } from "react-icons/fa";


const LatestNews = () => {

    const TodayNews = [
        {
            imagePath: require("../images/drs.png"),
            title: "Duis aute irure dolor in reprehenderit in olore eu fugiat nulla..........",
            date: "Monday, Feb 2, 2024",
            newsDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Duis aute irure dolor."
        },
        {
            imagePath: require("../images/drs.png"),
            title: "Duis aute irure dolor in reprehenderit in olore eu fugiat nulla..........",
            date: "Monday, Feb 2, 2024",
            newsDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Duis aute irure dolor."
        },
        {
            imagePath: require("../images/drs.png"),
            title: "Duis aute irure dolor in reprehenderit in olore eu fugiat nulla..........",
            date: "Monday, Feb 2, 2024",
            newsDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Duis aute irure dolor."
        },

    ];

    return (
        <section class="latest-news">
            <div class="container">
                <div class="row">
                    <div class="animation">
                        <img src={require("../images/piramid.png")} alt="" />
                    </div>
                    <div class="col-12">
                        <h5 class="fw-bold"><span class="underline">Latest</span> News</h5>
                    </div>

                    {/* Navbar buttons */}
                    <div class="col-md-8 mt-3 float-start">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                    aria-selected="true">Today News</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                    aria-selected="false">Counselling News</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                    aria-selected="false">Colleges News</button>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-2 mt-3 ms-auto">
                        <a href="" class="ms-auto more float-end">View more</a>
                    </div>


                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                            <div className="row">
                                {TodayNews.map((news, index) => (
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="card c-1">
                                            <img src={news.imagePath} alt="" />
                                            <div className="card-body">
                                                <h5>{news.title}</h5>
                                                <h6>{news.date}</h6>
                                                <p>{news.newsDescription}</p>
                                                <a href="">Read More <FaChevronRight /></a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                            <div className="row">
                                {TodayNews.map((news, index) => (
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="card c-1">
                                            <img src={news.imagePath} alt="" />
                                            <div className="card-body">
                                                <h5>{news.title}</h5>
                                                <h6>{news.date}</h6>
                                                <p>{news.newsDescription}</p>
                                                <a href="">Read More <FaChevronRight /></a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                            <div className="row">
                                {TodayNews.map((news, index) => (
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="card c-1">
                                            <img src={news.imagePath} alt="" />
                                            <div className="card-body">
                                                <h5>{news.title}</h5>
                                                <h6>{news.date}</h6>
                                                <p>{news.newsDescription}</p>
                                                <a href="">Read More <FaChevronRight /></a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default LatestNews
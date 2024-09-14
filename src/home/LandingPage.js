
import React, { useState, useEffect } from 'react'
import '../style.css'
import CourseButton from './CourseButton'
import CollegeCard from './CollegeCard'
import TrendingCourse from './TrendingCourse'
import AdmissionProcess from './AdmissionProcess'
import Testomonial from './Testomonial'
import StudyAbord from './StudyAbord'
import PopularCity from './PopularCity';
import LatestNews from './LatestNews'
import FreeCounselling2 from './FreeCounselling2'
import Banner from './Banner'
import Subscribe from './Subscribe'
import RegisterModel from '../auth/RegisterModel'
import qs from 'qs';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useStore from '../zustand_redux/ReactStore'


function LandingPage() {
    const [from] = useState(0);
    const [speed] = useState(1000);
    // for model 
    const [show, setShow] = useState(false);
    const [hasModalBeenShown, setHasModalBeenShown] = useState(false);
    const [collegeCount, setCollegeCount] = useState(from);
    const [examCount, setExamCount] = useState(from);
    const [courseCount, setCourseCount] = useState(from);
    const [collegeData, setCollegeData] = useState([])
    const [searchInput, setSearchInput] = useState()
    const [cityData, setCityData] = useState([])

    //zustand store funtion and state imported
    const { storeCollegeData, college, clearCollegeData } = useStore()
    const collegeEndValue = 100;
    const examEndValue = 270;
    const courseEndValue = 3000;

    // counter for exam college
    useEffect(() => {
        const increment = (endValue) => (endValue - from) / (speed / 1000 * 40); // Calculate increment per frame (assuming 40 FPS)

        const updateCount = (currentCount, endValue, setCount, intervalId) => {
            let newCount = currentCount + increment(endValue);
            if (newCount >= endValue) {
                newCount = endValue;
                clearInterval(intervalId);
            }
            setCount(Math.floor(newCount)); // Use Math.floor to avoid floating-point issues
            return newCount;
        };

        const intervalId1 = setInterval(() => {
            setCollegeCount((current) => updateCount(parseInt(current), collegeEndValue, setCollegeCount, intervalId1));
        }, 25);

        const intervalId2 = setInterval(() => {
            setExamCount((current) => updateCount(parseInt(current), examEndValue, setExamCount, intervalId2));
        }, 25);

        const intervalId3 = setInterval(() => {
            setCourseCount((current) => updateCount(parseInt(current), courseEndValue, setCourseCount, intervalId3));
        }, 25);

        return () => {
            clearInterval(intervalId1);
            clearInterval(intervalId2);
            clearInterval(intervalId3);
        };
    }, [from, speed, collegeEndValue, examEndValue, courseEndValue]);


    const handleClose = () => setShow(false);

    const openModel = () => {
        console.log("Modal opened");
        setShow(true);
        setHasModalBeenShown(true);
    };

    // turn off model with scroll 20000px change it later
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 150000 && !hasModalBeenShown) {
                openModel();
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasModalBeenShown]);

    // get college data
    useEffect(() => {
        const fetchCollegeData = async () => {
            try {
                const response = await fetch(
                    // "http://localhost/api/api/college-list",
                    "https://admissioninnepal.in/api/college-list",
                    {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: qs.stringify({ key: process.env.REACT_APP_KEY }),
                    }
                );
                if (!response.ok) {
                    console.log("jsadfkjaslkfh")
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data = await response.json();
                console.log("data.data")
                console.log(data.data)
                clearCollegeData(); // Clear existing data before fetching new data

                storeCollegeData(data.data);
            } catch (error) {
                console.error("Fetching college data failed", error);
            }
        };

        fetchCollegeData();
    }, [storeCollegeData, clearCollegeData]);

    //get city data
    useEffect(() => {
        const fetchCollegeData = async () => {
            try {
                const response = await fetch(
                    process.env.REACT_APP_SERVER_URL +"/api/city-list",
                    {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: qs.stringify({ key: process.env.REACT_APP_KEY }),
                    }
                );
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data = await response.json();
        
                setCityData(data.data);
            } catch (error) {
                console.error("Fetching college data failed", error);
            }
        };

        fetchCollegeData();
    }, [storeCollegeData, clearCollegeData]);



    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,

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

    const handleInput = (e) => {
        console.log(e)
        setSearchInput(e.target.value)
    };

    return (
        <>
            {/* open model when scroll */}
            {show &&
                <RegisterModel show={show} handleClose={handleClose} />
            }

            <div className="banner">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="banner-content">
                                <button className="mt-4 btn-3">We' ve got your covered</button>
                                <h1 className="mt-4"><span>From</span> College Admissions <span>Being</span> Job Ready </h1>
                                <p className="mt-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo con</p>
                                <button className="mt-4 search-btn w-100 d-flex justify-content-between align-items-center"
                                    data-bs-toggle="modal" data-bs-target="#serching-modal"><i className="fa-solid fa-magnifying-glass"
                                        style={{ color: "#CCCAD7" }}></i>


                                    <input type="text"
                                        placeholder="What are you looking for, college, course or exam...."
                                        onChange={(e) => handleInput}
                                        value={searchInput}

                                    />
                                    <div className="search">Search</div>
                                </button>



                                <div className="row">
                                    <div className="col-lg-4 col-sm-4 col-4 p-1 mt-5">
                                        <div className="box text-center">
                                            <img src={require("../images/frame1.png")} className="d-block m-auto" alt="" />
                                            <span className="text-white span1 mt-3">{collegeCount}</span>
                                            <span className="text-white span2 mt-3">Colleges</span>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-4 col-4 p-1 mt-5">
                                        <div className="box text-center">
                                            {/* <img src="../images/ex" alt="" /> */}
                                            <img src={require("../images/exam.png")} className="d-block m-auto" alt="" />
                                            <span className="text-white span1 mt-3">{examCount}</span>
                                            <span className="text-white span2 mt-3">Exams</span>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-4 col-4 p-1  mt-5">
                                        <div className="box text-center">
                                            <img src={require("../images/courses.png")} className="d-block m-auto" alt="" />
                                            <span className="text-white span1 mt-3">{courseCount}</span>
                                            <span className="text-white span2 mt-3">Courses</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="images">
                                <img src={require("../images/right-image.png")} className="img-fluid" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* card overloap on home page */}
            <section className="section2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="box2">
                                <div className="row align-items-center">
                                    <div className="col-2">
                                        <div className="abc">
                                            <h5>24</h5>
                                        </div>
                                    </div>
                                    <div className="col-10">
                                        <h5>Lorem ipsum dolor sit.</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="box2">
                                <div className="row align-items-center">
                                    <div className="col-2">
                                        <div className="abc">
                                            <h5>24</h5>
                                        </div>
                                    </div>
                                    <div className="col-10">
                                        <h5>Lorem ipsum dolor sit.</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="box2">
                                <div className="row align-items-center">
                                    <div className="col-2">
                                        <div className="abc">
                                            <h5>24</h5>
                                        </div>
                                    </div>
                                    <div className="col-10">
                                        <h5>Lorem ipsum dolor sit.</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular City */}
            <PopularCity cityData={cityData}/>

            {/* trending courses buttons */}
            <section className="section3">
                <div className="container pt-5">
                    <div className="row">


                        <div className="col-12 top-college">
                            <CourseButton />
                        </div>

                    </div>
                </div>
            </section>

            {/* trending courses and college */}
            <section className="section3">
                <div className="container pt-3">
                    <div className="row">
                        <Carousel
                            responsive={responsive}
                            arrows={false}
                            centerMode={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            keyBoardControl={true}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {college.map((data) => (
                                <div className="mx-2">

                                    <CollegeCard data={data} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* Trending course and Exams */}
            <TrendingCourse />

            {/* Know your chances for Admission */}
            <section className="section6 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <h1 className="text-white">Know your chances for Admission</h1>
                            <p className="">Duis aute irure dolor in reprehenderit in voluptate vel Duis aute irure dolor in
                                reprehenderit in</p>
                            <button>Start Now <i className="fa fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* AdmissionProcess */}
            <AdmissionProcess />

            {/* what we provie page */}
            <section className="provide">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="fw-bold"><span className="underline">What</span> We Provide</h5>
                        </div>
                        <div className="col-lg-6 mt-3">
                            <div className="card">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <h6><i className="fa-solid fa-newspaper me-3"></i>Counselling Guideline</h6>
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo con</p>
                                        <button>Get Started<i className="fa-solid fa-arrow-right-long ms-2"></i></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 mt-3">
                            <div className="card">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <h6><i className="fa-solid fa-newspaper me-3"></i>College Prediction</h6>
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo con</p>
                                        <button>Get Started<i className="fa-solid fa-arrow-right-long ms-2"></i></button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        
                        <div className="col-lg-6 mt-3">
                            <div className="card">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <h6><i className="fa-solid fa-newspaper me-3"></i>News & Updates</h6>
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo con</p>
                                        <button>Get Started<i className="fa-solid fa-arrow-right-long ms-2"></i></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 mt-3">
                            <div className="card">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <h6><i className="fa-solid fa-newspaper me-3"></i>Job Ready Courses</h6>
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo con</p>
                                        <button>Get Started<i className="fa-solid fa-arrow-right-long ms-2"></i></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Preparation provide">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="fw-bold"><span className="underline">Exam</span> Preparation</h5>
                        </div>
                        <div className="col-lg-6 mt-3">
                            <div className="card">
                                <div className="row">
                                    <div className="col-12">
                                        <h6>AIEE</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <button className="mt-3">Join Now<i className="fa-solid fa-arrow-right-long ms-2"></i></button>
                                        <img src={require("../images/neet.png")} alt="" style={{ width: "170px", float: "right" }} />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6 mt-3">
                            <div className="card">
                                <div className="row">
                                    <div className="col-12">
                                        <h6>NEET</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <button className="mt-3">Join Now<i className="fa-solid fa-arrow-right-long ms-2"></i></button>
                                        <img src={require("../images/neet.png")} alt="" style={{ width: "170px", float: "right" }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testomonial />

            <StudyAbord />

            <LatestNews />
            <Banner />

            <FreeCounselling2 />
            <Subscribe />
        </>
    )
}
export default LandingPage;
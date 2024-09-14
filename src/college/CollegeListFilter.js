import React, { useState } from 'react';
import FilterByCourse from '../courses/FilterByCourse';
import { faArrowLeft, faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RightArraow } from '../icons/LocationIcon';

function CollegeListFilter({showFilterMenuMobile, setShowFilterMenuMobile}) {

    const courses = ["Master of Arts", "CA", "MBA", "ME/M.tech", "MBBS", "MD", 'B.COM', "BBA/BBM", "M.Sc", "B.Ed", "Polytechnic"];
    const exams = ["Jee Mains", "GATE", "CATE", "NEET", "BITSAT", "SRMJEE", "VITEEE", "B.Com", "B.Sc", "BE/B.Tech", "Nursing"];
    const Durations = [6, 5, 4, 3, 2, 1];

    const CourseInCollege = [
        {
            CourseName: "Bachelor of Technology",
            Duration: "4 years",
            Fee: "50k - 1.5L",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ];

    const FilterCategory = ["Degree", "State", "City"];
    const options = {
        Degree: ["UG", "PG"],
        State: ["Bihar", "UP"],
        City: ["Patna", "Lucknow"] // Example cities
    };

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (category) => {
        setSelectedCategory(category);
        setShow(true);
    };

    function openFilter() {
        setShowFilterMenuMobile(!showFilterMenuMobile);
    }

    return (
        <>
            {/* left side filter for desktop */}

            <div className='desktop-filter'>
                <div className="side-card p-3 mt-3">
                    <h5>Top Searches</h5>
                    <form action="">
                        <input type="text" placeholder="Search" className="form-control mysearch mt-3 mb-3" />

                        {courses.map((course, index) => (
                            <div className="mt-1" key={index}>
                                <input type="checkbox" name="courses" id={`course_${index}`} />
                                <label htmlFor={`course_${index}`} className="small-label ms-1">{course}</label>
                            </div>
                        ))}
                    </form>
                </div>

                <div className="side-card p-3 mt-3">
                    <h5>Duration</h5>
                    <form action="">
                        <input type="text" placeholder="Search" className="form-control mysearch mt-3 mb-3" />

                        {Durations.map((duration, index) => (
                            <div className="mt-1" key={index}>
                                <input type="checkbox" name="courses" id={`duration_${index}`} />
                                <label htmlFor={`duration_${index}`} className="small-label ms-1">{duration} years</label>
                            </div>
                        ))}

                        <div className="mt-1">
                            <input type="checkbox" name="courses" id="duration_less_1" />
                            <label htmlFor="duration_less_1" className="small-label ms-1">Less than 1 year</label>
                        </div>
                    </form>
                </div>

                <div className="side-card p-3 mt-3">
                    <h5>Mode of Courses</h5>
                    <form action="">
                        <input type="text" placeholder="Search" className="form-control mysearch mt-3 mb-3" />
                        <div className="mt-1">
                            <input type="checkbox" name="courses" id="regular" />
                            <label htmlFor="regular" className="small-label ms-1">Regular</label>
                        </div>
                        <div className="mt-1">
                            <input type="checkbox" name="courses" id="distance" />
                            <label htmlFor="distance" className="small-label ms-1">Distance</label>
                        </div>
                        <div className="mt-1">
                            <input type="checkbox" name="courses" id="part_time" />
                            <label htmlFor="part_time" className="small-label ms-1">Part Time</label>
                        </div>
                    </form>
                </div>
            </div>

            {/* mobile screen filter */}
            <div className="mobile-filter mt-4" style={{ zIndex: "1" }}>
                {/* show show button when showFilterMenuMobile = false */}
                {!showFilterMenuMobile &&
                    <button onClick={openFilter} className='filter-button fs-2'>
                        <FontAwesomeIcon icon={faSliders} />
                    </button>
                }

                {/* show filter when showFilterMenuMobile = true */}
                {showFilterMenuMobile &&
                    <>
                        <div className="col-12 nav-side d-flex align-items-center">
                            <span>
                                <FontAwesomeIcon icon={faArrowLeft} className='me-2' onClick={openFilter} />FILTERS
                            </span>
                            <div className="ms-auto">
                                <button className='filter-button' style={{ color: "blue" }}>Reset</button>
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-lg-4 col-5">
                                <ul className="list-group">
                                    {FilterCategory.map((category) => (
                                        <li
                                            key={category}
                                            className="list-group-item"
                                            onClick={() => handleShow(category)}
                                        >
                                            <b>{category}</b>
                                            <span className='float-end'><RightArraow /></span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-lg-8 col-7 p-0">
                                {/* search bar */}
                                <div className="d-flex">
                                    <input
                                        type="text"
                                        id="search-input1"
                                        placeholder="Search"
                                        className="form-control filter-shadow"
                                    />
                                    <p className='' style={{ position: "relative", margin: "5px 0px 0px -25px" }}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </p>
                                </div>

                                <div className="check-box-content mt-4">
                                    {selectedCategory && options[selectedCategory].map((item, index) => (
                                        <div key={index} className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id={`checkbox_id_${selectedCategory}_${index}`}
                                                value={item}
                                            />
                                            <p className="form-check-label" htmlFor={`checkbox_id_${selectedCategory}_${index}`}>
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default CollegeListFilter;


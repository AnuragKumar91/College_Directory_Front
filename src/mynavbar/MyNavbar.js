

import React, { useState } from 'react'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyNavbar() {
    const [courseToggle, setCourseToggle] = useState(false)
    const [examToggle, setExamToggle] = useState(false)

    const handleMouseEnter = (toggleFunction) => {
        toggleFunction(true);
    };

    const handleMouseLeave = (toggleFunction) => {
        toggleFunction(false);
    };

    return (
        <>
            <header className="p-0">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-4 d-none d-lg-block ps-5">
                            <a className="navbar-brand text-white" href="index.php">
                                <img src={require("../images/logo icon.png")} alt="logo" className="" />
                                <span className="ms-2">College Directory</span>
                            </a>
                        </div>

                        <div className="col-lg-8 border-lefting">

                            {/* study details nav link */}
                            <div className="row">
                                <div className="col-9 ms-auto header-right d-none d-lg-block float-end">
                                    <ul className="d-flex gap-5 py-3">
                                        <li className="position-relative text-white">
                                            Study Materials{" "}
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                                <span className="text-dark">New</span>
                                                <span className="visually-hidden">
                                                    unread messages
                                                </span>
                                            </span>
                                        </li>
                                        <li className="position-relative text-white">
                                            Study Materials{" "}
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                                <span className="text-dark">New</span>
                                                <span className="visually-hidden">
                                                    unread messages
                                                </span>
                                            </span>
                                        </li>
                                        <li className="position-relative text-white">
                                            Study Materials{" "}
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                                <span className="text-dark">New</span>
                                                <span className="visually-hidden">
                                                    unread messages
                                                </span>
                                            </span>
                                        </li>
                                        <li className="position-relative text-white">
                                            Study Materials{" "}
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                                <span className="text-dark">New</span>
                                                <span className="visually-hidden">
                                                    unread messages
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div
                                    className="col-12 d-none d-lg-block"
                                    style={{ borderBottom: "1px solid white" }}
                                ></div>
                            </div>

                            <div className="row">
                                <div className="col-12 pe-lg-5 p-auto">
                                    <nav className="navbar navbar-expand-lg">
                                        <a
                                            className="navbar-brand text-white d-block d-lg-none"
                                            href="index.php"
                                        >
                                            <img src={require("../images/logo icon.png")} alt="logo" className="" />
                                            <span className="ms-2">College Directory</span>
                                        </a>
                                        <button
                                            className="navbar-toggler bg-white"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                        >
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div
                                            className="collapse navbar-collapse"
                                            id="navbarSupportedContent"
                                        >
                                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                    <a className="nav-link mydrop1" href="#">
                                                        Colleges
                                                        {/* <i className="fa-solid fa-caret-down ms-1  toggle-drop"></i> */}
                                                        <FontAwesomeIcon icon={faCaretDown} className="ms-1  toggle-drop" />
                                                    </a>
                                                </li>

                                                <li className="nav-item position-relative mydrop3" onMouseEnter={()=>handleMouseEnter(setCourseToggle)} onMouseLeave={()=>handleMouseLeave(setCourseToggle)}>
                                                    <a className="nav-link" href="#">
                                                        Courses
                                                        <FontAwesomeIcon icon={faCaretDown} className="ms-1  toggle-drop3" />                        </a>
                                                        <div className={`drop-content-3 ${courseToggle ? 'd-block' : 'd-none'}`}>                                                        <ul>
                                                            <li>
                                                                <a href="#">Popular Courses</a>
                                                            </li>
                                                            <li className="mega-drop1">
                                                                <a href="#" className="">
                                                                    Engineering{" "}
                                                                    <i className="fa-solid fa-caret-down ms-1 mega-toggle-1"></i>
                                                                </a>
                                                                <div className="mega-dropdown1">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">M.Tech</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">B.Tech</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">B.Arch</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Diploma</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a href="#">Management</a>
                                                            </li>
                                                            <li className="mega-drop2">
                                                                <a href="#">
                                                                    Medical{" "}
                                                                    <i className="fa-solid fa-caret-down ms-1 mega-toggle-2"></i>
                                                                </a>
                                                                <div className="mega-dropdown2">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">MMBS</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">MS</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">MD</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">BAMS</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a href="#">Science</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Nursing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Law</a>
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                <a href="course.php" className="a f-12">
                                                                    View All
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>


                                                <li className="nav-item mydrop2" onMouseEnter={()=>handleMouseEnter(setExamToggle)} onMouseLeave={()=>handleMouseLeave(setExamToggle)} >
                                                    <a className="nav-link" href="#">
                                                        Exam
                                                        <FontAwesomeIcon icon={faCaretDown} className="ms-1  toggle-drop1" />
                                                    </a>
                                                    <div className={`drop-content-2 ${examToggle ? 'd-block' : 'd-none'}` }>
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <div className="sidebar p-3">
                                                                    <div
                                                                        className="mt-3 search-btn w-100 d-flex justify-content-between align-items-center"
                                                                        style={{ background: "#f7f7f7" }}
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#serching-modal"
                                                                    >
                                                                        <i
                                                                            className="fa-solid fa-magnifying-glass"
                                                                            style={{ color: "#CCCAD7" }}
                                                                        ></i>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Search Colleges,Courses,Exams.."
                                                                        />
                                                                    </div>
                                                                    <ul className="sideitem">
                                                                        <li>
                                                                            <a href="">Engineering</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Management</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Medical</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Commerce & Banking</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Science</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Hotel Management</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Information Technology</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Art & Humanities</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Mass Communication</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Nursing</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Agriculture</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Design</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Law</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Pharmacy</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="">Dental</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 ms-auto p-5">
                                                                <div className="row">
                                                                    <div className="col-lg-4 col-6 mt-3 footer-content">
                                                                        <h6>JEE Mains</h6>
                                                                        <p>
                                                                            <a href="">Eligibility</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Syllabus</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Exam Pattern</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">How to Prepare</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Previous Year Question Paper</a>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-6 mt-3 footer-content">
                                                                        <h6>JEE Advance</h6>
                                                                        <p>
                                                                            <a href="">Eligibility</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Syllabus</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Exam Pattern</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">How to Prepare</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Previous Year Question Paper</a>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-6 mt-3 footer-content">
                                                                        <h6>BITSAT</h6>
                                                                        <p>
                                                                            <a href="">Eligibility</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Syllabus</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Exam Pattern</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">How to Prepare</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Previous Year Question Paper</a>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-6 mt-3 footer-content">
                                                                        <h6>JEE Mains</h6>
                                                                        <p>
                                                                            <a href="">Eligibility</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Syllabus</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Exam Pattern</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">How to Prepare</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Previous Year Question Paper</a>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-6 mt-3 footer-content">
                                                                        <h6>JEE Advance</h6>
                                                                        <p>
                                                                            <a href="">Eligibility</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Syllabus</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Exam Pattern</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">How to Prepare</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Previous Year Question Paper</a>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-6 mt-3 footer-content">
                                                                        <h6>BITSAT</h6>
                                                                        <p>
                                                                            <a href="">Eligibility</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Syllabus</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Exam Pattern</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">How to Prepare</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Previous Year Question Paper</a>
                                                                        </p>
                                                                    </div>

                                                                    <div className="col-lg-4 col-6 mt-3 footer-content">
                                                                        <h6>JEE Mains</h6>
                                                                        <p>
                                                                            <a href="">Eligibility</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Syllabus</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Exam Pattern</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">How to Prepare</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Previous Year Question Paper</a>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-6 mt-3 footer-content">
                                                                        <h6>JEE Advance</h6>
                                                                        <p>
                                                                            <a href="">Eligibility</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Syllabus</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Exam Pattern</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">How to Prepare</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Previous Year Question Paper</a>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-lg-4 col-6 mt-3 footer-content">
                                                                        <h6>BITSAT</h6>
                                                                        <p>
                                                                            <a href="">Eligibility</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Syllabus</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Exam Pattern</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">How to Prepare</a>
                                                                        </p>
                                                                        <p>
                                                                            <a href="">Previous Year Question Paper</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 mt-lg-5 mt-3 text-center">
                                                                        <a href="exam_list.php" className="a">
                                                                            View All
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="nav-item mydrop4">
                                                    <a className="nav-link" href="#">
                                                        News & Update
                                                        <FontAwesomeIcon icon={faCaretDown} className="ms-1  toggle-drop" />
                                                    </a>
                                                </li>
                                                <li className="nav-item position-relative mydrop5">
                                                    <a className="nav-link" href="#">
                                                        More
                                                        <FontAwesomeIcon icon={faCaretDown} className="ms-1  toggle-drop5" />
                                                    </a>
                                                </li>

                                            </ul>
                                            
                                            {/* <div className="drop-content-5">
                                                <ul>
                                                    <li>
                                                        <a href="about_us.php">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Contact Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Join Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Boards</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Visual Stories</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Scholarships</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Job Ready Courses</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Fill Form</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Write Review</a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default MyNavbar
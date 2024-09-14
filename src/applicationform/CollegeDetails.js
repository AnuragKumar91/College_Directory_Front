import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

function CollegeDetails() {
    const collegeDetails = [
        {
            collegeName: "VIT Vellore",
            Location: "Bengaluru, Karnataka",
            rating: "4.6",
            year: "1845",
            fee: "200000"
        },
        {
            collegeName: "Simage",
            Location: "Patna, Bihar",
            rating: "4.3",
            year: "1845",
            fee: "200000"
        },

        {
            collegeName: "Simage",
            Location: "Patna, Bihar",
            rating: "4.3",
            year: "1845",
            fee: "200000"
        },
    ];

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <h5 className="fw-bolder">Recommended College</h5>
                </div>
                {collegeDetails.map((data, index) => (
                    <div className="col-lg-4 col-md-6 mt-3" key={index}>
                        <div className="card college-card">
                            <img src={require("../images/drs.png")} alt="" />
                            <div className="card-body p-2 py-3">
                                <div className="grid">
                                    <div className="round-box2"></div>
                                    <div>
                                        <h5 className="text-dark">{data.collegeName}</h5>
                                        <h6><FaLocationDot className='fs-5 me-2' />{data.Location}</h6>
                                        <span>{data.rating}</span>
                                        <span>{data.year}</span>
                                        <span className="float-end"><i className="fa-solid fa-money-bill me-1"></i>{data.fee}</span>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <a href="#" className="transparent-btn2 fw-bold">Download Brochure</a>
                                    <a href="#" className="transparent-btn2 fw-bold">Download Brochure</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CollegeDetails;

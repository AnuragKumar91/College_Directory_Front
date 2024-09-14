import React, { useState } from 'react';

import { IoClose } from "react-icons/io5";

function FilterDetails() {
    const levels = ["UG", "PG", "Diploma", "Ph.D"];
    const streams = ["Engineering", "Management", "Medical", "Commerce & Banking", "IT", "Arts", "Design", "Hotel Management", "Law", "Physical Education", "Science", "Dental", "Media & Mass Communication", "Others", "Vocational", "Education", "Paramedical", "Agriculture", "Nursing", "Pharmacy"];
    const states = ["Andaman & Nicobar", "Andhra Pradesh", "Bihar", "Arunachal Pradesh", "Assam", "Chandigarh", "Chhattisgarh", "Delhi", "Dadra & Nagar Haveli", "Daman & Diu", "Goa", "Gujarat", "Haryana", "Kerala", "Himachal Pradesh", "Jammu & Kashmir"];
    const [sideNavbar, setSideNavbar] = useState(false)

    const toggleSidebar = () => {
        setSideNavbar(!sideNavbar);
    };

    return (
        <>
            <div className={`filter ${sideNavbar ? 'show' : ''}`} id="myfiltercard">
                <div className="filter-content">
                    {sideNavbar &&
                        <>
                            <IoClose className='float-end fs-3' id="cutting" onClick={toggleSidebar} />

                            <h5>Filter by</h5>
                            <div className="mt-4">
                                <h6>Level</h6>
                                {levels.map(level => (
                                    <a key={level} href="" className="filter-btn">{level}</a>
                                ))}
                            </div>
                            <div className="mt-4">
                                <h6>Streams</h6>
                                <hr />
                                {streams.map(stream => (
                                    <a key={stream} href="" className="filter-btn">{stream}</a>
                                ))}
                            </div>
                            <div className="mt-4">
                                <h6>States</h6>
                                <hr />
                                {states.map(state => (
                                    <a key={state} href="" className="filter-btn">{state}</a>
                                ))}
                            </div>
                            <div className="text-center mt-5">
                                <button className="blue-btn">Apply Filter</button>
                            </div>
                            <div className="text-center mt-2">
                                <button className="white-btn">Clear Filter</button>
                            </div>
                        </>
                    }
                </div>
            </div>

            <div className="bg-f7">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn-10 blue" id="myfilter-btn" onClick={toggleSidebar}>
                                <i className="fa-solid fa-sliders me-2"></i>Filters
                            </button>
                        </div>
                        <div className="col-6 ms-auto">
                            <p className="blue f-13 float-end">Applied Filters: No filters applied</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterDetails;

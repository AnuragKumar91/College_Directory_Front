import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../home/StartRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { LocationIcon } from '../icons/LocationIcon';

function TopColleges({ data }) {
    // Check if data is valid
    if (!data || !data.banner || !data.logo || !data.college_name || !data.short_name || !data.city_name || !data.state_name || !data.established_year || !data.fee_range) {
        return <div>No data available</div>;
    }

    return (
        <div className="col-lg-4 col-md-6 mt-3">
            <div className="card college-card">
                <img
                    src={`${process.env.REACT_APP_SERVER_URL}` + `${data.banner}`}
                    style={{ width: "100%", height: "210px", objectFit: "cover" }}
                    alt=""
                />
                <div className="card-body p-3 py-3">
                    <div className="grid">
                        <div>
                            <img
                                src={`${process.env.REACT_APP_SERVER_URL}` + `${data.logo}`}
                                className='img-fluid college-logo'
                                alt=""
                            />
                        </div>
                        <div>
                            <h5>{data.college_name}, ({data.short_name})</h5>
                            <h6><LocationIcon />{data.city_name}, {data.state_name}</h6>

                            <div className="d-flex align-items-center">
                                <span className='me-2'>{4.6} </span>
                                <StarRating rating={4} />
                            </div>

                            <div className='d-flex'>
                                <p>Established: {data.established_year}</p>
                                <p className="ms-auto"><FontAwesomeIcon icon={faMoneyCheckDollar} className='me-2'/>{data.fee_range}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 d-flex flex-wrap justify-content-center justify-content-lg-start">
                        <Link to="" className="transparent-btn2 fw-bold">Download Brochure</Link>
                        <Link to="" className="transparent-btn2 fw-bold mx-2 ms-lg-auto">Download Brochure</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopColleges;

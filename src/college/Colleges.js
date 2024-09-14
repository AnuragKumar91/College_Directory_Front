

import React from 'react'
import StarRating from '../home/StartRating';
import { Link } from 'react-router-dom';
import { faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Colleges = (data) => {

    return (
        <>
            <div class="card-5">
                <div class="gridd">
                    <div class="">
                        <img src={`${process.env.REACT_APP_SERVER_URL}` + `${data.data.logo}`} className='img-fluid college-logo' alt="" />
                    </div>

                    <div>
                        <div className="d-flex">
                            <h6>{data.data.college_name}({data.data.popular_name}),{data.data.city_name}</h6>
                            <div className='d-flex ms-auto '>
                                <span><FontAwesomeIcon icon={faLocationDot} className='me-2' /></span>
                                <span><FontAwesomeIcon icon={faHeart} className='me-2' /></span>
                            </div>
                        </div>

                        <span class="span3">Approved by - {data.data.approval_name}</span>
                        <span class="span3 ms-3">Status - {data.data.college_status}</span>
                        <div>

                            <StarRating rating={4.3} />
                            <span class="span4 ms-5">
                                <i class="fa-solid fa-graduation-cap me-2"></i>Rank 68 out of 835 College Directory
                            </span>
                        </div>

                        <div className='mt-3'>

                            <button to="#" class="blue-btn ms-0">Apply Now</button>
                            <button class="transparent-btn">Free Counselling</button>
                            <button class="blue-btn">Download Brochure</button>
                            <button class="transparent-btn">Seat Matrics</button>
                            <button class=" ms-2" >Course & Fee</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Colleges
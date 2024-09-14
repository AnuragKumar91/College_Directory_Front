
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { BookmarkIcon, LocationIcon, ThumbtrackIcon, StarIcon } from '../icons/LocationIcon';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CollegeCard(data) {

    return (
        <>
            {/* <!-- card sections --> */}

            {/* <div class="col-lg-4 mt-4"> */}
            <div class="card">
                <div class="card-content ">
                    <div className="" >
                        <div className="col-12 ">
                            <div className="overlay"  >
                                <img src={`${process.env.REACT_APP_SERVER_URL}`+"/"+`${data.data.banner}`} className='img-fluid p-0' style={{ width: "100%", height: "210px", objectFit: "cover" }} alt="" />


                                <div className="overlay" style={{ backgroundColor: "rgba(0,0,0,0.4)", position: "absolute", top: "0", left: 0, width: "100%", height: "210px" }}>

                                    <div className="row p-3">

                                        <div className="col-3 col-sm-2 p-1">
                                            <img src={`${process.env.REACT_APP_SERVER_URL}`+`${data.data.logo}`} className='img-fluid college-logo' />
                                        </div>
                                        <div className='col-9  col-sm-10 p-0 ps-2'>
                                            <div className="">
                                                <p class="text-white ms-2">{data.data.college_name}, ({data.data.short_name})</p>
                                                <div class="d-md-flex justify-content-md-between mini-add text-white ms-1 me-1">
                                                    <p className='m-0' ><LocationIcon />{data.data.city_name}, {data.data.state_name}</p>
                                                    <p className='d-inline '><BookmarkIcon />AICTE</p>
                                                    <p className='d-inline ms-4 ms-md-0'><ThumbtrackIcon  />{data.data.established_year}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-content2 pt-3">
                    <div class="row">
                        <div class="col-8">
                            <h6 class="">BE/B.Tech</h6>
                            <p><span class="money">{data.data.fee_range}</span> First Year Fees</p>
                        </div>
                        <div class="col-4 ms-auto">
                            <h6 class="float-end"><StarIcon />8.5/10</h6>
                            <p class="float-end">400 Review</p>
                        </div>
                        <hr />
                        <p>Ranked 3 out of 34 The Week, Ranked 1 out of 200 N..</p>
                        <hr />
                        <p>View All Courses & Fees import <MdKeyboardArrowRight className='float-end mt-1 fs-5' /></p>


                        <hr />
                        <p>Download Brochure <MdKeyboardArrowRight className='float-end mt-1 fs-5' /></p>

                        <hr />
                        <p>Compare <MdKeyboardArrowRight className='float-end mt-1 fs-5' /></p>


                    </div>
                </div>

            </div>
            {/* </div> */}

        </>
    )
}

export default CollegeCard
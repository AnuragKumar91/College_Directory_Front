import React, { useState, useEffect } from 'react';
import CollegeListFilter from './CollegeListFilter';
import Colleges from './Colleges';
import qs from 'qs';
import useStore from '../zustand_redux/ReactStore'
import TopColleges from './TopColleges';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CollegeList() {
    const [showFilterMenuMobile, setShowFilterMenuMobile] = useState(false);


    const { storeCollegeData, college, clearCollegeData } = useStore()

    return (
        <>
            <section>
                        <div className="container pb-5 pt-3">
                            <div className="row">
                                <div className="col-lg-3">
                                    <CollegeListFilter showFilterMenuMobile={showFilterMenuMobile} setShowFilterMenuMobile={setShowFilterMenuMobile} />
                                </div>

                                <div className="col-lg-9">
                                    {college.map((data, index) => (
                                        <div className="mx-2" key={index}>
                                            <Colleges data={data} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>


            {/* colleges under 100km */}
            <section>
                <div className="container pb-5 pt-3">
                    <div className="row">
                        <div className="col-12">
                            <h5>Colleges Under 100 KM</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, harum.</p>
                        </div>



                        {college.map((data) => (
                            <TopColleges data={data} />
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}

export default CollegeList;



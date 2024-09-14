

import React, { useEffect, useState } from 'react'
import qs from 'qs';
import MobileForm from './MobileForm';

function FreeCounselling2() {
    const [regionData, setRegionData] = useState([])

    const server_url = process.env.REACT_APP_SERVER_URL
    const key = process.env.REACT_APP_KEY

    useEffect(() => {
        const fetchRegionData = async () => {
            try {
                const response = await fetch(
                    "https://admissioninnepal.in/api/region-list",
                    {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },

                        body: qs.stringify({ key: key }),
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        "Network response was not ok: ${response.statusText}"
                    );
                }
                const data = await response.json();
                console.log("region data")
                console.log(data.data);

                setRegionData(data.data);
            } catch (error) {
                console.error("Failed to fetch region data:", error);
            }
        };

        fetchRegionData();
    }, []);


    return (
        <section class="free-counselling2">
            <div class="container pt-5">
                <div class="row" >
                    <div class="col-lg-4">

                        <div class="card" >
                            <h5><span class="underline">Lorem Ipsum</span> Dollo SIte</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>

                            <div className="overflow-auto" id="country-thumb" style={{ height: "180px", zIndex: "1" }}>
                                {regionData.map((data) => (
                                    <div class="d-flex m-2 main">
                                        <div class="small-box">
                                        </div>
                                        <h6 class="ms-3">{data.region_name}</h6>
                                    </div>
                                ))}
                            </div>

                            <div class="imaging">
                                <img src={require("../images/vector2.png")} class="img-fluid" alt="" style={{ position: "absolute", top: "182px", right: 0 }} />

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="card card-2">
                            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div class="row">
                                <div class="col-lg-4">
                                    <ul>
                                        <li>consectetur adipiscing elit</li>
                                        <li>consectetur adipiscing elit</li>
                                        <li>consectetur adipiscing elit</li>
                                        <li>consectetur adipiscing elit</li>
                                        <li>consectetur adipiscing elit</li>
                                    </ul>
                                    <button>Free Counselling</button>
                                </div>
                                <div class="col-lg-6 ms-auto mt-4 mt-lg-0">
                                    <img src={require("../images/student-happy.png")} class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <section class="get-touch">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-8 col-12 mobile-form-data">
                                    <h1>Get in touch with our expert counsellors.</h1>
                                    <img src={require("../images/playstore.png")} class="img-fluid mt-3" alt="" />
                                    <img src={require("../images/appstore.png")} class="img-fluid mt-3 ms-lg-5" alt="" />
                                </div>

                                <div class="col-lg-4 col-12">
                                    <MobileForm />
                                    {/* <img src={require("../images/iphone.png")} class="img-fluid" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </section>
    )
}

export default FreeCounselling2


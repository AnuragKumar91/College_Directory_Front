

import React from 'react'

function UniversityList() {
    return (
        <>
            <div class="banner-section2">
                <div class="banner-section-content py-2">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-6">
                                {/* <!-- <h6><a href="index.php">Home</a>Course / Engineering Exam / JEE Mains Exam</h6>  */}
                                <h6><a href="#">Home / </a>University list</h6>
                            </div>
                            <div class="col-lg-4 col-6 ms-auto">
                                <h6 class="float-end"><i class="fa-solid fa-share me-2"></i>Share Page</h6>
                            </div>
                        </div>
                        <div class="col-12">
                            <h4 class="text-white mt-3">Top University 2024</h4>
                        </div>
                    </div>
                </div></div>
            <div class="container pb-5">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="side-card p-3 mt-3">
                            <h5>Stream</h5>
                            <form action="">
                                <input type="text" placeholder="Search" class="form-control mysearch mt-3 mb-3"/>
                                    <div class="mt-1">
                                        <input type="checkbox" name="courses" id=""/>
                                            <label for="" class="small-label ms-1">Commerce & Banking</label>
                                    </div>
                                    <div class="mt-1">
                                        <input type="checkbox" name="courses" id=""/>
                                            <label for="" class="small-label ms-1">Design</label>
                                    </div>
                                    <div class="mt-1">
                                        <input type="checkbox" name="courses" id=""/>
                                            <label for="" class="small-label ms-1">Engineering</label>
                                    </div>
                                    <div class="mt-1">
                                        <input type="checkbox" name="courses" id=""/>
                                            <label for="" class="small-label ms-1">Management</label>
                                    </div>
                                    <div class="mt-1">
                                        <input type="checkbox" name="courses" id="" />
                                            <label for="" class="small-label ms-1">Hotel Management</label>
                                    </div>
                                    <div class="mt-1">
                                        <input type="checkbox" name="courses" id="" />
                                            <label for="" class="small-label ms-1">Information Technology</label>
                                    </div>
                                    <div class="mt-1">
                                        <input type="checkbox" name="courses" id="" />
                                            <label for="" class="small-label ms-1">Media & Mass Communication</label>
                                    </div>
                                    <div class="mt-1">
                                        <input type="checkbox" name="courses" id="" />
                                            <label for="" class="small-label ms-1">Medical</label>
                                    </div>
                            </form>
                        </div>
                        <div class="side-card p-3 mt-3">
                            <h5>DEGREE</h5>
                            <form action="">
                                <input type="text" placeholder="Search" class="form-control mysearch mt-3 mb-3" />
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">B.Tech</label>
                                </div>
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">M.Tech</label>
                                </div>
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">B.Arch</label>
                                </div>
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">MBA</label>
                                </div>
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">MCA</label>
                                </div>
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">Diploma</label>
                                </div>
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">M.Com</label>
                                </div>
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">LLM</label>
                                </div>
                            </form>
                        </div>
                        <div class="side-card p-3 mt-3">
                            <h5>LEVEL</h5>
                            <form action="">
                                <input type="text" placeholder="Search" class="form-control mysearch mt-3 mb-3" />
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">UG</label>
                                </div>
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">PG</label>
                                </div>
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">Diploma</label>
                                </div>
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">Ph.D</label>
                                </div>

                            </form>
                        </div>
                        <div class="side-card p-3 mt-3">
                            <h5>MODE</h5>
                            <form action="">
                                <input type="text" placeholder="Search" class="form-control mysearch mt-3 mb-3" />
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">Online</label>
                                </div>
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">Offline</label>
                                </div>
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">Both Online & Offline</label>
                                </div>
                                <div class="mt-1">
                                    <input type="checkbox" name="courses" id="" />
                                    <label for="" class="small-label ms-1">None</label>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div class="col-lg-9 perfect1">
                        <div class="mt-3 search-btn w-100 d-flex justify-content-between align-items-center" style={{ background: "#f7f7f7" }}>
                            <i class="fa-solid fa-magnifying-glass" style={{ background: "#CCCAD7" }}>
                            </i>
                            <input type="text" placeholder="Search Entrance Exams" />
                        </div>
                        <a href="" class="red f-12">JEE Main</a>
                        <a href="" class="red f-12 ms-1">CAT</a>
                        <a href="" class="red f-12 ms-1">GATE</a>
                        <a href="" class="red f-12 ms-1">NEET</a>
                        <a href="" class="red f-12 ms-1">CLAT</a>
                        <a href="" class="red f-12 ms-1">WBJEE</a>
                        <div class="row">
                            <div class="col-12">
                                <h5 class="fw-bold mt-3">Popular University</h5>
                            </div>

                            <div class="col-md-5">
                                <div class="card-8">
                                    <div class="black">
                                        <div class="row p-3">
                                            <div class="col-2">
                                                <div class="rounding">

                                                </div>
                                            </div>
                                            <div class="col-10">
                                                <h5 class="text-white f-18">Lovely professional Univer...,  <br/>Phagwara</h5>
                                                <div class="grid-auto mt-4">
                                                    <h6 class="text-white"><i class="fa-solid fa-money-bill me-1"></i>1000 INR</h6>
                                                    <a href="" class="btn-11">248 Courses</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <button class="red-btn w-100 mt-4">Apply Now</button>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="card-8">
                                    <div class="black">
                                        <div class="row p-3">
                                            <div class="col-2">
                                                <div class="rounding">

                                                </div>
                                            </div>
                                            <div class="col-10">
                                                <h5 class="text-white f-18">Chandigarh University,
                                                    <br/>Mohali</h5>
                                                <div class="grid-auto mt-4">
                                                    <h6 class="text-white"><i class="fa-solid fa-money-bill me-1"></i>1000 INR</h6>
                                                    <a href="" class="btn-11">210 Courses</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <button class="red-btn w-100 mt-4">Apply Now</button>
                                </div>
                            </div>

                            <div class="col-md-5">
                                <div class="card-8">
                                    <div class="black">
                                        <div class="row p-3">
                                            <div class="col-2">
                                                <div class="rounding">

                                                </div>
                                            </div>
                                            <div class="col-10">
                                                <h5 class="text-white f-18">Parul University, <br/>Vadodara</h5>
                                                <div class="grid-auto mt-4">
                                                    <h6 class="text-white"><i class="fa-solid fa-money-bill me-1"></i>500 INR</h6>
                                                    <a href="" class="btn-11">411 Courses</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <button class="red-btn w-100 mt-4">Apply Now</button>
                                </div>
                            </div>

                            <div class="col-md-5">
                                <div class="card-8">
                                    <div class="black">
                                        <div class="row p-3">
                                            <div class="col-2">
                                                <div class="rounding">

                                                </div>
                                            </div>
                                            <div class="col-10">
                                                <h5 class="text-white f-18">Lovely professional Univer...,  <br/>Phagwara</h5>
                                                <div class="grid-auto mt-4">
                                                    <h6 class="text-white"><i class="fa-solid fa-money-bill me-1"></i>1000 INR</h6>
                                                    <a href="" class="btn-11">248 Courses</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <button class="red-btn w-100 mt-4">Apply Now</button>
                                </div>
                            </div>
                            <div class="col-10 text-center mt-5">
                                <a href="" class="red-btn f-12">Load All Colleges <i class="fa-solid fa-angle-right ms-1"></i></a>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="bg-f7 mt-3 p-3">
                                <h5 class="blue fw-bold">Trending Course</h5>
                                <p class="p fs-12">Gain professional expertise with online courses to amplify your <br/>employability</p>
                                <div class="top-college2">
                                    <button>B.Tech</button>
                                    <button>B.Sc</button>
                                    <button>MBA/BGDM</button>
                                    <button>ME/M.Tech</button>
                                    <button>MBBS</button>
                                    <button>MD</button>
                                    <button>B.Com</button>


                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"15%"}}>

                                    </div>
                                </div>
                            </div>

                            <div class="bg-f7 mt-3 p-3">
                                <h5 class="blue fw-bold">Previous Year Questions</h5>
                                <p class="p fs-12">Gain professional expertise with online courses to amplify your <br/>employability</p>
                                <div class="top-college2">
                                    <button>#B.Tech</button>
                                    <button>#B.Sc</button>
                                    <button>#MBA/BGDM</button>
                                    <button>#ME/M.Tech</button>
                                    <button>#MBBS</button>
                                    <button>#MD</button>
                                    <button>#B.Com</button>


                                </div>
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 mt-3">
                                        <div class="bg-d4">

                                            <span class="smt mt-1"><i class="fa-solid fa-clock me-1 blue"></i>06:45:29 am</span>
                                            <p class="">Jee Main 2024 Question Paper</p>
                                            <p class="lh-1">April 4, 2024</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mt-3">
                                        <div class="bg-d4">

                                            <span class="smt mt-1"><i class="fa-solid fa-clock me-1 blue"></i>06:45:29 am</span>
                                            <p class="">Jee Main 2024 Question Paper</p>
                                            <p class="lh-1">April 4, 2024</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mt-3">
                                        <div class="bg-d4">

                                            <span class="smt mt-1"><i class="fa-solid fa-clock me-1 blue"></i>06:45:29 am</span>
                                            <p class="">Jee Main 2024 Question Paper</p>
                                            <p class="lh-1">April 4, 2024</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UniversityList
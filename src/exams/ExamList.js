

import React from 'react'

function ExamList() {
    return (
        <>
            <div class="col-lg-9 perfect1">
                <div class="mt-3 search-btn w-100 d-flex justify-content-between align-items-center"
                    style={{ background: "#f7f7f7" }}>
                    <i class="fa-solid fa-magnifying-glass" style={{ color: "#CCCAD7" }}></i>
                    <input type="text" placeholder="Search Entrance Exams" />
                </div>
                <a href="" class="a f-12">JEE Main</a>
                <a href="" class="a f-12">CAT</a>
                <a href="" class="a f-12">GATE</a>
                <a href="" class="a f-12">NEET</a>
                <a href="" class="a f-12">CLAT</a>
                <a href="" class="a f-12">WBJEE</a>
                <div class="row mt-3">
                    <div class="col-lg-3 mt-2">
                        <div class="bg-d4">
                            <button class="online-btn">online</button>
                            <h6 class="my-3">JEE Advance 2024</h6>
                            <a href="" class="blue-btn inline-block">Apply Now</a>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="card-5">
                            <div class="row">
                                <div class="col-lg-4 col-sm-6 col-6 text-lg-center">
                                    <h6 class="text-dark">Application Date</h6>
                                    <p class="p f-13">10 Nov 2023-13 Apr 2024</p>
                                </div>
                                <div class="col-lg-4 col-sm-6 col-6 text-lg-center">
                                    <h6 class="text-dark">Exams Date</h6>
                                    <p class="p f-13">10 Nov 2023-13 Apr 2024</p>
                                </div>
                                <div class="col-lg-4 col-sm-6 col-6 text-lg-center">
                                    <h6 class="text-dark">Results Announce</h6>
                                    <p class="p f-13">2 May 2024</p>
                                </div>
                            </div>

                            <a href="" class="transparent-btn-5">Overview</a>
                            <a href="" class="transparent-btn-5">Eligibilities</a>
                            <a href="" class="transparent-btn-5">Syllabus</a>
                            <a href="" class="transparent-btn-5">Patern</a>
                            <a href="" class="transparent-btn-5">Application Form</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExamList
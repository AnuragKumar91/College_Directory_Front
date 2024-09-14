
import React from 'react'

function Footer() {
    const Course = ["MBA", "B.Tech/BE", "BCA", "MCA", "M.Tech", "MA", "BA", "Medical"]
    const Exams = ["CAT", "GATE", "Jee-Main", "NEET", "CAT", "CLAT", "MAT"]
    return (
        <>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="footer-content">
                                <h5>Top Colleges</h5>
                                {Course.map((course) => (
                                    <p><a href="">{course}</a></p>
                                ))}

                            </div>
                        </div>

                        {/* //exams */}
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="footer-content">
                                <h5>Top Exams</h5>
                                {Exams.map((exam) => (
                                    <p><a href="">{exam}</a></p>
                                ))}

                            </div>
                        </div>


                        {/* //exams */}
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="footer-content">
                                <h5>Top Exams</h5>
                                {Exams.map((exam) => (
                                    <p><a href="">{exam}</a></p>
                                ))}

                            </div>
                        </div>


                        {/* //exams */}
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="footer-content">
                                <h5>Top Exams</h5>
                                {Exams.map((exam) => (
                                    <p><a href="">{exam}</a></p>
                                ))}

                            </div>
                        </div>


                        {/* //exams */}
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="footer-content">
                                <h5>Top Exams</h5>
                                {Exams.map((exam) => (
                                    <p><a href="">{exam}</a></p>
                                ))}

                            </div>
                        </div>


                        {/* //exams */}
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="footer-content">
                                <h5>Top Exams</h5>
                                {Exams.map((exam) => (
                                    <p><a href="">{exam}</a></p>
                                ))}

                            </div>
                        </div>
                    </div>

                    {/* next row or line */}
                    <hr class="line" />

                    
                    <div class="row">
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="footer-content">
                                <h5>Top Colleges</h5>
                                {Course.map((course) => (
                                    <p><a href="">{course}</a></p>
                                ))}

                            </div>
                        </div>

                        {/* //exams */}
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="footer-content">
                                <h5>Top Exams</h5>
                                {Exams.map((exam) => (
                                    <p><a href="">{exam}</a></p>
                                ))}

                            </div>
                        </div>


                        {/* //exams */}
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="footer-content">
                                <h5>Top Exams</h5>
                                {Exams.map((exam) => (
                                    <p><a href="">{exam}</a></p>
                                ))}

                            </div>
                        </div>


                        {/* //exams */}
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="footer-content">
                                <h5>Top Exams</h5>
                                {Exams.map((exam) => (
                                    <p><a href="">{exam}</a></p>
                                ))}

                            </div>
                        </div>


                        {/* //exams */}
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="footer-content">
                                <h5>Top Exams</h5>
                                {Exams.map((exam) => (
                                    <p><a href="">{exam}</a></p>
                                ))}

                            </div>
                        </div>


                        {/* //exams */}
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="footer-content">
                                <h5>Top Exams</h5>
                                {Exams.map((exam) => (
                                    <p><a href="">{exam}</a></p>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
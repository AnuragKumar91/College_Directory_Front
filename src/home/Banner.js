

import React from 'react'

function Banner() {
    return (
        <>
            <section class="free-counselling">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="image">
                                <img src={require("../images/left-area.png")} class="img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-5 mt-5 mt-lg-0">
                            <h6>LOREM</h6>
                            <h5>Lorem Ipsum Dollor Site Amet</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                            <button>Free Counselling</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
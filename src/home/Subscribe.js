
import React from 'react'

function Subscribe() {
    return (
        <section class="subscribe mt-5">
            <div class="container py-5">
                <div class="row">
                    <div class="col-12 text-center">
                        <h5 class="fw-bold">Subscribe to our Newsletter</h5>
                        <p>Fill the form and get instant suggestion by our expert</p>
                        <form class="myform mt-5">
                            <div class="form-row d-md-flex  justify-content-between">
                                <div class="col ms-md-2 mt-3 mt-md-0">
                                    <input type="email" class="form-control" placeholder="Enter Email" />
                                </div>
                                <div class="col ms-md-2 mt-3 mt-md-0">
                                    <input type="phone" class="form-control" placeholder="Enter Mobile" />
                                </div>
                                <div class="col ms-md-2 mt-3 mt-md-0">
                                    <select name="" id="" class="form-control">
                                        <option value="">Select Your Course</option>
                                    </select>
                                </div>
                                <div class="col ms-md-2 mt-3 mt-md-0">
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Subscribe
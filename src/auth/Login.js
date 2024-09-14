

import React from 'react'

function Login() {
  return (
    <>
      <div className="d-none"></div>
      <div className="register">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 register-image p-4">
              <img src={require("../images/login_image.png")} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-5 register-form position-relative py-5">
              <div className="text-center">
                <a className="navbar-brand text-white" href="index.php">
                  <img src={require("../images/logo.png")} alt="logo" className="" />
                  <span className="ms-2">College Directory</span>
                </a>
                <h4 className="text-white">Log In</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="mt-4">
                <form action="" className="">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Mobile*"
                    />
                  </div>

                  <div className="text-center">
                    <button type="submit">GENERATE OTP</button>
                    <p className="mt-4">OR</p>
                  </div>
                  <div className="text-center social-connecting">
                    <button type="submit">Continue with Google</button>
                    <button type="submit" className="mt-3">
                      Continue with Twitter
                    </button>
                    <a href="register.php">Don’t have an account? Sign Up</a>
                  </div>
                </form>
                <div className="rigs">
                  <img src={require("../images/vector6.png")} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-none"></div>

    </>
  )
}

export default Login
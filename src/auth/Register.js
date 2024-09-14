import React from 'react';

function Register() {
  return (
    <>
      <div className="d-none">
        {/* PHP include statements are not applicable in React, 
            you can use React components instead */}
      </div>
      <div className="register">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 register-image p-4">
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              <img src={require('../images/register_image.png')} className="img-fluid" alt="" />
              <img src={require('../images/vector4.png')} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-5 register-form position-relative">
              <div className="text-center">
                <a className="navbar-brand text-white" href="index.php">
                  <img src={require('../images/logo.png')} alt="logo" className="" />
                  <span className="ms-2">College Directory</span>
                </a>
                <h4 className="text-white">Registration</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="mt-4">
                <form action="" className="">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-user"></i></span>
                    <input type="text" className="form-control" placeholder="Name*" />
                  </div>
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-envelope"></i></span>
                    <input type="email" className="form-control" placeholder="Email*" />
                  </div>
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-phone"></i></span>
                    <input type="number" className="form-control" placeholder="Mobile*" />
                  </div>
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-graduation-cap"></i></span>
                    <select name="" className="form-control" id="">
                      <option value="">Select Stream</option>
                    </select>
                  </div>
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-bag-shopping"></i></span>
                    <select name="" className="form-control" id="">
                      <option value="">Select Level</option>
                    </select>
                  </div>

                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-lock"></i></span>
                    <input type="password" className="form-control" placeholder="Password*" id="pass" />
                    <span className="input-group-text showpass"><i className="fa-regular fa-eye"></i></span>
                    <span className="input-group-text hidepass"><i className="fa-regular fa-eye-slash"></i></span>
                  </div>
                  <div className="text-center">
                    <button type="submit">Sign Up</button>
                    <a href="login.php">Already have an account? Log In</a>
                  </div>
                </form>
                <div className="rigs">
                  <img src={require('../images/vector6.png')} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none">
        {/* PHP include statements are not applicable in React, 
            you can use React components instead */}
      </div>
    </>
  );
}

export default Register;

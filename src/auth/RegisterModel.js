import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGraduationCap, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function RegisterModel({ show, handleClose }) {
    const [isChecked,setIsChecked] = useState()

    
    return (
        <Modal show={show} onHide={handleClose} className='modal-xl'>
            <Modal.Body className='p-0'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 d-none d-md-block p-0">
                            <div className="left-side-modal p-4">
                                <a className="navbar-brand text-white text-center m-auto d-block" href="index.php">
                                    <img src={require("../images/logo.png")} alt="logo" className="" /><span className="ms-2">College Directory</span>
                                </a>
                                <div className="mt-4">
                                    <h6 className="text-white f-15">Why register with us ?</h6>
                                    <ul className="listing3 ps-3">
                                        <li>Upto 50% discount on admission form</li>
                                        <li>24X7 Counselling facilities available</li>
                                        <li>Ask & received answer to the admission expert</li>
                                        <li>You won’t get unwanted call from third party</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* right container of model */}
                        <div className="col-md-9 ps-md-5">
                            <button type="button" className="btn-close float-end mt-3 me-4" aria-label="Close" onClick={handleClose}></button>
                            <div className="modal-form mt-md-5 mt-2">
                                <a className="navbar-brand text-white text-center m-auto d-block d-md-none" href="index.php">
                                    <img src={require("../images/logo.png")} alt="logo" className="" /><span className="ms-2">College Directory</span>
                                </a>
                                <h5 className="blue fw-bold text-center text-md-start">Register Now To Apply</h5>
                                <p className="p text-center text-md-start">Get details & latest updates</p>
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-group flex-nowrap">
                                                <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                                                <input type="text" className="form-control" placeholder="Full Name*" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group flex-nowrap">
                                                <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                                                <input type="text" className="form-control" placeholder="Email*" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group flex-nowrap">
                                                <span className="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faPhone} /></span>
                                                <input type="text" className="form-control" placeholder="Mobile" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group flex-nowrap">
                                                <span className="input-group-text"><FontAwesomeIcon icon={faLocationDot} /></span>
                                                <input type="text" className="form-control" placeholder="Location/City/State" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group flex-nowrap">
                                                <span className="input-group-text"><FontAwesomeIcon icon={faGraduationCap} /></span>
                                                <input type="text" className="form-control" placeholder="Select course, you interested in" aria-label="Username" aria-describedby="addon-wrapping" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check form-switch mt-4">
                                            <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                                    <p className="p">Enable update and Important information on your whatsapp.</p>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-2 text-center text-md-start">
                                            <button className="blue-btn">Submit</button>
                                        </div>
                                        <div className="col-md-6 text-center text-md-start mt-3">
                                            <p className="p">Already Register? Click here to <a href="#" className="a" data-bs-toggle="modal" data-bs-target="#login-now">Login</a> </p>
                                        </div>
                                        <div className="col-12 text-center mt-3">
                                            <p className="p"><a href="" className="p tdn">Term & Conditions</a> | <a href="" className="p tdn">Privacy Policies</a></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default RegisterModel;

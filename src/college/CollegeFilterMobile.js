import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { RightArraow } from '../icons/LocationIcon';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CollegeFilterMobile = () => {
    const FilterCategory = ["Degree", "State", "City"];
    const options = {
        Degree: ["UG", "PG"],
        State: ["Bihar", "UP"],
        City: ["Patna", "Lucknow"] // Example cities
    };

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (category) => {
        setSelectedCategory(category);
        setShow(true);
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="row mt-4">
                        <div className="nav-side d-flex align-items-center">
                            <i className="fa-solid fa-arrow-left-long me-2 mt-1"></i>
                            <span>FILTERS</span>
                            <div className="ms-auto">
                                <button type="button" className="reset-btn">Reset</button>
                            </div>
                        </div>
                        <hr />

                        <div className="col-lg-4 col-5">
                            <ul className="list-group">
                                {FilterCategory.map((category) => (
                                    <li
                                        key={category}
                                        className="list-group-item"
                                        onClick={() => handleShow(category)}
                                    >
                                        <b>{category}</b>
                                        <span className='float-end'><RightArraow /></span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-8 col-7 p-0">
                            {/* search bar */}
                            <div className="d-flex">
                                <input
                                    type="text"
                                    id="search-input1"
                                    placeholder="Search"
                                    className="form-control filter-shadow"
                                />
                                <p className='' style={{ position: "relative", margin: "5px 0px 0px -25px" }}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </p>
                            </div>

                            <div>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{selectedCategory}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="check-box-content">
                                            {selectedCategory && options[selectedCategory].map((item, index) => (
                                                <div key={index} className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id={`checkbox_id_${selectedCategory}_${index}`}
                                                        value={item}
                                                    />
                                                    <label className="form-check-label" htmlFor={`checkbox_id_${selectedCategory}_${index}`}>
                                                        {item}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>




                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default CollegeFilterMobile;

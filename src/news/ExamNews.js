

import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ExamNews = () => {

    const ExamNewsData = [
        {
            imagePath: require("../images/drs.png"),
            title: "Lorem ipsum dolor sit amet consectetur",
            date: "Saturday, Feb 24, 2024 | 12:42pm",
            description: "Lorem ipsum dolor sit amet consect Lorem, ipsum dolor. Lorem, ipsum dolor.",
            firstPara: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
            secondtPara: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
        },
        {
            imagePath: require("../images/drs.png"),
            title: "Lorem ipsum dolor sit amet consectetur",
            date: "Saturday, Feb 24, 2024 | 12:42pm",
            description: "Lorem ipsum dolor sit amet consect Lorem, ipsum dolor. Lorem, ipsum dolor.",
            firstPara: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
            secondtPara: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
        },
        {
            imagePath: require("../images/drs.png"),
            title: "Lorem ipsum dolor sit amet consectetur",
            date: "Saturday, Feb 24, 2024 | 12:42pm",
            description: "Lorem ipsum dolor sit amet consect Lorem, ipsum dolor. Lorem, ipsum dolor.",
            firstPara: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
            secondtPara: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
        },
        {
            imagePath: require("../images/drs.png"),
            title: "Lorem ipsum dolor sit amet consectetur",
            date: "Saturday, Feb 24, 2024 | 12:42pm",
            description: "Lorem ipsum dolor sit amet consect Lorem, ipsum dolor. Lorem, ipsum dolor.",
            firstPara: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
            secondtPara: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
        },
        {
            imagePath: require("../images/drs.png"),
            title: "Lorem ipsum dolor sit amet consectetur",
            date: "Saturday, Feb 24, 2024 | 12:42pm",
            description: "Lorem ipsum dolor sit amet consect Lorem, ipsum dolor. Lorem, ipsum dolor.",
            firstPara: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
            secondtPara: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
        },

    ]

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = ExamNewsData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(ExamNewsData.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <>
            <div className="row">
                {currentItems.map((examNews, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card p-2">
                            <img src={examNews.imagePath} alt="" />
                            <div className="card-body p-0">
                                <h5 className="text-dark">{examNews.title}</h5>
                                <p>{examNews.description}</p>
                                <h6><FontAwesomeIcon icon={faClock} className='me-2' />{examNews.date}</h6>
                                <hr />
                                <p>{examNews.firstPara}</p>
                                <hr />
                                <p>{examNews.secondtPara}</p>
                                <hr />
                                <p>{examNews.firstPara}</p>
                                <hr />
                                <p>{examNews.secondtPara}</p>
                            </div>
                            <div className="text-center button-click">
                                <Link to="">View More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center  mt-3">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handleClick(currentPage - 1)}>Previous</button>
                    </li>
                    {[...Array(totalPages).keys()].map(number => (
                        <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handleClick(number + 1)} style={{color:"black"}}>{number + 1}</button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handleClick(currentPage + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default ExamNews
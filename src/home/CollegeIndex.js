

import React,{useState, useEffect} from 'react'
import Carousel from 'react-multi-carousel';
import qs from 'qs'
import CollegeCard from './CollegeCard';


const CollegeIndex = () => {
    const [collegeData, setCollegeData] = useState([])
  // get college data
  useEffect(() => {
    const fetchCollegeData = async () => {
        try {
            const response = await fetch(
                "http://localhost/api/api/college-list",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },

                    body: qs.stringify({ key: process.env.REACT_APP_KEY }),
                }
            );

            if (!response.ok) {
                throw new Error(
                    "Network response was not ok: ${response.statusText}"
                );
            }

            const data = await response.json();
            console.log("data")

            console.log(data.data)

            setCollegeData(data.data);
        } catch (error) {
            console.error("Failed to fetch region data:", error);
        }
    };

    fetchCollegeData();
}, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,

        },
        laptop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 576 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
        },
    };
  return (
    <>
         {/* trending courses and college */}
         <section className="section3">
                <div className="container pt-3">
                    <div className="row">
                        <Carousel
                            responsive={responsive}
                            arrows={false}
                            centerMode={true}
                            infinite={true}
                            // autoPlay={true}
                            // autoPlaySpeed={2000}
                            keyBoardControl={true}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {collegeData.map((data) => (
                                <div className="mx-2">

                                    <CollegeCard data={data} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>
    
    </>
  )
}

export default CollegeIndex
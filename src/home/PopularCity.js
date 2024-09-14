import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function PopularCity({cityData}) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,

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



    const Cities = [
        { imagePath: require('../images/dehli.png'), name: 'Delhi NCR' },
        { imagePath: require('../images/banglore.png'), name: 'Bangalore' },
        { imagePath: require('../images/hydrabad.png'), name: 'Hydrabad' },
        { imagePath: require('../images/pune.png'), name: 'Pune' },
        { imagePath: require('../images/chennai.png'), name: 'Chennai' },
        { imagePath: require('../images/pune.png'), name: 'Pune' },
        { imagePath: require('../images/chennai.png'), name: 'Chennai' },
        { imagePath: require('../images/chennai.png'), name: 'Chennai' },
        { imagePath: require('../images/pune.png'), name: 'Pune' },
        { imagePath: require('../images/chennai.png'), name: 'Chennai' },
    ];

    return (
        <>
            <section className="popular-city">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <h5 className="fw-bold">Popular City</h5>
                        </div>
                        <Carousel
                            responsive={responsive}
                            arrows={false}
                            centerMode={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            keyBoardControl={true}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {cityData.map((city, index) => (
                                <div key={index} className="city-box">
                                    <img src={process.env.REACT_APP_SERVER_URL + city.icon} alt={city.city_name} className='img-fluid' 
                                    style={{}}
                                    
                                    />
                                    <h6>{city.city_name}</h6>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PopularCity;


import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import image1 from '../images/TEAM.jpg';

function TestimonialAboutPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    //Testimonial Data
    const TestimonialData = [
        {
            imagePath: require("../images/team-member.jpg"),
            name: "MANSHI SINGH",
            position: "Co-Founder"
        },
        {
            imagePath: require("../images/team-member.jpg"),
            name: "MANSHI SINGH",
            position: "Co-Founder"
        },
        {
            imagePath: require("../images/team-member.jpg"),
            name: "MANSHI SINGH",
            position: "Co-Founder"
        },
        {
            imagePath: require("../images/team-member.jpg"),
            name: "MANSHI SINGH",
            position: "Co-Founder"
        }

    ]

    const TeamsBackgroundImage = {
        backgroundImage: `url(${image1})`,
   
        maxWidth: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    }


    return (
        <>

            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-12 text-center " style={TeamsBackgroundImage}>
                        <h4 class="fw-bold">Let’s Meet Our Team</h4>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma </p>
                    </div>
                </div>
            </div>
            
            <div class="container team-member">
                <div class="row">

                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div class="col-lg-12">
                                <div class="card">
                                    <img src={data.imagePath} alt="" class="img-fluid" />
                                    <div class="card-body">
                                        <button>
                                            <FaFacebook />
                                            <FaInstagram />
                                            <FaLinkedin />
                                            <FaXTwitter />
                                        </button>
                                    </div>
                                    <div class="card-content text-center">
                                        <h5>{data.name}</h5>
                                        <p>{data.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider >
                </div>
            </div >

        </>
    )
}

export default TestimonialAboutPage
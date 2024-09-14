import { cleanData } from 'jquery'
import React, { useEffect, useState } from 'react'
import qs from 'qs'
import { Link } from 'react-router-dom';


function CourseButton() {

    const [courseData, setCourseData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_SERVER_URL + "api/course-list", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: qs.stringify({ key: process.env.REACT_APP_KEY })
                });

                if (response.ok) {
                    const data = await response.json();
                   
                    setCourseData(data.data)

                } else {
                    console.log("error");
                }

            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {
                courseData.map((course) => (
                    < Link to className="a me-2" > {course.course_name}</Link >

                ))
            }
            <a href="#" className="a">B.Sc(Nursing)</a>
        </>
    )
}

export default CourseButton
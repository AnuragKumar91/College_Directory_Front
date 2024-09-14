import React, { useState, useEffect } from 'react';

function CounterExamCourse() {
    const [from] = useState(0);
    const [speed] = useState(3000);

    const [collegeCount, setCollegeCount] = useState(from);
    const [examCount, setExamCount] = useState(from);
    const [monthlyVisitCount, setMonthlyVisitCount] = useState(from);
    const [cupTea, setCupTea] = useState(from);

    const CollegeEndValue = 100;
    const ExamEndValue = 270;
    const MonthlyVisitEndValue = 5000;
    const CupofTeaEndValue = 8000;

    useEffect(() => {
        const increment = (endValue) => Math.ceil((endValue - from) / (speed / 40));

        const updateCount = (currentCount, endValue, setCount, intervalId) => {
            let newCount = currentCount + increment(endValue);
            if (newCount >= endValue) {
                newCount = endValue;
                clearInterval(intervalId);
            }
            setCount(newCount);
            return newCount;
        };

        const intervalId1 = setInterval(() => {
            setCollegeCount((current) => updateCount(parseInt(current, 10), CollegeEndValue, setCollegeCount, intervalId1));
        }, 25);

        const intervalId2 = setInterval(() => {
            setExamCount((current) => updateCount(parseInt(current, 10), ExamEndValue, setExamCount, intervalId2));
        }, 25);

        const intervalId3 = setInterval(() => {
            setMonthlyVisitCount((current) => updateCount(parseInt(current, 10), MonthlyVisitEndValue, setMonthlyVisitCount, intervalId3));
        }, 25);

        const intervalId4 = setInterval(() => {
            setCupTea((current) => updateCount(parseInt(current, 10), CupofTeaEndValue, setCupTea, intervalId4));
        }, 25);

        return () => {
            clearInterval(intervalId1);
            clearInterval(intervalId2);
            clearInterval(intervalId3);
            clearInterval(intervalId4);
        };
    }, [from, speed, CollegeEndValue, ExamEndValue, MonthlyVisitEndValue, CupofTeaEndValue]);


    return (
        <div className="container perfect2">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">
                    <div className="box p-2 p-md-5 d-flex align-items-center flex-column">
                        <img src={require("../images/cap.png")} alt="Cap" />
                        <h5 className="text-dark mt-3 mb-3">{collegeCount}</h5>
                        <h6 className="lighter">COLLEGES</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">
                    <div className="box p-2 p-md-5 d-flex align-items-center flex-column">
                        <img src={require("../images/clipboard.png")} alt="Clipboard" />
                        <h5 className="text-dark mt-3 mb-3">{examCount}</h5>
                        <h6 className="lighter">EXAMS</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">
                    <div className="box p-2 p-md-5 d-flex align-items-center flex-column">
                        <img src={require("../images/userthree.png")} alt="Users" />
                        <h5 className="text-dark mt-3 mb-3">{monthlyVisitCount}</h5>
                        <h6 className="lighter">MONTHLY VISITS</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">
                    <div className="box p-2 p-md-5 d-flex align-items-center flex-column">
                        <img src={require("../images/Coffee.png")} alt="Coffee" />
                        <h5 className="text-dark mt-3 mb-3">{cupTea}</h5>
                        <h6 className="lighter">CUP OF TEA</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterExamCourse;

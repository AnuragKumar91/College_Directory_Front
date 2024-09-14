import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./home/LandingPage";
import FreeCounselling2 from "./home/FreeCounselling2";
import About from "./about_us/About";
import CounterExamCourse from "./about_us/CounterExamCourse";
import TestimonialAboutPage from "./about_us/TestimonialAboutPage";
import AboutTrendingCourse from "./about_us/AboutTrendingCourse";
import BakgroundImageTest from "./about_us/BakgroundImageTest";
import ApplicationForm from "./applicationform/ApplicationForm";
import CourseList from "./courses/CourseList";
import FilterByCourse from "./courses/FilterByCourse";
import CollegeDetailsInfo from "./college_detail_info/CollegeDetailsInfo";
import Footer from "./home/Footer";
import Exam from "./exams/Exam";
import Review from "./review/Review";
import Course from "./courses/Course";
import CountryDetails from "./country/CountryDetails";
import CollegePredictor from "./college/CollegePredictor";
import ExamList from "./exams/ExamList";
import CollegeList from "./college/CollegeList";
import Register from "./auth/Register";
import TermCondition from "./termcondition/TermCondition";
import PrivacyPolicy from "./termcondition/PrivacyPolicy";
import NewsDetails from "./news/NewsDetails";
import NewsUpdate from "./news/NewsUpdate";
import UniversityList from "./college/UniversityList";
import Login from "./auth/Login";
import MyNavbar from "./mynavbar/MyNavbar";
import RegisterModel from "./auth/RegisterModel";
import Table1 from "./Table1";
import "./responsive.css";
import PopularCity from "./home/PopularCity";
import Dashboard from "./routes/Dashboard";
import GetRegion from "./GetRegion";
import FormCreateFromDatabase from "./FormCreateFromDatabase";
import MobileForm from "./home/MobileForm";
import CollegeIndex from "./home/CollegeIndex";
import CollegeListFilter from "./college/CollegeListFilter";
import CollegeFilterMobile from "./college/CollegeFilterMobile";
import VivekBhaiya from "./college/VivekBhaiya";
import ReactFrom from "./home/ReactFrom";

function App() {
  return (
    <div className="App overflow-auto">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="free-counselling" element={<FreeCounselling2 />} />
        <Route path="counter-exam-course" element={<CounterExamCourse />} />
        <Route path="testimonial-about" element={<TestimonialAboutPage />} />
        <Route path="about-trending-course" element={<AboutTrendingCourse />} />
        <Route path="background-image-test" element={<BakgroundImageTest />} />
        <Route path="application-form" element={<ApplicationForm />} />
        <Route path="courses" element={<CourseList />} />
        <Route path="courses/filter" element={<FilterByCourse />} />
        <Route path="college-details" element={<CollegeDetailsInfo />} />
        <Route path="exam" element={<Exam />} />
        <Route path="review" element={<Review />} />
        <Route path="course/:id" element={<Course />} />
        <Route path="country-details" element={<CountryDetails />} />
        <Route path="college-predictor" element={<CollegePredictor />} />
        <Route path="exam-list" element={<ExamList />} />
        <Route path="college" element={<CollegeList />} />
        <Route path="college/register" element={<Register />} />
        <Route path="terms" element={<TermCondition />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="news" element={<NewsDetails />} />
        <Route path="news-update" element={<NewsUpdate />} />
        <Route path="university-list" element={<UniversityList />} />
        <Route path="login" element={<Login />} />
        <Route path="register-model" element={<RegisterModel />} />
        <Route path="table1" element={<Table1 />} />
        <Route path="popular-city" element={<PopularCity />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="get-region" element={<GetRegion />} />
        <Route
          path="form-create-from-database"
          element={<FormCreateFromDatabase />}
        />
        <Route path="mobile-form" element={<MobileForm />} />
        <Route path="college-index" element={<CollegeIndex />} />
        <Route path="college/filter" element={<CollegeListFilter />} />
        <Route path="college/filter/mobile" element={<CollegeFilterMobile />} />
        <Route path="college/vivek-bhaiya" element={<VivekBhaiya />} />
        {/* Add other routes here */}
        <Route path="*" element={<NotFound />} /> {/* Fallback route for 404 */}
      </Routes>
      <Footer />
    </div>
  );
}

function NotFound() {
  return <h2>Page not found</h2>;
}

export default App;

// import * as React from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
// import About from "../about_us/About";
// import LandingPage from "../home/LandingPage";
// import Exam from "../exams/Exam";
// import NewsDetails from "../news/NewsDetails";
// import CollegeList from "../college/CollegeList";


// const Dashboard = () => {
//     const router = createBrowserRouter([
//         {
//             path: "/",
//             element: <LandingPage /> 
//         },
//         {
//             path: "about",
//             element: <About /> 
//         },
//         {
//             path: "news",
//             element: <NewsDetails /> 
//         },
//         {
//             path: "exam",
//             element: <Exam /> 
//         },
//         {
//             path: "college",
//             element: <CollegeList /> 
//         }

//     ]);

//     return <RouterProvider router={router} />
// }

// export default Dashboard

import React from "react";
import About from "../about_us/About";
import LandingPage from "../home/LandingPage";
import Exam from "../exams/Exam";
import NewsDetails from "../news/NewsDetails";
import CollegeList from "../college/CollegeList";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Add your dashboard content here */}
      <LandingPage />
      <About />
      <NewsDetails />
      <Exam />
      <CollegeList />
    </div>
  );
};

export default Dashboard;

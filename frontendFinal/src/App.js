import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom';

import './App.css';
import Home from './components/pages/home'
import axios from 'axios';
import Courses from './components/pages/Courses';
import Coruse from './components/Coruse';
import ICFP from './components/pages/ICFP'
import AdminHome from './components/pages/AdminHome';
import CourseSearch from './components/pages/CourseSearch';
import PostRequest from './components/PostRequest';
import Postform from './components/postform';
import Exam from './components/pages/Exam';
import Exam2 from './components/pages/CreateQuestion';
import Quiz from './components/pages/Quiz';
import Exam4 from './components/pages/CreateQuestion';
import Exam3 from './components/pages/Exam3';

import AcceptTerms from './components/pages/AcceptTerms';
import InstructorRatingsAndReviews from './components/pages/InstructorRatingsAndReviews';
import ReviewCourse from './components/pages/ReviewCourse';
import RateInstructor from './components/pages/RateInstructor';

import GetInstructors from './components/pages/GetInstructors';
import CoursePage from './components/pages/CoursePage';
import InstructorProfile from './components/pages/InstructorProfile';
import SubtitlePage from './components/pages/SubtitlePage';
import StudentCoursePage from './components/pages/StudentCoursePage';
import StudentSubtitles from './components/pages/StudentSubtitles';
import EnterCreditCard from './components/pages/EnterCreditCard'
import ViewCorporateTraineeRequests from './components/pages/ViewCorporateTraineeRequests';
import GetMyCourses from './components/pages/GetMyCourses';

function Post() {
  return (<></>) ;
}
const api = axios.create({
  baseURL : `http://localhost:4000/api/courses`
})


function App() {

  
    api.get('/').then(res => {
      console.log(res.data)
    })
  

  return (
    <>
         {/* <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend
      </h3>    
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
          <NavLink className="btn btn-light btn-outline-primary" to="/">
              Home
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/Coruse">
            Coruse
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/ICFP">
              ICFP
            </NavLink>
          </li>
  
        </ul>
      </nav>
      <Routes>
        <Route exact path="/Coruse" >
          <Coruse/>
        </Route>
        <Route exact path='/ICFP' >
        <ICFP/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>

 */}



    <BrowserRouter>
      <Navbar />
        <Routes>

        <Route path="/coursePage">
        <CoursePage/>
        </Route>

          

<Route exact path="/Courses" >
          <GetInstructors/>
        </Route>

<Route path='/StudentCoursePage'>
  <StudentCoursePage/>
</Route>

<Route path='/StudentCoursePage'>
          <StudentCoursePage/>
        </Route>

<Route path="/filter">
          <InstructorProfile/>
        </Route>

        <Route path="/StudentSubtitles">
          <StudentSubtitles/>
        </Route>

      
        <Route path="/Subtitle">
        <SubtitlePage/>
        </Route>


          <Route exact path="/" >
          <Home/>
        </Route>


        <Route exact path="/Coruse" >
          <Coruse/>
        </Route>

        <Route exact path="/ViewCorporateTraineeRequests" >
        <ViewCorporateTraineeRequests/>
        </Route>


        <Route exact path="/GetMyCourses" >
        <GetMyCourses/>
        </Route>

        <Route exact path="/Courses" >
        <GetInstructors/>
        </Route>

        <Route exact path="/AdminHome" >
          <AdminHome/>
        </Route>

        <Route exact path="/Quiz" >
          <Quiz/>
        </Route>

        <Route exact path="/Postform" >
          <Postform/>
        </Route>


        <Route exact path="/Exam" >
          <Exam/>
        </Route>

        <Route exact path="/Exam2" >
          <Exam2/>
        </Route>

        <Route exact path="/Exam3" >
          <Exam3/>
        </Route>
   

        <Route exact path="/CreateQuestion/:id" >
          <Exam4/>
        </Route>
        
        <Route exact path="/review" >
          <InstructorRatingsAndReviews/>
        </Route>

        <Route exact path="/courseReview" >
          <ReviewCourse/>
        </Route>

        <Route exact path="/instructorReview" >
          <RateInstructor/>
        </Route>
        <Route exact path="/AcceptTerms" >
          <AcceptTerms/>
        </Route>


  
        <Route exact path="/EnterCreditCard" >
          <EnterCreditCard/>
        </Route>

          {/* <Route path='/ICFP' exact component={ICFP}/> */}
          {/* <Route path='/AdminHome' exact component={AdminHome}/> */}
          {/* <Route path='/Browse'exact component={CourseSearch}/> */}
          {/* <Route path='/post' exact component={postform}/> */}
          {/* <Route path ='/courses' exact component={Courses}/> */}
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

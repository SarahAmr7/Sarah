
import './CourseSearch.css';
import Coruse from '../Coruse';

import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom';
import React, { Component }  from 'react';


function CourseSearch() {
  
  return (
    
       <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        Browse Cours
      </h3>    
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
          <NavLink className="btn btn-light btn-outline-primary" to="/">
              Home
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/Course">
              Courses
            </NavLink>
            
          </li>
  
        </ul>
      </nav>
      <Coruse/>
    </div>
    </BrowserRouter>
  );
}

export default CourseSearch;
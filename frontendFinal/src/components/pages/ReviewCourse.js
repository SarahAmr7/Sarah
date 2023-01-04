import { useState } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useEffect, useRef} from "react";
import axios from 'axios';


const ReviewCourse = () => {
    const [Code, setCode] = useState('')
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState('')
    const [instructor, setInstructor] = useState('')
    const [error, setError] = useState(null)
    const [courses,setCourses] = useState([])
    const [courseIns, setCourseIns] = useState()
    const id = useRef('')

    var instructors = '';

    const handleSubmit = async (e) => {
        e.preventDefault()
        const review={Code,comment,rating,instructor}

        const response = await fetch('/api/courses/review', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const json = await response.json()
          if (!response.ok) {
            setError(json.error)
          }
          if (response.ok) {
            setError(null)
            setCode('')
            setComment('')
           // setCommentId('')
            setRating('')
            setInstructor('')

            console.log('new course review added:', json)
          }
        }
        useEffect(()=> {
          axios.get('http://localhost:4000/api/courses/getAll').then(res => {
              console.log(res)
              const courses = res.data
              setCourses(courses)
        })

        },{});
        
        // async function getIns(){
        //   axios.get(`http://localhost:4000/api/courses/getCourse?courseId=${Code}`).then(res => {
                
        //         console.log(res)
        //         id(res.data.instructor)
        //     .catch(err => {
        //         console.log(err)
        //     })
        //   })
        // }

        // async function getInsName(){
        //   await getIns();
        //   axios.get(`http://localhost:4000/api/Instructor/getInstructorbyId?instructorId=${id}`).then(res => {
        //     console.log(res)
        //     setCourseIns(res.data.username)
        //     }).catch(err => {
        //         console.log(err)
        //     })
        // }


        const handleChange = (event) => {
          //const name = event.target.getAttribute("name");
          console.log(event.target.value)
          setCode(event.target.value)
          //console.log(event.currentTarget.getAttribute("data--name"))
          console.log(instructor)
           
          

        };

        return (

            <form className="create" onSubmit={handleSubmit}> 
              <h3>Add Your Course Rating and Review</h3>
        
              <label>Course Code:</label>
              <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">select instructor</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Code}
                label="select instructor"
                onChange={handleChange}
              >
          {courses.map((course) => (
            
            <MenuItem value={course._id} onClick={(e)=>{setInstructor(course.instructor)
            }} > {course.Code}</MenuItem>
            

                ))};
            </Select>
          </FormControl>
        </Box>
        
              <label>Review:</label>
              <input 
                type="String" 
                onChange={(e) => setComment(e.target.value)} 
                value={comment}
              />
        
              <label>Rating:</label>
              <input 
                type="number" 
                onChange={(e) => setRating(e.target.value)} 
                value={rating} 
              />

            <label>Instructor Username:</label>
              <input 
                type="String" 
                onChange={(e) => setInstructor(e.target.value)} 
                value={instructor} 
              />
        
              <button>Add Course Feedback</button>
              {error && <div className="error">{error}</div>}
            </form>
          )
        }
        
        export default ReviewCourse

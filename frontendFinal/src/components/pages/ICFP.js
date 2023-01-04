import React,{useState, useEffect} from "react";
import axios from 'axios'
import './courses.css'
import userEvent from "@testing-library/user-event";

function Courses() {
    const [courses, setCourses] = useState([])
    const [query, setQuery] = useState("");
    console.log(query)

    useEffect(() => {
        axios.get('http://localhost:4000/api/courses/getAll').then(res => {
            
            console.log(res)
            setCourses(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[]);

return(

   <div className="app"> 
    <input 
    type ="text"
    placeholder="Search..."
    className="search"
    onChange={(e)=>setQuery(e.target.value)}

   />

   <ul className="list">

            
        {courses.filter((course)=>course.title.includes(query)).map((course) => (
            <li className="listItem">{course.title}</li>
        ))}

   </ul>

  </div>

)





    
   
}
export default Courses



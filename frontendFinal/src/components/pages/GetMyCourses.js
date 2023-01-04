import React,{useState} from "react";
import axios from 'axios'
import './courses.css'
import { Link } from 'react-router-dom';


    
// return the courses that instructor gives
const GetMyCourses=()=>{
    const [reviews, setReviews] = useState([]);

        const params = new URLSearchParams(window.location.search);
        const traineeID = params.get('traineeID');
        //TODO
      const getReviews=async()=>{  
    
     
       await axios.get(`http://localhost:4000/api/trainee/getTraineeCourses?traineeID=${traineeID}`).then(
            (res) => {
             const reviews= res.data
             console.log(reviews)

            setReviews(reviews)
            }
            );

            //const reviews= await ReviewCourses.find()

      }
        

return(
        
    <div className="GetMyCourses">
     
<div>
   <button onClick={getReviews}>View My Courses</button>
   </div>
   
    <table>
        <thead>
            <tr>
            <th>Courses</th>
          
            </tr>
        </thead>
        <tbody>
            {reviews.map((review) => (
                <tr>
                    <td>{review.title}</td>
               



                </tr>
            ))}
        </tbody>
    </table>
</div>

)





    
   
}
export default GetMyCourses



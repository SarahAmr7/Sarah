import axios from 'axios';
import Button from '@mui/material/Button';
import './CoursePage.css';
import Addpreview from '../AddPreview.js'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import ReactPlayer from 'react-player'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';



//import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
//import { set } from 'mongoose';
const { useState,useEffect } = require("react");

const CoursePage = () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
   // console.log(courseId);
    const [courseTitle,setCourseTitle] = useState("");
    const [totalHours,setTotalHours] = useState("");
    const [rating,setRating] = useState("");
    const [price,setPrice] = useState("");
    const [code,setCode] = useState("");
    const [courseOutline,setCourseOutline] = useState("");
    const [previewVideo,setPreviewVideo] = useState("");
    const [noOfViews,setNoOfViews] = useState("");
    const [active,setActive] = useState(false);
    const [subtitles,setSubtitles] = useState([]);
    //--------------------------------------------------------
    // to edit video and video desc
    const [subactive, setSubactive] = useState(false);
    const[video,setVideo] = useState("");
    const[videodesc, setVideoDesc] = useState("");
    const[tbcsubID,settbcSubID] = useState("");
    const[subcourseId,setsubCourseId] = useState("");
    const[body,setBody] = useState("");
    const[title,setTitle] = useState("");


  

        useEffect(() => {
            axios.get(`http://localhost:4000/api/courses/getCourse?courseId=${courseId}`).then(res => {
                
                console.log(res)
                setCourseTitle(res.data.title);
                setTotalHours(res.data.totalHours);
                setRating(res.data.rating);
                setPrice(res.data.price);
                setCode(res.data.Code);
                setCourseOutline(res.data.courseOutline);
                setPreviewVideo(res.data.previewVideo);
                setNoOfViews(res.data.noOfViews);
            })
            .catch(err => {
                console.log(err)
            })

            axios.get(`http://localhost:4000/api/subtitles/getSubByCourse?courseId=${courseId}`).then(res => {
                const subtitles = res.data
                console.log(subtitles)
                setSubtitles(subtitles)
            }).catch(err =>{
                console.log(err)
            })

        },[]);

        // function onedit(){
        //     setOneSub(this.subtitle);
        //     console.log(oneSub);
        // }
        
        async function updatePreview()
        {
            let course = {totalHours,price,courseTitle,code,courseOutline,previewVideo}
            fetch(`http://localhost:4000/api/courses/addPreview?courseId=${courseId}`, {

            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }})
            
        }
      
        function handleSubmit(){
            updatePreview();
            setActive(false);
            console.log(previewVideo);
            
        }

        

        function getSub(id){

            axios.get(`http://localhost:4000/api/subtitles/getSubById?subId=${id}`).then(res => {

                console.log(res)
                setsubCourseId(res.data.courseId);
                setVideo(res.data.video);
                setBody(res.data.body);
                setTitle(res.data.title);
                setVideoDesc(res.data.videodesc);
                settbcSubID(id);

            }).catch(err =>{
                console.log(err)
            })

        }

        async function PutSubtitle(){
            let subreq = {subcourseId,video,body,title,videodesc}
            fetch(`http://localhost:4000/api/subtitles/?subId=${tbcsubID}`, {
                method: 'PUT',
                body: JSON.stringify(subreq),
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }   
            })
        }

      


       return(
        <body>

           
    
            <div class="header">
                <h2 >{code}</h2>
            <h1>{courseTitle}</h1>
            <p>{courseOutline}</p>
            <p> rating: {rating}</p>
            <ReactPlayer url= {previewVideo} />
        </div>
        <    Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={() => setActive(true)}
            margin="normal"
            padding="normal"
            >Add/Change Preview Video</Button>
            {/* margin */}

            <form>
                
                
                { active == true && <TextField
                  id="prev"
                  label="Preview Video Link"
                  
                  helperText="Insert a Youtube Video link"
                  value={previewVideo}
                  onChange={(e)=> setPreviewVideo(e.target.value)}

                /> }

                
                 
            { active == true && <Button variant="contained"
            onClick={() => handleSubmit()}
            margin="normal"
            padding="normal"
            >Submit</Button>
           
                }

                        </form>

            </Box>

            
<div class="content">
  <h1>Info</h1>
  <p>Total Hours: {totalHours}</p>
  <p>Price: {price}</p>
 
</div>

                <h1>Subtitles</h1>
        <div className="Subtitles">

        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List >

        {subtitles.map((subtitle) => (


          <ListItem disablePadding>
            <ListItemButton key={subtitle._id}
            onClick={() => window.location.href=`/Subtitle?subtitleId=${subtitle._id}&courseId=${courseId}`}>

           {subtitle.title}
            </ListItemButton>
          </ListItem>



        ))}

        </List>
      </nav>
    </Box>








            
     
        </div>




</body>
       )
   


}

export default CoursePage;
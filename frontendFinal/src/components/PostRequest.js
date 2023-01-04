import { useState } from 'react'
import { variables } from './Variables'
//import './adminform.css'

const PostRequest = () => {
  const params = new URLSearchParams(window.location.search);
    const instructorId = params.get('instructorId');
    const [subtitles, setsubtitles] = useState('')
    const [totalHours, settotalHours]= useState()
    const [rating, setrating]= useState()
    const [price, setprice] = useState()
    const [Code, setCode] = useState('')
    const [title, settitle] = useState('')
    const [courseId,setcourseId]= useState('')
    const [exercisesDetails, setexercisesDetails] = useState('0')
    const [courseOutline, setcourseOutline] = useState('0')
    const [previewVideo, setpreviewVideo] = useState('0')
    const [noOfViews, setnoOfViews] = useState(0)
    const [noOfBuyers, setnoOfBuyers] = useState(0)
    const [instructor, setinstructor] = useState(instructorId)
    const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("instructorId:"+instructorId)
 
    const course = {totalHours,rating, price,title, Code, courseOutline, previewVideo, noOfViews, noOfBuyers, instructor}
    console.log(course);
    const response = await fetch(variables.API_URL+'courses', {
      method: 'POST',
      body: JSON.stringify(course),
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
      setsubtitles('')
      settotalHours('')
      setrating('')
      setprice('')
      setCode('')
      settitle('')
      setcourseId('')
      setexercisesDetails('')
      setcourseOutline('')
      setpreviewVideo('')
      setnoOfViews('')
      setnoOfBuyers('')
      setinstructor('')
      console.log('new course added:', json)
    }

  }






  return (

    
            <form className='form' onSubmit={handleSubmit}>
                {/* <div>
                <label>Subtitles</label>
                <input type='String' className='form-input' id='sub' value={subtitles} onChange={(e) => setsubtitles(e.target.value)}/>
                </div> */}
                <div>
                <label>Total Hours</label>
                <input type='number' className='form-input' id='TH' value={totalHours} onChange={(e) => settotalHours(e.target.value)}/>
                </div>
                <div>
                <label>price</label>
                <input type='number' className='form-input' id='pris' value={price} onChange={(e) => setprice(e.target.value)}/>
                </div>
                <div>
                <label>Code</label>
                <input type='String' className='form-input' id='sub' value={Code} onChange={(e) => setCode(e.target.value)}/>
                </div>
                <div>
                <label>title</label>
                <input type='String' className='form-input' id='titl' value={title} onChange={(e) => settitle(e.target.value)}/>
                </div>
                {/* <div>
                <label>course ID</label>
                <input type='number' className='form-input' id='id' value={courseId} onChange={(e) => setcourseId(e.target.value)}/>
                </div> */}
                <div>
                <label>Course Outline</label>
                <input type='String' className='form-input' id='outline' value={courseOutline} onChange={(e) => setcourseOutline(e.target.value)}/>
                </div>
                 <div>
                <label>preview Video</label>
                <input type='String' className='form-input' id='inst' value={previewVideo} onChange={(e) => setpreviewVideo(e.target.value)}/>
                </div> 
                
                
				        <button>Add Course</button>
                {error && <div className="error">{error}</div>}

                
                
            </form>
            
        
  )
}

export default PostRequest
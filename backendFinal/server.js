require('dotenv').config()
const cors=require('cors');

const express= require('express')
const mongoose= require('mongoose')
const coursesRoutes = require('./routes/courses')
const adminRoutes =require('./routes/admin')
const traineeRoutes =require('./routes/trainee')
const instructorRoutes =require('./routes/instructors')
const guestRoutes = require('./routes/Guest')
const individualTraineeRoutes=require('./routes/IndividualTrainee')
const corporateTraineeRoutes=require('./routes/CorporateTrainee')
const questionsRoutes=require('./routes/questions')
const examRoutes=require('./routes/exam')
const qexRoutes=require('./routes/qex')
const subtitles= require('./routes/subtitles')
const Countries = require('./routes/Countries')


// express app
const app = express();


//middleware
app.use(cors())
app.use(express.json())
app.use((req,res,next) => {
     console.log(req.path,req.method)
next()
})

//routes
app.use('/api/courses', coursesRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/trainee', traineeRoutes)
app.use('/api/instructor', instructorRoutes)
app.use('/api/Instructor', instructorRoutes)
app.use('/api/CorporateTrainee', corporateTraineeRoutes)
app.use('/api/IndividualTrainee', individualTraineeRoutes)
app.use('/api/guest',guestRoutes)
app.use('/api/questions',questionsRoutes)
app.use('/api/exam',examRoutes)
app.use('/api/qex',qexRoutes)
app.use('/api/subtitles', subtitles)
app.use('/api/Countries',Countries)
//connect to db
mongoose.connect(process.env.MONG_URI)
.then (() => {
   //listen for requests
 app.listen(process.env.PORT, () => {
  console.log('Connected to db && listening on port ', process.env.PORT)
 })
})
.catch((error) => {
  console.log(error)
})






//app.use(bodyParser.json({limit:"20mb",extended: true}));
//app.use(bodyParser.urlencoded({limit:"20mb",extended: true}));

//app.use(cors());








   
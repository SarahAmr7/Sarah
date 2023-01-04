
const Instructor= require('../models/InstructorModel')
const mongoose = require("mongoose")
const InstructorModel = require('../models/InstructorModel')
const ReviewInstructors = require('../models/ReviewInstructorsModel')
const ReviewCoursesModel = require('../models/ReviewCoursesModel')

//create instructor
const createInstructor= async (req,res) =>{
    const {usserId,username,password,country,rating,biography,email}= req.body
   
    // add instructor to db
    try{
const instructor= await  Instructor.create( {usserId,username,password,country,rating,biography,email})
   res.status(200).json(instructor)
 } 
   catch(error){
   res.status(400).json({error: error.message})
    }
}

const GetInstructorReviews = async(req,res) =>{
  const instructorUsername = req.query.instructorUsername;
  if(instructorUsername){
    
    const review = await ReviewInstructors.find({instructorUsername:String(instructorUsername)})
    res.status(200).json(review)
   }else{
      res.status(400).json({error:"Instructor ID is required"})
  }

}
//get ratings and reviews of instructors courses
//Sarah
const getRatingsReviews= async (req,res)=>
{ 
  const id = req.query.id
  
  if(!mongoose.Types.ObjectId.isValid(id))
  {
      return res.status(404).json({error: "No Instructors with that ID"})
  }

  const instructor= await Instructor.findById(id)

  if(!instructor)
  {
    return res.status(404).json({error:"No Instructors availabe with that ID."})
  }

  var query ={instructor:instructor.username}

  const reviews = await ReviewCoursesModel.find(query).sort({createdAt: -1})


  res.status(200).json(reviews)



}

const GetInstructorRating = async(req,res) =>{
  const instructorUsername = req.query.instructorUsername;
  var AccRate = 0;
  var i = 0;
  if(instructorUsername){
    
    const review = await ReviewInstructors.find({instructorUsername:String(instructorUsername)})

    for (i = 0; i<review.length; i++){

      AccRate+= review.data.rating;


    }


    res.status(200).json(AccRate)
   }else{
      res.status(400).json({error:"Instructor ID is required"})
  }

}


//select country
const updateCopCountry = async(req,res) =>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id))
  {
      return res.status(400).json({error:"No Such ID"});
  }

  try{
      const result = await Instructor.findOneAndUpdate({_id:id},{...req.body});
      const newRecord = await Instructor.findById({_id:id});
      res.status(200).json(newRecord);

  }
  catch(error)
  {
      res.status(400).json({error:error});
  }

}

const selectCountry = async(req,res)=>{


  // if(!mongoose.Types.ObjectId.isValid(id))
  //   {
  //       return res.status(404).json({error: "No guest with that ID"})
  //   }
  
  
      const {userId,username,password,rating,biography,email} = req.body;
    //   console.log(country);
      try{
        const instructor = await Instructor.create({userId,username,password,rating,biography,email})
        res.status(200).json(instructor);
  
      }
      catch(error)
      {
  
        res.status(400).json({error: error.message})
  
      }
    //   // const guest = await Guest.create({"country": country},{
    //   //     ...req.body
    //   // })
  
    // if(!guest){
    //   return res.status(400).json({error:'no such guest'})
    // }
  
    // res.status(200).json(guest)
  }

  const getInstructors = async (req,res)=> {
    const Instructors = await Instructor.find({});
    res.status(200).json(Instructors);
}

const getInstructorbyId = async(req,res) => {
  const instructorId = req.query.instructorId
  if(instructorId){
    const result = await InstructorModel.findById(mongoose.Types.ObjectId(instructorId));
    res.status(200).json(result);
  
  } else{
    res.status(400).json(res)
  }
  
}




const changeBio = async(req,res,next) => {
  const instructorId = req.query.instructorId;
  if(instructorId){
    InstructorModel.findByIdAndUpdate(mongoose.Types.ObjectId(instructorId),req.body).then(function(){
      InstructorModel.findById(mongoose.Types.ObjectId(instructorId)).then(function(InstructorModel){
        res.send(InstructorModel)
      })
      
    })
  }else{
    res.status(400).json(res);
  }
}

const createInstructorReview= async (req,res)=>{
  const rating = req.body.rating;
  const instructorUsername = req.body.instructorUsername;
  const comment = req.body.comment;
   // const commentId = req.body.commentId;

    try{
      const reviewInstructors= await ReviewInstructors.create( {instructorUsername,comment,rating})
     res.status(200).json(reviewInstructors)
    }
     catch(error){
    res.status(400).json({error: error.message})
     }

}



  
module.exports= {
  createInstructor,
  updateCopCountry,
  selectCountry,
  getInstructors,
  getInstructorbyId,
  changeBio,
  GetInstructorReviews,
  createInstructorReview,
  GetInstructorRating,
  getRatingsReviews

  
}
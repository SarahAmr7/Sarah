const Admin= require('../models/AdminModel')
const mongoose = require("mongoose")
const { db } = require('../models/AdminModel')
const AdminModel = require('../models/AdminModel')
const CorporateTraineeRequests = require('../models/CorporateTraineeRequests')

const getCorporateTraineeRequests = async(req,res)=>{

  try{
    const result = await CorporateTraineeRequests.find().populate("traineeID").populate("courseID")
   
  res.status(200).json(result)
  }
  catch(error){
    res.status(400).json({error: error.message})
     }
   
}


const post= async(req,res)=>{
  const traineeID=req.body.traineeID
  const courseID=req.body.courseID

  try{
    const reviewCourses= await  CorporateTraineeRequests.create( {traineeID,courseID})
   res.status(200).json(reviewCourses)
  }
  catch(error){
    res.status(400).json({error: error.message})
     }
    
}



// create new admin
const createAdmin= async (req,res) =>{
    const {userId,username,password}= req.body
   
    // add admin to db
    try{
const admin= await  Admin.create({userId,username,password})
   res.status(200).json(admin)
 } catch(error){
   res.status(400).json({error: error.message})
    }
}

const AdminLogin= async (req,res) =>{
  //const {name,email,password}= req.body
  try{

  
  const user= await Admin.findOne({username:req.body.username});
  if(!user)
    return res.status(400).send({message:"Invalid Username or Password"});

    const userpass= await Admin.findOne({password:req.body.password});
    if(!userpass)
    return res.status(400).send({message:"Invalid Username or Password"});

    return res.status(200).send({message:"Login Successful"});
  }catch(error){
    return res.status(400).json({error: error.message})

  }



  /*
  console.log(req.body);
  // add admin to db
  try{
//const admin= await  Admin.create({userId,username,password})
 res.status(200).json({message:"ENTA YA 8ABY"});
} catch(error){
 res.status(400).json({error: error.message})
  }
*/
}

 module.exports= {createAdmin,AdminLogin,getCorporateTraineeRequests,post}


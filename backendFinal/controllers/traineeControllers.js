const Trainee= require('../models/TraineeMode.js')
const mongoose = require("mongoose")
const nodemailer = require("nodemailer");
const { findOneAndUpdate } = require('../models/TraineeMode.js');
const Courses = require('../models/CoursesModel.js');

const getTraineeCourses = async(req,res)=>{
  const traineeID= req.body.traineeID

  try{
    const result = await Trainee.findById(mongoose.Types.ObjectId(traineeID)).populate("courses")
  res.status(200).json(result.courses)
  }
  catch(error){
    res.status(400).json({error: error.message})
     }
   
}

const addingCourseToTrainee= async (req,res)=>{
const traineeID = req.body.traineeID
const courseID= req.body.courseID

if(traineeID){
  const result = await Trainee.updateOne({_id: traineeID},
    {$push:{courses: mongoose.Types.ObjectId(courseID)}})
const trainee= await Trainee.findById(traineeID)
  res.status(200).json(trainee);

  }

  else{
      res.status(400).json({error:"invalid course"})
  }
//63a0c70d0d30e428a3009425

}

//create trainee
const createTrainee= async (req,res) =>{
    const {userId,country,username,firstName,lastName,password,gender,email,traineeId}= req.body

    // add trainee to db
    try{
const traine= await  Trainee.create( {userId,country,username,firstName,lastName,password,gender,email,traineeId})
   res.status(200).json(traine)
 } 
   catch(error){
   res.status(400).json({error: error.message})
    }
}
const TraineeLogin= async (req,res) =>{
  //const {name,email,password}= req.body
  try{

  const user= await Trainee.findOne({email:req.body.email});
  if(!user)
    return res.status(400).send({message:"Invalid Username or Password"});

    const userpass= await Trainee.findOne({password:req.body.password});
    if(!userpass)
    return res.status(400).send({message:"Invalid Username or Password"});

    return res.status(200).send({message:"Login Successful"});
  }catch(error){
    return res.status(400).json({error: error.message})

  }
}


/*              7AGTYYYYYYYYY               */

const changePassword = async (req, res) => {
  const {name, password}= req.body;
  try{
      const user = await Trainee.findOne({name});
      user.password=password;
      findOneAndUpdate({name},user);
      res.send({message: "Password Successfully Changed"});
  
  }
  
  catch{
      res.send({message: "Password Change Failed"});
  }
  
  }
  
  
  const sendEmail =async(req,res) => {
      const{email}=req.body;
      let mailTransporter=nodemailer.createTransport({
          port: 587,
          secure: false,
          service: "hotmail",
          auth:{user: "aclsender@outlook.com",
               pass: "Acl123$%"}
      
        });
      
      let info = await mailTransporter.sendMail({
          from: "aclsender@outlook.com", // sender address
          to: email, // list of receivers
          subject: "Password Change", // Subject line
          text: "You want to change your password", // plain text body
          html: "<a>http://localhost:3000/sendemail/12345</a>", // html body
        });
  
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.send({message: "Sent Successfully"});
  
      
  }
  
  
  ////////////////////////////////////////////




module.exports= {
  createTrainee,
  TraineeLogin,
  changePassword,
  sendEmail,
  addingCourseToTrainee,
  getTraineeCourses
  
}

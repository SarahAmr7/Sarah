const Courses= require('../models/CoursesModel')
const mongoose = require("mongoose")
const ReviewCoursesModel = require('../models/ReviewCoursesModel')
//////////////////////////////////////////////////
const CountryDiscountModel = require('../models/CountryDiscountModel')
//////////////////////////////////////////////////


// get mostviewed courses
const mostViewedCourses= async(req,res)=>
{
    const courses = await Courses.find({}).sort({noOfViews: -1})
    res.status(200).json(courses.slice(0,3))

}



// Course review
const createReview= async (req,res) =>{

    const rating = req.body.rating;
    const instructor = req.body.instructor;
    const comment = req.body.comment;
    const Code = req.body.Code;
     // const commentId = req.body.commentId;
    try{
      const reviewCourses= await  ReviewCoursesModel.create( {Code,comment,rating,instructor})
     res.status(200).json(reviewCourses)
    }
    catch(error){
      res.status(400).json({error: error.message})
       }
  
  }

//get all courses

const getCourses = async (req,res)=> {
    console.log('Course Get All');
    const courses = await Courses.find({}).sort({createdAt: -1});
res.status(200).json("test");
}

// get all courses codes
const getCodes = async (req,res)=> {
    console.log('code Get All');
    const codes = await Courses.find({},{Code:1,_id:0});
res.status(200).json(codes[0]);
}

//get a single course by id
const getCourse = async (req,res)=>{
    const {id } = req.params


    if(!mongoose.Types.ObjectId.isValid(id))
{
    return res.status(404).json({error: "No Course with that ID"})
}

    const course= await Courses.findById(id)

    if(!course){
        return res.status(404).json({error:"No Course availabe with that ID."})
    }

    res.status(200).json(course)
}

const getOneCourse = async(req,res) => 
{
          
    const courseId = req.query.courseId;
    // check if userId is not empty
    if(courseId){
    const result = await Courses.findById(mongoose.Types.ObjectId(courseId));
    const x= result.noOfViews ;
    const y= x+1
    await Courses.findByIdAndUpdate(mongoose.Types.ObjectId(courseId),{noOfViews: y},{new:true})

    res.status(200).json(result);
    }else{
        res.status(400).json({error:"invalid course"})
    }
}




//get all courses sorted by Subject Dec
const getCoursesbySubjectDec = async (req,res)=> {
    const courses = await Courses.find({}).sort({Subject: -1})

res.status(200).json(courses)
}

// get course by title or instructor
const getByTitleOrInstructor = async (req,res)=>{
    const title = req.body.title;

    var query = {title:title}
    const courses = await Courses.find(query).sort({createdAt: -1})

    if(courses.length==0)
    {
        var query ={instructor:title}
        const courses = await Courses.find(query).sort({createdAt: -1})
         return res.status(200).json(courses)

    }
    if(courses.length==0)
    {
        return  res.status(404).json({error:"No Courses Found"})
    }

    return res.status(200).json(courses)


}

//get all courses sorted by Subject Asc
const getCoursesbySubjectAsc = async (req,res)=> {
    const courses = await Courses.find({}).sort({subject: 1})
res.status(200).json(courses)
}


//get all courses sorted by price Dec
const getCoursesbyPriceDec = async (req,res)=> {
    const courses = await Courses.find({}).sort({price: -1})

res.status(200).json(courses)
}

//get all courses sorted by price Asc
const getCoursesbyPriceAsc = async (req,res)=> {
    const courses = await Courses.find({}).sort({price: 1})

res.status(200).json(courses)
}

//get all courses sorted by id Dec
const getCoursesbyIdDec = async (req,res)=> {
    const courses = await Courses.find({}).sort({courseId: -1})

res.status(200).json(courses)
}

//get all courses sorted by id Asc
const getCoursesbyIdAsc = async (req,res)=> {
    const courses = await Courses.find({}).sort({courseId: 1})

res.status(200).json(courses)
}



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


const addDiscount = async (req,res) => {
    const {id, discount, year, month, day } = req.body
    const temp=req.price;

    if(!mongoose.Types.ObjectId.isValid(id))
{
    return res.status(404).json({error: "No Course with that ID"})
}

    const course= await Courses.findById(id)

    if(!course){
        return res.status(404).json({error:"No Course availabe with that ID."})
    }
    price=req.price*(1-(req.discount)/100);
    
    const promotionDate = new Date(year, month, day, 11, 59, 59, 0);
    const currentDate= new Date();
    //HENA 3YZ B2A AFDL A CHECK ENY WITHIN THAT TIME.......AKID KATEBHA 8LT LOL
    // while(promotionDate > currentDate){

    // }
    if(currentDate>promotionDate){
        price=temp;
    }
    res.status(200).json({message:"Discount Added Successfully"});

}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////














const filterCourse = async (req,res) => {

    const rating = req.body.rating;
    const subject = req.body.subject;
    if (rating == null || rating =="")
    {
    var query ={subject:subject}
    const courses = await Courses.find(query).sort({createdAt: -1})
    res.status(200).json(courses)
    }
    else if (subject == null || subject =="")
    {
        var query ={rating:rating}
        const courses = await Courses.find(query).sort({createdAt: -1})
        res.status(200).json(courses)
    } 
    else{
        var query ={rating:rating,subject : subject}
        const courses = await Courses.find(query).sort({createdAt: -1})
        if (!courses)
        {
            return res.status(404).json({error: "No Course with that ID"})

        }else{
        res.status(200).json(courses)
    }
    }

}


//filter by price

const filterCoursePrice = async (req,res) => {

    const price = req.body.price;

    var query ={price:price}
    const courses = await Courses.find(query).sort({createdAt: -1})
    res.status(200).json(courses)

    if(!courses)

    {
        return res.status(404).json({error: "No Course with that ID"})

    }

    // filter by title
    }
    const filterCourseTitle = async (req,res) => {

        const title = req.body.title;
    
        var query ={title:title}
        const courses = await Courses.find(query).sort({createdAt: -1})
        res.status(200).json(courses)
    
        if(!courses)
    
        {
            return res.status(404).json({error: "No Course with that ID"})
    
        }
        }

    // filter by instructor





const filterCourseInstructor = async (req,res) => 
{

    const instructor = req.body.instructor;

    var query ={instructor:instructor}
    const courses = await Courses.find(query).sort({createdAt: -1})
    res.status(200).json(courses)

    if(!courses)

    {
        return res.status(404).json({error: "No Course with that ID"})

    }
    }

    const getCoursesByInstructor = async(req,res) => {
          
        const instructorId = req.query.instructorId;
        // check if userId is not empty
        if(instructorId){
        const result = await Courses.find({instructor:String(instructorId)});
        res.status(200).json(result)
        }else{
            res.status(400).json({error:"Instructor ID is required"})
        }
    }
    
    const addPreview = async (req,res,next) => {
    
        const courseId = req.query.courseId;
        if(courseId){
            
            CoursesModel.findByIdAndUpdate(mongoose.Types.ObjectId(courseId),req.body).then(function(){
            CoursesModel.findById(mongoose.Types.ObjectId(courseId)).then(function(CoursesModel){
                res.send(CoursesModel);
            })
        });
        } else{
            res.status(400).json({error:"invalid course"})
        }
        
    }







module.exports= {
    getCourses,
        getCourse,
        getCoursesbyPriceDec,
        getCoursesbyPriceAsc,
        getCoursesbySubjectDec,
        getCoursesbySubjectAsc,
        getCoursesbyIdDec,
        getCoursesbyIdAsc,
        filterCourse,
        filterCoursePrice,
        filterCourseTitle,
        filterCourseInstructor,
        getByTitleOrInstructor,
        getCoursesByInstructor,
        getCodes,
        createReview,
        getCoursesByInstructor,
        addPreview,
        getOneCourse,
        addDiscount,
        mostViewedCourses


    
}
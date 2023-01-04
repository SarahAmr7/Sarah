const mongoose= require('mongoose')
const Courses= require('../models/CoursesModel')
const Schema = mongoose.Schema

const traineeSchema = new Schema ({
    userId :{
        type:Number,
        required:true
    },
    country :{
        type:String,
        required:false
    },
    username :{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    traineeId:{
        type:Number,
        required: true
    },
    
courses:
{
    type: mongoose.Schema.Types.Array,
    ref:"Courses",
    required:false
},

   

    },{timestamps: true})

    module.exports = mongoose.model('Trainee',traineeSchema)
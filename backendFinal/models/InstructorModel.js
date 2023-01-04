const mongoose= require('mongoose')

const Schema = mongoose.Schema

const instructorSchema = new Schema ({
    usserId :{
        type:Number,
        required:true
    },
    username :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    country:{
        type:String,
        required: false
    },
    rating:{
        type: Number,
        required: true
    },
    biography:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
   

   

    },{timestamps: true})

    module.exports = mongoose.model('Instructor',instructorSchema)
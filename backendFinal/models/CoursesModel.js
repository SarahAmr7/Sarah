const mongoose= require('mongoose')

const Schema = mongoose.Schema

const coursesSchema = new Schema ({
    totalHours:{
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    Code:{
        type: String,
        required: true
    },
    courseOutline:{
        type:String,
        required:true
    },
    previewVideo :{
        type: Object,
        required:true
    },
    noOfViews :{
        type:Number,
        required:false
    },
    noOfBuyers :{
        type:Number,
        required:false
    },
    //username
    instructor:{
        type: String,
        required: true
    },
  
 
    

}, {timestamps: true})

module.exports = mongoose.model('Courses',coursesSchema)
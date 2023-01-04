const mongoose= require('mongoose')

const Schema = mongoose.Schema

const discountSchema = new Schema ({
    percentage :{
        type:Number,
        required:true
    },
    duration :{
        type:Number,
        required:true
    },
    courseId :{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required: true
    },
    discountAdder: {
        type: Number,
        requied: true
    },
   

    },{timestamps: true})

    module.exports = mongoose.model('Discount',discountSchema)
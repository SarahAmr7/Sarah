const mongoose= require('mongoose')

const Schema = mongoose.Schema

const reportsSchema = new Schema ({
    reportId :{
        type:Number,
        required:true
    },
    reportType :{
        type:String,
        required:true
    },
    title :{
        type:String,
        required:false
    },
    body:{
        type:String,
        required: true
    },

    status:{
        type:String,
        required:true
    }
   

    },{timestamps: true})

    module.exports = mongoose.model('Reports',reportsSchema)
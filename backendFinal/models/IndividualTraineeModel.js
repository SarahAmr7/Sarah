const mongoose= require('mongoose')

const Schema = mongoose.Schema

const individualTraineeSchema = new Schema ({
    wallet :{
        type:Number,
        required:true
    },
    country :{
        type:String,
        required:false
    }
  
   

    },{timestamps: true})

    module.exports = mongoose.model('IndividualTrainee', individualTraineeSchema)
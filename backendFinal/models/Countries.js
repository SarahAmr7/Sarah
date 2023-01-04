const mongoose= require('mongoose')

const Schema = mongoose.Schema

const CountriesSchema = new Schema ({
    Name :{
        type:String,
        required:true
    },
    Currency :{
        type:String,
        required:false
    },
  
   
   

    },{timestamps: true})

    module.exports = mongoose.model('Countries', CountriesSchema)
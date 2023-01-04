const mongoose= require('mongoose')

const Schema = mongoose.Schema

const creditCardSchema = new Schema ({
    number :{
        type:Number,
        required:true
    },
    cvv :{
        type:Number,
        required:true
    },
    expiryDate :{
        type:Date,
        required:true
    },
    holderName:{
        type:String,
        required: true
    },
   

    },{timestamps: true})

    module.exports = mongoose.model('CreditCard',creditCardSchema)
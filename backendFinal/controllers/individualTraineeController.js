const IndividualTrainee = require('../models/IndividualTraineeModel')
const mongoose = require("mongoose");
const CreditCardModel = require('../models/CreditCardModel');

const takecreditcarddetails = async (req,res)=>
{
const number= req.body.number;
const cvv= req.body.cvv;
const expiryDate= req.body.expiryDate;
const holderName= req.body.holderName;

try{
  const creditcard= await  CreditCardModel.create( {number,cvv,expiryDate,holderName})
 res.status(200).json(creditcard)
}

catch(error){
  res.status(400).json({error: error.message})
   }


}


//select country
const updateCopCountry = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({error:"No Such ID"});
    }

    try{
        const result = await IndividualTrainee.findOneAndUpdate({_id:id},{...req.body});
        const newRecord = await IndividualTrainee.findById({_id:id});
        res.status(200).json(newRecord);

    }
    catch(error)
    {
        res.status(400).json({error:error});
    }

}
const selectCountry = async(req,res)=>{


// if(!mongoose.Types.ObjectId.isValid(id))
//   {
//       return res.status(404).json({error: "No guest with that ID"})
//   }


    const {wallet} = req.body;
  //   console.log(country);
    try{
      const individualTrainee = await IndividualTrainee.create({wallet})
      res.status(200).json(individualTrainee);

    }
    catch(error)
    {

      res.status(400).json({error: error.message})

    }
  //   // const guest = await Guest.create({"country": country},{
  //   //     ...req.body
  //   // })

  // if(!guest){
  //   return res.status(400).json({error:'no such guest'})
  // }

  // res.status(200).json(guest)
}


module.exports ={
selectCountry,
updateCopCountry,
takecreditcarddetails

}
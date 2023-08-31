const observationModel = require('../models/observation.model');

const getObservations = async(req,res)=>{
    try{
    const observations =  await observationModel.find();
    res.json(observations);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createObservation= async (req,res)=>{
    try {
        const observation = new observationModel(req.body)
        const result = await observation.save();
        if (result){
            res.json({message:"observation " + req.body.NOM + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateObservation= async (req,res)=>{
    try {
        const observation = await observationModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneObservation = async (req,res)=>{
    try {
        const observation = await observationModel.findById(req.params.id);
        res.json(observation);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteObservation = async (req,res)=> {
    try {
        const observation = await observationModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getObservations,createObservation,getOneObservation,updateObservation,deleteObservation
}
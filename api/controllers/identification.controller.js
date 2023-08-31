const identificationModel = require('../models/identification.model');

const getIdentifications = async(req,res)=>{
    try{
    const identifications =  await identificationModel.find();
    res.json(identifications);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createIdentification= async (req,res)=>{
    try {
        const identification = new identificationModel(req.body)
        const result = await identification.save();
        if (result){
            res.json({message:"identification " + req.body.NOM + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateIdentification= async (req,res)=>{
    try {
        const identification = await identificationModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneIdentification = async (req,res)=>{
    try {
        const identification = await identificationModel.findById(req.params.id);
        res.json(identification);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteIdentification = async (req,res)=> {
    try {
        const identification = await identificationModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getIdentifications,createIdentification,getOneIdentification,updateIdentification,deleteIdentification
}
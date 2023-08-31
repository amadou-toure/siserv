const disqueModel = require('../models/disques.model');

const getDisques = async(req,res)=>{
    try{
    const disques =  await disqueModel.find();
    res.json(disques);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createDisque= async (req,res)=>{
    try {
        const disque = new disqueModel(req.body)
        const result = await disque.save();
        if (result){
            res.json({message:"disque " + req.body.NOM + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateDisque= async (req,res)=>{
    try {
        const disque = await disqueModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneDisque = async (req,res)=>{
    try {
        const disque = await disqueModel.findById(req.params.id);
        res.json(disque);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteDisque = async (req,res)=> {
    try {
        const disque = await disqueModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getDisques,createDisque,getOneDisque,updateDisque,deleteDisque
}
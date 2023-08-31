const managerModel = require('../models/manager.model');

const getManagers = async(req,res)=>{
    try{
    const managers =  await managerModel.find();
    res.json(managers);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createManager= async (req,res)=>{
    try {
        const manager = new managerModel(req.body)
        const result = await manager.save();
        if (result){
            res.json({message:"manager " + req.body.NOM + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateManager= async (req,res)=>{
    try {
        const manager = await managerModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneManager = async (req,res)=>{
    try {
        const manager = await managerModel.findById(req.params.id);
        res.json(manager);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteManager = async (req,res)=> {
    try {
        const manager = await managerModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getManagers,createManager,getOneManager,updateManager,deleteManager
}
const rackModel = require('../models/rack.model');

const getRacks = async(req,res)=>{
    try{
    const racks =  await rackModel.find();
    res.json(racks);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createRack= async (req,res)=>{
    try {
        const rack = new rackModel(req.body)
        const result = await rack.save();
        if (result){
            res.json({message:"rack " + req.body.NOM + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateRack= async (req,res)=>{
    try {
        const rack = await rackModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneRack = async (req,res)=>{
    try {
        const rack = await rackModel.findById(req.params.id);
        res.json(rack);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteRack = async (req,res)=> {
    try {
        const rack = await rackModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getRacks,createRack,getOneRack,updateRack,deleteRack
}
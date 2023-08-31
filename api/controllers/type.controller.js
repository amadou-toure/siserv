const typeModel = require('../models/type.model');

const getTypes = async(req,res)=>{
    try{
    const types =  await typeModel.find();
    res.json(types);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createType= async (req,res)=>{
    try {
        const type = new typeModel(req.body)
        const result = await type.save();
        if (result){
            res.json({message:"type " + req.body.NOM + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateType= async (req,res)=>{
    try {
        const type = await typeModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneType = async (req,res)=>{
    try {
        const type = await typeModel.findById(req.params.id);
        res.json(type);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteType = async (req,res)=> {
    try {
        const type = await typeModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getTypes,createType,getOneType,updateType,deleteType
}
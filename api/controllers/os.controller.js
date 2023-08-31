const osModel = require('../models/os.model');

const getOSs = async(req,res)=>{
    try{
    const oss =  await osModel.find();
    res.json(oss);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createOS= async (req,res)=>{
    try {
        const os = new osModel(req.body)
        const result = await os.save();
        if (result){
            res.json({message:"os " + req.body.NOM + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateOS= async (req,res)=>{
    try {
        const os = await osModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneOS = async (req,res)=>{
    try {
        const os = await osModel.findById(req.params.id);
        res.json(os);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteOS = async (req,res)=> {
    try {
        const os = await osModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getOSs,createOS,getOneOS,updateOS,deleteOS
}
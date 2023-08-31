const raidModel = require('../models/raid.model');

const getRaids = async(req,res)=>{
    try{
    const raids =  await raidModel.find();
    res.json(raids);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createRaid= async (req,res)=>{
    try {
        const raid = new raidModel(req.body)
        const result = await raid.save();
        if (result){
            res.json({message:"raid " + req.body.NOM + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateRaid= async (req,res)=>{
    try {
        const raid = await raidModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneRaid = async (req,res)=>{
    try {
        const raid = await raidModel.findById(req.params.id);
        res.json(raid);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteRaid = async (req,res)=> {
    try {
        const raid = await raidModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getRaids,createRaid,getOneRaid,updateRaid,deleteRaid
}
const tacheModel = require('../models/taches.model');

const getTaches = async(req,res)=>{
    try{
    const taches =  await tacheModel.find();
    res.json(taches);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createTache= async (req,res)=>{
    try {
        const tache = new tacheModel(req.body)
        const result = await tache.save();
        if (result){
            res.json({message:"tache " + req.body.NOM + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateTache= async (req,res)=>{
    try {
        const tache = await tacheModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneTache = async (req,res)=>{
    try {
        const tache = await tacheModel.findById(req.params.id);
        res.json(tache);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteTache = async (req,res)=> {
    try {
        const tache = await tacheModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getTaches,createTache,getOneTache,updateTache,deleteTache
}
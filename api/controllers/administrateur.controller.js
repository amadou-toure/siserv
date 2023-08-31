const administrateurModel = require('../models/admininstrateur.model');

const getAdministrateurs = async(req,res)=>{
    try{
    const administrateurs =  await administrateurModel.find();
    res.json(administrateurs);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createAdministrateur= async (req,res)=>{
    try {
        const administrateur = new administrateurModel(req.body)
        const result = await administrateur.save();
        if (result){
            res.json({message:"administrateur " + req.body.NOM + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateAdministrateur= async (req,res)=>{
    try {
        const administrateur = await administrateurModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneAdministrateur = async (req,res)=>{
    try {
        const administrateur = await administrateurModel.findById(req.params.id);
        res.json(administrateur);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteAdministrateur = async (req,res)=> {
    try {
        const administrateur = await administrateurModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getAdministrateurs,createAdministrateur,getOneAdministrateur,updateAdministrateur,deleteAdministrateur
}
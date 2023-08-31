const unite_beneficiaireModel = require('../models/unite_beneficiaire.model');

const getUnite_beneficiaires = async(req,res)=>{
    try{
    const unite_beneficiaires =  await unite_beneficiaireModel.find();
    res.json(unite_beneficiaires);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createUnite_beneficiaire= async (req,res)=>{
    try {
        const unite_beneficiaire = new unite_beneficiaireModel(req.body)
        const result = await unite_beneficiaire.save();
        if (result){
            res.json({message:"unite_beneficiaire " + req.body.NOM + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateUnite_beneficiaire= async (req,res)=>{
    try {
        const unite_beneficiaire = await unite_beneficiaireModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneUnite_beneficiaire = async (req,res)=>{
    try {
        const unite_beneficiaire = await unite_beneficiaireModel.findById(req.params.id);
        res.json(unite_beneficiaire);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteUnite_beneficiaire = async (req,res)=> {
    try {
        const unite_beneficiaire = await unite_beneficiaireModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getUnite_beneficiaires,createUnite_beneficiaire,getOneUnite_beneficiaire,updateUnite_beneficiaire,deleteUnite_beneficiaire
}
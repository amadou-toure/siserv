const serviceModel = require('../models/service.model');

const getServices = async(req,res)=>{
    try{
    const services =  await serviceModel.find();
    res.json(services);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createService= async (req,res)=>{
    try {
        const service = new serviceModel(req.body)
        const result = await service.save();
        if (result){
            res.json({message:"service " + req.body.NOM + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateService= async (req,res)=>{
    try {
        const service = await serviceModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneService = async (req,res)=>{
    try {
        const service = await serviceModel.findById(req.params.id);
        res.json(service);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteService = async (req,res)=> {
    try {
        const service = await serviceModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getServices,createService,getOneService,updateService,deleteService
}
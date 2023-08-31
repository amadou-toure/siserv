const roleModel = require('../models/role.model');

const getRoles = async(req,res)=>{
    try{
    const roles =  await roleModel.find();
    res.json(roles);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createRole= async (req,res)=>{
    try {
        const role = new roleModel(req.body)
        const result = await role.save();
        if (result){
            res.json({message:"role " + req.body.NOM + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateRole= async (req,res)=>{
    try {
        const role = await roleModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneRole = async (req,res)=>{
    try {
        const role = await roleModel.findById(req.params.id);
        res.json(role);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteRole = async (req,res)=> {
    try {
        const role = await roleModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getRoles,createRole,getOneRole,updateRole,deleteRole
}
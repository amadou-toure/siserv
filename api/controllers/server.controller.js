const serverModel = require('../models/server.model');

const getServers = async(req,res)=>{
    try{
    const servers =  await serverModel.find();
    res.json(servers);
    }catch(error){
        res.json(`error:${error}`);
    }
  
}
const createServer= async (req,res)=>{
    try {
        const server = new serverModel(req.body)
        const result = await server.save();
        if (result){
            res.json({message:"server " + req.body.name + " created successfully"});
        }else{
            res.json({message:"error during creation"});
        }
        
    }
    catch(err){
        res.json({message:err});
    }
}
const updateServer= async (req,res)=>{
    try {
        const server = await serverModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneServer = async (req,res)=>{
    try {
        const server = await serverModel.findById(req.params.id);
        res.json(server);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteServer = async (req,res)=> {
    try {
        const server = await serverModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getServers,createServer,getOneServer,updateServer,deleteServer
}
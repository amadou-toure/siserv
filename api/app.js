const Express = require ("express");
require('dotenv').config();
const app = Express();
const dbConnection = require('./dbConnect');
const AdministateurRoutes= require('./routes/administrateur.route');
const DisqueRoutes= require('./routes/disque.route');
const IdentificationRoutes= require('./routes/identification.route');
const ManagerRoutes= require('./routes/manager.route');
const ObservationRoutes= require('./routes/observation.route')
const OSRoutes= require('./routes/os.route');
const RackRoutes= require('./routes/rack.route');
const RaidRoutes= require('./routes/raid.route');
const RoleRoutes= require('./routes/role.route');
const ServerRoutes= require('./routes/server.route');
const ServiceRoutes= require('./routes/service.route');
const TypeRoutes= require('./routes/type.route');





app.use('/api',AdministateurRoutes,DisqueRoutes,IdentificationRoutes,ManagerRoutes,ObservationRoutes,OSRoutes,RackRoutes,RaidRoutes,RoleRoutes,ServerRoutes,ServiceRoutes,TypeRoutes);
const port = process.env.PORT;
app.use(Express.json());
app.listen(port,()=>{
    console.log('server listening on port : '+ port);
});

dbConnection();
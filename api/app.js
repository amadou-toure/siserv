const Express = require ("express");
require('dotenv').config();
const app = Express();
app.use(Express.json());
const dbConnection = require('./dbConnect');
const UserRoutes= require('./routes/user.route');
const DisqueRoutes= require('./routes/disque.route');
const IdentificationRoutes= require('./routes/identification.route');
const ObservationRoutes= require('./routes/observation.route')
const OSRoutes= require('./routes/os.route');
const RackRoutes= require('./routes/rack.route');
const RaidRoutes= require('./routes/raid.route');
const RoleRoutes= require('./routes/role.route');
const ServerRoutes= require('./routes/server.route');
const ServiceRoutes= require('./routes/service.route');
const TacheRoutes= require('./routes/tache.route');
const TypeRoutes= require('./routes/type.route');





app.use('/api',UserRoutes,DisqueRoutes,IdentificationRoutes,ObservationRoutes,OSRoutes,RackRoutes,RaidRoutes,RoleRoutes,ServerRoutes,ServiceRoutes,TacheRoutes,TypeRoutes);
const port = process.env.PORT;

app.listen(port,()=>{
    console.log('server listening on port : '+ port);
});

dbConnection();
import doctorRoutes from "./routes/doctor";
import initWebRoute from "./routes/initWebRoutes";
import serviceRoutes from './routes/service_clinic'

const rootRoutes = (app)=>{
  initWebRoute(app);
  doctorRoutes(app);
  serviceRoutes(app);
}
export default  rootRoutes;
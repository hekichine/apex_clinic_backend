import express from "express";
import serviceController from "../controller/service_clinic";

const router = express.Router();
import "dotenv/config";

const serviceRoutes = (app) => {
  //get
  router.get("/", serviceController.getAll);

  // create
  router.post('/',serviceController.create);

  // use router
  app.use(`${process.env.ROUTER_VERSION}/services/`, router);
};

export default serviceRoutes;

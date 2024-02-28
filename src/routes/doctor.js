import express from "express";
import doctorController from "../controller/doctor";
import upload from '../middleware/upload'

const router = express.Router();
import "dotenv/config";

const doctorRoutes = (app) => {
  //get
  router.get("/", doctorController.getAll);

  // create
  router.post('/',upload.single('image'),doctorController.create);

  // use router
  app.use(`${process.env.ROUTER_VERSION}/doctors/`, router);
};

export default doctorRoutes;

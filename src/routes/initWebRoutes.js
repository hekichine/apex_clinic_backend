import express from "express";
import HomeController from "../controller/HomeController";

const router = express.Router();
import "dotenv/config";

const initWebRoute = (app) => {
  //get
  router.get("/", HomeController.getHome);

  // use router
  app.use(`${process.env.ROUTER_VERSION}`, router);
};

export default initWebRoute;

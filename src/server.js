import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";

import connection from "./database/connectDb";
import rootRoutes from "./routes";


const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello word");
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

rootRoutes(app)


connection();

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}/`);
});

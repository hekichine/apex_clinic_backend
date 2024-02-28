import mongoose from "mongoose";
import "dotenv/config";

const connection = () => {
  mongoose
    .connect(`${process.env.DATABASE_URL}`)
    .then(() => console.log("Connect database successfully!"))
    .catch((e) => {
      console.log("Connect failed! Error:" + e);
    });
};
export default connection;

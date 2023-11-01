import mongoose from "mongoose";
import { DATABSE_CONNECTION } from "./config/constants.js";

mongoose
  .connect(DATABSE_CONNECTION)
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log("Database Connection Failed!");
  });

export default mongoose;

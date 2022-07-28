import express, {json} from "express";
import "express-async-errors";

import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import router from "./routes/index.js";


const app = express();
app.use(json());
app.use(router);


const port = +process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Ligado");
})
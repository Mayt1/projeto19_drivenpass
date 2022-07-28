import express, {json} from "express";
import "express-async-errors";
import dotenv from "dotenv";
import handleErrorsMiddleware from "./middlewares/handleErrosMiddleware.js";
import router from "./routes/index.js";

dotenv.config({ path: ".env" });

const app = express();
app.use(json());
app.use(router);
app.use(handleErrorsMiddleware);

const port = +process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Ligado");
})
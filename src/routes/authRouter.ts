import { Router } from "express";
import { signIn, signUp } from "../controllers/authControllers.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";



const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(userSchema), signIn);
authRouter.post("/signin", validateSchemaMiddleware(userSchema), signUp);

export default authRouter;
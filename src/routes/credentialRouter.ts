import { Router } from "express";
import { createCredential, getAllCredentials, getCredential } from "../controllers/credentialController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { credentialSchema } from "../schemas/credentialSchema.js";


const credentialRouter = Router();

credentialRouter.use(ensureAuthenticatedMiddleware);
credentialRouter.get("/credentials", getAllCredentials);
credentialRouter.get("/credentials/:id", getCredential)
credentialRouter.post("/credentials", validateSchemaMiddleware(credentialSchema), createCredential);

export default credentialRouter;
import {Router} from "express";
import { createCard, getAllCards, getCard } from "../controllers/cardControllers.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { cardSchema } from "../schemas/cardSchema.js";

const cardRouter = Router();

cardRouter.use(ensureAuthenticatedMiddleware);
cardRouter.post("/cards", validateSchemaMiddleware(cardSchema), createCard);
cardRouter.get("/cards", getAllCards);
cardRouter.get("/cards/:id", getCard)


export default cardRouter;
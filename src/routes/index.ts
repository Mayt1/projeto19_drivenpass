import { Router } from "express";
import authRouter from "./authRouter";
import cardRouter from "./cardRouter";
import credentialRouter from "./credentialRouter";


const router = Router();

router.use(authRouter);
router.use(cardRouter);
router.use(credentialRouter);


export default router;
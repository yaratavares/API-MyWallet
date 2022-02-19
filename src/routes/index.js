import { Router } from "express";
import userRouter from "./userRouter.js";
import tokenValideMiddleware from "../middlewares/tokenValideMiddleware.js";
import registerRouter from "./registerRouter.js";

const router = Router();

router.use(userRouter);
router.use(tokenValideMiddleware, registerRouter);

export default router;

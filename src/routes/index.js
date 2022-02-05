import { Router } from "express";
import registerRouter from "./registerRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(registerRouter);

export default router;

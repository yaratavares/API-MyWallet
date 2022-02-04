import { Router } from "express";
import { getUser } from "../controllers/userController.js";
import userLoginValideMiddleware from "../middlewares/userLoginValideMiddleware.js";

const userRouter = Router();

userRouter.get("/auth/login", userLoginValideMiddleware, getUser);

export default userRouter;

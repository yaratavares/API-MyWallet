import { Router } from "express";
import {
  createUserSession,
  postNewUser,
} from "../controllers/userController.js";
import userLoginValideMiddleware from "../middlewares/userLoginValideMiddleware.js";
import userSignupValideMiddleware from "../middlewares/userSignupValideMiddleware.js";

const userRouter = Router();

userRouter.post("/auth/login", userLoginValideMiddleware, createUserSession);
userRouter.post("/auth/signup", userSignupValideMiddleware, postNewUser);

export default userRouter;

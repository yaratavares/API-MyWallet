import { Router } from "express";
import { getUser, postNewUser } from "../controllers/userController.js";
import userLoginValideMiddleware from "../middlewares/userLoginValideMiddleware.js";
import userSignupValideMiddleware from "../middlewares/userSignupValideMiddleware.js";

const userRouter = Router();

userRouter.get("/auth/login", userLoginValideMiddleware, getUser);
userRouter.post("/auth/signup", userSignupValideMiddleware, postNewUser);

export default userRouter;

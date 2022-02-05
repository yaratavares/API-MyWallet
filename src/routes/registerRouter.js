import { Router } from "express";
import {
  getRegister,
  postRegister,
} from "../controllers/registerController.js";
import registerValideMiddleware from "../middlewares/registerValideMiddleware.js";
import tokenValidationMiddleware from "../middlewares/tokenValideMiddleware.js";

const registerRouter = Router();

registerRouter.use(tokenValidationMiddleware);
registerRouter.get("/registers", getRegister);
registerRouter.post("/registers", registerValideMiddleware, postRegister);

export default registerRouter;

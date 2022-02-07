import { Router } from "express";
import {
  deleteRegister,
  getRegister,
  postRegister,
} from "../controllers/registerController.js";
import registerValideMiddleware from "../middlewares/registerValideMiddleware.js";
import tokenValidationMiddleware from "../middlewares/tokenValideMiddleware.js";

const registerRouter = Router();

registerRouter.use(tokenValidationMiddleware);
registerRouter.get("/registers", getRegister);
registerRouter.post("/registers", registerValideMiddleware, postRegister);
registerRouter.delete("/registers/:id", deleteRegister);

export default registerRouter;

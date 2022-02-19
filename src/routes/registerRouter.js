import { Router } from "express";
import {
  deleteRegister,
  getRegister,
  postRegister,
  updateRegister,
} from "../controllers/registerController.js";
import registerValideMiddleware from "../middlewares/registerValideMiddleware.js";

const registerRouter = Router();

registerRouter.get("/registers", getRegister);
registerRouter.post("/registers", registerValideMiddleware, postRegister);
registerRouter.delete("/registers/:id", deleteRegister);
registerRouter.put("/registers/:id", updateRegister);

export default registerRouter;

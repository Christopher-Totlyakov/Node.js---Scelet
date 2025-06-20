import { Router } from "express";
import homeController from "./controllers/homeController.js";
import userControler from "./controllers/userController.js";

const routes = Router();

routes.use(homeController);
routes.use("/users", userControler);

export default routes;
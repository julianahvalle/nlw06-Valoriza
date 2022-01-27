import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateTagController } from "./controller/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle); //createUserConroller recebe o request/response no controller 



export { router };
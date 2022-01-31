import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateTagController } from "./controller/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateComplimentController } from "./controller/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle); //createUserConroller recebe o request/response no controller 
router.post("/sessions", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle );

export { router };
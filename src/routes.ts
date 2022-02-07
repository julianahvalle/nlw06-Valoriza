import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateTagController } from "./controller/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateComplimentController } from "./controller/CreateComplimentController";
import { ensureAuthentication } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controller/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controller/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controller/ListTagsController";
import { ListUsersController } from "./controller/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();

const listTagsController = new ListTagsController();

const listUsersController = new ListUsersController();

router.post("/tags", ensureAuthentication, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle); //createUserConroller recebe o request/response no controller 
router.post("/sessions", authenticateUserController.handle);
router.post("/compliments",ensureAuthentication, createComplimentController.handle );

router.get("/users/compliments/send", ensureAuthentication, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthentication, listUserReceiveComplimentsController.handle);
router.get("/tags",ensureAuthentication, listTagsController.handle);
router.get("/users",ensureAuthentication,listUsersController.handle);


export { router };
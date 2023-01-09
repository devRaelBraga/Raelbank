import { Router } from "express";
import { UserController } from "../Controllers/UserController";
// import { LoginController } from "../Controllers/LoginController";

const userController = new UserController();
// const loginController = new LoginController();

const userRoutes = Router();

userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.login);
// userRoutes.post("/login", loginController.handle);

export { userRoutes }
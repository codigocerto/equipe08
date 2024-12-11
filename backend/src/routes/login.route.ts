import { Router } from "express";
import { LoginController } from "../controllers/login.controller";

export const loginRoute = Router()
const loginController = new LoginController()

loginRoute.route('/')
        .post(loginController.login)
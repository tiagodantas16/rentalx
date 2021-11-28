import { Router } from "express";
import { AutenticateUserController } from "../modules/accounts/useCases/autenticateUser/AutenticateUserController";

const autenticateRoutes = Router()

const autenticateUserController = new AutenticateUserController()

autenticateRoutes.post("/sessions", autenticateUserController.handle);

export { autenticateRoutes }
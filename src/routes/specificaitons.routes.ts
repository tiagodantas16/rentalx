import { Router } from "express";
import { ensureAutenticated } from "../middlewares/ensureAutenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAutenticated)
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };

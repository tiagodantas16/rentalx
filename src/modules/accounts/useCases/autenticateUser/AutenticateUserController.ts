import { Request, Response } from "express"
import { container } from "tsyringe";
import { AutenticateUserUseCase } from "./AutenticateUserUseCase";

class AutenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const autenticateUserUseCase = container.resolve(AutenticateUserUseCase);
    const token = await autenticateUserUseCase.execute({
      email, 
      password
    })

    return response.json(token);
  }
}

export { AutenticateUserController }
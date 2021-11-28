import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppErrors } from "../errors/AppErrors";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAutenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppErrors("Token missing", 401)
  }

  const [, token] = authHeader.split(" ");
  
  try {
    const { sub: user_id } = verify(
      token, 
      "604d28fa1cdb478fe9de3f8186abb888"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppErrors("User does not exist", 401)
    }
    
    request.user = {
      id: user_id,
    }

    next();
  } catch (error) {
    throw new AppErrors("invalid token", 401)
  }

}
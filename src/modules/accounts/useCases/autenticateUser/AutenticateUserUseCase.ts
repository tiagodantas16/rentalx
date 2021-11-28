import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppErrors } from "../../../../errors/AppErrors";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
}

@injectable()
class AutenticateUserUseCase {
  constructor(
    @inject(UsersRepository)
    private userRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest) {
    
    const user = await this.userRepository.findByEmail(email);
    
    if (!user) {
      throw new AppErrors("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);
    
    if (!password) {
      throw new AppErrors("Email or password incorrect!")
    }

    const token = sign({}, "604d28fa1cdb478fe9de3f8186abb888", {
      subject: user.id,
      expiresIn: "1day"
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return tokenReturn;
  }
}

export { AutenticateUserUseCase }
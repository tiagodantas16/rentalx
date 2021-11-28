import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { ICreateUserTDO } from "../../dtos/ICreateUserTDO";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppErrors } from "../../../../errors/AppErrors";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository
  ){}

  async execute({ 
    name, 
    password, 
    email, 
    driver_license,
    avatar,
    id
  }: ICreateUserTDO): Promise<void> {
    
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if(emailAlreadyExists) {
      throw new AppErrors("Email already exists")
    }
    
    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      password: passwordHash,
      email,
      driver_license,
      avatar,
      id
    });
  }
}

export { CreateUserUseCase };
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserTDO } from "../../dtos/ICreateUserTDO";
import { getRepository, Repository } from "typeorm";
import { Users } from "../../entities/Users";

class UsersRepository implements IUsersRepository {

  private repository: Repository<Users>

  constructor() {
    this.repository = getRepository(Users);
  }
    
  async create({ 
    name, 
    password, 
    email, 
    driver_license
  }: ICreateUserTDO): Promise<void> {
    const user = this.repository.create({
      name, 
      password, 
      email,
      driver_license
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<Users> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<Users> {
    const user = await this.repository.findOne({ id });

    return user;
  }
}

export { UsersRepository };
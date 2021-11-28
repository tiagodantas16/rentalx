import { ICreateUserTDO } from "../../accounts/dtos/ICreateUserTDO";
import { Users } from "../entities/Users";

interface IUsersRepository {
  create(data: ICreateUserTDO): Promise<void>;
  findByEmail(email: string): Promise<Users>;
  findById(id: string): Promise<Users>;
}

export { IUsersRepository };
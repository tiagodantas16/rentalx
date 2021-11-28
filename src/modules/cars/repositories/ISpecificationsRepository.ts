import { Specifications } from "../entities/Specifications";

interface ICreateSpecificationTDO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationTDO): Promise<void>;
  list(): Promise<Specifications[]>
  findByName(name: string): Promise<Specifications>;
}

export { ISpecificationsRepository, ICreateSpecificationTDO };
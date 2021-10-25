import { Specifications } from "../model/Specifications";

interface ICreateSpecificationTDO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationTDO): void;
  findByName(name: string): Specifications | undefined;
}

export { ISpecificationsRepository, ICreateSpecificationTDO };
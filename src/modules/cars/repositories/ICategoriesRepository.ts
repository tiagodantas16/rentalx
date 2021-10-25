import { Category } from "../model/Category";

interface ICreateCategoryTDO {
  name: string;
  description: string;
}

interface ICategoriesRepository {

  findByName(name: string): Category | undefined;
  list(): Category[];
  create({ name, description }: ICreateCategoryTDO): void;
}

export { ICategoriesRepository, ICreateCategoryTDO };
import { Category } from "../entities/Category";

interface ICreateCategoryTDO {
  name: string;
  description: string;
}

interface ICategoriesRepository {

  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryTDO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryTDO };
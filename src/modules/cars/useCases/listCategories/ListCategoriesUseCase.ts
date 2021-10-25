import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository){}

  execute(): Category[] {
    const category = this.categoriesRepository.list();

    return category;
  }
}

export { ListCategoriesUseCase };
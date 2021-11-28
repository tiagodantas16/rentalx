import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { inject, injectable } from "tsyringe"
import { AppErrors } from "../../../../errors/AppErrors";

interface IRequestTDO {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: ICategoriesRepository
  ){}

  async execute({ name, description }: IRequestTDO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
      throw new AppErrors("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
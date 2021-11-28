import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryTDO } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {

  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryTDO ): Promise<void> {
    const category = this.repository.create({
      name, 
      description
    });

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    
    return categories;
  }

  async findByName(name: string): Promise<Category>{
    const category = await this.repository.findOne({ name });
    
    return category;
  }

}

export { CategoriesRepository };
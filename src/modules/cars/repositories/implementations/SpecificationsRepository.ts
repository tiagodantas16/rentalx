import { getRepository, Repository } from "typeorm";
import { Specifications } from "../../entities/Specifications";
import { ISpecificationsRepository, ICreateSpecificationTDO } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {

  private repository: Repository<Specifications>;

  constructor() {
    this.repository = getRepository(Specifications);
  }
  
  async create({ name, description }: ICreateSpecificationTDO): Promise<void> {
    
    const specifications = await this.repository.create({
      name,
      description
    })

    await this.repository.save(specifications);
  }

  async list(): Promise<Specifications[]> {
    const specifications = await this.repository.find();

    return specifications;
  }

  async findByName(name: string): Promise<Specifications> {
    const specification = this.repository.findOne({
      name,
    })

    return specification;
  }
    
}

export { SpecificationsRepository };
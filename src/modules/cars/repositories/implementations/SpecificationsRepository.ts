import { Specifications } from "../../model/Specifications";
import { ISpecificationsRepository, ICreateSpecificationTDO } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {

  private specifications: Specifications[];

  constructor() {
    this.specifications = [];
  }
  
  create({ name, description }: ICreateSpecificationTDO): void {
    
    const specification = new Specifications();
    Object.assign(specification, { 
      name, 
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specifications | undefined {
    const specification = this.specifications.find(
      specification => specification.name === name, 
    );

    return specification;
  }
    
}

export { SpecificationsRepository };
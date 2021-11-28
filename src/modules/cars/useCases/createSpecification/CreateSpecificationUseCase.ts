import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { inject, injectable } from  "tsyringe";
import { AppErrors } from "../../../../errors/AppErrors";

interface IRequestTDO {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject(SpecificationsRepository)
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequestTDO) {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name);

    if(specificationAlreadyExists) {
      throw new AppErrors("Specification already exists")
    }
    
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { Organization } from './organization.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @Inject('ORGANIZATION_REPOSITORY')
    private readonly organizationRepository: Repository<Organization>,
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto): Promise<any> {
    const organization = new Organization();

    organization.userId = 1; // TODO FILL
    organization.permission = 'permission'; // TODO FILL

    organization.organizationName = createOrganizationDto.organizationName;
    organization.fName = createOrganizationDto.fName;
    organization.lName = createOrganizationDto.lName;

    const result = await this.organizationRepository.save(organization);

    return {
      organizationName: result.organizationName,
      fName: result.fName,
      lName: result.lName,
    };
  }

  async findAll(): Promise<Organization[]> {
    return await this.organizationRepository.find();
  }

  async findOne(id: string): Promise<Organization> {
    return await this.organizationRepository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.organizationRepository.delete(id);
  }
}

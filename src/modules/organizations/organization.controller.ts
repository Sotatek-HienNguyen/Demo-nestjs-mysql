import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { Organization } from './organization.entity';
import { OrganizationService } from './organization.service';

@Controller('organizations')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  async create(
    @Body() createOrganizationDto: CreateOrganizationDto,
  ): Promise<Organization> {
    return this.organizationService.create(createOrganizationDto);
  }

  @Get()
  async findAll(): Promise<Organization[]> {
    return this.organizationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Organization> {
    const organization = await this.organizationService.findOne(id);
    if (!organization) throw new NotFoundException('Id does not exist!');
    return organization;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    const organization = await this.organizationService.findOne(id);
    if (!organization)
      throw new NotFoundException('Organization does not exist');
    return this.organizationService.delete(id);
  }
}

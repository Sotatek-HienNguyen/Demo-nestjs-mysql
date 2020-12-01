import { organizationProviders } from './organization.providers';
import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...organizationProviders,
    OrganizationService,
  ],
  controllers: [OrganizationController],
})
export class OrganizationModule {}

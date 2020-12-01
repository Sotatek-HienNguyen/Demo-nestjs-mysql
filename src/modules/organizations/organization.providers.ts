import { Connection } from 'typeorm';
import { Organization } from './organization.entity';

export const organizationProviders = [
  {
    provide: 'ORGANIZATION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Organization),
    inject: ['DATABASE_CONNECTION'],
  },
];

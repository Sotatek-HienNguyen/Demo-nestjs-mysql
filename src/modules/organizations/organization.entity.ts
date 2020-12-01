import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  orgId: number;

  @Column()
  userId: number;

  @Column()
  permission: string;

  @Column()
  organizationName: string;

  @Column()
  fName: string;

  @Column()
  lName: string;
}

import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreateOrganizationDto {
  @IsNotEmpty()
  organizationName: string;

  @IsNotEmpty()
  fName: string;

  @IsNotEmpty()
  lName: string;
}

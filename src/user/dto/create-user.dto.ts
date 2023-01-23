import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string

  @IsNotEmpty()
  @IsString()
  lastName: string

  @IsNotEmpty()
  @IsString()
  username: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsOptional()
  @IsString()
  birthday: string

  @IsNotEmpty()
  @IsString()
  firstContact: string

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  adress: string
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  firstContactName: string

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  secondContact: string

  @IsOptional()
  @IsString()
  secondContactName: string

  @IsOptional()
  @IsString()
  picture: string

  @IsOptional()
  @IsString()
  allergies: string

  @IsOptional()
  @IsString()
  antecedent: string


}
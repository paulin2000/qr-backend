import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName: string

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  lastName: string

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  username: string

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  password: string

  @IsOptional()
  @IsString()
  birthday: string
  
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  adress: string
  
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  firstContact: string
  
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
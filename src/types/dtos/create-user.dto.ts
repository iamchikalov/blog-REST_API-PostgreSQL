import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, Length } from "class-validator"

export class CreateUserDto {

  @ApiProperty({ example: 'user@gmail.com', description: 'User email' })
  @IsString({ message: 'Email should be string!' })
  @IsEmail({},{ message: 'Incorrect email!' })
  readonly email: string

  @ApiProperty({ example: 'j8KY7cgp0', description: 'User password' })
  @IsString({ message: 'Password should be string!' })
  @Length(6,16, { message: 'Password must be at least 6 characters, but not more than 16!' })
  readonly password: string
}
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator"


export class CreatePostDto {

  @ApiProperty({ example: 'Happy Birthday!', description: 'Post title' })
  @IsString({ message: 'Tittle should be string!' })
  readonly tittle: string

  @ApiProperty({ example: 'Hello, my dear friends!', description: 'Post text' })
  @IsString({ message: 'Text should be string!' })
  readonly text: string

  @ApiProperty({ example: '1', description: 'Foreign key for UserModel' })

  readonly userId: number//this id must be obtained from the jwt, but I simplify my work for faster completion of the test task

  //@ApiProperty({ example: 'Little Pony', description: 'Post author' })
  //@IsString({ message: 'Author should be string!' })
  //readonly author: string

}
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { ApiProperty } from "@nestjs/swagger"
import { PostModel } from "./post.model"

interface UserCreationAttrs {
  email: string
  password: string
  name: string
}

@Table({tableName: 'users'})
export class UserModel extends Model<UserModel, UserCreationAttrs> {

  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  _id: number

  @ApiProperty({ example: 'user@gmail.com', description: 'User email' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string

  @ApiProperty({ example: 'j8KY7cgp0', description: 'User password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string

  @ApiProperty({ example: 'Alice', description: 'User name' })
  @Column({ type: DataType.STRING, allowNull: false})
  name: string

  @HasMany(() => PostModel)
    posts: Promise<PostModel[]>
  }
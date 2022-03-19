import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { ApiProperty } from "@nestjs/swagger"
import { UserModel } from "./user.model"

interface PostCreationAttrs {
  title: string
  text: string
  userId: number
  image: string
}

@Table({tableName: 'posts'})
export class PostModel extends Model<PostModel, PostCreationAttrs> {

  @ApiProperty({ example: '1', description: 'Unique identifier for a post' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true })
  postId: number

  @ApiProperty({ example: 'Happy Birthday!', description: 'Post title' })
  @Column({ type: DataType.STRING, allowNull: false})
  title: string

  @ApiProperty({ example: '1', description: 'Foreign key for UserModel' })
  @ForeignKey(() => UserModel)
  @Column({ type: DataType.INTEGER, unique: true, allowNull: false, primaryKey: true })
  userId: number

  @ApiProperty({ example: 'Hello, my dear friends!', description: 'Post text' })
  @Column({ type: DataType.STRING, allowNull: false})
  text: string

  @ApiProperty({ example: 'picture.jpg', description: 'File' })
  @Column({ type: DataType.STRING, allowNull: true })
  image: string

  //@BelongsToMany(() => UserModel)
  @Column({type: DataType.STRING})
  postName: string
/*
  @ApiProperty({ example: 'Little Pony', description: 'Post author' })
  @Column({ type: DataType.STRING, allowNull: false })
  @BelongsTo( () => UserModel )
  readonly authorId: string
*/
}
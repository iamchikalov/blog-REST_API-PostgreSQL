import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { UserModule } from "./user.module"
import { ConfigModule } from "@nestjs/config"
import { UserModel } from "../models/user.model"
import { PostModel } from "../models/post.model"
import { PostModule } from "./post.module"
import { AuthModule } from "./auth.module"

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [UserModel, PostModel],
      autoLoadModels: true
    }),
    UserModule, PostModule, AuthModule
  ]
})
export class BlogModule {}

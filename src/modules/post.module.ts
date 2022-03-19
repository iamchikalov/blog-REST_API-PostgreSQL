import { Module } from "@nestjs/common"
import { PostService } from "../services/post.service"
import { PostController } from "../controllers/post.controller"
import { SequelizeModule } from "@nestjs/sequelize"
import { UserModel } from "../models/user.model"
import { PostModel } from "../models/post.model"
import { FilesModule } from "./files.module"

@Module({
  providers: [PostService],
  controllers: [PostController],
  imports: [
    SequelizeModule.forFeature([PostModel, UserModel]),
    FilesModule
  ]
})
export class PostModule { }
import { forwardRef, Module } from "@nestjs/common"
import { UserController } from "../controllers/user.controller"
import { UserService } from "../services/user.service"
import { SequelizeModule } from "@nestjs/sequelize"
import { UserModel } from "../models/user.model"
import { PostModel } from "../models/post.model"
import { AuthModule } from "./auth.module"

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([UserModel, PostModel]),
    forwardRef(() => AuthModule)
  ],
  exports: [
    UserService,
  ]
})
export class UserModule {}

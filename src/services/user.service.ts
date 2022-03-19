import { Injectable } from "@nestjs/common"
import { CreateUserDto } from "../types/dtos/create-user.dto"
import { InjectModel } from "@nestjs/sequelize"
import { UserModel } from "../models/user.model"

@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel) private userRepository: typeof UserModel) { }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto)
    return user
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll()
    return users
  }

  async getUsersByEmail (email: string) {
    const user = await this.userRepository.findOne({ where: {email}, include: {all: true} })
    return user
  }
}
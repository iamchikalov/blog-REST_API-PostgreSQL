import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common"
import { CreateUserDto } from "../types/dtos/create-user.dto"
import { UserService } from "./user.service"
import { JwtService } from "@nestjs/jwt"
import * as bcrypt from 'bcryptjs'
import { UserModel } from "../models/user.model"

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
    ) { }

  async registration (userDto: CreateUserDto) {
    const candidate = await this.userService.getUsersByEmail(userDto.email)
    if (candidate) {
      throw new HttpException('USER WITH THIS EMAIL ALREADY EXIST', HttpStatus.CONFLICT)
    }
    const hashPass = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({...userDto, password: hashPass})
    return this.generateToken(user)
  }


  async login (userDto: CreateUserDto) {
    const user = await this.validateUser(userDto)
    return this.generateToken(user)
  }

  private async generateToken (user: UserModel) {
    const payload = { email: user.email, id: user._id }
    return {
      token: this.jwtService.sign(payload)
    }
  }

  private async validateUser (userDto: CreateUserDto) {
    const user = await this.userService.getUsersByEmail(userDto.email)
    const passwordEquals = await bcrypt.compare(userDto.password, user.password)
    if (user && passwordEquals) {
      return user
    }
    throw new UnauthorizedException({ massage: 'INVALID EMAIL OR PASSWORD' })
  }
}

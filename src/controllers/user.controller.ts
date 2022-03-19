import { Body, Controller, Get, Post, UseGuards, UsePipes } from "@nestjs/common"
import { CreateUserDto } from "../types/dtos/create-user.dto"
import { UserService } from "../services/user.service"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { UserModel } from "../models/user.model"
import { AuthGuardService } from "../services/guards/auth-guard.service"
import { ValidationPipe } from "../types/pipes/validation.pipe"


@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @ApiOperation({ summary: 'Create new user' })
  @ApiResponse({ status: 200, type: UserModel })
  @UsePipes(ValidationPipe)
  @Post()
  create (@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto)
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [UserModel] })
  @UseGuards(AuthGuardService)
  @Get()
  getAll() {
    return this.userService.getAllUsers()
  }
}
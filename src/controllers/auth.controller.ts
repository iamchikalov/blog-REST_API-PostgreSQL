import { Body, Controller, Post } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { CreateUserDto } from "../types/dtos/create-user.dto"
import { AuthService } from "../services/auth.service"

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/registration')
  registration (@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto)
  }

  @Post('/login')
  login (@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto)
  }
}

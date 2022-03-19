import { forwardRef, Module } from "@nestjs/common"
import { AuthController } from '../controllers/auth.controller'
import { AuthService } from '../services/auth.service'
import { UserModule } from "./user.module"
import { JwtModule } from "@nestjs/jwt"

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h'
      }
    })
  ],
  exports: [
   AuthService,
    JwtModule
  ]
})
export class AuthModule {}

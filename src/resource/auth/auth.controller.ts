import {
  Controller,
  Post,
  Body,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registro-usuario')
  registro(@Body() registerDto: RegisterDto) {
    try {
      return this.authService.registrar(registerDto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}

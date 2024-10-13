import {
  Controller,
  Post,
  Body,
  InternalServerErrorException,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import { UsuarioActivo } from 'src/common/decorators/usuarioActivo.decorators';
import { PerfilActivoInterface } from 'src/interfaces/perfil.interface';
import { Auth } from './decorators/auth.decorators';
import { Role } from 'src/common/enums/rol.enum';

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

  @Post('login')
  login(@Body() loginDto: loginDto) {
    try {
      return this.authService.login(loginDto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get('obtener-perfil')
  @Auth(Role.Admin)
  perfil(@UsuarioActivo() usuario: PerfilActivoInterface) {
    try {
      return this.authService.buscarPerfil(usuario);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}

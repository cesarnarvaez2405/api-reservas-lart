import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
3;
import { UsuariosService } from '../usuarios/usuarios.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async registrar(registroDto: RegisterDto) {
    const { usuario } = registroDto;
    const estaDuplicadoUsuario =
      await this.usuarioService.buscarPorUser(usuario);
    if (estaDuplicadoUsuario) {
      throw new BadRequestException('Este usuario ya existe');
    }
    registroDto.password = await bcrypt.hash(registroDto.password, 10);
    return await this.usuarioService.crear(registroDto);
  }
}

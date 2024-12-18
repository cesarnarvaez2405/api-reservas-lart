import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
3;
import { UsuariosService } from '../usuarios/usuarios.service';
import { RegisterDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import { UsuarioDocument } from '../usuarios/schemas/usuario.schemas';

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

  async login(loginDto: loginDto) {
    const { usuario, password } = loginDto;
    const informacionUsuario = await this.usuarioService.buscarPorUser(usuario);
    if (!informacionUsuario) {
      throw new BadRequestException('El usuario no esta registrado');
    }
    const passwordValido = await bcrypt.compare(
      password,
      informacionUsuario.password,
    );
    if (!passwordValido) {
      throw new UnauthorizedException('El password es incorrecto');
    }
    const horaAutenticacion = new Date().toDateString();
    const payload = {
      usuario: informacionUsuario.usuario,
      rol: informacionUsuario.rol,
      time: horaAutenticacion,
    };
    const token = await this.jwtService.signAsync(payload);
    return {
      token,
      payload,
    };
  }

  async buscarPerfil(perfil: Partial<UsuarioDocument>) {
    const { usuario } = perfil;
    return await this.usuarioService.buscarPorUser(usuario);
  }
}

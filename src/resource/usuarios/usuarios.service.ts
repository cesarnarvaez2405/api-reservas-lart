import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CrearUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Model } from 'mongoose';
import { UsuarioDocument } from './schemas/usuario.schemas';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIOS_MODEL')
    private usuarioModel: Model<UsuarioDocument>,
  ) {}

  async crear(createUsuarioDto: CrearUsuarioDto) {
    const usuarioNuevo = new this.usuarioModel(createUsuarioDto);
    return await usuarioNuevo.save();
  }

  async buscarTodos() {
    return await this.usuarioModel.find();
  }

  async buscarPorId(id: string) {
    const usuario = await this.usuarioModel.findById(id).exec();
    if (!usuario) {
      throw new NotFoundException('No se encuentra el usuario');
    }
    return usuario;
  }

  async buscarPorUser(user: string) {
    const usuario = await this.usuarioModel.findOne({ usuario: user }).exec();
    return usuario ? usuario : null;
  }

  async actualizar(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    await this.buscarPorId(id);
    const query = { _id: id };
    return await this.usuarioModel.findByIdAndUpdate(query, updateUsuarioDto, {
      new: true,
    });
  }

  async borrar(id: string) {
    await this.buscarPorId(id);
    const query = { _id: id };
    return await this.usuarioModel.findByIdAndDelete(query);
  }
}

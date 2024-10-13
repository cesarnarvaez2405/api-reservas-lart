import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async crear(@Body() createUsuarioDto: CrearUsuarioDto) {
    return this.usuariosService.crear(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.buscarTodos();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.buscarPorId(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.actualizar(id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.borrar(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
} from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CrearEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Auth } from '../auth/decorators/auth.decorators';
import { Role } from 'src/common/enums/rol.enum';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post('crear')
  @Auth(Role.Admin)
  crear(@Body() createEmpresaDto: CrearEmpresaDto) {
    try {
      return this.empresaService.crear(createEmpresaDto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get('buscar-todos')
  @Auth(Role.Admin)
  buscarTodos() {
    try {
      return this.empresaService.buscarTodos();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get(':id')
  @Auth(Role.Admin)
  findOne(@Param('id') id: string) {
    try {
      return this.empresaService.buscarPorId(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Patch(':id')
  @Auth(Role.Admin)
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    try {
      return this.empresaService.actualizar(id, updateEmpresaDto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Delete(':id')
  @Auth(Role.Admin)
  remove(@Param('id') id: string) {
    try {
      return this.empresaService.borrar(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}

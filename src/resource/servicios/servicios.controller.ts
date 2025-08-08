import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { Auth } from '../auth/decorators/auth.decorators';
import { Role } from 'src/common/enums/rol.enum';

@Controller('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Post('crear')
  @Auth(Role.Admin)
  crear(@Body() createServicioDto: CreateServicioDto) {
    return this.serviciosService.crear(createServicioDto);
  }

  @Get()
  findAll() {
    return this.serviciosService.buscarTodos();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviciosService.buscarPorId(id);
  }

  @Patch(':id')
  @Auth(Role.Admin)
  update(
    @Param('id') id: string,
    @Body() updateServicioDto: UpdateServicioDto,
  ) {
    return this.serviciosService.actualizar(id, updateServicioDto);
  }

  @Delete(':id')
  @Auth(Role.Admin)
  remove(@Param('id') id: string) {
    return this.serviciosService.borrar(id);
  }
}

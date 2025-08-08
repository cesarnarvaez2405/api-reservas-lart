import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
  Query,
} from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CrearReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Auth } from '../auth/decorators/auth.decorators';
import { Role } from 'src/common/enums/rol.enum';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Post()
  crear(@Body() createReservaDto: CrearReservaDto) {
    try {
      return this.reservasService.crear(createReservaDto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Auth()
  @Get('buscar-todos')
  buscarTodos(@Query() query: any) {
    try {
      const estaActiva: boolean = query?.estaActiva;
      return this.reservasService.buscarTodos(estaActiva);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get('buscar-por-fecha')
  buscarPorFecha(@Query() query: any) {
    try {
      const fecha: string = query?.fecha;
      const fechaConsulta = new Date(fecha);
      return this.reservasService.buscarPorFecha(fechaConsulta);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Auth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.reservasService.buscarPorId(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Auth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservaDto: UpdateReservaDto) {
    try {
      return this.reservasService.actualizar(id, updateReservaDto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Auth(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.reservasService.borrar(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { ServicioDocument } from './schemas/servicio.schemas';
import { Model } from 'mongoose';

@Injectable()
export class ServiciosService {
  constructor(
    @Inject('SERVICIO_MODEL')
    private servicioModel: Model<ServicioDocument>,
  ) {}

  async crear(createServicioDto: CreateServicioDto) {
    const servicioNuevo = new this.servicioModel(createServicioDto);
    return await servicioNuevo.save();
  }

  async buscarTodos() {
    return await this.servicioModel.find();
  }

  async buscarPorId(id: string) {
    const servicio = await this.servicioModel.findById(id).exec();
    if (!servicio) {
      throw new NotFoundException('No se encuentra el servicio por el id');
    }
    return servicio;
  }

  async actualizar(id: string, updateServicioDto: UpdateServicioDto) {
    this.buscarPorId(id);
    const query = { _id: id };
    return await this.servicioModel.findByIdAndUpdate(
      query,
      updateServicioDto,
      {
        new: true,
      },
    );
  }

  async borrar(id: string) {
    await this.buscarPorId(id);
    const query = { _id: id };
    return await this.servicioModel.findByIdAndDelete(query);
  }
}

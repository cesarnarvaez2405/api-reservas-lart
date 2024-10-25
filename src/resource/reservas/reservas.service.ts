import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CrearReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { ReservaDocument } from './schemas/reserva.schemas';
import { Model } from 'mongoose';

@Injectable()
export class ReservasService {
  constructor(
    @Inject('RESERVA_MODEL')
    private reservaModel: Model<ReservaDocument>,
  ) {}

  async crear(createReservaDto: CrearReservaDto) {
    const nuevaReserva = new this.reservaModel(createReservaDto);
    return await nuevaReserva.save();
  }

  async buscarTodos(estaActiva?: boolean) {
    return await this.reservaModel
      .find({ estaActiva })
      .sort({ createdAt: -1 })
      .exec();
  }

  async buscarPorId(id: string) {
    const reserva = await this.reservaModel.findById(id).exec();
    if (!reserva) {
      throw new NotFoundException('No se encuentra la reserva con este id');
    }
    return reserva;
  }

  async buscarPorResponsable(idResponsable: string) {
    const query = { responsable: idResponsable };
    const reservas = await this.reservaModel.findOne(query).exec();
    return reservas ? reservas : null;
  }

  async actualizar(id: string, updateReservaDto: UpdateReservaDto) {
    await this.buscarPorId(id);
    const query = { _id: id };
    return await this.reservaModel.findByIdAndUpdate(query, updateReservaDto, {
      new: true,
    });
  }

  async borrar(id: string) {
    await this.buscarPorId(id);
    const query = { _id: id };
    return await this.reservaModel.findByIdAndDelete(query);
  }
}

import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CrearEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { EmpresaDocument } from './schemas/empresa.schemas';
import { Model } from 'mongoose';

@Injectable()
export class EmpresaService {
  constructor(
    @Inject('EMPRESA_MODEL')
    private empresaModel: Model<EmpresaDocument>,
  ) {}

  async crear(createEmpresaDto: CrearEmpresaDto) {
    const hayEmpresaCreada = await this.empresaModel.find().exec();
    if (hayEmpresaCreada.length > 0) {
      throw new BadRequestException('Ya existe una empresa creada');
    }
    const empresaNueva = new this.empresaModel(createEmpresaDto);
    return await empresaNueva.save();
  }

  async buscarTodos() {
    return await this.empresaModel.find();
  }

  async buscarPorId(id: string) {
    const empresa = await this.empresaModel.findById(id).exec();
    if (!empresa) {
      throw new NotFoundException('No se encuentra la compañia con ese id');
    }
    return empresa;
  }

  async actualizar(id: string, updateEmpresaDto: UpdateEmpresaDto) {
    await this.buscarPorId(id);
    const query = { _id: id };
    return await this.empresaModel.findByIdAndUpdate(query, updateEmpresaDto, {
      new: true,
    });
  }

  async borrar(id: string) {
    await this.buscarPorId(id);
    const query = { _id: id };
    return await this.empresaModel.findByIdAndDelete(query);
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CrearEmpresaDto } from './create-empresa.dto';

export class UpdateEmpresaDto extends PartialType(CrearEmpresaDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CrearUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CrearUsuarioDto) {}

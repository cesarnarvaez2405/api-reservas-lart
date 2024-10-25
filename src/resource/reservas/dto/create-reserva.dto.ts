import { Type } from 'class-transformer';
import {
  IsDateString,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class ServicioDto {
  @IsString()
  @IsNotEmpty({ message: 'El campo nombre en el tipo es obligatorio' })
  readonly nombre: string;

  @IsMongoId({
    message: 'El campo empresa es un ID de mongo valido',
  })
  @IsNotEmpty({ message: 'El campo empresa es obligatorio' })
  readonly empresa: string;
}

export class CrearReservaDto {
  @IsDateString()
  @IsNotEmpty({ message: 'El tiempo es un campo obligatorio' })
  readonly tiempo: string;

  @ValidateNested({ message: 'El campo servicio debe ser un objeto valido' })
  @IsNotEmpty({ message: 'El campo servicio es obligatorio' })
  @Type(() => ServicioDto)
  readonly servicio: ServicioDto;

  @IsNumber()
  @IsNotEmpty({ message: 'El campo duracion es obligatorio' })
  readonly duracion: number;

  @IsNumber()
  @IsNotEmpty({ message: 'El campo capacidad es obligatorio' })
  readonly capacidad: number;

  @IsMongoId({
    message: 'El campo responsable debe ser un ID de Mongo válido',
  })
  @IsNotEmpty({ message: 'El campo responsable es obligatorio' })
  readonly responsable: string;

  @IsString({ message: 'El campo observacion es un string' })
  @IsNotEmpty({ message: 'El campo observacion es obligatorio' })
  readonly observacion: string;
}
